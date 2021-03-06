import React from 'react';

import store from './store';
import { buy } from './actions/cart';

let total_amount = 0;

function buyHandler(item, count) {
    let action = buy(item, count);
    store.dispatch(action);
}

function renderCartItems(cart) {
    let keys = Object.keys(cart);
    return keys.map((key, idx) => {
        let line = cart[key];
        let item = line.item;
        let qty = line.qty;
        total_amount += (qty * item.price)
        return (
            <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>
                    <i className="fa fa-plus" onClick={() => { buyHandler(item, 1) }}></i>
                    &nbsp;
                {qty}
                    &nbsp;
                <i className="fa fa-minus" onClick={() => { buyHandler(item, -1) }}></i>
                </td>
                <td>&#8377;{qty * item.price}</td>
            </tr>
        );
    });
}
 
export default (props) => {
    let { cart } = props;
    return (
        <div className="card">
            <div className="card-header"> Item(s) in cart </div>
            <div className="card-body">
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>qty</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
                Total Amount : &#8377;{total_amount}
            </div>
        </div>
    );
}