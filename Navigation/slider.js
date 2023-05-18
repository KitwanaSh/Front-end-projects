const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".img")
const bottom = document.querySelector(".bottom")

const imgLength = images.length
let imgNumber = 1;

for (let i = 0; i < imgLength; i++) {
    const div = document.createElement("div");
    div.className = "button"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")

buttons[0].style.background = "white"

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.background = "transparent"
    })
}

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg()
        imgNumber = i + 1
        slider.style.transform = `translateX(-${i * 500}px)`
        button.style.background = "white"
    })
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${500 * imgNumber}px)`
    imgNumber++
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(imgNumber - 2) * 500}px)`
    imgNumber--
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    imgNumber = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(imgLength - 1) * 500}px)`
    imgNumber = imgLength;
}

const changeColor = () => {
    resetBg()
    buttons[imgNumber-1].style.background = "white"
}

right.addEventListener("click", ()=> {
    imgNumber < imgLength ? nextSlide() : getFirstSlide();
    changeColor()
})

left.addEventListener("click", () => {
    imgNumber > 1 ? prevSlide() : getLastSlide();
    changeColor()
})