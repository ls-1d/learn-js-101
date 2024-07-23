/**
 * indexOf()
 * lenght
 * toString()
 * at()
 * join()
 * pop()
 * push()
 * shift()
 * unshift()
 * delete()
 * concat()
 * splice()
 * slice()
 * flat()
 * sort()
 * search()
 */

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

console.log(shopping.length);

// modifying
shopping[0] = 'tahani';
console.log(shopping);

// indexOf()
const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Parrot'));
console.log(birds.indexOf('Rabbit'));

// adding items
let cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);

cities.push('Bradford', 'Brighton');
console.log(cities);
console.log(cities.toString());

let citiesList = ['Manchester', 'Liverpool', 'Cardiff', 'Bradford', 'Brighton'];

// adding to start and end
cities = ['Manchester', 'Liverpool'];
cities.unshift('Edinburgh');
console.log(cities);
cities.pop();
console.log(cities);

// splice to remove from certain index
cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
// cities.splice(0, 1);
// console.log(cities);
// cities.splice(1, 2);
// console.log(cities);

// looping in array
for (x of cities) {
    console.log(x);
}

for (key in cities) {
    console.log(cities[key]);
}

cities.forEach((el) => {
    console.log(el);
});

// map
let numbers = [5, 2, 7, 6];
const doubled = numbers.map((el) => {
    return el * 2;
});
console.log(doubled);

// filter
const isLong = numbers.filter((el) => {
    return el > 5;
});
console.log(isLong);

// converting between strings and arrays

let data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

let countries = data.split(',');
console.log(countries);

let countriesString = countries.join(',');
console.log(countriesString);

let dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
console.log(dogNames.toString());

let fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log(fruits);

console.log(fruits.length);

// pushing to index 5
fruits[5] = 'mango';
console.log(fruits);

console.log(Object.keys(fruits));
console.log(fruits.length);

fruits.length = 10;

console.log(fruits);
console.log(fruits.length);
console.log(fruits[8]);

// fruits.length = 2;
// console.log(fruits); // deletes the items in array

let sortedFruits = fruits.sort();
// console.log(fruits.reverse());

fruits.forEach((i, j) => {
    console.log(i, j);
});

console.log(sortedFruits.includes('apple'));
