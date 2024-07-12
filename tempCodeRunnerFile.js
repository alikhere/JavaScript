
let myDate = new Date()
console.log(typeof myDate);

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myNewDate = new Date(2023, 0, 23)
console.log(myNewDate.toDateString())

let NewDate = new Date(2023, 0, 23, 5, 3)
console.log(myNewDate.toLocaleString())

NewDate = new Date("2024-01-14")
console.log(myNewDate.toLocaleString())







