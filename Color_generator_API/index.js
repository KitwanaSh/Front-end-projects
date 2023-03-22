const selectColor = document.getElementById("select-color")
const repr = document.getElementById("repre")
const submitColor = document.getElementById("submit-color") 

fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=7")
    .then( resp => resp.json())
    .then( data => {
        let colorsArray = data.colors
        let html = ""
        for(let colorA of colorsArray){
            // console.log(colorA.name)
            html += `
            <option value = "${colorA.name.closest_named_hex}">${colorA.name.value}</option>
            `
        }
        selectColor.innerHTML = html
        
    })

// let sol = document.getElementById("sol")

// function getText() {
//     Object.values(selectColor.options).
//     forEach(function (option) {
//         console.log(option.value)
//         sol.innerHTML = option.value
//     })
// }

function handleSubmit(event) {
    event.preventDefault();
    let selectedOption = document.getAnimations("select-color")
    repr.style.backgroundColor = selectColor.value
    // sol.innerText = selectColor.value
}

submitColor.addEventListener("click", handleSubmit)

fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5")
    .then( response => response.json())
    .then( data => {
        let getHtml = ""
        for (let i of data.colors){
            console.log(i.name.closest_named_hex)
            getHtml += `
            <div class = "hex-c">${i.name.closest_named_hex}</div>
            `
        }
        document.getElementById("hex").innerHTML = getHtml
    })