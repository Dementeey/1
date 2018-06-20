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

/* page nav */

const arrayNavItem = document.querySelectorAll('.page-nav__item');
const pageNavItemText = document.querySelectorAll('.page-nav__item-text');
const arrTextUrl = {
  url: {
    1: /\#card-1$/,
    2: /\#card-2$/,
    3: /\#card-3$/,
    4: /\#card-4$/,
    5: /\#card-5$/
  },
  text: {
    1: 'Our place',
    2: 'Sandwiches',
    3: 'Salads',
    4: 'Pizza',
    5: 'Pancake'
  }
}

const url2   = /\#card-2$/;
const index2 = 1;

const testFunc = (index, url,text) => {
  setTimeout( function () {
    if ( window.location.href.match(url)) {
      for (let i = 0; i < arrayNavItem.length; i += 1) {
        arrayNavItem[i].classList.remove('page-nav__item--active');
      }
      for (let i = 0; i < pageNavItemText.length; i += 1) {
        pageNavItemText[i].innerHTML = '';
      }
      pageNavItemText[index].innerHTML = text;
      arrayNavItem[index].classList.add('page-nav__item--active');
    }
  }, 200)
}

testFunc(0, arrTextUrl.url[1], arrTextUrl.text[1]);
testFunc(1, arrTextUrl.url[2], arrTextUrl.text[2]);
testFunc(2, arrTextUrl.url[3], arrTextUrl.text[3]);
testFunc(3, arrTextUrl.url[4], arrTextUrl.text[4]);
testFunc(4, arrTextUrl.url[5], arrTextUrl.text[5]);

arrayNavItem[0].addEventListener('click', function() {
  testFunc(0, arrTextUrl.url[1], arrTextUrl.text[1]);
});
arrayNavItem[1].addEventListener('click', function() {
  testFunc(1, arrTextUrl.url[2], arrTextUrl.text[2]);
});
arrayNavItem[2].addEventListener('click', function() {
  testFunc(2, arrTextUrl.url[3], arrTextUrl.text[3]);
});
arrayNavItem[3].addEventListener('click', function() {
  testFunc(3, arrTextUrl.url[4], arrTextUrl.text[4]);
});
arrayNavItem[4].addEventListener('click', function() {
  testFunc(4, arrTextUrl.url[5], arrTextUrl.text[5]);
});
//--------------------------------------------------------------------


/*------------------------------- end -------------------------------*/

// /* low scroll */


/*------------------------------- end -------------------------------*/
