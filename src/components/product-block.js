import React from 'react';

const ProductBlock=(props)=>{
return(
<div className="p-6 border m-6">
                <img
                  className="m-auto p-7 max-w-xs" src={props.product.image} alt="placeholder"                ></img>
                <p className="w-80 mx-auto text-lg">{props.product.name} {props.product.sku}</p>
                <p className="w-80 center mx-auto text-sm">{props.product.description} </p>
                <a href={props.product.url} target='blank' className="bg-indigo-700 text-white p-4 rounded m-5 block">Read More </a>
                
            
              </div>)

}

export default ProductBlock;