import React, { Component } from 'react';
import Json from "../json/reviews.json";

export class TailwindComponents extends Component {
    state = {
        Json,
        filtered: [],
        nameArray : []
    }

    


    inputChange = (event) => {

        let keyword = event.target.value;
        let filtered = this.state.Json.filter((item) => {
            return item.description.indexOf(keyword) > -1
        })
        const nameArray=this.state.Json.map((item)=>{
            return item.name
            })
        this.setState({ filtered, nameArray })
    }


    render() {
        return (
            <div className='justify-center p-5'>
                <input type="text" className='border solid border-gray-500' onChange={this.inputChange} />
               { this.state.filtered.length < 1 ? <div>{console.log(this.state.nameArray)}</div> : <div>{console.log(this.state.nameArray)}</div> }
            </div>
        )
    }
}

export default TailwindComponents