import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ViewCart from './ViewCart'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
import ProductList from './ProductList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
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
  addToCart(item, qty) {
    let { cart } = this.state;
    let id = item.id;
    let line = cart[id];
    if (line) {
      line = Object.assign({}, line, { qty })
    } else {
      line = { item, qty }
    }
    cart = Object.assign({}, cart, { [id]: line });
    this.setState({ cart });
  }

  render() {
    let { title } = this.props;
    let { cart, products } = this.state;
    let count = Object.keys(cart).length
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-light bg-primary">
            <Link className="navbar-brand" to="/">{title}</Link>
          </nav>
          <hr />
          <i className="fa fa-shopping-cart"></i>
          {count} item(s) in cart
          |
          &nbsp;
          <Link to="/products">View products</Link>
          &nbsp;
          |
          <Link to="/view-cart" className="pull-right"> View cart</Link>
          <hr />

          <Route exact={true} path="/" component={Home} />
          <Route path="/products" render={() => <ProductList products={products} onBuy={(item, qty) => { this.addToCart(item, qty) }} />} />
          <Route path="/view-cart" render={() => <ViewCart cart={cart} />} />

        </div>
      </Router>
    );
  }
}

export default App;
