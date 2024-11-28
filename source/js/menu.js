const mainNav = document.querySelector(".main-nav");
const mainNavToggle = document.querySelector(".main-nav__toggle");
const mainNavClose = document.querySelector(".main-nav__close");

mainNav.classList.remove("main-nav--no-js");

mainNavToggle.addEventListener("click", function(event) {
  event.preventDefault();
  mainNav.classList.toggle("main-nav--opened");
});

mainNavClose.addEventListener("click", function(event) {
  event.preventDefault();
  mainNav.classList.remove("main-nav--opened");
})
