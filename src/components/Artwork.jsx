import React, { Component} from 'react'

export class Artwork extends Component {

    handleClick = (e) =>{
        this.props.deleteArtwork(this.props.art)
    }

    render() {
        return (
            <div>
                <img src= {this.props.art.image} alt=""/>
                <div>{this.props.art.name} by:{this.props.art.user.username}</div>
                {this.props.user.id === this.props.art.user.id 
                ? <button onClick={this.handleClick}>Delete this work</button>
                : null
                }
            </div>
        )
    }
}

export default Artwork
