import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
              alert(this.state.items);
    }
    
    render() {        
        return(
            <div>
                <div>Items:</div>
                { this.state.items }          
            </div>  
        );
    } 
}

export default App;
