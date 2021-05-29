import React from "react";
// components

const Search=()=> {
  const inputChange = (event) => {
    console.log(event.target.value)
  };

 
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Something"
            onChange={inputChange}
            
          ></input>
        </div>
        
      </div>
    )
        }



export default Search;
