const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
  header.style.transition = "0.5s";
});

let menu = document.querySelector("#menu-icon");
let navLinks = document.querySelector(".navlinks");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navLinks.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navLinks.classList.remove("open");
};
