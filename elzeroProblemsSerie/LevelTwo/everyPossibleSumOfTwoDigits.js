/*
    DESCRIPTION

    Given a long number, return all the possible sum of two digits of it.

    For example, 12345: all possible sum of two digits from that number are:

    [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
    Therefore the result must be:

    [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

function digits(num) {
    let arr = num.toString().split("").map(num => +num)
    let possibilities = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            possibilities.push(arr[i] + arr[j])
        }
    }
    return possibilities
}

console.log(digits(123456));
console.log(digits(3264128));