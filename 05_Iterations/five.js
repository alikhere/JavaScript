const myNums = [1,2,3,4,5,6]

let newNums = myNums.map( (num) => num + 10 )
console.log(newNums);

newNums = myNums.map( (num) => num *10 ).map( (num) => num + 1 ) //first map me myNums*10 krke return krega phir each return element ko map2 plus 1 krke return kr dega//
console.log(newNums);

newNums = myNums
.map( (num) => num *10 )
.map( (num) => num + 1 )
.filter( (num) => num >=30) //kitna bhi chaining kr sakte hai
console.log(newNums);


