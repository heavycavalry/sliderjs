const images = document.querySelectorAll('.gallery img');
// image.addEventListener('click', showLightBox);
let currentImg;


for (let index = 0; index < images.length; index++) {
    const image = images[index];
    image.addEventListener('click', showLightBox);
    image.index = index;
}

function showLightBox(event) {
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    const imageURL = event.target.src;
    currentImg = event.target;
    // console.log(event.target.index)
    // const next = images[(event.target.index + 1) % images.length]
    // img.src = next.src;
    img.src = imageURL;
    lightbox.classList.add('visible');
}

const closeIcon = document.querySelector('.closeIcon');
closeIcon.addEventListener('click', Close);

function Close() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
}
const rightarrow = document.querySelector('.rightArrow');
const leftarrow = document.querySelector('.leftArrow');
leftarrow.addEventListener('click', PreviousImg);
rightarrow.addEventListener('click', NextImg);

function NextImg(event) {
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    let nextImg = images[(event.target.index + 1) % images.length];
    currentImg = nextImg; 
        
}


function PreviousImg() {

}

// nextelementsiblig