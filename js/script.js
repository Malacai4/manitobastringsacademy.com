$(".nav").load("../common/nav.html");
$(".footer").load("../common/footer.html");

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

const dropdown = document.querySelectorAll(".dropdown-btn");
const dropdownContainer = document.querySelector(".dropdown-container");
let i;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("open");
  dropdownContainer.classList.remove("open-farther");
});

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("rotate");
    dropdownContainer.classList.toggle("open-farther");
  });
}
