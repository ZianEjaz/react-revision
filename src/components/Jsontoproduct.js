import React, { Component } from "react";
import Search from "./search";
import Json from "../json/reviews.json";
// components
import ProductList from "./ProductList";

class Jsontoproduct extends Component {
  state = {
    products: Json,
    search : "test data"
  };
  inputChange = (event) => {
    
    let keyword = event.target.value;
    let filtered = this.state.products.filter((item)=>{
        return item.description.indexOf(keyword) > -1
    })
    console.log(filtered)
  }

  render() {
    return (
      <div>
        <Search inputChange={this.inputChange}/>
        {this.state.search}
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}
export default Jsontoproduct;
