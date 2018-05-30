import React from 'react';
import 'font-awesome/css/font-awesome.css';

function renderStars(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
        stars.push(<i style={{ color: 'red' }} className="fa fa-star" key={i}></i>);
    }
    return stars;
}

export default (props) => {
    let { review } = props;
    return (
        <div className="row">
            <div className="col-12 col-sm-8 col-md-8">
                <div className="alert alert-info">
                    {renderStars(review.stars)} &mdash; {review.author}
                    <hr />
                    <p>{review.body}</p>
                </div>
            </div>
        </div>
    );
}