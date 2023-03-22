const selectColor = document.getElementById("select-color")

fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=7")
    .then( resp => resp.json())
    .then( data => {
        let colorsArray = data.colors
        let html = ""
        for(let colorA of colorsArray){
            console.log(colorA.name)
            html += `
            <option value = "${colorA.name.value}">${colorA.name.value}</option>
            `
        }
        selectColor.innerHTML = html
    })