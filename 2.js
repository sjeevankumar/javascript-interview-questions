// Check for Palindrome: Write a function to determine if a given string is a palindrome.

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const given_string = 'nan'
const rev_string = reverseString(given_string)
if (given_string === rev_string) {
    console.log('Palindrome')
} else {
    console.log('Not a polinfrome')
}