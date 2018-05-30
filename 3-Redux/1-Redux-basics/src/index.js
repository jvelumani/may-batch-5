import { combineReducers, createStore } from "redux";


// e.g counter-UI

//-----------------------------------------------
// Action creator(s)
function increment(value) {
    return { type: 'INCREMENT', value };
}
function decrement(value) {
    return { type: 'DECREMENT', value };
}
function addNewReview(productId, review) {
    return { type: 'ADD_NEW_REVIEW', productId, review }
}
function buy(item, qty) {
    return { type: 'BUY', item, qty }
}
//-----------------------------------------------
// Reducer(s)
function counterReducer(state = { count: 0 }, action) {
    console.log('counterReducer()');
    switch (action.type) {
        case 'INCREMENT':
        case 'ADD_NEW_REVIEW':
            return Object.assign({}, { count: state.count + (action.value ? action.value : 1) });
        case 'DECREMENT':
            return Object.assign({}, { count: state.count - (action.value ? action.value : 1) });
        default:
            return state;
    }
}
function reviewsReducer(state = {}, action) {
    console.log('reviewsreducer()');
    switch (action.type) {
        case 'ADD_NEW_REVIEW': {
            let reviews = state[action.productId] || []
            reviews = reviews.concat(action.review);
            return Object.assign({}, state, { [action.productId]: reviews });
        }
        default:
            return state;
    }
}
function cartReducer(state = {}, action) {
    console.log('cartReducer..');
    switch (action.type) {
        case 'BUY':
            let cart = state;
            let id = action.item.id;
            let qty = action.qty;
            let line = cart[id];
            if (line) {
                line = Object.assign({}, line, { qty })
            } else {
                line = { item: action.item, qty }
            }
            return Object.assign({}, cart, { [id]: line });
        default:
            return state;
    }
}
//-----------------------------------------------
const rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});
//-----------------------------------------------
// store 
const initialState = {
    counter: {
        count: 100
    },
    reviews: {
        '111': [
            { stars: 5, author: 'nag@gmail.com', body: 'sample review' }
        ]
    },
    cart: {
        "111": { item: { id: '111', name: "lap", price: '10000' }, qty: 1 }
    }
};
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//-----------------------------------------------


// View ( plain-js | jquery | NG | React | .......)

let spanEle = document.getElementById('spanEle');
let state = store.getState();
spanEle.innerText = state.counter.count;

store.subscribe(() => {
    console.log('subscribing...');
    let state = store.getState();
    spanEle.innerText = state.counter.count;
});

document.getElementById('incBtn')
    .addEventListener('click', () => {
        console.log('inc btn clicked..');
        let action = increment(10);
        store.dispatch(action);
    });

document.getElementById('decBtn')
    .addEventListener('click', () => {
        let action = decrement(10);
        store.dispatch(action);
    });



document.getElementById('lapReviewBtn')
    .addEventListener('click', () => {
        let action = addNewReview('111', { stars: 1, author: 'who@email.com', body: 'i love this lap' });
        store.dispatch(action);
    });


document.getElementById('mobReviewBtn')
    .addEventListener('click', () => {
        let action = addNewReview('222', { stars: 1, author: 'who@email.com', body: 'i love this lap' });
        store.dispatch(action);
    });

document.getElementById('buyLap')
    .addEventListener('click', () => {
        let action = buy({ id: '111', name: "lap", price: '10000' }, 1);
        store.dispatch(action);
    });


document.getElementById('buyMob')
    .addEventListener('click', () => {
        let action = buy({ id: '222', name: "mob", price: '10000' }, 1);
        store.dispatch(action);
    });       