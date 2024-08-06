//conditional we already know form C++ so only new things we will foucs
//if

// if(condition) {


// }

// <,>,<=,>=, == ,!=, 

// const isUserLoggedIn = true;
// if(2 == "2") { // compile khud se 2 ko string bana dega
//     console.log("Execute")

// }

// if(2 === "2") { //here === this is strictly check same as == of c++ so will not execute
//     console.log("Execute")
// } else {
//     console.log("not equal")
// }


// const score = 200
// if(score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// can't  access power outside if {} console.log(`user power: ${power}`);



const balance = 1000
//if(balance > 500)  console.log("test"), console.log("test2");  //implicient execute


const userLoggedIn = true
const debitCard = true


if(userLoggedIn && debitCard && 2==2) {
    console.log("Allowed to buy course")
}

if(userLoggedIn && debitCard || 2 === 3) {
    console.log("Allowed to buy course")
}