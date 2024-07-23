// factory functions
function personFactory(name) {
    const obj = {
        name,
        talk() {
            return `Hello I am ${name}`;
        },
    };
    return obj;
}

const me = personFactory('frankie');
console.log(me.talk());
console.log(me);
