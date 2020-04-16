import React, { Component } from 'react'

export class NewUserForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    render() {
        let {formName} = this.props
        let {username,password} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
            <h1>{formName}</h1>
            <label htmlFor="username">Username</label>
            <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
            <input type="submit" value="Submit" className="auth"/>
          </form>
        )
    }
}

export default NewUserForm;
