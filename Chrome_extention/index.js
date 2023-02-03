let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage

	render()
}

tabBtn.addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
		localStorage.setItem("myLeads", JSON.stringify(myLeads) )
		render(myLeads)
    })

})

function render(leads) {
	let listItems = ""
	for (let i = 0; i < leads.length; i++) {
		listItems += `
			<li>
				<a target = "_blank" href = "${leads[i]}">${leads[i]}</a>
			</li>
		`
	}
	ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
	localStorage.clear()
	myLeads = []
	render(myLeads)
})


saveEl.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	inputEl.value = ""
	// Save the myLeads array to an local storage
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
})


