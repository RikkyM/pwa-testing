import 'regenerator-runtime' /* for async await transpile */
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import '../styles/main.css'
import '../styles/phone.css'
import '../styles/tablet.css'
import '../styles/desktop.css'
import '../scripts/routes/routes'
import '../scripts/routes/url-parser'
import './views/skip-content'
import Main from './views/main'
import swRegister from './utils/register-sw'

// const header = document.querySelector("#layar");
// var lebarLayar = window.innerWidth;
// var tinggiLayar = window.innerHeight;
// header.append("Lebar: ", lebarLayar, "px", " ", "Tinggi: ", tinggiLayar, "px");

document.addEventListener('DOMContentLoaded', () => {
  swRegister()
  Main.renderPage()
})

window.addEventListener('hashchange', () => {
  Main.renderPage()
})

const menu = document.querySelector('.container-menu-hamburger')
const list = document.querySelector('#list')
const anc = document.querySelectorAll('#list li a')
const i = document.querySelectorAll('.itm')

anc.forEach((item) => {
  const screenWidth = window.innerWidth

  if (screenWidth >= 768) {
    item.setAttribute('tabindex', 1)
  }
})

i.forEach((item) => {
  const screenWidth = window.innerWidth

  if (screenWidth >= 768) {
    item.setAttribute('tabindex', 1)
  }
})

menu.addEventListener('click', () => {
  const anc = document.querySelectorAll('#list li a')
  const i = document.querySelectorAll('.itm')
  menu.classList.toggle('open')
  list.classList.toggle('openList')
  document.body.classList.toggle('scroll')
  anc.forEach((item) => {
    i.forEach((itm) => {
      if (list.classList.contains('openList')) {
        item.setAttribute('tabindex', 1)
        itm.removeAttribute('tabindex')
      } else {
        item.removeAttribute('tabindex')
        itm.setAttribute('tabindex', 6)
      }
    })
  })
})
