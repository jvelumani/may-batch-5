

export function loadReviews(productId) {
    let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'pls wait, we r loading reviews' });
        fetch(apiUrl)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: 'REQUEST_FINISH', message: '' });
                dispatch({ type: "LOAD_REVIEWS", productId, reviews });  // Async Action
            })
    }
}

export function addNewRview(productId, review) {
    let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
    return function (dispatch) {
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(review => {
                dispatch({ type: "ADD_NEW_REVIEW", productId, review });  // Async Action
            })
    }
}