
const myArr1 = [0, 1, 2, 3, 4, 5, true, "ali",] // can be mixed datatype
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArray2 = new Array(1,2,3,4)

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9)
// console.log(myArr) //add element at beggning
// myArr.shift(9)
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join() //converted to string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr) 


               // slice, splice

console.log("A: ", myArr)

const myn1 = myArr.slice(1,3)
console.log("B: ", myArr)
console.log(myn1);


const myn2 = myArr.splice(1,3) // slice and splice me ye difference hai splice original array ko hi change kr deta aur 1-3 me 3 bhi include krta hai
console.log("C: ", myArr);
console.log(myn2);



