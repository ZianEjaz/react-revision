import React from 'react';

const ProductBlock=(props)=>{
return(
<div className="p-6 border m-6">
                <img
                  className="m-auto p-7" src="https://picsum.photos/300" alt="placeholder"                ></img>
                <p className="w-80 center mx-auto">{props.product.description} </p>
                <p className="w-80 mx-auto text-indigo-900">Name is{props.product.name}</p>
            
              </div>)

}

export default ProductBlock;