

export function loadReviews(productId) {
    //..
    let reviews = [
        { stars: 4, author: 'who@email.com', body: 'sample' }
    ];
    return { type: 'LOAD_REVIEWS', productId, reviews }
}

export function addNewRview(productId, review) {
    //..
    return { type: 'ADD_NEW_REVIEW', productId, review }
}