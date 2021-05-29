import React from "react";
// components

const Search=(props)=> {

 
    return (

        <div>
          <input type="text" placeholder="Enter Something" onChange={props.inputChange}></input>
          
        </div>
        

    )
        }



export default Search;
