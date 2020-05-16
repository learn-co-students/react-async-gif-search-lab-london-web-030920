import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
    
    state = {
        threeGifs: [],
        searchWord: ""
    }

    onChange = (event) => {
        this.setState({
            searchWord: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchApi(this.state.searchWord)
       
    }

    componentDidMount(){
        this.fetchApi(this.state.searchWord)
    }

    fetchApi = (word) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=YoxtKXH5wiIgMCZ5H0kL0dwXjUCBGsCw&rating=g&limit=3`)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({ threeGifs: data.map( gif => ({ url: gif.images.original.url }) ) })
             })
    }
    
    render(){
        return (
            <div><GifList giphs={this.state.threeGifs}/>
            <GifSearch keyWordChange={this.onChange} search={this.state.searchWord} handleSubmit={this.handleSubmit}/> </div>
        )
    }
}

export default GifListContainer