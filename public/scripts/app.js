(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsT0FBTyxRQUFQLEdBQWtCLFlBQVk7QUFBRTtBQUFVLENBQTFDOztBQUVBO0FBQ0EsSUFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFiOztBQUVBO0FBQ0EsSUFBSSxTQUFTLE9BQU8sU0FBcEI7O0FBRUE7QUFDQSxTQUFTLE1BQVQsR0FBa0I7QUFDaEIsTUFBSSxPQUFPLFdBQVAsSUFBc0IsTUFBMUIsRUFBa0M7QUFDaEMsV0FBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyB0aGUgcGFnZSwgZXhlY3V0ZSBteUZ1bmN0aW9uXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7IGZpeE5hdigpIH07XG5cbi8vIEdldCB0aGUgbmF2YmFyXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5cbi8vIEdldCB0aGUgb2Zmc2V0IHBvc2l0aW9uIG9mIHRoZSBuYXZiYXJcbmxldCBzdGlja3kgPSBuYXZiYXIub2Zmc2V0VG9wO1xuXG4vLyBBZGQgdGhlIHN0aWNreSBjbGFzcyB0byB0aGUgbmF2YmFyIHdoZW4geW91IHJlYWNoIGl0cyBzY3JvbGwgcG9zaXRpb24uIFJlbW92ZSBcInN0aWNreVwiIHdoZW4geW91IGxlYXZlIHRoZSBzY3JvbGwgcG9zaXRpb25cbmZ1bmN0aW9uIGZpeE5hdigpIHtcbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3kpIHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcImZpeE5hdlwiKVxuICB9IGVsc2Uge1xuICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiZml4TmF2XCIpO1xuICB9XG59IFxuXG4iXX0=
