import React from 'react'

class GifSearch extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text"  onChange={this.props.keyWordChange}  value={this.props.search}></input>
                <input type="submit"/>
            </form>
        )
    }
}

export default GifSearch