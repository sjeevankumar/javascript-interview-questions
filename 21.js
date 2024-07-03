// Question: Find the output of the below code(with reason)

function print(x){
    if(x<=1){
        print(x+1)
        console.log("x in if block is "+x)
    }else if(x>=100000000000){
        console.log("x in else if block is "+x)
    }
    print(x+1)
}
print(0)

// Expected Output:
// a)x in if block is 0  b) x in if block is 1
// c)x in if block is 10000000000
// d)RangeError: Maximum call stack size exceeded