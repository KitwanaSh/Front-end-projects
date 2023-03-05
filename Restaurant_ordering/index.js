import { menuArray } from './data.js'


function getMenu(){
    let menuHtml = ``

    menuArray.forEach(function(menu){
        menuHtml += `
        <div class = "menu-list">
            <span class = "imoji">${menu.emoji}</span>
            <div class = "details">
                <h2>${menu.name}</h2>
                <p>${menu.ingredients}</p>
                <p class = "price">$${menu.price}</p>
            </div>
            <img src ="images/plus_icon.png"
            class ="icon" 
            data-plus= "${menu.id}" id = "icon">
        </div>
        `
    })
    return menuHtml
    
}
function render(){
    document.getElementById('menu').innerHTML = getMenu()
}
render()
const invoices = document.getElementById("invoices")
const icon = document.getElementById("icon")

document.addEventListener("click", showChosen)

function showChosen(e) {
    if(e.target.dataset.plus){
        invoices.style.display = "inline"
        // document.getElementById('tale').innerHTML = `
        // <h3>${menuArray.name}</h3>
        // `
        let sowMenu =``
        menueArray.forEach(function(menu){
            sowMenu =`
            <h3>${menu.name}</h3>
            `
        })
        return sowMenu
    }
}
function renderOrder() {
    document.getElementById('tale') = showChosen()
}
renderOrder()
