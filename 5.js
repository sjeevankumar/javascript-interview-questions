// Factorial: Write a function to calculate the factorial of a given number.

const calculateFactorial = (num) => {
    // 5 * 4* 3* 2*1
    if(num === 0){
        return 1
    }
    let factorial = 1
    for(let i=2;i<=num;i++){
        factorial = factorial * i
    }
    return factorial
}

const givenNumber = 0
const factorial = calculateFactorial(givenNumber)
console.log(`factorial of a number is ${factorial}`)