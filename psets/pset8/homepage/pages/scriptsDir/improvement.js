let prev = document.getElementsByClassName("carousel-control-prev-icon");
let next = document.getElementsByClassName("carousel-control-next-icon");

let prevIcon = prev[0];
prevIcon.style.height = "80px";
prevIcon.style.borderRadius = "25%";

let nextIcon = next[0];
nextIcon.style.height = "80px";
nextIcon.style.borderRadius = "25%";

prevIcon.addEventListener("mouseover", function() {
    prevIcon.style.transition = "background-color 0.5s";
    prevIcon.style.backgroundColor = "red";
});

prevIcon.addEventListener("mouseout", function() {
    prevIcon.style.transition = "background-color 0.75s";
    prevIcon.style.backgroundColor = "";
});

nextIcon.addEventListener("mouseover", function() {
    nextIcon.style.transition = "background-color 0.5s";
    nextIcon.style.backgroundColor = "green";
});

nextIcon.addEventListener("mouseout", function() {
    nextIcon.style.transition = "background-color 0.75s";
    nextIcon.style.backgroundColor = "";
});
