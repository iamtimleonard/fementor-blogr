const navBar = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLists = document.querySelectorAll(".nav__list");
const navTitles = document.querySelectorAll(".nav__title");
const navArrows = document.querySelectorAll(".nav__arrow");
const editorImg = document.getElementById("editor-img");
const laptopImg = document.getElementById("laptop-img");

if (window.innerWidth > 1000) {
  navArrows.forEach((arrow) => (arrow.src = "./images/icon-arrow-light.svg"));
  editorImg.src = "./images/illustration-editor-desktop.svg";
  laptopImg.src = "./images/illustration-laptop-desktop.svg";
}

const hideAllNavLists = () => {
  navLists.forEach((list) => list.classList.remove("nav--visible"));
};

navToggle.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.contains("nav--visible")
    ? (hamburger.src = "./images/icon-close.svg")
    : (hamburger.src = "./images/icon-hamburger.svg");
  navMenu.classList.toggle("nav--visible");
  hideAllNavLists();
});

for (let navTitle of navTitles) {
  navTitle.addEventListener("click", (e) => {
    if (navTitle.nextElementSibling.classList.contains("nav--visible")) {
      navTitle.nextElementSibling.classList.remove("nav--visible");
    } else {
      hideAllNavLists();
      navTitle.nextElementSibling.classList.add("nav--visible");
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    navMenu.classList.remove("nav--visible");
    hamburger.src = "images/icon-hamburger.svg";
    navArrows.forEach((arrow) => (arrow.src = "./images/icon-arrow-light.svg"));
    editorImg.src = "./images/illustration-editor-desktop.svg";
    laptopImg.src = "./images/illustration-laptop-desktop.svg";
  } else {
    navArrows.forEach((arrow) => (arrow.src = "./images/icon-arrow-dark.svg"));
    editorImg.src = "./images/illustration-editor-mobile.svg";
    laptopImg.src = "./images/illustration-laptop-mobile.svg";
  }
});
const handleScroll = () => {
  if (document.documentElement.scrollTop > 400) {
    navBar.classList.add("nav--scrolled");
  } else {
    navBar.classList.remove("nav--scrolled");
  }
};

document.addEventListener("scroll", handleScroll);
