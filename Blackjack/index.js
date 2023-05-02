
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Rodriguez",
    chips: 1000
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandom() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true

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
        player.chips -= 5
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        player.chips += 50
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        player.chips -= 20
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    // console.log(message)    
}

function newCard() {
    // console.log("Drawing a new card from the deck!")
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let another_card = getRandom()
        sum += another_card

        cards.push(another_card)
        renderGame()
    }
    
}