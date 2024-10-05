let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = '' 

let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
// let sumEl = document.querySelector("#sum-el")


function startGame(){
    renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: "+ firstCard + " " +secondCard;
    if(sum < 21){
        message = "Do you want to draw a new Card";
    }else if( sum === 21){
        message = "Wohoo You've got Black Jack";
        hasBlackJack = true;
    }else if (sum > 21){
        message = "You're out of the game";
        isAlive = false;
    }
    console.log(message)
}

function newCard(){
    let card = 7;
    sum += card ;
    renderGame();
}
