import React from 'react';
import Search from "./search";
import Json from '../json/reviews.json';

const Jsontoproduct = ()=>{
    console.log(Json)
 return(
     <div><Search />
<div className="flex flex-wrap text-center justify-center">
     {Json.map((x)=>{
         return (
             <div className="p-6 border">
                 <img className="m-auto p-7"  src="https://picsum.photos/300" alt="placeholder"></img>
             <p className="w-80 center mx-auto">comment is: {x.comment} </p>
         <p className="w-80 mx-auto text-indigo-900">Name is{x.name}</p>
         
         </div>
         )
     })}
</div>
     hello from json to product</div>
 )   
}
export default Jsontoproduct;