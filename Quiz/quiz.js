const data = [
    {
        id: 1,
        question: "What is a computer in breif ?",
        answers: [
            {answer: "An electronic device", isCorrect: true},
            {answer: "A telephone", isCorrect: false},
            {answer: "something that calculate numbers", isCorrect: false},
            {answer: "A screen with lights", isCorrect: false},
        ]
    },
    {
        id: 2,
        question: "What is 1 + 3 * 50 / 2 ?",
        answers: [
            {answer: "200", isCorrect: false},
            {answer: "100", isCorrect: false},
            {answer: "150", isCorrect: false},
            {answer: "75", isCorrect: true},
        ]
    },
    {
        id: 3,
        question: "What is the most population type in Africa ?",
        answers: [
            {answer: "Bantu", isCorrect: true},
            {answer: "Nilotic", isCorrect: false},
            {answer: "Nzanga", isCorrect: false},
            {answer: "Pigme", isCorrect: false},
        ]
    },
    {
        id: 4,
        question: "How many plannets scientist new before years 2000s ?",
        answers: [
            {answer: "6", isCorrect: false},
            {answer: "3", isCorrect: false},
            {answer: "9", isCorrect: true},
            {answer: "27", isCorrect: false},
        ]
    }
]

const celQuestion = document.querySelector(".question")
const celAnswers = document.querySelector(".answers")
const celSubmit = document.querySelector(".submit-btn")
const celReplay = document.querySelector(".replay")
const resultShow = document.querySelector(".results")
const gameShow = document.querySelector(".game")

let nIndex = 0
let correctAns = 0
let wrongAns = 0
let totalScore = 0
let selectedAnswer

const replayGame = () => {
    nIndex = 0
    correctAns = 0
    wrongAns = 0
    totalScore = 0
    displQuestion(nIndex)
}

celReplay.addEventListener("click", () => {
    resultShow.style.display = "none"
    gameShow.style.display = "block"
    replayGame()
})
const displResult = () => {
    resultShow.style.display = "block"
    gameShow.style.display = "none"

    resultShow.querySelector(".correct").textContent = `Correct answers: ${correctAns}`
    resultShow.querySelector(".wrong").textContent = `Wrong answers: ${wrongAns}`
    resultShow.querySelector(".score").textContent = `Score: ${(correctAns - wrongAns) * 10}`
}

const displQuestion = (nQuestion) => {
    if (nIndex === data.length) return displResult()
    selectedAnswer = null
    celQuestion.textContent = data[nQuestion].question
    celAnswers.innerHTML = data[nQuestion].answers.map((value, index) => 
        `<div class="answer">
            <input name = "answers" type="radio" id = "${index}" value = "${value.isCorrect}">
            <label for="${index}">${value.answer}</label>
        </div>`
    ).join("")

    selectAns()
}



const selectAns = () => {
    celAnswers.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value
        })
    })
}

const submitAnswer = () => {
        celSubmit.addEventListener("click", () => {
            if (selectedAnswer !== null) {
                selectedAnswer === "true" ? correctAns++ : wrongAns++
                nIndex++
                displQuestion(nIndex)
            } else alert("Select an answer!")
    })
}


displQuestion(nIndex)
submitAnswer()