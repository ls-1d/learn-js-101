function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(17));
