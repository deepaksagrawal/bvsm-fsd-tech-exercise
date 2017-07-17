import React, { Component } from 'react';
import Product from './Models/Product';
import AddProduct from './Controllers/AddProduct';

class ProductList extends React.Component {
  render() {
    var prds = [];
    this.props.products.forEach(function(product) {
      prds.push(<Product product={product} key={product.sku} />,<AddProduct product={product}/>);
    });
    return (
        
      <table>
          <tr>
            <td>Product Name</td>
            <td>Product Price</td>
          </tr>
          <tr>
            <td>{this.products.product.name}}</td>
            <td>{this.products.product.price}}</td>
          </tr>
      </table>
    );
  } 
}

export default ProductList;