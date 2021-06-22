import React, { Component } from "react";

import Search from './search';

class RemoveSpaces extends Component{
    state={
        filteredString : 'ffffff'
    }
    inputChange =  (event) => {
        let string = event.target.value;
      let  filteredString = string.replace(/\s/g, '')
        this.setState(
            {filteredString}
        )

    }
    render(){
        return(
            <div>
                 <Search inputChange={this.inputChange}/>
                <p>{this.state.filteredString}</p>
            </div>
        )
    }
}

export default RemoveSpaces