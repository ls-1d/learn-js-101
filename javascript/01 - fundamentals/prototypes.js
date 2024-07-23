const myObject = {
    city: 'Madrid',
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};
myObject.greet();
console.log(myObject);
console.log(myObject.toString());

console.log(Object.getPrototypeOf(Object));

const myDate = new Date();
let object = myDate;

console.log(Object.getPrototypeOf(object));

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

const persoPrototypes = {
    greet() {
        return 'hello!';
    },
};

const carl = Object.create(persoPrototypes);
console.log(carl);

carl.greet();

// const
const personPrototype = {
    greet() {
        return `hello, my name is ${this.name}!`;
    },
};

function Person(name) {
    this.name = name;
}

console.log(Person.prototype);
console.log(personPrototype);
Object.assign(Person.prototype, personPrototype);

console.log(Person.prototype);

const reuben = new Person('Reuben');
console.log(reuben);

console.log(reuben.greet());

Person.prototype.talk = function () {
    return `Hi`;
};
console.log(Person.prototype);

console.log(reuben.talk());

const frankie = new Person('frankie');
console.log(frankie);
console.log(frankie.talk());
