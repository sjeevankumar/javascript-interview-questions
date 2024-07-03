// Merge two sorted arrays: Write a function to merge two sorted arrays into a single sorted array.

const mergeArrays = (arr1,arr2) => {
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);

    return mergedArray;
}

let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6];
const result = mergeArrays(arr1, arr2)
console.log(result)