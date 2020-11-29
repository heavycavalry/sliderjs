const images = document.querySelectorAll('.gallery img');
let currentImg;

for (let index = 0; index < images.length; index++) {
    const image = images[index];
    image.addEventListener('click', showLightBox);
    image.index = index;
}

function show(image) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    const targetImgSrc = image.src;
    lightboxImg.src = targetImgSrc;
    currentImg = image;
    lightbox.classList.add('visible');
}

function showLightBox(event) {
    show(event.target);
}

const closeIcon = document.querySelector('.closeIcon');
closeIcon.addEventListener('click', Close);

function Close() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
}


const rightarrow = document.querySelector('.rightArrow');
const leftarrow = document.querySelector('.leftArrow');
leftarrow.addEventListener('click', Left);
rightarrow.addEventListener('click', Right);

function Right(event) {
    let nextIndex = (currentImg.index + 1) % images.length;
    show(images[nextIndex])
}

function Left(event) {
    let beforeIndex = (currentImg.index - 1 + images.length) % images.length;
    show(images[beforeIndex])
}