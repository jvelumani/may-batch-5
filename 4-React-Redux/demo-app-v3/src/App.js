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
import { connect } from 'react-redux';


class App extends Component {
  render() {
    let { title, cart } = this.props;
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

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}
export default connect(mapStateToProps, null)(App);
