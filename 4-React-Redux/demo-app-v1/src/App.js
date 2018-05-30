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

import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {}
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      let cart = store.getState().cart;
      this.setState({ cart });
    });
  }
  render() {
    let { title } = this.props;
    let { cart } = this.state;
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
          <Route path="/products" render={() => <ProductList />} />
          <Route path="/view-cart" render={() => <ViewCart cart={cart} />} />

        </div>
      </Router>
    );
    
  }
}

export default App;
