

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const initialState = {
    products: [],
    reviews: {},
    cart: {},
    loadingStatus: {}
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)); // for async actions
export default store;