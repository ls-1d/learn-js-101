function getWeather() {
    return new Promise(function (resolve, reject) {
        resolve('sunshine');
    });
}

const promise = getWeather();

promise.then(function (data) {
    console.log(data);
});

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Yohoo! Drink up! Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(4, 5));

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
console.log('hello');

booker();
