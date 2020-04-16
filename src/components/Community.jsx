import React, { Component} from 'react';
import Artwork from './Artwork.jsx'
import NewArtworkForm from './NewArtworkForm.jsx';

export class Community extends Component {

    state = {
        display: false
    }

    handleClick = (e) =>{
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        let arrayOfArtwork = this.props.community.artworks.map((singleArt)=>{
            return <Artwork 
            key={singleArt.id}
            art={singleArt}
            deleteArtwork={this.props.deleteArtwork}
            user={this.props.user}
            />
        })
        return(
            <div className="Community">
               <div onClick={this.handleClick}> {this.props.community.name} </div>
                <div>
                {this.state.display 
                ? <div>
                        <div>{arrayOfArtwork}</div> 
                        <div> <NewArtworkForm id={this.props.community.id} addNewArtwork={this.props.addNewArtwork}/></div> 
                </div>
                : <div></div>
                 }
                </div>
            </div>
        )
    }
}

export default Community
