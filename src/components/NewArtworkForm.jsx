import React, { Component } from 'react'

export class NewArtworkForm extends Component {

    state={
        name:"",
        image:"",
        community_id: this.props.id
    }

    

    handleAllInputs = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addNewArtwork(this.state)
    }
   

    render() {
        return (
            <div>
                <div>
                    <button>
                        Add to this community
                    </button>
                    <form className="NewArtworkForm">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Art name" 
                        onChange={this.handleAllInputs}
                    />
                    <label>Image</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image"
                        onChange={this.handleAllInputs}
                    />
                    <input
                        type="hidden"
                        id="community"
                        name="community"
                        value={this.props.id}
                        onChange={this.handleAllInputs}
                    />
                    <button 
                        type="submit"
                        className="Submit"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewArtworkForm;
