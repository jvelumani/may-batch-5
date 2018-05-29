import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 100
    }
    console.log('App :: constructor()');
    // console.log(props);
  }
  incrementTotalCount() {
    let { totalCount } = this.state;
    totalCount++;
    this.setState({ totalCount });
  }
  render() {
    console.log('App :: render()');
    // let title = this.props.title;
    // or
    let { title } = this.props; // de-structuring
    let { totalCount } = this.state;
    return (
      <div className="container">
        <hr />
        <h1> React-api: {title}</h1>
        <hr />
        <div className="card">
          <div className="card-header"> App Component : <span className="badge badge-danger">{totalCount}</span></div>
          <div className="card-body">
            <ActionButton value={10} onAction={() => { this.incrementTotalCount() }} />
            <ActionButton value={-10} onAction={() => { this.incrementTotalCount() }} />
            <ActionButton value={100} onAction={() => { this.incrementTotalCount() }} />
            <div style={{ clear: 'both' }}>
              <hr />
              <TotalCountDisplay value={totalCount} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
