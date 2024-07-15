const user = {
    username: "ali",
    price: 999,

    welcomeMessage: function() {
        console.log(`${username} , welcome to website`);
        console.log(this); //this pointer is poining to this obj
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this) //this is pointing to whole globle object

// function chai() {
//     let username = "ali"
//     console.log(this.user);
// }
// chai()

// *********************arrow function **********************8

// const chai = () => { //arrow function
//     let username = "ali"
//     console.log(this)
// }
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) =>  num1 + num2 // implicient return

// console.log(addTwo(3,4))


//const addTwo = (num1, num2) => {username: "ali"} // can't implicient return obj without ()
const addTwo = (num1, num2) => ({username: "ali"})
console.log(addTwo(3,4))



