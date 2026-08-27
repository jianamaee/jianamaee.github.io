const readMoreBtn = document.getElementById("read-more-btn");
const aboutMore = document.getElementById("about-more");

readMoreBtn.addEventListener("click", function () {

    aboutMore.classList.toggle("show");

    if (aboutMore.classList.contains("show")) {
        readMoreBtn.textContent = "Read Less";
    } else {
        readMoreBtn.textContent = "Read More";
    }

});