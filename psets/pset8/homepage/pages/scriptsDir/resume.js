let entryInformation = document.querySelectorAll(".entry-content");

for (var i = 0; i < entryInformation.length; i = i + 1) {
    entryInformation[i].addEventListener("mouseover", function() {
        let entryTitle = this.querySelector("h3");
        let entryParagraph = this.querySelector("p");
        let entryBtn = this.querySelector(".btn-pos");
        // glide the title from the middle to the top
        entryTitle.style.transition = "top 0.5s";
        entryTitle.style.top = "10%";
        // make the information appear
        entryParagraph.style.transition = "opacity 3s"; // Slowed down to sync with title movement
        entryParagraph.style.opacity = "1";
        // glide the button
        entryBtn.style.transition = "top 0.5s";
        entryBtn.style.top = "80%";
    });

    entryInformation[i].addEventListener("mouseout", function() {
        let entryTitle = this.querySelector("h3");
        let entryParagraph = this.querySelector("p");
        let entryBtn = this.querySelector(".btn-pos");
        // glide the title from the top to the middle
        entryTitle.style.transition = "top 1s";
        entryTitle.style.top = "50%";
        // make the information disappear
        entryParagraph.style.transition = "opacity 0.5s"; // Disappear faster to sync with title movement
        entryParagraph.style.opacity = "0";
        // glide the button
        entryBtn.style.transition = "top 1s";
        entryBtn.style.top = "65%";
    });
}
