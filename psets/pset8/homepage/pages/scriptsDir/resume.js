let entryInformation = document.querySelectorAll(".entry-content");

for (var i = 0; i < entryInformation.length; i = i + 1) {
    entryInformation[i].addEventListener("mouseover", function() {
        // glide the title from the middle to the top
        let entryTitle = this.querySelector("h3");
        entryTitle.style.transition = "top 0.5s";
        entryTitle.style.top = "10%";
        // make the information appear
        let entryParagraph = this.querySelector("p");
        entryParagraph.style.transition = "opacity 3s"; // Slowed down to sync with title movement
        entryParagraph.style.opacity = "1";
    });
    entryInformation[i].addEventListener("mouseout", function() {
        // glide the title from the top to the middle
        let entryTitle = this.querySelector("h3");
        entryTitle.style.transition = "top 3s";
        entryTitle.style.top = "50%";
        // make the information disappear
        let entryParagraph = this.querySelector("p");
        entryParagraph.style.transition = "opacity 0.5s"; // Disappear faster to sync with title movement
        entryParagraph.style.opacity = "0";
    });
}

