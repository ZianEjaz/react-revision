import React, { Component } from 'react';
import '../style.css';

class Header extends Component {
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
            <header>
                <h1>HEADER</h1>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/users'>Users</a></li>
                    </ul>
                </nav>
                <input type="text" placeholder="Enter Something" onChange={this.inputChange}></input>
                <h1>{this.state.wordcount}</h1>
                <p>{this.state.keyword}</p>

            </header>
        )
    }
}

export default Header