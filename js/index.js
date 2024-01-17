// document.getElementById("count-el").innerText=5 

// let firstbatch=5   let is a variable like int
// let secondbatch=7

// let count=firstbatch+secondbatch
// console.log(count)

// let myage=35
// let humanDogRatio=7
// let myDogAge=myage*humanDogRatio
// console.log(myDogAge)

//initialize  the count as 0
//listen for clicks in the increment
//increment the count variable when the button is clicked
//change the count-el in the html to reflect the new count
// function increment(){
//     console.log("The button was clicked")
// }

// increment lap function
// let lapcompleted=0

// function incrementlap(){
//     lapcompleted=lapcompleted+1
// }
// incrementlap()
// incrementlap()
// incrementlap()
// console.log(lapcompleted)





//initialize the count as 0
//listen for clicks in the increment button
//increment the count variable when the button is clicked (log it out)
//change the count-el in the html to reflect the new count
// let countel=document.getElementById("count-el")
// console.log(countel)
// let count =0

// function increment(){
//     // console.log("clicked")
//     count=count+1
//    countel.innerText=count
//     console.log(count)
// }

// // 1. create a function, save(), which logs out the count when it's called
// function save(){
//     console.log(count)
// }
// save()


// String
// let username="per"
// let message="you have three new notifications"
// let messagetouser=message+", "+username+"!"
// console.log(messagetouser)

// Ques: create two variable ,name and greeting . The name variable should store your name ,
// and the greeting should store eg "hi, my name is "
// create three variable,mygreeting, that contatenates the two strings 
// log my greeting to the console
// let namme="Per Harald Borgen"
// let greeting="Hi, my name is "

// let mygreeting=greeting+ namme
// // console.log(mygreeting)

// let points=4
// let bonuspoint="10"

// let totalPoints=points+bonuspoint

// console.log(totalPoints)



let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0

console.log(saveEl)

function increment(){
        count=count+1
       countEl.textContent=count
        // console.log(count)
    }
    function save(){
        let countStr=count+ " - "
        saveEl.textContent +=countStr
        console.log(count)
        countEl.textContent=0
        count=0
    }
    