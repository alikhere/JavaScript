const marvel = ["thor", "Ironman", "Spiderman"]
const dc = ["superman", "flase", "batman"]

//marvel.push(dc) // yaha pe marvel arry pura dc array ko hi push kr dega as i said array can tak any datatype,

//console.log(marvel) //here dc treat as single element in marvel array
// console.log(marvel[3])
// console.log(marvel[3][1])

// const allHeros = marvel.concat(dc)
// console.log(marvel)
// console.log(allHeros)


// const allNewHeros = [...marvel, ...dc]
// console.log(allNewHeros) //do same thing as concat but is more preferable as can con concat more than 2 element.

const another_array = [1,2,3,[3,4,[4,3]]]
const real_another_array = another_array.flat(Infinity) //yaha array me bhi arrays pth sun value print krne ke liye flat use krte hai
console.log(real_another_array)


console.log(Array.isArray("ali"))
console.log(Array.from("ali")) // this make array
console.log(Array.from({name: "ali"})) // will not conver as not specified that we have to convert the key or values4

let score1 = 100
let score2  = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //of also make array
