export {};
const message: string = 'Hello World';
console.log(message);

// types in typescript
/**
 *
 */

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'frankie';

let sentence: string = `My name is ${name}.
I am a beginner in Typescript`;

// variable types

let n: null = null;
let u: undefined = undefined;

// let isName: boolean = null;
// let myName: string = undefined;

let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3, 4, 5];

let person1: [string, number] = ['chris', 22];

enum Color {
    Red = 3,
    Green,
    Blue,
}
let c: Color = Color.Green;
// console.log(c);

// let randomValue: any = 10;
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'frankie';

// randomValue.name;
// randomValue();
(randomValue as string).toUpperCase();

// userDefined type guard

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(randomValue)) {
    console.log(randomValue.name);
}

// type inference

let a;
a = 10;
a = true;

let b = 20;
// b = true  // gives error

// functions

function add(num1: number, num2?: number): number {
    if (num2) return num1 + num2;
    return num1;
}

// console.log(add(6, 60));
// // add (4,'10')
// console.log(add(4));

// interface

// function fullName(person: { firstName: string; lastName: string }) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }

// let p = {
//     firstName: 'frankie',
//     lastName: 'D',
// };

// fullName(p);

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'frankie',
    lastName: 'D',
};

fullName(p);

// class

class Employee {
    employeeName: string;
    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning, ${this.employeeName}`);
    }
}

let emp1 = new Employee('frankie');
console.log(emp1);
// emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`manager delegating works`);
    }
}

let m1 = new Manager('Salva');
console.log(m1);
m1.greet();
m1.delegateWork();
