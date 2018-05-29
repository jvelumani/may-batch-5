import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
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
  changeTab(tab) {
    this.setState({ currentTab: tab });
  }
  renderBuyBtn(product) {
    if (product.canBuy) return <button className="btn btn-sm btn-primary">buy</button>
    else return null;
  }
  renderTabPanel(product) {
    let { currentTab } = this.state;
    let panel;
    switch (currentTab) {
      case 1: {
        panel = (<div>{product.description}</div>)
        break;
      }
      case 2: {
        panel = (<div>Not Yet</div>)
        break;
      }
      case 3: {
        panel = (<div>None Yet</div>)
        break;
      }
      default:
        panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div className="list-group-item" key={idx}>
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" alt='product' />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              <p>{product.description}</p>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={`nav-link ${currentTab === 1 ? 'active' : ''}`} onClick={() => this.changeTab(1)}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 2 })} onClick={() => this.changeTab(2)}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: currentTab === 3 })} onClick={() => this.changeTab(3)}>Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log('App :: render()');
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
