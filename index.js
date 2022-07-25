let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardEl = document.getElementById("card-el")

function getRandomCard() {
    return 5
}

function startGame() {
    renderGame()
}

function renderGame() {

cardEl.textContent = "Cards:" 
for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
    
    
}
sumEl.textContent = "Sum: " + sum

if (sum <= 20) {
 message = "Do you want to draw a new card?" 
  
} 
else if (sum === 21) {
    message ="Blackjack!"
    hasBlackJack = true
}
else {
    message ="You're out of the game!"
    isAlive = false 
}
 messageEl.textContent = message 
}


function newCard() {

    let thirdCard = getRandomCard()
    sum  += thirdCard
    cards.push(thirdCard)
    console.log(cards);
    renderGame()

}

let randomNumber = Math.random()
console.log(randomNumber);


// let p = 5
// let o = 6

// function add2Number() {
//     let add2 = p + 0
//     return add2
// }
// add2Number()
//  let add2 = add2Number()
//  let q = add2 * 5

// //class work
// let age = 21
// if (age < 21) {
//     console.log("You can not enter the club")
// } 
// else {
//     console.log("Welcome")
// }

// let age1 =100
// if (age1 < 100) {
//    console.log("Not eligible") 
// }
// else if (age1 === 100) {
//     console.log("Here is your birthday card from the king!")
// } 
// else {
//     console.log("Not eligible, you have already gotten one")
// }

//Arrays

// let myDetails = [
//     "Elefue Chima Rosemary" , 24, true
// ]

// console.log(myDetails)
// myDetails.push("Tall")
// console.log(myDetails)
// myDetails.pop(3)
// console.log(myDetails)

//Counting in javascript

// for (let i = 10; i < 101; i+=10) {
//     console.log(i);
    
// }
// let numbers = [6,8,5]
// for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
    
// }
// let sentence = ["Hello", "my", "name", "is", "Chima"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i = 0; i< sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + ""
// }