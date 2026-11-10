// Find the Explore button
const exploreButton = document.querySelector("#exploreButton");

// Find the Home heading
const homeHeading = document.querySelector("#home h1");

// Respond when the button is clicked
exploreButton.addEventListener("click", function() {
    homeHeading.textContent = "Thank you for exploring my website!";
});
// Contact form interaction
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the visitor's name
    const visitorName = document.querySelector("#name").value;

    // Display a confirmation message
    alert("Thank you, " + visitorName + "! Your message has been received.");

    // Clear the form
    contactForm.reset();

});