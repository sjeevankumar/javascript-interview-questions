// Find the largest number in an array: Write a function to find the largest number in a given array of numbers.

const findLargestNumber = (arr) => {
    const arr_len = given_array.length
    let max_num = arr[0]
    for (let i = 1; i < arr_len; i++) {
        if(max_num < arr[i]){
            max_num = arr[i]
        }
    }
    return max_num
}

const given_array = [12, 45, 23, 67, 1, 78, -10]
const largest_number = findLargestNumber(given_array)
console.log(`the largest number in an array is ${largest_number}`)
