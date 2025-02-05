/**
    DESCRIPTION

    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
   
    For example (Input --> Output):
    39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
    4 --> 0 (because 4 is already a one-digit number)  
*/

function persistence(num) {
    if (num < 10) return 0
    let numbers = Array.from(num + "", (n) => +n);
    let isItSingle = false;
    let counter = 0;
    while (isItSingle !== true) {
        numbers = Array.from(numbers.reduce((acc, curr) => { return acc *= curr }, 1) + "", (n) => +n)
        isItSingle = !(numbers.length > 1);
        counter++;
    }
    return counter
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(87)); // 3
console.log(persistence(4)); // 0