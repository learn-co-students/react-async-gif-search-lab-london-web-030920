import React from 'react'

class GifList extends React.Component{
    
    render(){
        console.log(this.props)
        return (
            
            <ul>
                {this.props.giphs.map(gif => <img src={gif.url}/>)}
            </ul>
        )
    }
}

export default GifList