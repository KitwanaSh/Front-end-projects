// Remember to import the data and Dog class!
import {dogs} from "/data.js"
import Dog from "/Dog.js"

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])


render()

function render() {
    document.getElementById("reel-page").innerHTML = currentDog.getDogsDesc()
}

function getNewDog() {
    currentDogIndex += 1
    currentDog = new Dog(dogs[currentDogIndex])
    render()
    
}

const likeButton = document.getElementById("l-button")
const hateButton = document.getElementById("x-button")
const likeDog = document.getElementById("like-dog")
const nopeDog = document.getElementById("nope-dog")


hateButton.addEventListener("click", clickHate)
likeButton.addEventListener("click", clickLike)

function clickHate(){
    nopeDog.style.display = "inline"
    currentDog.setDogCondition(false)
    setTimeout( () => {getNewDog()}, 3000)
}

function clickLike(){
    likeDog.style.display = "inline"
    currentDog.setDogCondition(true)
    setTimeout( () => {getNewDog()}, 3000)
}