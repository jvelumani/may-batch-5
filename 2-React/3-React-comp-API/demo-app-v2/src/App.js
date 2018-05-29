import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'greetings'
    }
    console.log('App :: constructor()');
  }
  changeMessage(message) {
    this.setState({ message });
  }
  renderGreeting() {
    let { message } = this.state;
    if (message) return <Greeting message={message} />
    else return null;
  }
  componentDidCatch(){
    console.log('App :: componentDidCatch()');
  }
  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <hr />
        <h1>React api : comp-life-cycle</h1>
        <hr />
        <button onClick={() => this.changeMessage('good morning')}>GM</button>
        <button onClick={() => this.changeMessage('good noon')}>GN</button>
        <button onClick={() => this.changeMessage('good evening')}>GE</button>
        <button onClick={() => this.changeMessage('')}>Remove</button>
        <hr />
        {this.renderGreeting()}
      </div>
    );
  }

}

export default App;
