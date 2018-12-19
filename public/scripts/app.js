(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

AOS.init({
  disable: "mobile"
});

(function () {
  var hamburger = {
    navToggle: document.querySelector(".nav-toggle"),
    nav: document.querySelector("nav"),

    doToggle: function doToggle(e) {
      e.preventDefault();
      this.navToggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    }
  };

  hamburger.navToggle.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
})();

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  fixNav();
};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixNav");
  } else {
    navbar.classList.remove("fixNav");
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksSUFBSixDQUFTO0FBQ1AsV0FBUztBQURGLENBQVQ7O0FBSUEsQ0FBQyxZQUFXO0FBQ1YsTUFBSSxZQUFZO0FBQ2QsZUFBVyxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FERztBQUVkLFNBQUssU0FBUyxhQUFULENBQXVCLEtBQXZCLENBRlM7O0FBSWQsY0FBVSxrQkFBUyxDQUFULEVBQVk7QUFDcEIsUUFBRSxjQUFGO0FBQ0EsV0FBSyxTQUFMLENBQWUsU0FBZixDQUF5QixNQUF6QixDQUFnQyxVQUFoQztBQUNBLFdBQUssR0FBTCxDQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsVUFBMUI7QUFDRDtBQVJhLEdBQWhCOztBQVdBLFlBQVUsU0FBVixDQUFvQixnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsVUFBUyxDQUFULEVBQVk7QUFDeEQsY0FBVSxRQUFWLENBQW1CLENBQW5CO0FBQ0QsR0FGRDtBQUdELENBZkQ7O0FBaUJBO0FBQ0EsT0FBTyxRQUFQLEdBQWtCLFlBQVc7QUFDM0I7QUFDRCxDQUZEOztBQUlBO0FBQ0EsSUFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFiOztBQUVBO0FBQ0EsSUFBSSxTQUFTLE9BQU8sU0FBcEI7O0FBRUE7QUFDQSxTQUFTLE1BQVQsR0FBa0I7QUFDaEIsTUFBSSxPQUFPLFdBQVAsSUFBc0IsTUFBMUIsRUFBa0M7QUFDaEMsV0FBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIkFPUy5pbml0KHtcbiAgZGlzYWJsZTogXCJtb2JpbGVcIlxufSk7XG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIGhhbWJ1cmdlciA9IHtcbiAgICBuYXZUb2dnbGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LXRvZ2dsZVwiKSxcbiAgICBuYXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIiksXG5cbiAgICBkb1RvZ2dsZTogZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5uYXZUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBoYW1idXJnZXIubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgaGFtYnVyZ2VyLmRvVG9nZ2xlKGUpO1xuICB9KTtcbn0pKCk7XG5cbi8vIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyB0aGUgcGFnZSwgZXhlY3V0ZSBteUZ1bmN0aW9uXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgZml4TmF2KCk7XG59O1xuXG4vLyBHZXQgdGhlIG5hdmJhclxubGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuXG4vLyBHZXQgdGhlIG9mZnNldCBwb3NpdGlvbiBvZiB0aGUgbmF2YmFyXG5sZXQgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDtcblxuLy8gQWRkIHRoZSBzdGlja3kgY2xhc3MgdG8gdGhlIG5hdmJhciB3aGVuIHlvdSByZWFjaCBpdHMgc2Nyb2xsIHBvc2l0aW9uLiBSZW1vdmUgXCJzdGlja3lcIiB3aGVuIHlvdSBsZWF2ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uXG5mdW5jdGlvbiBmaXhOYXYoKSB7XG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJmaXhOYXZcIik7XG4gIH0gZWxzZSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhOYXZcIik7XG4gIH1cbn1cbiJdfQ==
