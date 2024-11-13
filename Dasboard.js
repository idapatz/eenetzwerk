document.addEventListener("DOMContentLoaded", function() {
    const infoBoxes = document.querySelectorAll(".info-box");

    function handleScroll() {
        infoBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (boxTop < windowHeight - 50) {
                box.classList.add("visible");
                box.classList.remove("hidden");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});
