

let sum = 0
let cards = []

let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

let cardEl = document.getElementById("cards-el")

let player = {
    name : "KieKie",
    chip : 145
    
}

let playEl = document.getElementById("play-el")
playEl.textContent = player.name + " : ฿ " + player.chip 

// random card function
function getRandomCard() {
    let RandNum =  Math.floor(Math.random() * 13) + 1
    if (RandNum > 10) {
        return 10
    }
    else if (RandNum === 1) {
        return 11
    }
    else {
        return RandNum
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] // array
    sum = cards[0] + cards[1]

    renderGame()
}

function renderGame() {

    // render card only first and second
    cardEl.textContent = "Cards : "

    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    // render all card we have
    sumEl.textContent = "Sum :  "+sum

    if (sum < 21) {
        message = "Do you draw a new card???"
        isAlive = true
    } else if (sum === 21) {
        message = "You're got Backjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
        let card = getRandomCard() //random number
        cards.push(card)
        sum += card
        renderGame()
    }

}


