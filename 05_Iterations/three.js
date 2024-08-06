const coding = ["js", "ruby","java","python", "php"]

// coding.forEach( function (item) {
//     console.log(item);
// } )




// coding.forEach( (val) => {
//     console.log(val)
// } )



// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)





// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);

// } )


const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "python",
        langFile: "py"
    },
    {
        langName: "java",
        langFile: "java"
    }
]
myCoding.forEach( (item) => {
    console.log(item.langName)
} )