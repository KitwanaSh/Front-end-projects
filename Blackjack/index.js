let firstCard = getRandom()
let secondCard = getRandom()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard + 7
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandom() {
    return Math.floor( Math.random() * 13 ) + 1
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    // console.log(message)    
}

function newCard() {
    // console.log("Drawing a new card from the deck!")
    let another_card = getRandom()
    sum += another_card

    cards.push(another_card)
    renderGame()
}