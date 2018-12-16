// When the user scrolls the page, execute myFunction
window.onscroll = function () { fixNav() };

// Get the navbar
let navbar = document.getElementById("nav");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixNav")
  } else {
    navbar.classList.remove("fixNav");
  }
} 

