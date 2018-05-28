
"use strict"

//----------------------------------------------------
// how to create function in .js-language ?

// 1. function declaration  
/*
  => Named function
  => function-obj created at scope-creation phase
  => always get hoist with function-obj
*/
// 2. function expression

//----------------------------------------------------

// 1. function declaration

// console.log(add(12, 13));
// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12, 13));

//----------------------------------------------------

// 2. function expression

// console.log(add(12, 13)); // error
// let add = function (n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12, 13));

//----------------------------------------------------

// e.g

// let userType = "";  // admin || member
// let userAction;
// function login() {
//     userType = "admin" // | member
// }
// login();
// if (userType === "admin") {
//     userAction = function () {
//         console.log('admin-user action..');
//     }
// } else {
//     userAction = function () {
//         console.log('member-user action');
//     }
// }
// userAction();

//----------------------------------------------------


//----------------------------------------------------
/*
    Functions as Values
        - STORE functions in variables
        - PASS functions in parameters
        - RETURN functions from other functions
*/

//----------------------------------------------------

// - STORE functions in variables

// function greet() {
//     console.log('Hello...');
// }
// let sayHello = greet;
// sayHello();

//----------------------------------------------------

// - PASS functions in parameters

// function greet(f) {
//     if (f) {
//         f(); return;
//     }
//     console.log('Hello..');
// }

// greet();
// let kaGreet = function () {
//     console.log('Namaskara');
// }
// greet(kaGreet);

// greet(function () { console.log('vanakkam') });

// e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// nums.sort(function (a, b) { return a - b; });
// nums.sort(function (a, b) { return b - a; });

//----------------------------------------------------

// - RETURN functions from other functions

// function teach() {
//     console.log('teaching .js');
//     let learn = function () {
//         console.log('learning .js');
//     }
//     // learn();
//     console.log('teaching ends');
//     return learn;
// }
// let learn = teach();
// learn();

//----------------------------------------------------


//----------------------------------------------------
// Function with params
//----------------------------------------------------

// function func(a, b) {
//     console.log(a);
//     console.log(b);
//     console.dir(arguments);
// }
// func(undefined, 20, 30, 40, 50, 50);


// e.g

// function sum() {
//     let len = arguments.length,
//         i = 0,
//         result = 0;
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }
//     return result;
// }


// can we overload function in .js  by params ? No

// function getFood() {
//     return "No Food";
// }

// function getFood(pay) {
//     if (arguments.length === 0) return "No Food"
//     return "biryani";
// }

// console.log(getFood());


//----------------------------------------------------

// ES6 : function with default-params

// function func(a = 1, b = 2) {
//     // if (!a) a = 1
//     // if (!b) b = 2
//     // or
//     // a = a || 1;
//     // b = b || 2;
//     console.log(a);
//     console.log(b);
// }
// func(undefined, 20);

//----------------------------------------------------

// ES6 : function with rest-param

// function func(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(Array.isArray(rest));
//     console.log(rest)
//     console.dir(arguments);
// }
// func(1, 2, 3, 4, 5, 6, 7, 8);

//----------------------------------------------------
// function-closures

/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/
//----------------------------------------------------

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let fun = 'bla bla';
//     function learn() {
//         console.log('learing with ' + notes);
//     }
//     // learn();
//     console.log('teaching ends');
//     return learn;
// }
// let learnFunc = teach('.js'); // teach-scope with args + local
// learnFunc();


//----------------------------------------------------

// why / where we need closures ?

/*
    => to abstract public-behav of module
    => while executing func async, to access parent-scoped data
*/
//----------------------------------------------------

// => to abstract public-behav of module

// e.g

/*
    e.g counter-module
        - count
        - doCount()
        - getCount()
*/

// self-executable function   or IIFE  // module design pattern

// const counter = (function () {
//     let count = 0; // private
//     // public
//     function doCount() {
//         count++
//     }
//     function getCount() {
//         return count;
//     }
//     return {
//         inc: doCount,
//         get: getCount
//     }
// })();

//----------------------------------------------------


// Function-binding

/*
    1. static function-binding
    2. dynamic function-binding
*/


//----------------------------------------------------

// 1. static function-binding

// function sayNameForAll() {
//     console.log('im ' + this.name);
// }

// let p1 = {
//     name: 'Nag',
//     sayName: sayNameForAll // static function-binding
// };
// let p2 = {
//     name: 'Ria',
//     sayName: sayNameForAll
// };
// // sayNameForAll(); // im ?? // TypeError , this ==> undefined
// p1.sayName(); // im Nag
// p2.sayName(); // im Ria

//----------------------------------------------------

// 2. dynamic function-binding

let p = { name: 'Nag' }
let e = { name: 'IBM' }


let greetLib = {
    name: 'greet-lib',
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    }
};
// greetLib.sayName();

// static function-binding
// p.sayName = greetLib.sayName;
// let newP = { name: 'person', sayName: greetLib.sayName }
// p.sayName();
// newP.sayName();

// // way-1
// greetLib.sayName.call(p, "Hello", "chennai")
// greetLib.sayName.call(e, "hey", "bengalore")

// way-2
// greetLib.sayName.apply(p, ["Hello", "chennai"])
// greetLib.sayName.apply(e, ["hey", "bengalore"])

//way-3
// let personSayName = greetLib.sayName.bind(p, 'hello', "chennai");
// personSayName()
// personSayName();

// let empSayName = greetLib.sayName.bind(e);
// empSayName('hi', 'bengalore');
// empSayName("dude", "universe")

//----------------------------------------------------

/*
    in .js-lang , we can invoke functions in 3 ways
    1. function-invocation
        'this' ==> undefined ( in strict-mode ) ||  window ( in non-strict-mode )
    2. method-invocation ( static-function-binding) 
        'this' ==> invoker object
    3. call/apply/bind invocation ( dynamic-function-binding)
        'this' => arg-object
*/

//----------------------------------------------------

// function func() {
//     console.log(this);
// }
// // func(); // function-invocation

// let o1 = { name: 'A', func: func }  // sattic function binding
// o1.func();

// let o2 = { name: 'B' }
// func.call(o2); // dynamic function-binding


//----------------------------------------------------


// Quiz

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let self = this;
        let learn = function () {
            console.log(this.name + " learning .js from " + self.name);
        }
        console.log('teaching end');
        return learn;
    }
}

// today
let learnFunc = tnr.doTeach();
// learnFunc();
let emp = { name: 'IBM' }
learnFunc.call(emp)

// tomo
let tempTnr = { name: 'Praveen' }
learnFunc = tnr.doTeach.call(tempTnr);
learnFunc.call(emp)

