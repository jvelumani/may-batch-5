

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_REVIEWS':
            return Object.assign({}, state, { [action.productId]: action.reviews })
        case 'ADD_NEW_REVIEW': {
            let reviews = state[action.productId]
            reviews = reviews.concat(action.review)
            return Object.assign({}, state, { [action.productId]: reviews })
        }
        default:
            return state;
    }
}