const hamburgerMenuBtn = document.querySelector(".hamburgerMenuBtn")
const menu = document.querySelector(".menu")
let menuOpen = false;
const hamburgerIcon = document.querySelector(".hamburgerIcon")

hamburgerMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    hamburgerIcon.classList.toggle('active')


})
