// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let fighters = ["some", "info", "ess", "mass", "system", "to", "use", "maybe", "later"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let imj1 = Math.floor(Math.random() * fighters.length)
    let imj2 = Math.floor(Math.random() * fighters.length)
    
    stageEl.textContent = fighters[imj1] + " VS " + fighters[imj2]
})
