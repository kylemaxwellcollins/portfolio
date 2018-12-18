(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

AOS.init({
  disable: 'mobile'

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksSUFBSixDQUFTO0FBQ1AsV0FBUzs7QUFERixDQUFUOztBQU9BO0FBQ0EsT0FBTyxRQUFQLEdBQWtCLFlBQVk7QUFBRTtBQUFVLENBQTFDOztBQUVBO0FBQ0EsSUFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFiOztBQUVBO0FBQ0EsSUFBSSxTQUFTLE9BQU8sU0FBcEI7O0FBRUE7QUFDQSxTQUFTLE1BQVQsR0FBa0I7QUFDaEIsTUFBSSxPQUFPLFdBQVAsSUFBc0IsTUFBMUIsRUFBa0M7QUFDaEMsV0FBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIkFPUy5pbml0KHtcbiAgZGlzYWJsZTogJ21vYmlsZSdcblxufVxuKTtcblxuXG4vLyBXaGVuIHRoZSB1c2VyIHNjcm9sbHMgdGhlIHBhZ2UsIGV4ZWN1dGUgbXlGdW5jdGlvblxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkgeyBmaXhOYXYoKSB9O1xuXG4vLyBHZXQgdGhlIG5hdmJhclxubGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuXG4vLyBHZXQgdGhlIG9mZnNldCBwb3NpdGlvbiBvZiB0aGUgbmF2YmFyXG5sZXQgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDtcblxuLy8gQWRkIHRoZSBzdGlja3kgY2xhc3MgdG8gdGhlIG5hdmJhciB3aGVuIHlvdSByZWFjaCBpdHMgc2Nyb2xsIHBvc2l0aW9uLiBSZW1vdmUgXCJzdGlja3lcIiB3aGVuIHlvdSBsZWF2ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uXG5mdW5jdGlvbiBmaXhOYXYoKSB7XG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJmaXhOYXZcIilcbiAgfSBlbHNlIHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcImZpeE5hdlwiKTtcbiAgfVxufSBcblxuXG4iXX0=
