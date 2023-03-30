
let convButton = document.getElementById("convert-btn")
let numInput = document.getElementById("number")
let lengthEl = document.getElementById("length-el")
let litterVal = document.getElementById("litter-val")
let poundVal = document.getElementById("pound-val")

const meterToFeet = 3.281
const metterToGallon = 0.615
const literToGallon = 0.264
const kiloToPound = 2.204
convButton.addEventListener("click", function() {
	let TheValue = numInput.value

	// Feet converstion =================================================
	lengthEl.textContent = `${TheValue} meters = ${TheValue * meterToFeet} feets`

	// Gallons conversion ===============================================
	litterVal.textContent = `${TheValue} meters = ${TheValue * metterToGallon} gallons | 
		${TheValue * metterToGallon} gallons = ${Math.floor((TheValue * metterToGallon) / literToGallon)} litters`

	// Pounds conversion ================================================
	poundVal.textContent = `${TheValue} meters = ${TheValue * 0.5} pounds | 
		${TheValue * 0.5} pounds = ${Math.floor((TheValue * 0.5) / kiloToPound)} killos`
})