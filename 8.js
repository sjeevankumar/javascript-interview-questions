// Remove duplicates from an array: Write a function to remove duplicate elements from an array.

const checkElementExist = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            return true
        }
    }
    return false
}

const removeDuplicates = (arr) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        const result = checkElementExist(newArray, element)
        if (!result) {
            newArray.push(element)
        }
    }
    return newArray
}

const removeDuplicates1 = (arr)=>{
    return [...new Set(arr)]
}

const givenArray = [1, 2, 1, 1, 1, 44, 3, 2, 4, 1]
const result = removeDuplicates1(givenArray)
console.log(`array afer removing duplicates ${result}`);