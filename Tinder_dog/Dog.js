// Create the Dog class here
import {dogs} from "/data.js"
class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
            <img id = "like-dog" src="images/badge-like.png">
            <img id = "nope-dog" src="images/badge-nope.png">
            <div class = "dog-desc">
                <h2>${name}, ${age}</h2>
                <p class = "tiny-text">${bio}</p>
            </div>
        `
    }
}