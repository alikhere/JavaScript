// Immmediately Invoked Fuction Expression (IIFE)// want to immediate execute fun

(function chai() {
    console.log(`DB connected`) //what is iife--- jo fun immediate execute ho aur globale scope ke pollution se bachane ke liyekrte hai
})()

( () => {
    console.log("DB connected two")
})()