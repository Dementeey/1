function toggleClass() {
  var burger = document.querySelector('.burger-wrap')
  var pageNav = document.querySelector('.page-nav')
  burger.classList.toggle('burger-wrap--active')
  pageNav.classList.toggle('page-nav--active')
}
