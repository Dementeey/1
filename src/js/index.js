/* open/close menu logic */

const body        = document.querySelector('body');
const burger      = document.querySelector('.burger-wrap');
const closeMenu   = document.querySelector('.close-menu');
const menu        = document.querySelector('.menu');

const onClickOpenMenu = () => {
  menu.classList.remove('is-closed');
  body.classList.add('menu--active')
}

const onClickCloseMenu = () => {
  menu.classList.add('is-closed');
  body.classList.remove('menu--active')

  window.addEventListener('keydown', function (e) {
    const keyCode = event.keyCode || event.which;
    if (keyCode === 27) {
      event.preventDefault();
      menu.classList.add('is-closed');
      body.classList.remove('menu--active')
    }
  })
}

burger.onclick = onClickOpenMenu;
closeMenu.onclick = onClickCloseMenu;



/*------------------------------- end -------------------------------*/

