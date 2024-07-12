// const name = "ali"
// const repoCount = 8

// console.log(name + repoCount + " value"); //outdated syntax

// console.log(`Hello my name is ${name} and my repo count id ${repoCount}`); //this is mordern

// const gameName = new String('tictoktow') //we can declear string like this too its called object type4
// console.log(typeof gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf(''))

const gameName = new String('alikhur-here')

const newString = gameName.substring(0,4) //cant give -ve value -ve will considered as zero
console.log(newString)

const anotherString = gameName.slice(-5,2)
console.log(anotherString);

const newStringOne = "    ali    "
console.log(newStringOne)
console.log(newStringOne.trim()) //remove uneccessary space in output

const url = "http://alihere.com/khurshid%20here"
console.log(url.replace('%20', '-')) //replace %20 with -

console.log(url.includes('ali'))
console.log(url.includes('alii'))

console.log(gameName.split('-')); //will split on the basic of -

