/* open/close menu logic */
const burger      = document.querySelector('.burger-wrap');
const closeMenu   = document.querySelector('.close-menu');
const menu        = document.querySelector('.menu');

const onClickOpenMenu = () => {
  menu.classList.remove('is-closed');

}

const onClickCloseMenu = () => {
  menu.classList.add('is-closed');

  window.addEventListener('keydown', function (e) {
    const keyCode = event.keyCode || event.which;
    if (keyCode === 27) {
      event.preventDefault();
      menu.classList.add('is-closed');
    }
  })
}

burger.onclick = onClickOpenMenu;
closeMenu.onclick = onClickCloseMenu;

/*------------------------------- end -------------------------------*/

