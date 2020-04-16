import React from 'react';
import './App.css';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';

import NavBar from "./components/NavBar.jsx";
import NewUserForm from './components/NewUserForm.jsx';
import ComContainer from "./containers/ComContainer.jsx";

export class App extends React.Component {

  state={
    user:{
      id:0,
      artworks:[]
    },
    token:"",
    communities:[]
  }

  componentDidMount(){
    if(localStorage.token) {
      fetch("http://localhost:3000/persist",{
        headers:{
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
    fetch("http://localhost:3000/communities")
      .then(r => r.json())
      .then(com => {
        this.setState({
          communities: com
        })
      })
  }

  renderForm = (routerProps) =>{
    if(routerProps.location.pathname === "/login"){
      return <NewUserForm formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    }else if (routerProps.location.pathname === "/register"){
      return <NewUserForm formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  handleLoginSubmit = (userInfo) =>{
    fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleRegisterSubmit = (userInfo) =>{
    fetch("http://localhost:3000/users",{
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleResponse = (resp) =>{
    if(!resp.message){
      localStorage.token = resp.token

      this.setState({
          user: resp.user,
          token: resp.token
      },
        ()=>{
          this.props.history.push("/communities")
      })
    }

    else{
      alert(resp.message)
    }

  }

  renderCommunities = (routerProps) =>{
    if(this.state.token){
      return <ComContainer 
      user={this.state.user}
      token={this.state.token}
      communities={this.state.communities}
      addNewArtwork={this.addNewArtwork}
      deleteArtwork={this.deleteArtwork}
      />
    }else{
      return <Redirect to="/login" />
    }
  }

  addNewArtwork = (newArt) =>{

    fetch("http://localhost:3000/artworks",{
      method: "POST",
      headers:{
        "Content-Type": "Application/Json",
        "Authorization": `bearer ${this.state.token}`
      },
      body: JSON.stringify(newArt)
    })
      .then(r => r.json())
      .then((createdArt) =>{
        let comId = createdArt.community.id
        let foundcom = this.state.communities.find((singleCom)=>{
          return singleCom.id === comId
        })
        let copyArt = [...foundcom.artworks,createdArt]
        let copyCom = {...foundcom,artworks:copyArt}
        let editedCom = this.state.communities.map((singleCom)=>{
          if(singleCom.id === comId){
            return  singleCom.artworks = copyCom
          }else{
            return singleCom
          }
        })
        this.setState({
          communities: editedCom
        })
      })
   
  }
  
  deleteArtwork = (removeArt) =>{
    console.log(removeArt)

    fetch("http://localhost:3000/artworks",{
      method:"DELETE",
      headers:{
        "Content-Type": "Application/Json",
        "Authorization": `bearer ${this.state.token}`
      },
      body: JSON.stringify(removeArt)
    })
      .then(r => r.json())
      .then((r) => {
        if(r.id === removeArt.id){
          let remId = removeArt.community.id
          let foundcom = this.state.communities.find((singleCom) =>{
            return singleCom.id === remId
            
          })
            let delArt = foundcom.artworks.filter((singleArt)=>{
              return singleArt.id !== remId
            })
              let copyFoundCom = {...foundcom}
              copyFoundCom.artworks = [...delArt]              
                let finalCopy = this.state.communities.map((singleCom)=>{
                  if(singleCom.id === remId){
                    return copyFoundCom
                  }else{
                    return singleCom
                  }
                })
                  this.setState({
                    communities: finalCopy
                  })
        }else{
          alert("You can only delete your own work")
        }
      })
  }

  handleLogout = (e) => {
    this.setState({
      user:{
        id:0,
        artworks:[]
      },
      token:""
    })
    localStorage.clear()
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.state.token && <button onClick={this.handleLogout}>Logout</button>}
        <Switch>
            <Route path="/login" render={this.renderForm}/>
            <Route path="/register" render={this.renderForm}/>
            <Route path="/communities" render={this.renderCommunities}/>
            <Route exact path="/" render={() => <h1>Home</h1>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);

