//= partials/form-valid-module.js
//= partials/form-validation.js
//= partials/ya.js
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log("w" + w);
console.log("h" + h);
function gcd (a, b) {
    return (b == 0) ? a : gcd (b, a%b);
}
var w = screen.width;
var h = screen.height;
var r = gcd (w, h);
console.log("Dimensions = ", w, " x ", h, "<br>");
console.log("Gcd        = ", r, "<br>");
console.log("Aspect     = ", w/r, ":", h/r);
