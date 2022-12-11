var volleyballCard = document.getElementById("volleyball-card");
var chessCard = document.getElementById("chess-card");
var cubeCard = document.getElementById("cube-card");

// volleyball animation
volleyballCard.addEventListener("mouseover", function() {
    var volleyballImg = document.getElementById("volleyball-img");
    volleyballImg.style.opacity = 1;
});

volleyballCard.addEventListener("mouseout", function() {
    var volleyballImg = document.getElementById("volleyball-img");
    volleyballImg.style.opacity = 0;
});

// chess
chessCard.addEventListener("mouseover", function() {
    var chessImg = document.getElementById("chess-img");
    chessImg.style.opacity = 1;
});

chessCard.addEventListener("mouseout", function() {
    var chessImg = document.getElementById("chess-img");
    chessImg.style.opacity = 0;
});

cubeCard.addEventListener("mouseover", function() {
    var cubeImg = document.getElementById("cube-img");
    cubeImg.style.opacity = 1;
});

cubeCard.addEventListener("mouseout", function() {
    var cubeImg = document.getElementById("cube-img");
    cubeImg.style.opacity = 0;
});
