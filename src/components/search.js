import { Component } from 'react';

class Search extends Component{
    state = {
        name : 'zian',
        lastName : 'ejaz'
    }
    render(){
return(
    <div>
        hello from search.js Component made by {this.state.name} {this.state.lastName}
    </div>
)
    }
}
export default Search