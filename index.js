let homescore = document.getElementById("homescore-el")
let guestscore = document.getElementById("guestscore-el")
let home = 0
let guest = 0


function plusOneHome() {
  home += 1
  homescore.textContent = home
}

function plusTwoHome() {
  home += 2
  homescore.textContent = home
}

function plusThreeHome() {
  home += 3
  homescore.textContent = home
}

function plusOneGuest() {
  guest += 1
  guestscore.textContent = guest
}

function plusTwoGuest() {
  guest += 2
  guestscore.textContent = guest
}

function plusThreeGuest() {
  guest += 3
  guestscore.textContent = guest
}