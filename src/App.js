import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

class App extends Component {

  constructor() {
        super();
        this.state = { items: [] };
    }
    
    componentDidMount() {
        fetch(`http://localhost:4000/products`) 
            .then(result=> {
                this.setState({items:result.json()});
            });
    }
    
    render() {        
        return(
            <div>
                <div>Product List:</div>
                <ProductList products={this.state.items}/>
                <div>Shopping Bag:</div>
            </div>
        );
    } 
}

export default App;
