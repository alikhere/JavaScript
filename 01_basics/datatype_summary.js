// ********Primitive**********
// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt

let userEmail; // default undefined
const id  = Symbol("123")
const anotherId =  Symbol("123") //t=return id
console.log(id === anotherId) //gives faluse as id always different

const bigNumber = 222222222222222n //it will take big in datatype


// *********Reference(Non Primitive)***********
//Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doge"]; //array

let myObj = {   //objecy
    name: "ali",
    age: 22,
}

const myFunction = function() {
    console.log("hello world")
}
console.log(typeof(myObj))
console.log(typeof(myFunction))
