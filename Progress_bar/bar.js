const progress = document.querySelector(".progress")
const loading = document.querySelector(".loading")

let i = 0
const fakeUpload = [0, 10, 20, 40, 50, 60, 70, 80, 90, 100]

const interval = setInterval(() => {
    progress.style.width = `${fakeUpload[i]}%`
    loading.innerHTML = fakeUpload[i] + "%"
    i++
    if(i == fakeUpload.length) {
        clearInterval(interval)
        loading.innerHTML = "Completed"
    }
}, 1000)

// The cicle progress goes here

const circonference = document.querySelector(".circle-p").getTotalLength()
console.log(circonference)