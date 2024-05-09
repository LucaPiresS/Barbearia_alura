var menu = document.getElementById('menu')
var logo = document.getElementById('logo')
var linha1 = document.getElementById('linha__1')
var linha2 = document.getElementById('linha__2')
var linha3 = document.getElementById('linha__3')
var nav = document.getElementById('navegacao')

menu.addEventListener('click', click__menu)

function click__menu() {
    menu.classList.toggle('toggle')
    linha1.classList.toggle('toggle__linha1')
    linha2.classList.toggle('toggle__linha2')
    linha3.classList.toggle('toggle__linha3')
    logo.classList.toggle('toggle__logo')
    nav.classList.toggle('toggle__nav')
}