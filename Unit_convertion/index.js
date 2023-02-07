
let convButton = document.getElementById("convert-btn")
let numInput = document.getElementById("number")
let lengthEl = document.getElementById("length-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
convButton.addEventListener("click", function() {
	let TheValue = numInput.value

	lengthEl.textContent = `${TheValue} meter = ${TheValue * meterToFeet}`
})