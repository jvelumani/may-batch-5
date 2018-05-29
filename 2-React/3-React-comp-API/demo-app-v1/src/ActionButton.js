import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ActionButton.css';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        // initialize state in constructor
        this.state = {
            count: 0
        };
        console.log('ActionButton :: constructor()');
        //this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick() {
        let { count } = this.state; //
        count++;
        this.setState({ count }, () => {
            let { onAction } = this.props;
            if (onAction) {
                setTimeout(() => {
                    onAction();
                }, 2000);
            }
        });

    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action-button">
                <div className="card">
                    <div className="card-body">
                        <button className="btn btn-primary" onClick={() => { this.handleBtnClick() }}>
                            {value} : <span className="badge badge-danger">{count}</span>
                        </button>
                    </div>
                </div>
            </div >
        );
    }
}
ActionButton.defaultProps = {
    value: 1
}
ActionButton.propTypes = {
    value: PropTypes.number,
    onAction: PropTypes.func
}

export default ActionButton;