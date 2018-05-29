import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: '111',
          name: 'Laptop',
          price: 198000.00,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          id: '222',
          name: 'Mobile',
          price: 18000.00,
          description: 'New  pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    };
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <Product product={product} key={idx} />
      );
    });
  }
  render() {
    let { title } = this.props;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <span className="navbar-brand mb-0 h1">{title}</span>
        </nav>
        <hr />
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
