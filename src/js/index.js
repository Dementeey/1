/* Variables */

const burger    = document.querySelector('.burger-wrap');
const closeMenu = document.querySelector('.close-menu');
const menu      = document.querySelector('.menu');

/* open/close menu logic */

burger.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.remove('is-closed');
})

closeMenu.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('is-closed');
})

closeMenu.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('is-closed');
})

window.addEventListener('keydown', function (e) {
  const keyCode = event.keyCode || event.which;
	if (keyCode === 27) {
    event.preventDefault();
    menu.classList.add('is-closed');
	}
})
/*------------------------------- end -------------------------------*/
