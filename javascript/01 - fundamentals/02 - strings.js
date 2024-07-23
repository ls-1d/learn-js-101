/**
 * lenght()
 * charAt()
 * slice()
 * toUpperCase()
 * toLowerCase()
 * concat()
 * trin()
 * padStart()
 * repeat()
 * replace()
 * replaceAll()
 * split()
 *
 */

let number = '4';
console.log(number.padStart(1, 0));
console.log(number.padStart(2, 0));
console.log(number.padStart(3, 0));
console.log(number.padStart(4, 0));

let browserType = 'mozilla';
console.log(browserType.split(''));
console.log(browserType.length);
console.log(browserType[0]);
console.log(browserType[1]);
console.log(browserType[2]);
// last character
console.log(browserType[browserType.length - 1]);

// if string contains substring

if (browserType.includes('zilla')) {
    console.log('found zilla');
} else {
    console.log('no zilla found');
}

console.log(browserType.includes('zilla'));

console.log(browserType.startsWith('m'));
console.log(browserType.endsWith('a'));

// find the position of substring

const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('n'));

const firstOccurance = tagline.indexOf('developers');
const secondOccurance = tagline.indexOf('developers', firstOccurance + 1);
console.log(firstOccurance, secondOccurance);

// slice - method

console.log(browserType.slice(1));
console.log(browserType.slice(2));
console.log(browserType.slice(1, 5));

// toUpperCase && toLowerCase
let radData = 'My NaMe is MuD';
console.log(radData.toUpperCase());
console.log(radData.toLowerCase());

// updating the part of the strings
let updated = browserType.replace('moz', 'van');
console.log(updated);

let quote = 'to be or not to be';
quote = quote.replaceAll('be', 'code');
console.log(quote);
