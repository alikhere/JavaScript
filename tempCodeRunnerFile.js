// const tinderUser = {} // M1 to declear obj.==non singleton obj
// const tinderUser = new Object() // M2 obj.way do same hi hai== singleton obj

const tinderUser = {}

tinderUser.id = "ali123"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "alik@gmail.com",
    fullname: { //obj.ke ander bhi kitna bhi obj declear kr sakte hai
        userfullname: {
            firstname: "ali",
            lastname: "khurshid"

        }
    }
}

console.log(regularUser.fullname)


