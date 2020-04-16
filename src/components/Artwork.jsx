import React, { Component} from 'react'

export class Artwork extends Component {

    state={
        display: true
    }

    handleClick = (e) =>{
        this.props.deleteArtwork(this.props.art)
    }

    handleImgClick = (e) =>{
        this.setState({
            display: !this.state.display
        })
    }
    render() {
        return (
            
                <div className="Artwork">
                        <img src= {this.props.art.image} alt="" title={this.props.art.name} onClick={this.handleImgClick}/>
                            {this.state.display 
                            ? null 
                            :<p>{this.props.art.name} by:{this.props.art.user.username} 
                                {this.props.user.id === this.props.art.user.id 
                                    ? <button onClick={this.handleClick}>Delete this work</button>
                                    : null
                                    }</p>
                            }
                </div>
        )
    }
}

export default Artwork
