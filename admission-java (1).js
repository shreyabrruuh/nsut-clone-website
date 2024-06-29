// JavaScript to show and hide the custom modal
const modal = document.getElementById("custom-modal");
const closeButton = document.getElementById("close-modal");

// Function to show the modal with a custom message
function showModal(message) {
    const messageContent = document.getElementById("message-content");
    messageContent.textContent = message;
    modal.style.display = "block";
}

// Function to hide the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for the close button
closeButton.addEventListener("click", closeModal);

// Example usage: Show the modal after submitting the form
const form = document.getElementById("admission-form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    showModal("Thank you for submitting the form!");
});
