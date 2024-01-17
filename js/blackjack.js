//1. Create two variables,firstcard and secondcard.
//set their values to a random number between 2-11

// 2.Create a variable,sum,set it to the sum of the two cards

//  let firstcard=6
//  let secondcard=9

//  let sum=firstcard+secondcard
// let hasBlackJack=false
//create a variable called isalive and assign it to true
// let isAlive= true

//  console.log(sum)

//flip its value to false in the appropriate code block


//  if(sum<=20){
//     console.log("Do you wan't to draw a new card? 🙂")
//  }else if(sum===21){
// console.log("Wohooo! You've got Blackjack! 😄")
// hasBlackJack=true
//  }else{
//     console.log("You're out of the game! 😢")
//     isAlive=false
//   }

//   console.log(isAlive)
//cash out
//   console.log(hasBlackJack)

// check if the person is old enough to enter the night club(21)
// log a suitable message to the console in both cases

// let age=22

// if less then 21 -> "you cannot enter"
//else             -> "Welcome"

// if(age < 21){
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!") 
// }


//CHAPTER -ARRAY
// let cards=[7,4]
// cards.push(6)
// let message=[
//   "Hey,how it is going?",
//   "I'm great,thank you! How about you?",
//   "All good. Been Workingon my portfolio lately."
// ]
// let newMessage="Same here!"

// message.push(newMessage)
// console.log(message)

// message.pop()
// console.log(message)

let player={
  name:"Abrar",
  chips:145
}

let cards=[] //array -ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
//1. declare a variable called message and assign its value to an empty value to an empty string
let message = ""
//2. Reassign the message variable to the string we're logging out
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")



let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $"+ player.chips

//create a function , getRandomCard(), that always return the number 5
function getRandomCard(){
  // if 1 -> return 11
  // if 11-13 -> return 10
  let rendomNumber=Math.floor(Math.random()*13)+1
  if(rendomNumber===1){
    return 11
  }else if(rendomNumber>10){
    return 10
  }else{
  return rendomNumber
  }
}


function startGame(){
  isAlive=true
  let firstcard = getRandomCard()
let secondcard = getRandomCard()
cards=[firstcard,secondcard]
sum=firstcard+secondcard
  renderGame()
}

function renderGame() {
  cardsEl.textContent="Cards: " 
  for(let i=0;i<cards.length;i++){
    cardsEl.textContent+= cards[i] +" "
  }
  sumEl.textContent="Sum: " + sum
  if (sum <= 20) {
    message = "Do you wan't to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
messageEl.textContent=message
}

function newcard(){
 if(isAlive===true && hasBlackJack===false){
  let card= getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
 }
 
   
}






