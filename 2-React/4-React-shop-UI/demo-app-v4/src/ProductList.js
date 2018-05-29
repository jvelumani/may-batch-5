
import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        let apiUrl = 'http://0.0.0.0:8080/api/products'
        let promise = fetch(apiUrl);
        promise
            .then(response => response.json())
            .then(products => {
                this.setState({ products })
            });
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