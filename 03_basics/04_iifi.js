// Immmediately Invoked Fuction Expression (IIFE)// want to immediate execute fun

(function chai() { //named iffi
    console.log(`DB connected`) //what is iife--- jo fun immediate execute ho aur globale scope ke pollution se bachane ke liyekrte hai aur fun () ke andar fun hona vahiye aur khatamhote hi () for exxcution
})(); //here  ; necessary

( () => { //unnamed iifi
    console.log("DB connected two")
} )();

( (name) => { //unnamed iifi with parameter
    console.log(`DB connected two ${name}`)
} )("ali");