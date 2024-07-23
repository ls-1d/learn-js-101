// falsy Values
/**
 * false
 * null
 * undefined
 * 0
 * -0
 * NaN
 * An empty string
 */
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));

let height = 0;
if (height) {
    console.log('hello');
} else {
    console.log('hi');
}

// truthy values

console.log(Boolean(true));
console.log(Boolean(100));

const hasDriversLicense = true;
const hasGoodVision = true;

if (hasDriversLicense && hasGoodVision) {
    console.log('good');
} else {
    console.log('others should drive');
}

if (hasDriversLicense || hasGoodVision) {
    console.log('good');
} else {
    console.log('others should drive');
}

hasDriversLicense && hasGoodVision ? console.log('good') : console.log('others should drive');
