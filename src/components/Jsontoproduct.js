import React, { Component } from "react";
import Search from "./search";
import Json from "../json/reviews.json";
// components
import ProductList from "./ProductList";
import DemoCarousel from "./corsoul";

class Jsontoproduct extends Component {
  state = {
    products: Json,
    filtered : []
  };
  inputChange = (event) => {
    
    let keyword = event.target.value;
    let filtered = this.state.products.filter((item)=>{
        return item.description.indexOf(keyword) > -1
    })
    this.setState({filtered})
  }

  render() {
    return (
      <div>
        <DemoCarousel />
        <Search inputChange={this.inputChange}/>
        <ProductList products={this.state.filtered.length === 0 ? this.state.products : this.state.filtered}/>
      </div>
    );
  }
}
export default Jsontoproduct;
