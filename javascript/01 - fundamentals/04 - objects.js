// creating objects using constructors

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greet = function () {
        console.log(`Hi! I'm ${this.name}`);
    };

    return obj;
}

// let frankie = createPerson('frankie');
// console.log(frankie);
// frankie.greet();

// frankie['age'] = 42;
// console.log(frankie);

// using constructor
function Person(name) {
    this.name = name;
    this.greet = function () {
        console.log(`Hi! I'm ${this.name}`);
    };
}

// const salva = new Person('Selvie');
// console.log(salva);
// salva.age = 42;
// console.log(salva);

// using Object.create()

const person = {
    isHuman: false,
    printIntro: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);

me.name = 'Mathew';
me.isHuman = true;

me.printIntro();

// looping through objects

const population = {
    male: 4,
    female: 93,
    others: 10,
};

// iterate through the object
for (const key in population) {
    console.log(population[key]);
}

let keys = Object.keys(population);
let values = Object.values(population);
let entries = Object.keys(population);

keys.forEach((el) => {
    console.log(el);
});

values.forEach((el) => {
    console.log(el);
});

entries.forEach((el) => {
    console.log(entries);
});

let sum = 0;
values.forEach((el) => {
    return (sum = sum + el);
});
console.log(sum);

sum = 0;
keys.forEach((el) => {
    return (sum = sum + population[el]);
});

console.log(sum);
