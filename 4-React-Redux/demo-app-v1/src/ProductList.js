
import React, { Component } from 'react';
import Product from './Product';

import store from './store';
import { loadProducts } from './actions/products'

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {

        store.subscribe(() => {
            console.log('ProductList subscribing redux-store changes');
            let state = store.getState();
            let products = state.products || [];
            this.setState({ products });
        });

        setTimeout(() => {
            let action = loadProducts();
            store.dispatch(action);
        }, 2000);
    }
    renderProducts() {
        let { onBuy } = this.props;
        let { products } = this.state;
        return products.map((product, idx) => {
            return (
                <Product product={product} key={idx} onBuy={onBuy} />
            );
        });
    }
    render() {
        return (
            <div className="list-group">
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;