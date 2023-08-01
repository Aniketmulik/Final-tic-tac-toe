const Game=require("./Game");

let gameOne=Game.newGame("Aniket","Hritik");
let gameTwo=Game.newGame("Ajay","rohan");

console.log("***************************Board one***********************************")
console.log(gameOne.play(0))
console.log(gameOne.play(3))
console.log(gameOne.play(1))
console.log(gameOne.play(5))
console.log(gameOne.play(2))
console.log(gameOne.play(4))

console.log("***************************Board Two**********************************")
console.log(gameTwo.play(0))
console.log(gameTwo.play(3))
console.log(gameTwo.play(4))
console.log(gameTwo.play(2))
console.log(gameTwo.play(8))
console.log(gameTwo.play(7))
