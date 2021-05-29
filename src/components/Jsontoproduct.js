import React, { Component } from "react";
import Search from "./search";
import Json from "../json/reviews.json";
// components
import ProductList from "./ProductList";

class Jsontoproduct extends Component {
  state = {
    products: Json,
  };
  render() {
    return (
      <div>
        {/* <Search /> */}
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}
export default Jsontoproduct;
