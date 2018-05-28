"use strict"

//----------------------------------------
// => de-structuring
//----------------------------------------
// A. Object

// let person = {
//     name: 'Nag',
//     age: 34
// };

// manual de-structuring
// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;

// let { name: name, age: age } = person;
// or
// let { name, age } = person;

// let name, age;
// ({ name, age } = person);


// B. Array 

// let nums = [10, 20, 30, 40, 50, [60, 70]];

// let n1=nums[0];
// let n2=nums[1];

// or

// let [n1, n2, n3 = 300, , n5, [n6, n7]] = nums;


//----------------------------------------
// => spread operator
//----------------------------------------

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [10, 20, 30];
// // func(nums[0], nums[1], nums[2]);
// // or
// func(...nums);


// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];

// let newArr = [...arr1, 4, 5, 6, ...arr2];

//----------------------------------------
// => obj-literal enhancements
//----------------------------------------

// let name = "Nag";
// let age = 34;

// // es5
// let person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         //..
//     },
//     address: 'chennai'
// };

// // es6
// let dyanmicField = "home"; // office | vacation
// let person2 = {
//     name,
//     age,
//     sayName() {
//         //..
//     },
//     [dyanmicField + '-address']: 'chennai',
//     [10 + 20]: 'three hundred',
//     'say Name'() {
//         //..
//     }
// };

// person2['say Name']();


//----------------------------------------
// => arrow-function
//----------------------------------------

// let getPrice = function () {
//     return 100 + 200;
// }

// or  => arrow function - syntax

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = (count) => {
//     return count * (100 + 200);
// }

// let getPrice = count => {
//     return count * (100 + 200);
// }

// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }

// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total;
// }


/*
    why/where we need arrow-functions ?
    ==> to make compact-function argument
    ==> to capture 'this'
*/

//----------------------------------------

// ==> to make compact-function argument


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b; });
// or
// nums.sort((a, b) => { return a - b; });
// or
// nums.sort((a, b) => a - b);

//----------------------------------------

// ==> to capture 'this'

/*

    by default,

    regular-functions statically & dynamically
    we can bind to any object

    arrow-function :

        => always bound to creator

*/
//----------------------------------------

// let tnr = {
//     name: 'Nag',
//     doTeach() {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }
//         console.log('teaching ends');
//         return askQues;
//     }
// };

// let askQues = tnr.doTeach();
// askQues('Q1');

// let tmpTnr = { name: 'Praveen' }
// askQues('Q2');

//------------------------------------------------

// Quiz

// let regularFunc = function () {
//     console.log(this);
// }
// regularFunc();

// let arrowFunc = () => {
//     console.log(this);
// }
// arrowFunc();

//------------------------------------------------

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + ' processed');
//     }
// };

// let invoice = {
//     num: 123,
//     process: () => {
//         console.log('INV-' + this.num + ' processed');
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + ' processed partially');
//         return function () {
//             console.log('INV-' + this.num + ' processed completly');
//         }
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + ' processed partially');
//         return () => {
//             console.log('INV-' + this.num + ' processed completly');
//         }
//     }
// };
// let complete = invoice.process();
// complete();

//------------------------------------------------------
// Quiz

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     let incAge = () => {
//         this.age++;
//         console.log(this.name + "->" + this.age);
//     }
//     setInterval(incAge, 1000);

// }

// new Person('Ria', 3);


//------------------------------------------------------
// => symbols
//------------------------------------------------------

/*

    unique & immutable value ,
    used as object identifier property

*/

//-------------------------------------------------

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');

// let e1 = { name: 'A', [javaSymbol]: 'java,spring' };
// let e2 = { name: 'A', [jsSymbol]: 'js,reactjs' };

// if (e1[javaSymbol]) {
//     console.log('welcome java guy');
// }
//-------------------------------------------------

// let menu = ['biryani-1', 'biryani-2', 'biryani-3'];

// let newMenu = [...menu, 'biryani-4']
// let [m1, m2, m3] = menu;
// for(let m of menu){
//     console.log(m);
// }

//-------------------------------------------------

// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         }
//     }
// };

// for (let id of idMaker) {
//     console.log(id);
// }

// let ids = [...idMaker];
// let [id1, id2, id3] = idMaker;

// summary : all iterable objects are spreadable,de-structurable & we can use with for-of loop

//--------------------------------------------------------------------------