import React from 'react';
import ProductBlock from './product-block';

const ProductList = (props)=>{
    return(
<div className="flex flex-wrap text-center justify-center">
          {props.products.map((prop, index) => {
            return (
                <ProductBlock product={prop}/>
            );
          })}
        
        </div>
        )
}

export default ProductList;