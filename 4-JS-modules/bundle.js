(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


console.log('-app.js-');

//------------------------------------------------------------
// var ibm = ibm || {};
// ibm.mod1.doWork();
//------------------------------------------------------------

let greetMod = require('ibm-may-fifth-greet');
greetMod.greet('en');
greetMod.greet('ka');
greetMod.greet();

//------------------------------------------------------------
},{"ibm-may-fifth-greet":3}],2:[function(require,module,exports){

//------------------------------------------------------------
// var ibm = ibm || {};
// (function () {
//     ibm.mod3.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     ibm.mod2 = o; // export
// })();
//------------------------------------------------------------

function greet() {
    console.log('Hello');
}
module.exports = greet;
},{}],3:[function(require,module,exports){
//------------------------------------------------------------
// var ibm = ibm || {};
// (function () {
//     ibm.mod2.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     ibm.mod1 = o; // export
// })();
//------------------------------------------------------------

console.log('greet/index.js-');

let message = "hello...";

let en = require('./en');
let ka = require('./ka');

function greet(lang) {
    if (lang === 'en') {
        en(); return
    }
    if (lang === "ka") {
        ka(); return;
    }
    console.log('give me lang , to greet u');
}
module.exports = {
    greet
}
},{"./en":2,"./ka":4}],4:[function(require,module,exports){

//------------------------------------------------------------
// var ibm = ibm || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     ibm.mod3 = o; // export
// })();

//------------------------------------------------------------

function greet() {
    console.log('Namaskara');
}
module.exports = greet;
},{}]},{},[1]);
