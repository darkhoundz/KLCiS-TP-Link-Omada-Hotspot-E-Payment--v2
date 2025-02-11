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
const images = [
    "https://i.postimg.cc/vZXV08pG/img1.png",
    "https://i.postimg.cc/ZnkBWWyx/img2.png",
    "https://i.postimg.cc/R0DnzsS8/img3.png",
    "https://i.postimg.cc/kg7SNRYj/img4.png",
    "https://i.postimg.cc/SKsz3FhC/img5.png",
    "https://i.postimg.cc/kXQ8tvs6/img6.png"
];

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

// Automatically open the modal and start changing images
window.onload = function() {
    modal.style.display = "flex";
    modalImage.src = images[currentImageIndex]; // Set the initial random image
    setInterval(changeImage, 4000); // Change image every 4 seconds
};