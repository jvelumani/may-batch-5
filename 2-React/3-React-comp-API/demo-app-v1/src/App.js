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
  incrementTotalCount(v) {
    let { totalCount } = this.state;
    totalCount += v;
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

            {/* 
            <ActionButton value={10} onAction={(v) => { this.incrementTotalCount(v) }} />
            <ActionButton value={-10} onAction={(v) => { this.incrementTotalCount(v) }} />
            <ActionButton value={100} onAction={(v) => { this.incrementTotalCount(v) }} />
            */}

            {[1, -1, 5, -5, 10, -10, 100, -100].map((n, idx) => {
              return <ActionButton key={idx} value={n} onAction={(v) => { this.incrementTotalCount(v) }} />
            })}

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
