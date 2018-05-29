// import React, { Component } from 'react';

// class TotalCountDisplay extends Component {
//     constructor(props) {
//         super(props);
//         console.log('TotalCountDisplay :: constructor()');
//     }
//     render() {
//         console.log('TotalCountDisplay :: render()');
//         let { value } = this.props;
//         return (
//             <div className="alert alert-danger">
//                 Total count : {value}
//             </div>
//         );
//     }
// }

// export default TotalCountDisplay;

import React from 'react';

export default (props) => {
    let { value } = props;
    return (
        <div className="alert alert-danger">
            Total count : {value}
        </div>
    )
}