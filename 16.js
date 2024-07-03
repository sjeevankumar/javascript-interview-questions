// Question: Remove duplicates from an array
const arr = [2, 3, 5, 3, 6, 8, 9, 2, 11, 5]
// Expected output: [2,3,5,6,8,9,11]

const strArr = ['Mike', 'John', 'Nancy', 'Thomas', 'Nancy', 'Peter', 'Mike']
// Expected output: ['Mike','John','Nancy','Thomas','Peter']


// const removeDuplicates = (arr) => {
// return [... new Set(givenArray)]
// }

const checkDuplicate = (array,element) => {
    for(let i=0;i<array.length;i++){
        if(array[i]===element){
            return true
        }
    }
    return false
}

const removeDuplicates = (arr) => {
    let uniqueArray = []
    for (let i = 0; i < arr.length; i++) {
        const isElementExist = checkDuplicate(uniqueArray,arr[i])
        if (!isElementExist) {
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}

const givenArray = strArr
const result = removeDuplicates(givenArray)
console.log(result)