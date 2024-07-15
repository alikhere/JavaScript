// function sayMyName() {
//     console.log("H")
//     console.log("I")
//     console.log("J")

// }

// sayMyName()

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2)
// }

// addTwoNumber(4, 5)
// addTwoNumber(4, "3") //it take 4 as string too
// // const res = addTwoNumber(4, 9)

// //console.log(res) //undefine as nothing return

// function addTwoNum(num1, num2) {
//     // let result = num1 + num2
//     // return result
//     return num1 + num2
    
// }
// const result = addTwoNum(2,3)
// // console.log(result)


// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Ali"))
// console.log(loginUserMessage())



// function loginUserMsg(username) {
//     if(username === undefined) {
//         console.log("Please enter a usernmae")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMsg("Ali"))
// console.log(loginUserMsg())


// function loginUserMsg(username = "adil") {
//     if(username === undefined) {
//         console.log("Please enter a usernmae")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMsg("Ali"))
// console.log(loginUserMsg())

function calculateCardPrice(...num1) { //using rest operator ...for multiple operator
    return num1 
}

console.log(calculateCardPrice(22,20,40))

function calculateCardPrice(val1, val2,...num1) { 
    return num1 
}

console.log(calculateCardPrice(22,20,40,10))

const user = {
    username: "Ali",
    price: 200
}

function handleObject(anyobj) {
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`)
}
 handleObject(user)

 handleObject({
    username: "Ali",
    price: 200
 })

const myArray = [200,300,500] 
function returnArray(getArray) {
    return getArray[2]
}
console.log(returnArray(myArray))
console.log(returnArray([220,300,400]))


