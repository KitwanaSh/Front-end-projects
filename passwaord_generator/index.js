const char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordEl = document.getElementById("password-el")
let createPassEl = document.getElementById("createpass")
let passwordEl2 = document.getElementById("password-el2")

createPassEl.addEventListener("click", function() {
	const charLen = 7
	password = ""
	for (let i = 0; i <= charLen; i++) {
		let ran = Math.floor( Math.random() * char.length)
		password += char[ran]
	}
	passwordEl.textContent = password
})


createPassEl.addEventListener("click", function() {
	const charLen = 7
	password = ""
	for (let i = 0; i <= charLen; i++) {
		let ran = Math.floor( Math.random() * char.length)
		password += char[ran]
	}
	passwordEl2.textContent = password
})