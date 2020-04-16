import React, { Component } from 'react'
import Community from '../components/Community'

export class ComContainer extends Component {


    

    render() {
        let arrayOfComponents = this.props.communities.map((singleCom)=>{
            return <Community
            key={singleCom.id}
            community={singleCom}
            addNewArtwork={this.props.addNewArtwork}
            deleteArtwork={this.props.deleteArtwork}
            user={this.props.user}
            />
        })
        
        return (
            <div>
                {arrayOfComponents}
            </div>
        )
    }
}

export default ComContainer
