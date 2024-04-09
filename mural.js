const prevBtn = document.createElement('button');
prevBtn.innerHTML = '&lt;';
prevBtn.classList.add('nav-button', 'prev');

const nextBtn = document.createElement('button');
nextBtn.innerHTML = '&gt;';
nextBtn.classList.add('nav-button', 'next');

const buttonWrapper = document.createElement('div');
buttonWrapper.classList.add('button-wrapper');
buttonWrapper.appendChild(prevBtn);
buttonWrapper.appendChild(nextBtn);

const container = document.querySelector('.container');
container.appendChild(buttonWrapper);

const gallery = document.querySelector('.gallery');

let currentIndex = 0;
let clickCount = 0;

updateButtonVisibility();

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        clickCount = Math.max(0, clickCount - 1);
        updateGalleryPosition();
        updateButtonVisibility();
    }
});

nextBtn.addEventListener('click', () => {
    if (clickCount < 3 && currentIndex < gallery.children.length - 1) {
        currentIndex++;
        clickCount++;
        updateGalleryPosition();
        updateButtonVisibility();
    }
});

function updateGalleryPosition() {
    const newPosition = -currentIndex * (gallery.offsetWidth + 10);
    gallery.style.transform = `translateX(${newPosition}px)`;
}

function updateButtonVisibility() {
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = clickCount >= 3 || currentIndex >= gallery.children.length - 1 ? 'none' : 'block';
}