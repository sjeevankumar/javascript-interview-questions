// FizzBuzz: Write a program that prints the numbers from 1 to n.But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".For numbers that are multiples of both three and five, print "FizzBuzz".

// take a input n from user
// use a loop to print the numbers from 1 to n

const printNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

const input_n = 30
printNumbers(input_n)