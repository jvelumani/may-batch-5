console.log('-index.js-');

// step-1 : define component-class

// class Greeting extends React.Component {
//     render() {
//         let pEle = React.createElement('p', null, 'Good Morning');
//         let pEle2 = React.createElement('p', null, new Date().toTimeString());
//         let divEle = React.createElement('div', { className: 'alert alert-info' }, [pEle, pEle2]);
//         return divEle;
//     }
// }

// or  using JSX syntax
class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <p>good morning</p>
                <p>{new Date().toTimeString()}</p>
            </div>
        );
    }
}


// step-2 : create component instance
// let greeting1 = React.createElement(Greeting, null, null);
// or
let greeting1=<Greeting />
ReactDOM.render(greeting1, document.getElementById('root'));

