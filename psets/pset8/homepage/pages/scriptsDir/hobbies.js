var volleyballCard = document.getElementById("volleyball-card");
var chessCard = document.getElementById("chess-card");
var cubeCard = document.getElementById("cube-card");
var body = document.getElementsByTagName("body")[0];

// volleyball animation
volleyballCard.addEventListener("mouseover", function() {
    var volleyballImg = document.getElementById("volleyball-img");
    volleyballImg.style.opacity = 1;
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(\"hobbies_images/volleyball-bg.jpeg\")";
});

volleyballCard.addEventListener("mouseout", function() {
    var volleyballImg = document.getElementById("volleyball-img");
    volleyballImg.style.opacity = 0;
    body.style.backgroundImage = "";
});

// chess
chessCard.addEventListener("mouseover", function() {
    var chessImg = document.getElementById("chess-img");
    chessImg.style.opacity = 1;
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(\"hobbies_images/chess-bg.jpeg\")";
});

chessCard.addEventListener("mouseout", function() {
    var chessImg = document.getElementById("chess-img");
    chessImg.style.opacity = 0;
    body.style.backgroundImage = "";
});

cubeCard.addEventListener("mouseover", function() {
    var cubeImg = document.getElementById("cube-img");
    cubeImg.style.opacity = 1;
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(\"hobbies_images/rubiks-cube-bg.jpeg\")";
});

cubeCard.addEventListener("mouseout", function() {
    var cubeImg = document.getElementById("cube-img");
    cubeImg.style.opacity = 0;
    body.style.backgroundImage = "";
});
