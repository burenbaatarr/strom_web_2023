var currentImage = 0;
        
function nextImage() {
    var images = document.querySelectorAll('.slider img');
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

function prevImage() {
    var images = document.querySelectorAll('.slider img');
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add('active');
}

nextImage();
setInterval(nextImage, 5000);


document.getElementById("logo").addEventListener("click", function() {
    showPopup();
});

function showPopup() {
    document.getElementById("myPopup").style.display = "block";
}

function hidePopup() {
    document.getElementById("myPopup").style.display = "none";
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Your form data handling and validation code here

    hidePopup(); // Hide the pop-up form after form submission
});
