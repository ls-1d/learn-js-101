const person = {
    name: 'frankie',

    age: 38,
    hello: function () {
        return this;
    },
};

console.log(person.hello().hello().hello());
