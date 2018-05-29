import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    constructor(props) {
        super(props);
        // this.state = {serverMessage: ''};
        // this.state = {now: new Date().toTimeString()};
        console.log('Greeting :: constructor()');
    }
    render() {
        console.log('Greeting :: render()');
        // let { serverMessage } = this.state;
        // this.props.message=null;// illegal, cant mutate given props
        let { message } = this.props;
        // let { now } = this.state;
        let now = new Date().toTimeString();
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <p></p>
                <hr />
                {/* {serverMessage} */}
                {now}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting :: componentDidMount()');
        // n/w call
        //setTimeout(() => {
        // let serverMessage = "Hello! from server-side"
        // this.setState({ serverMessage });
        //}, 3000);

        this.interval = setInterval(() => {
            // this.setState({ now: new Date().toTimeString() });
            this.forceUpdate();
        }, 100);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting :: shouldComponentUpdate()');
        // console.log(this.props);
        // console.log(nextProps);
        //return this.props.message !== nextProps.message;
        return true;
    }
    componentDidUpdate() {
        console.log('Greeting :: componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Greeting :: componentWillUnmount()');
        clearInterval(this.interval);
    }
}

Greeting.defaultProps = {
    message: 'dono, how to greet you..'
}
Greeting.propTypes = {
    message: PropTypes.string
};
Greeting.displayName = "ibm-greeting";

export default Greeting;