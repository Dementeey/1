/* Variables */

const burger    = document.querySelector('.burger-wrap');
const closeMenu = document.querySelector('.close-menu');
const menu      = document.querySelector('.menu');

burger.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.remove('is-closed');
})
closeMenu.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('is-closed');
})
