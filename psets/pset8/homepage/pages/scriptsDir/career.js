var circle = document.querySelector(".circle");

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
});
