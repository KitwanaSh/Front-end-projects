// Create the Dog class here
import {dogs} from "/data.js"

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    setDogCondition(bL){
        this.hasBeenLiked = bL
        this.hasBeenSwiped = true
    }
    getDogsDesc() {
        const { name, avatar, age, bio } = this
        return `
            <img id = "like-dog" src="images/badge-like.png">
            <img id = "nope-dog" src="images/badge-nope.png">
            <div class = "dog-desc">
                <h2>${name}, ${age}</h2>
                <p class = "tiny-text">${bio}</p>
            </div>
            <img id = "dog-image" src="${avatar}">
        `
    }
}

export default Dog
