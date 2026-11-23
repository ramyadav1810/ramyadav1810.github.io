
document.addEventListener("DOMContentLoaded", () => {

    const aboutImage = document.querySelector(".about-page-img");
    const aboutContent = document.querySelector(".about-page-content");

    aboutImage.style.transform = "translateX(-40px)";
    aboutContent.style.transform = "translateX(40px)";

    aboutImage.style.transition = "all 0.8s ease";
    aboutContent.style.transition = "all 0.8s ease";

    setTimeout(() => {

        aboutImage.style.opacity = "1";
        aboutContent.style.opacity = "1";

        aboutImage.style.transform = "translateX(0)";
        aboutContent.style.transform = "translateX(0)";

    }, 100);

});
