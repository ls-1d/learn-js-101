class Person {
    talk() {
        return 'Talking';
    }
}

let me = new Person();
let you = new Person();
console.log(me);
console.log(you);
me.age = 12;

console.log(Person.prototype === me.__proto__);

console.log(me.__proto__.talk());

Person.prototype.talk = function () {
    return 'New and improved Talking';
};

console.log(me.talk());
console.log(you.talk());
me.__proto__.talk = function () {
    return 'hello';
};

console.log(me.talk());
console.log(you.talk());

//////////////////////////////////////////////

function Person1() {}

Person1.prototype.talk = function () {
    return 'Talking';
};
let me1 = new Person1();
console.log(me1);
console.log(me1.__proto__);
////////////////////////////////////////////////

function Person2() {
    this.talk = function () {
        return 'talking';
    };
}

let me2 = new Person2();

console.log(me2);
//////////////////////////////

function Person3() {
    this.age = 12;
}
let me3 = new Person3();
console.log(me3);

Person.age = 40;
console.log(me3.age);
me3.age = 50;
console.log(me3.age);
console.log(Person.prototype.age);

/////////////////////////////////////////////////////

function Person4(age, name, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;

    this.talk = function () {
        return 'hello';
    };
}

Person4.prototype.run = function () {
    return 'running';
};

let me4e = new Person4(10, 'frankie', 'male');
console.log(me4e);
console.log(me4e.talk());
console.log(me4e.run());
console.log(Person4);
console.log(me4e.__proto__);
/////////////////////////////////////

class Person5 {
    talk() {
        return 'talking';
    }
}

class SuperHuman extends Person5 {
    fly() {
        return 'flying';
    }
}

let me5 = new Person5();
console.log(me5.talk());
let you5 = new SuperHuman();
console.log(you5.talk());
console.log(you5.fly());

////////////////////////////////////////////

const personObj = {
    age: 5,
    talk() {
        return 'talking';
    },
};

let me6 = Object.create(personObj);
console.log(me6.talk());
console.log(me6.age);
