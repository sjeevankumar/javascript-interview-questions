// Reverse a string: Implement a function that reverses a given string.

// Using the split, reverse, and join methods:
// time complexity - O(n), space - O(n)
// const revString = (string) => {
//     return string.split('').reverse().join('')
// }

// Using a loop
// Time - O(n), Space - O(n)
const revString = (string) => {
    let rev_string = ''
    let str_len = string.length - 1
    for (let i = str_len; i >= 0; i--) {
        rev_string += string[i]
    }
    return rev_string
}

// Using recursion:
// function reverseString(str) {
// if (str === '') {
//     return '';
// } else {
//     return reverseString(str.substr(1)) + str.charAt(0);
// }

// Using the reduce method
// function reverseString(str) {
//     return str.split('').reduce((reversed, char) => char + reversed, '');
// }

const given_string = 'jeevan'
const rev_string = revString(given_string)
console.log(rev_string)
