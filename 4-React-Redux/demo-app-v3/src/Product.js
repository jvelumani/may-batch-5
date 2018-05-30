import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { loadReviews, addNewRview } from './actions/reviews'
import { buy } from './actions/cart';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
        }
    }
    changeTab(tab) {
        this.setState({ currentTab: tab }, () => {
            let { product, actions } = this.props;
            if (tab === 3) {
                actions.loadReviews(product.id);
            }
        });
    }
    handleNewReview(review) {
        let { product, actions } = this.props;
        actions.addNewRview(product.id, review);
    }
    handleBuyBtnClick() {
        let { product, actions } = this.props;
        let qty = this.refs.qtyField.value;
        actions.buy(product, Number.parseInt(qty, 10));
    }
    renderBuyBtn(product) {
        if (true) return (
            <div>
                <button className="btn btn-sm btn-primary" onClick={() => { this.handleBuyBtnClick() }}>buy</button>
                &nbsp;
                <select className="" ref="qtyField">
                    {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                </select>
            </div>
        )
        else return null;
    }
    renderReviews() {
        let { reviews } = this.props;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
    }
    renderTabPanel(product) {
        let { currentTab } = this.state;
        let panel;
        switch (currentTab) {
            case 1: {
                panel = (<div>{product.description}</div>)
                break;
            }
            case 2: {
                panel = (<div>Not Yet</div>)
                break;
            }
            case 3: {
                panel = (
                    <div>
                        {this.props.loadingStatus.message}
                        {this.renderReviews()}
                        {!this.props.loadingStatus.message ? <ReviewForm onNewReview={(review) => { this.handleNewReview(review) }} /> : null}
                    </div>
                )
                break;
            }
            default:
                panel = null;
        }
        return panel;
    }
    render() {
        let { product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="list-group-item" >
                    <div className="row">
                        <div className="col-3 col-sm-3 col-md-3">
                            <img src={product.image} className="img-fluid" alt='product' />
                        </div>
                        <div className="col-9 col-sm-9 col-md-9">
                            <h5>{product.name}</h5>
                            <h6>&#8377;{product.price}</h6>
                            <p>{product.description}</p>
                            {this.renderBuyBtn(product)}
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={`nav-link ${currentTab === 1 ? 'active' : ''}`} onClick={() => this.changeTab(1)}>Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: currentTab === 2 })} onClick={() => this.changeTab(2)}>Specification</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: currentTab === 3 })} onClick={() => this.changeTab(3)}>Reviews</a>
                                </li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        loadingStatus: state.loadingStatus,
        reviews: state.reviews[props.product.id] || []
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { loadReviews, addNewRview, buy };
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);