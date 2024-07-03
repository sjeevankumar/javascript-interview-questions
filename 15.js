// Question: Find largest prime number in an array

const checkPrimeNumber = (num) => {
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

const findLargestPrimeNumber = (arr) => {
    let primeNumberList = []
    for (let i = 0; i < arr.length; i++) {
        const isPrime = checkPrimeNumber(arr[i])
        if (isPrime) {
            primeNumberList.push(arr[i])
        }
    }
    return Math.max(...primeNumberList)

}

const givenArray = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47]
const result = findLargestPrimeNumber(givenArray)
console.log(result)