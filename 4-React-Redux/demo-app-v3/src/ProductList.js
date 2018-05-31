
import React, { Component } from 'react';
import Product from './Product';

import { loadProducts } from './actions/products'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductList extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.actions.loadProducts();
        }, 1000);
    }
    renderProducts() {
        let { products } = this.props;
        return products.map((product, idx) => {
            return (
                <Product product={product} key={idx} />
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

function mapStateToProps(state, props) {
    return {
        products: state.products
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { loadProducts };
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


// function teach(){
//     return function(){
//         console.log('learn...');
//     }
// }
// teach()();