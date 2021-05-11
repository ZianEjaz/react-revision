import React, { Component } from 'react';
import '../style.css';

class Header extends Component {
    state = {
        keyword: 'hello'
    }
inputChange = (event)=>{
    this.setState({keyword:event.target.value})
        
 
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
                <h1>{this.state.keyword}</h1>

            </header>
        )
    }
}

export default Header