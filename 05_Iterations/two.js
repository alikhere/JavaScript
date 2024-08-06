// const myObj = { // so for in loop works in obj 
//     'js': 'javascript',
//     'cpp': "C++",
//     'rb': "ruby"

// }
// for (const key in myObj) {
//     console.log(key)
    
// }
// for (const key in myObj) {
//     console.log(`key: ${key}  value: ${myObj[key]}`)
    
// }

// const prog = ["js", "ruby", "c++"]
// for (const key in prog) {
//     console.log(key) //in case of array in for in loop it give index only
// }
// for (const key in prog) {
//     console.log(prog[key])
// }


const  map =  new Map()
map.set('IN', "india")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Indian")


for (const key in map) { //map is not iteratable in forin loo[ ]
    console.log(key)
    
}

