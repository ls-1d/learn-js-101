// my first class

class Person {
    name;

    constructor(name) {
        this.name = name;
    }
    intro() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

let giles = new Person('Giles');
giles.intro();
console.log(giles);
