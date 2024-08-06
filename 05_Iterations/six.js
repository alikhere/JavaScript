// const arr = [1,2,3,4]

// let myTotal = arr.reduce(function (accumulator, currVal) { //string me acc me hum initial val denge wo aajaiga aur currval array se lega phir plus krke acc me daal dega phir nx time acc + currval krega untill arry ends
//     console.log("acc: ", accumulator , "currval: ",currVal)
//     return accumulator + currVal
// }, 0)

// console.log(myTotal)



// const initalVal = 2;
// myTotal = arr.reduce( (acc, currVal) => acc + currVal, initalVal)

// console.log(myTotal)s




const shopping = [
    {
        item: "books",
        price: 399
    },
    {
        item: "tshirt",
        price: 299
    },
    {
        item: "eyeglass",
        price: 899
    }
]
const tax = 20;
const totalToPay = shopping.reduce( (acc, item) => acc + item.price, tax)

console.log(totalToPay)