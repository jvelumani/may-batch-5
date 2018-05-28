

function sessionStart() {

    let tnr = {
        name: 'Nag',
        doTeach: function () {
            console.log(this.name + " teaching .js");
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning .js from " + self.name);
            }
            console.log('teaching ends');
            return doLearn;
        }
    };

    let e1 = { name: 'A' }
    let e2 = { name: 'B' }

    let learnFunc = tnr.doTeach();

    learnFunc.call(e1);
    learnFunc.call(e2);

}

sessionStart();