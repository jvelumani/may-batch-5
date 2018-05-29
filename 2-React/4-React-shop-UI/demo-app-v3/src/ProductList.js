import React from 'react';
import Product from './Product';

function renderProducts(products, onBuy) {
    return products.map((product, idx) => {
        return (
            <Product product={product} key={idx} onBuy={onBuy} />
        );
    });
}
export default (props) => {
    let { products, onBuy } = props;
    return (
        <div className="list-group">
            {renderProducts(products, onBuy)}
        </div>
    );
}