import React, { Component } from 'react' 

class GifSearch extends Component {

    state = {
    input: ""

    }

    handleSubmit = (e) =>{
        e.preventDefault() 
        this.props.fetchGIFs(this.state.input)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <input value={this.state.input} onChange={e => this.setState({input: e.target.value})}  ></input>
            </form>
        )   
    }

}


export default GifSearch