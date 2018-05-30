

export function cartReducer(state = {}, action) {
    switch (action.type) {
        case "BUY": {
            let cart = state;
            let item = action.item;
            let qty = action.qty;
            let id = item.id;
            let line = cart[id];
            if (line) {
                line = Object.assign({}, line, { qty: line.qty + qty })
            } else {
                line = { item, qty }
            }
            return Object.assign({}, cart, { [id]: line });
        }
        default:
            return state;
    }
}