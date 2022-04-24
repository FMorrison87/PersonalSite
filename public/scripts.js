var mobileMenu = document.querySelector("#menu-full");
var hamburger = document.querySelector("#hamburger");
var hamburgerSpanTop = document.querySelector("#hamburger-span-top");
var hamburgerSpanMiddle = document.querySelector("#hamburger-span-middle");
var hamburgerSpanBottom = document.querySelector("#hamburger-span-bottom");

function toggleMenu() {
  if (mobileMenu.classList.contains("max-h-zero")) {
    mobileMenu.classList.remove("max-h-zero");
    mobileMenu.classList.add("max-h-mobile");
  } else {
    mobileMenu.classList.remove("max-h-mobile");
    mobileMenu.classList.add("max-h-zero");
  }
}

function animateHamburger() {
  if (hamburger.classList.contains("menuClosed")) {
    hamburger.classList.remove("menuClosed");
    hamburgerSpanTop.classList.add("hamburger-top-rotate");
    hamburgerSpanBottom.classList.add("hamburger-bottom-rotate");
    hamburgerSpanMiddle.classList.add("opacity-0");
  } else {
    hamburger.classList.add("menuClosed");
    hamburgerSpanTop.classList.remove("hamburger-top-rotate");
    hamburgerSpanBottom.classList.remove("hamburger-bottom-rotate");
    hamburgerSpanMiddle.classList.remove("opacity-0");
  }
}

document.querySelector("body").addEventListener("click", function () {
  if (
    event.target != hamburger &&
    event.target != hamburgerSpanTop &&
    event.target != hamburgerSpanMiddle &&
    event.target != hamburgerSpanBottom
  ) {
    mobileMenu.classList.remove("max-h-mobile");
    mobileMenu.classList.add("max-h-zero");

    hamburger.classList.add("menuClosed");
    hamburgerSpanTop.classList.remove("hamburger-top-rotate");
    hamburgerSpanBottom.classList.remove("hamburger-bottom-rotate");
    hamburgerSpanMiddle.classList.remove("opacity-0");
  }
});
hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", animateHamburger);

//Modal for portfolio section

var buttonNodes = document.querySelectorAll(".modal-button");
var button = Array.from(buttonNodes);

button.forEach((button) => {
  button.addEventListener("click", toggleModal);
});

var overlayNodes = document.querySelectorAll(".modal-overlay");
var overlay = Array.from(overlayNodes);
overlay.forEach((overlay) => {
  overlay.addEventListener("click", toggleModal);
});

var modalCloseNodes = document.querySelectorAll(".modal-x");
var modalClose = Array.from(modalCloseNodes);
modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", toggleModal);
});

function toggleModal() {
  if (
    this.classList.contains("simos-card") ||
    this.classList.contains("simos-overlay") ||
    this.classList.contains("simos-x")
  ) {
    var modal = document.querySelector(".simos-modal");
  } else if (
    this.classList.contains("areg-card") ||
    this.classList.contains("areg-overlay") ||
    this.classList.contains("areg-x")
  ) {
    var modal = document.querySelector(".areg-modal");
  } else if (
    this.classList.contains("bikereg-card") ||
    this.classList.contains("bikereg-overlay") ||
    this.classList.contains("bikereg-x")
  ) {
    var modal = document.querySelector(".bikereg-modal");
  }
  modal.classList.toggle("opacity-0");
  modal.classList.toggle("pointer-events-none");
  console.log(this);
}
