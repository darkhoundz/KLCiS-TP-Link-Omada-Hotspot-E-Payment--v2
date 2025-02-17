// Get the modal
const modal = document.getElementById("advert");

// Get the close button and continue button
const closeBtn = document.querySelector(".close");
const continueBtn = document.getElementById("continueButton");
const modalImage = document.getElementById("advert-image")

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks on the continue button, close the modal
continueBtn.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside the modal content, close the modal
window.onclick = function() {
        modal.style.display = "none";
};

// Array of image URLs
const images = [];

// Function to get a random index to start with
function getRandomIndex() {
    return Math.floor(Math.random() * images.length);
}

let currentImageIndex = getRandomIndex(); // Start with a random image

// Function to change the image
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
    modalImage.src = images[currentImageIndex];
}

function injectAds() {
    fetch('ads.txt')
        .then(response => response.text())
        .then(data => {
            images = data.split('\n').filter(url => url.trim() !== '');
            console.log(images)
        })
        .catch( err => console.error("Failed to get the advertisement images:", err));
}

// Automatically open the modal and start changing images
window.onload = function() {
    injectAds();
    modal.style.display = "flex";
    modalImage.src = images[currentImageIndex]; // Set the initial random image
    setInterval(changeImage, 4000); // Change image every 4 seconds
};

