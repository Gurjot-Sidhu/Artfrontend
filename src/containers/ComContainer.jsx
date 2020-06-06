import React, { Component } from 'react'
import Community from '../components/Community'

export class ComContainer extends Component {
  render () {
    const arrayOfComponents = this.props.communities.map((singleCom) => {
      return <Community
        key={singleCom.id}
        community={singleCom}
        addNewArtwork={this.props.addNewArtwork}
        deleteArtwork={this.props.deleteArtwork}
        user={this.props.user}
             />
    })

    return (
      <div className='CommunityContainer'>
        {arrayOfComponents.map((singleComp) => {
          return <li className='SingleCommunity'> {singleComp}</li>
        })}

      </div>
    )
  }
}

export default ComContainer
