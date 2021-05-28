import React, { Component } from 'react';

class Search extends Component {
    state = {
        keyword: 'hello',
        wordcount : 0
    }
    inputChange = (event) => {
        this.setState({ keyword: event.target.value })
        this.setState({ wordcount: event.target.value.split(" ").length })
        

    }


    render() {
        return (
                <div>
                <input type="text" placeholder="Enter Something" onChange={this.inputChange}></input>
                <h1>{this.state.wordcount}</h1>
                <p>{this.state.keyword}</p>
                </div>
        )
    }
}

export default Search