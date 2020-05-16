import React, { Component } from 'react' 

class GifList extends Component {

    state = {
    
    }


    render(){
        return(
            <div>
                {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/> )}
            </div>
        )   
    }

}


export default GifList