let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
countHome = 0
countGuest = 0
// Home functions
// ==============
function homeOne() {
    countHome += 1
    homeEl.textContent = countHome
}

function homeTwo() {
    countHome += 2
    homeEl.textContent = countHome
}

function homeT3h() {
    countHome += 3
    homeEl.textContent = countHome
}

// Guest function
// ==============
function guestOne() {
    countGuest += 1
    guestEl.textContent = countGuest
}

function guestTwo() {
    countGuest += 2
    guestEl.textContent = countGuest
}

function guestT3h() {
    countGuest += 3
    guestEl.textContent = countGuest
}