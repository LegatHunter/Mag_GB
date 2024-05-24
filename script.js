const menuActive = document.querySelector(".menu__burger");
const burger = document.querySelector(".menu");
const menuClose = document.querySelector(".x");

const filterActive = document.querySelector(".filter__hidden");
const filter = document.querySelector(".filter__btn");
const filterClose = document.querySelector(".filter__btn_r");

let expanded1 = false;
let expanded2 = false;
let expanded3 = false;

function toggleMenu() {
    menuActive.classList.toggle("hidden__menu");
}
burger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

function toggleFilter() {
    filterActive.classList.toggle("hidden__menu");
}
filter.addEventListener("click", toggleFilter);
filterClose.addEventListener("click", toggleFilter);

function showCheckboxes1() {
    const checkboxes1 = document.querySelector(".chois__trending_checkboxes");
    if (!expanded1) {
        checkboxes1.style.display = "block";
        expanded1 = true;
    } else {
        checkboxes1.style.display = "none";
        expanded1 = false;
    }
}

function showCheckboxes2() {
    const checkboxes2 = document.querySelector(".chois__size_checkboxes");
    if (!expanded2) {
        checkboxes2.style.display = "block";
        expanded2 = true;
    } else {
        checkboxes2.style.display = "none";
        expanded2 = false;
    }
}

function showCheckboxes3() {
    const checkboxes3 = document.querySelector(".chois__price_checkboxes");
    if (!expanded3) {
        checkboxes3.style.display = "block";
        expanded3 = true;
    } else {
        checkboxes3.style.display = "none";
        expanded3 = false;
    }
}
