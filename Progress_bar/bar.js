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

const circleProgress = document.querySelector(".circle-p")
const loadCircle = document.querySelector(".load-circle")

let index = 0
const fakeRun = [0, 10, 20, 40, 50, 60, 70, 80, 90, 100]
const circonference = circleProgress.getTotalLength()

const intervalCircle = setInterval(() => {
    let setCir = circonference - (fakeRun[index] / 100) * circonference
    circleProgress.style.strokeDashoffset = setCir
    loadCircle.innerHTML = Math.floor(setCir) + "%"
    index++
    if(index === fakeRun.length) {
        clearInterval(intervalCircle)
        loadCircle.innerHTML = "100%"
    }
}, 1000);