

function sessionStart() {
    class Trainer {
        constructor(name) {
            this.name = name;
        }
        doTeach() {
            console.log(this.name + " teaching .js");
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning .js from " + self.name);
            }
            console.log('teaching ends');
            return doLearn;
        }
    }
    class Employee {
        constructor(name) {
            this.name;
        }
    }
    let tnr = new Trainer('Nag');
    
    let e1 = new Employee('A');
    let e2 = new Employee('B');

    let learnFunc = tnr.doTeach();

    learnFunc.call(e1);
    learnFunc.call(e2);

}