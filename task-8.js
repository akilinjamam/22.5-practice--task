// array declearation in different way:

let numbers = [12, 15, 16, 18, 5, 11, 23, 38, 30, 19, 24];

// showing all the element of numbers in array.
console.log('total elements:', numbers);

// total element of numbers.
console.log('total numbers of elements:', numbers.length);

// changing the 4th position element
let changed = numbers[4] = 6;
console.log('undated 4th element:', changed);

// adding two elements 

let add = numbers.push(9, 21);
console.log('added last two elements:', numbers);

// removing one element from array.
let pop = numbers.pop();
console.log('removed last one element:', numbers);