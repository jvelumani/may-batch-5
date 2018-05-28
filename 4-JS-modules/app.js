

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

// import {item1,item2} from './hotel/menu';
// or
// import {item1 as nonVeg,item2 as veg} from './hotel/menu';
// or
// import * as items from './hotel/menu';



import item, { item2, item3 } from './hotel/menu';
item2=null; // error
