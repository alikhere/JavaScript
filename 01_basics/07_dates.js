
// let myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myNewDate = new Date(2023, 0, 23)
// console.log(myNewDate.toDateString())

let myNewDate = new Date(2023, 0, 23, 5, 3) //js count month from zero
// console.log(myNewDate.toLocaleString())

// myNewDate = new Date("01-04-2024")
// console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); //default give milliseconf form 1jun1970
console.log(myNewDate.getTime()) //time form 01-04-2024 in ms

console.log(Math.floor(Date.now()/1000)) //convering in sec
let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default', { //cam modify dates that in which style it shoud look using toLocaleString method.
    weekday: "long",

})








