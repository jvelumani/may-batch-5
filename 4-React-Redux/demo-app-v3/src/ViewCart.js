import React from 'react';

import { buy } from './actions/cart';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

let total_amount = 0;

function buyHandler(item, count, props) {
    props.actions.buy(item, count);
}

function renderCartItems(cart, props) {
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
                    <i className="fa fa-plus" onClick={() => { buyHandler(item, 1, props) }}></i>
                    &nbsp;
                {qty}
                    &nbsp;
                <i className="fa fa-minus" onClick={() => { buyHandler(item, -1, props) }}></i>
                </td>
                <td>&#8377;{qty * item.price}</td>
            </tr>
        );
    });
}

const ViewCart = (props) => {
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
                        {renderCartItems(cart, props)}
                    </tbody>
                </table>
                Total Amount : &#8377;{total_amount}
            </div>
        </div>
    );
}


function mapDispatchToProps(dispatch) {
    let actions = { buy };
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ViewCart);