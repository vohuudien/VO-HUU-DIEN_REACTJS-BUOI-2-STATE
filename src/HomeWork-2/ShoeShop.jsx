import React, { Component } from "react";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import data from "./data.json";

class ShoeShop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
    };
  }

  handleSelect = (product) => {
    console.log(product);
    this.setState({ selectedProduct: product });
  };
  render() {
    return (
      <div>
        <ProductList products={data} onSelect={this.handleSelect} />
        <ProductItem product={this.state.selectedProduct} />
      </div>
    );
  }
}

export default ShoeShop;
