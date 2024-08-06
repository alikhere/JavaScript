// loop we already know so only new thing we will see..
// const Array = [20,30,40]
// for(let index = 0; index < Array.length; index++) {
//     const element = Array[index]
//     console.log(element)
// } for for loop,while and do-while  everything is same as c++

// break and continue also here

// for of
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
    
// }

// const greetings = "Hello World"
// for (const i of greetings) {
//     console.log(`Each char is ${i}`)
// }


//Maps
const  map =  new Map()
map.set('IN', "india")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Indian")

// console.log(map)

for (const key of map) {
    console.log(key)
    
}
for (const [key, value] of map) {
    console.log(key, ":-", value)
    
}

const myObj = {
    'Game1' : "NFS",
    'Game2' : "Spiderman"
}

for (const key of myObj) { //map is not iterable in for of
    console.log(key)
    
}

