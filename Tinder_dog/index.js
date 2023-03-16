// Remember to import the data and Dog class!
import {dogs} from "/data.js"
import Dog from "/Dog.js"

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

render()

function render() {
    document.getElementById("reel-page").innerHTML = currentDog.getDogsDesc()
}