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
            <img src ="images/plus_icon.png" class ="icon" id = "icon">
        </div>
        `
    })
    return menuHtml
    
}
function render(){
    document.getElementById('menu').innerHTML = getMenu()
}
render()