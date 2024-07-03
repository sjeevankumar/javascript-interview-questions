// Find the intersection of two arrays: Write a function that returns an array containing elements that are common in two arrays.

const intersectionArrays = (arr1,arr2) => {
    const intersectArray = []
    for(let i = 0;i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                intersectArray.push(arr1[i])
            }
        }
    }
    return intersectArray
}

const arr1 = [1, 3, 4, 5, 6]
const arr2 = [3, 4, 5, 8, 9]
const result = intersectionArrays(arr1, arr2)
console.log(result)