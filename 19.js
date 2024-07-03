// Question: Guess the Array.from output (with reason)
const result = Array.from({length:10},(v,i)=>i)
console.log(result)

// Options: a)undefined b)Type error
//          c)fn(){({length:10},(v,i)=>i)}
//          d)[0,1,2,3,4,5,6,7,8,9]