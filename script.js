
/* Mobile navbar */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


/* EmailJS initialization */

// Replace this with your actual EmailJS Public Key
emailjs.init({
    publicKey: "hbuY03melvgyfUi6b"
});


/* Contact form */

const contactForm = document.querySelector("#contact-form");
const sendBtn = document.querySelector("#send-btn");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    sendBtn.value = "Sending...";
    sendBtn.disabled = true;

    emailjs.sendForm(
        "service_wajy0lu",
        "template_brwi1tc",
        this
    )
    .then(() => {

        alert("Message sent successfully!");

        contactForm.reset();

        sendBtn.value = "Send Message";
        sendBtn.disabled = false;

    })
    .catch((error) => {

        console.error("EmailJS Error:", error);

        alert("Failed to send message. Please try again.");

        sendBtn.value = "Send Message";
        sendBtn.disabled = false;

    });

});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {

        const faqBox = question.parentElement;

        faqBox.classList.toggle("active");

        const icon = question.querySelector("i");

        if (faqBox.classList.contains("active")) {
            icon.classList.replace("bx-chevron-down", "bx-chevron-up");
        } else {
            icon.classList.replace("bx-chevron-up", "bx-chevron-down");
        }

    });
});
