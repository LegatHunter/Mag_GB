const menuActive = document.querySelector('.menu__burger');
const burger = document.querySelector('.menu');
const menuClose = document.querySelector('.x');
function toggleMenu() {
    menuActive.classList.toggle('hidden__menu');
}
burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);