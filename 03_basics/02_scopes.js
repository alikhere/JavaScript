// var c = 300 //global scope
// let a = 400
// const b = 70
// if(true) { //its block scope
// let a = 10
// const b = 20
// var c = 30
// console.log("Innder " ,a)
// console.log("c innder", c)
// }

// console.log("outer a ", a)
// console.log(b)
// console.log("c outer" ,c) //problem hai var me ye bahar access hona nhi chahiye so var use nhi kr sakte


// function one() {
//     const username = "Ali"

//     function two() {
//         const website = "Youtube"
//         console.log(username)
//     }
//     //console.log(website) can't access inside fn outside
//     two()
// }
//one()



// if(true) {
//     const username = "ali"
//     if(username === "ali") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     //console.log(website);
// }
//console.log(username)




// ********************* Interesting **********************************//

console.log(addOne(5))
function addOne(num) { //M1 declearation
    return num + 1
}

//addTwo(8) 
const addTwo = function(num) { //M2 declearatin of fun. but in this case we can't acces fun. before declearation
    return num + 2
}
