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


likeButton.addEventListener("click", function(){
    likeDog.style.display = "inline"
    nopeDog.style.display = "none"
})

hateButton.addEventListener("click", clickHate)
likeButton.addEventListener("click", clickLike)

function clickHate(){
    nopeDog.style.display = "inline"
    likeDog.style.display = "none"
    currentDog.setDogCondition(true)
    getNewDog()
}

function clickLike(){
    likeDog.style.display = "inline"
    nopeDog.style.display = "none"
    currentDog.setDogCondition(true)
    getNewDog()
}