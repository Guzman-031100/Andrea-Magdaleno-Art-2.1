var images = document.querySelectorAll(".gallery img");

images.forEach(function (image, index) {
    image.addEventListener("click", function () {
        openLightbox(index);
    });
});

function openLightbox(index) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");
    var lightboxDescription = document.getElementById("lightbox-description");

    lightboxImage.src = images[index].src;
    lightboxDescription.textContent = images[index].getAttribute("data-description");
    lightbox.style.display = "block";
}

function changeImage(step) {
    var lightboxImage = document.getElementById("lightbox-image");
    var lightboxDescription = document.getElementById("lightbox-description");
    var currentIndex = Array.from(images).findIndex(img => img.src === lightboxImage.src);
    var newIndex = (currentIndex + step + images.length) % images.length;

    lightboxImage.src = images[newIndex].src;
    lightboxDescription.textContent = images[newIndex].getAttribute("data-description");
}

function toggleFullscreen() {
    var lightbox = document.getElementById("lightbox");
    var lightboxDescription = document.getElementById("lightbox-description");

    if (!document.fullscreenElement) {
        lightbox.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        lightboxDescription.style.display = "none";
    } else {
        document.exitFullscreen();
        lightboxDescription.style.display = "block";
    }
}