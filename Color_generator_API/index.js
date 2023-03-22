const selectColor = document.getElementById("select-color")
const repr = document.getElementById("repre")
const submitColor = document.getElementById("submit-color") 

// fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=7")
fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6")
    .then( resp => resp.json())
    .then( data => {
        let html = ""
        for(let colorA of data.colors){
            html += `
            <option value = "${colorA.name.closest_named_hex}">${colorA.name.value}</option>
            `
        }
        selectColor.innerHTML = html
        
    })

function handleSubmit(event) {
    event.preventDefault();
    let selectedOption = document.getAnimations("select-color")
    repr.style.backgroundColor = selectColor.value
}

submitColor.addEventListener("click", handleSubmit)

fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5")
    .then( response => response.json())
    .then( data => {
        let getHtml = ""
        for (let i of data.colors){
            getHtml += `
            <div class = "hex-c">${i.name.closest_named_hex}</div>
            `
        }
        document.getElementById("hex").innerHTML = getHtml
    })