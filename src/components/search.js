import { Component } from 'react';

class Search extends Component{
    state = {
        name : 'zian',
        lastName : 'ejaz',
        age : 25
    }
    render(){
return(
    <div className="">
        hello from search.js Component made by {this.state.name} {this.state.lastName} {this.state.age}
    </div>
)
    }
}
export default Search