// Check for Prime Number: Write a function to determine if a given number is a prime number.

const checkPrimeNumber = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const givenNumber = 9
const isPrimeNumber = checkPrimeNumber(givenNumber)
if (isPrimeNumber) {
    console.log('prime number');
} else {
    console.log('not a prime number');
}