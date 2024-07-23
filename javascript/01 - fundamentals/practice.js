function opposite(number) {
    //your code here
    if (number > 0) {
        return -number;
    } else {
        return Math.abs(number);
    }
}

console.log(opposite(1));
console.log(opposite(-34));
