// Question: Flatten an Array of Arrays

let arr = [[0,1],[2,3],[4,5]]
const flattendArr = arr.reduce((previousValue,currentValue)=>{
    return previousValue.concat(currentValue)
},[])
console.log(flattendArr);