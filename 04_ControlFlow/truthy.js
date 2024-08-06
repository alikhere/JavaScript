const userEmail = "ali@here.ai"

if(userEmail) {
    console.log("Got the user email")
} else {
    console.log("Don't have user email")
}

const userEmail2 = ""

if(userEmail2) {
    console.log("Got the user email")
} else {
    console.log("Don't have user email")
}

//////////////falsy value/////////////
//false, 0, -1, BigInt 0n, "" , null, undefined, NaN, other all are truely value

// truthy values///-- anything inside string is true value
//  "0", 'false', " ", [], {}, function(){}
// const useremail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Obj is empty")
// }

//Nullis coalescing Operator (??); null undefined

// let val1;
//val1 = 5 ?? 10;
// val1 = null ?? 10 // use of ?? that when fn return null or undefined then don't assign it instead of it assign 10
//val1 = undefied ?? 10 // ?? is not working in my system working in hitesh system 

// console.log(val1); // Output: 5




//Terniary operator

const marks = 100
marks > 80 ? console.log("pass") : console.log("fail");