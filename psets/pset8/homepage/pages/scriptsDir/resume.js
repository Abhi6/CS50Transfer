let entryInformation = document.querySelectorAll(".entry-content");

for (var i = 0; i < entryInformation.length; i = i + 1) {
    entryInformation[i].addEventListener("mouseover", function() {
        let entryTitle = this.querySelector("h3");
        entryTitle.style.transform = "translate(-50%, 0)";
        entryTitle.style.top = "0%";
        let entryParagraph = this.querySelector("p");
        entryParagraph.style.opacity = "1";
    });
    entryInformation[i].addEventListener("mouseout", function() {
        let entryTitle = this.querySelector("h3");
        entryTitle.style.transition = "top 4s";
        entryTitle.style.transform = "translate(-50%, -50%)";
        entryTitle.style.top = "50%";
        let entryParagraph = this.querySelector("p");
        entryParagraph.style.opacity = "0";
    });
}

