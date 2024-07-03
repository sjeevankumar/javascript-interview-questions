// Question: Find the output of the below code(with reason)

let place = "US"
let department = {
    [getStudentPlace()]:'India',
    [place+"Department"]:'English',
    standard:100
}
function getStudentPlace(){return place}
let division = 'standard'

let {
    [getStudentPlace()]:placeDetials,
    [place+"Department"]:departmentDetials,
    [division]:standard
} = department

console.log(placeDetials + ' & '+ departmentDetials + ' & '+standard);

// Output:
// a) US & English & 100          b) India & English & 100
// c) undefined & undefined & undefined 
// d) Reference Error