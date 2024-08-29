const filterActive = document.querySelector(".filter__hidden");
const filter = document.querySelector(".filter__btn");
const filterClose = document.querySelector(".filter__btn_r");

function toggleFilter() {
  filterActive.classList.toggle("hidden__menu");
}
filter.addEventListener("click", toggleFilter);
filterClose.addEventListener("click", toggleFilter);