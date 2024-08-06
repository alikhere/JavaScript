const coding = ["js", "ruby","java","python", "php"]

// const value = coding.forEach( (item) => {  //foreach doesn't return anything
//     console.log(item)
//     return item
// } )

// console.log(value)

const myNums = [1,2,3,4,5,6]
// let newNums = myNums.filter( (num) => num > 4) //its return value which satisfy condition
// console.log(newNums)

// newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums)


// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Friction', public: 1981, edition: '2004' },
    { title: 'Book Two', genre: 'History', public: 1981, edition: '2002' },
    { title: 'Book Three', genre: 'Science', public: 1961, edition: '1999' },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks)
userBooks = books.filter( (bk) => bk.edition > 2000 && bk.genre === 'Friction')
console.log(userBooks)