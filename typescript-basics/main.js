"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
console.log(message);
// types in typescript
/**
 *
 */
var isBeginner = true;
var total = 0;
var name = 'frankie';
var sentence = "My name is ".concat(name, ".\nI am a beginner in Typescript");
// variable types
var n = null;
var u = undefined;
// let isName: boolean = null;
// let myName: string = undefined;
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4, 5];
var person1 = ['chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c);
// let randomValue: any = 10;
var randomValue = 10;
randomValue = true;
randomValue = 'frankie';
// randomValue.name;
// randomValue();
randomValue.toUpperCase();
// userDefined type guard
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(randomValue)) {
    console.log(randomValue.name);
}
// type inference
var a;
a = 10;
a = true;
var b = 20;
// b = true  // gives error
// functions
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    return num1;
}
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'frankie',
    lastName: 'D',
};
fullName(p);
// class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning, ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('frankie');
console.log(emp1);
// emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating works");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Salva');
console.log(m1);
m1.greet();
m1.delegateWork();
