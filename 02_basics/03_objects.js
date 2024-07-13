// singleton --- construction se jab obj.banta hai toh usse singeton obj.kahte hai
//const tinderUser = new Object() // construction way to declear obj
//object literals

const mysym = Symbol("kay1")
const Jsuser = {
    name: "Ali",
    "full name": "Ali Khurshid",
    age: 22,
    location: "mysuru",
    email: "alihere.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    [mysym]: "mykey1" //sysmbok ko sq brack me hi use kiya jata hai
}

// console.log(Jsuser.email) // 1st way to access obj. its not prefable
// console.log(Jsuser["email"]) //2nd way to access obj. yaha email ko as string bhejna hoga
// //console.log(Jsuser.full name) // error coz dot lagake more than two word ko string ka access nhi kr sakte  aur "" bhi nhi allow hai so...
// console.log(Jsuser["full name"])
// console.log(Jsuser[mysym])

// Jsuser.email = "alik@chatgpt.com"
// Object.freeze(Jsuser) //now no modification in obj.
// Jsuser.age = 24
// console.log(Jsuser)

Jsuser.greeting = function() {
    console.log("Hello js user");
}
Jsuser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())