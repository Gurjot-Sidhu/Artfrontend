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
                <div>
                    {this.state.display ? <button onClick={this.handleClick}> Hide </button>
                    : <button onClick={this.handleClick}> View </button> 
                    } 
                    {this.props.community.name} 
                </div>
                <div className="ArtCont">
                    {this.state.display 
                    ? <>
                    <div className="AllArt">{arrayOfArtwork}</div> 
                    <div className="ComForm"> <NewArtworkForm id={this.props.community.id} addNewArtwork={this.props.addNewArtwork}/></div> </>
                    : <></>
                    }
                </div>
            </div>
        )
    }
}

export default Community
