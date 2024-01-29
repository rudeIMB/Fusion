const initSliderA = () => {
    const imageList = document.querySelector(".slider-wrapper .arrival");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].disabled = imageList.scrollLeft <= 0 ? true : false;
        slideButtons[1].disabled = imageList.scrollLeft >= maxScrollLeft ? true : false;
    }
    
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

const initSliderR = () => {
    const imageList = document.querySelector(".slider-wrapper .ready");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button-R");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].disabled = imageList.scrollLeft <= 0 ? true : false;
        slideButtons[1].disabled = imageList.scrollLeft >= maxScrollLeft ? true : false;
    }
    
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSliderA);
window.addEventListener("load", initSliderA);
window.addEventListener("resize", initSliderR);
window.addEventListener("load", initSliderR);