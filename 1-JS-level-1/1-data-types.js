

/*
    data-types

        1. simple / primitive  ==> values
            a. string
            b. number
            c. boolean
            d. undefined
        2. complex / reference ==> objects

*/

// ---------------------------------------------------------
// 1. simple / primitive  ==> values
// ---------------------------------------------------------
// a. string
var name = "Nag";
var selection = 'abc';
// var dynamicString = "the trainer is " + name;
// or
// ES6 ==> string-interpolation
var dynamicString = `the trainer is ${name}`;
var multiLineTemplate = `
    <div>
        <h1>${new Date().toTimeString()}</h1>
    </div>
`;
// ---------------------------------------------------------
// b. number
var count = 12;
var cost = 12.12;
// ---------------------------------------------------------
// c. boolean
var found = false;
// imp-note :
/*
    falsy values : ==> false,0,"",null,undefined,NAN
    ref : https://dorey.github.io/JavaScript-Equality-Table/
*/
// ---------------------------------------------------------
// d. undefined
var v;
// ---------------------------------------------------------




// ---------------------------------------------------------
// 2. reference   ==> objects
// ---------------------------------------------------------
/*
    how to create object ?
    syntax:
    var ref=new Constructor();


    imp-note :

    by defaut, 
    all javascript-objects are extensible & configurable
   
*/

// var config = new Object();
// config.url = "http://"
// config.httpMethod = "GET";
// config.onSuccess = function () {
//     console.log('im running on success');
// }
// delete config.httpMethod;

// ---------------------------------------------------------



// ---------------------------------------------------------
// literal-style objects
// ---------------------------------------------------------

// a. Object

// var config = new Object(); // Obj-wrapper
// config.url = "http://"
// config.httpMethod = "GET";
// config.onSuccess = function () {
//     console.log('im running on success');
// }

// or

// var newConfig={
//     url:'http://',
//     httpMethod:'GET',
//     onSuccess:function(){
//         //..
//     }
// }

// ---------------------------------------------------------

// b. Array / List

var menu = new Array();
menu[0] = "idly"
menu.push('vada');
// or
var newMenu = ["idly", 'vada'];

// ---------------------------------------------------------
// d. RegExp

var adharPattern = new RegExp("\\d{4}-\\d{4}-\\d{4}");
// or
var newAdharPattern = /\d{4}-\d{4}-\d{4}/;

// ---------------------------------------------------------

// c. Function

var add = new Function("n1", "n2", "var r=n1+n2;return r;")
// or
function add(n1, n2) {
    var r = n1 + n2; return r;
}

// ---------------------------------------------------------


// How to access obj's properties ?
/*
    in 2 ways
    -> . notation , if propert is dont have  space or -
    else
    -> [] notation
*/

var person = {
    name: 'Nag',
    age: 34,
    'home-address': 'chennai'
};

person.name = "Nag N";
console.log(person.name);

person['home-address'] = 'bengalore';
console.log(person["home-address"]);

var o = {
    1: 'one',
    100: 'hundred'
}

console.log(o[100]);