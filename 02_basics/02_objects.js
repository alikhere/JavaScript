// const tinderUser = {} // M1 to declear obj.==non singleton obj
// const tinderUser = new Object() // M2 obj.way do same hi hai== singleton obj

// const tinderUser = {}

// tinderUser.id = "ali123"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "alik@gmail.com",
    fullname: { //obj.ke ander bhi kitna bhi obj declear kr sakte hai
        userfullname: {
            firstname: "ali",
            lastname: "khurshid"

        }
    }
}
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} //par ye plus nhi ho rha balki obj3 me obj 2 aur obj3 dal de rha

// const obj4 = Object.assign({},obj1, obj2)
// console.log(obj4)

// const obj5 = {...obj1, ...obj2} //this is best way to add obj
// console.log(obj5)

user = [
    {                      //its array of obj
        id: 1,
        name: "ali"
    },

    {
        id: 2,
        name: "adil"
    },

    {
        id: 3,
        name: "aman"
    }
]

// console.log(user)
// console.log(user[1])
// console.log(user[1].name)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:" hitesh"

}

//**************************************Destructuring********************************88 */

const {courseInstructor} = course //now we can direct asses courseinstructor , this is called destructuring
console.log(courseInstructor)

const {courseInstructor: cours_ins} = course //naya naam bhi de sakte hai
console.log(cours_ins)

//API obj hi return krta hai but without any name { } like this bwlow is exm.
// API1 -in jason format
//        {  
//     "name": hitesh"
//     "coursename": "js in hindi"
//     "price": "free"
// }

//API api array ke form me bhi ho sakta hai aur andar obj.
[
    {},
    {},
    {}
]

