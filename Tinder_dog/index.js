// Remember to import the data and Dog class!
import {dogs} from "/data.js"
import {Dog} from "/Dogs.js"

function render() {
    document.getElementById("reel-page").innerHTML = getDogHtml()
}