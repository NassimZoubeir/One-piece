const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

navbarBurger.addEventListener('click', () => {
  navbarBurger.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});
