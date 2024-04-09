var images = document.querySelectorAll(".gallery img");

images.forEach(function (image, index) {
    image.addEventListener("click", function () {
        openLightbox(index);
    });
});

function openLightbox(index) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = images[index].src;
    lightbox.style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    var lightboxImage = document.getElementById("lightbox-image");
    var currentIndex = Array.from(images).findIndex(img => img.src === lightboxImage.src);
    var newIndex = (currentIndex + step + images.length) % images.length;
    lightboxImage.src = images[newIndex].src;
}

function toggleFullscreen() {
    var lightbox = document.getElementById("lightbox");
    if (!document.fullscreenElement) {
        lightbox.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
    var lightbox = document.getElementById("lightbox");
    if (lightbox.style.display === "block") {
        var keyCode = event.keyCode || event.which;

        // If the left arrow key is pressed
        if (keyCode === 37) {
            changeImage(-1); // Move to the previous image
        }
        // If the right arrow key is pressed
        else if (keyCode === 39) {
            changeImage(1); // Move to the next image
        }
        // If the escape key is pressed
        else if (keyCode === 27) {
            closeLightbox(); // Close the lightbox
        }
    }
}