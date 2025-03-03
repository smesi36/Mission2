// ----------------- GET HEADER ELEMENTS ---------------- //
const headerEl = document.getElementById('header');
const pageHeading = document.getElementById('page-Heading');

// --------- APPLYING STYLING TO HEADER ELEMENTS -------- //
headerEl.classList.add('styled-header');
pageHeading.classList.add('styled-mainTitle');

// ------------------- ARRAY OF IMAGES ------------------ //

const imagesArray = [
    { src: 'images/gallery/parodia-werneri-1.jpg', name: 'Parodia Werneri' },
    { src: 'images/gallery/rebutia-heliosa.jpg', name: 'Rebutia Heliosa' },
    { src: 'images/gallery/aprocactus-flagelli.jpg', name: 'Aprocactus Flagelli' },
    { src: 'images/gallery/gymnocalycium-friedrichii.jpg', name: 'Gymnocalycium Friedrichii' },
    { src: 'images/gallery/rebutia-krainziana.jpg', name: 'Rebutia Krainziana' },
    { src: 'images/gallery/astrophytum-asterias.jpg', name: 'Astrophytum Asterias' },
    { src: 'images/gallery/astrophytum-capricorne.jpg', name: 'Astrophytum Capricorne' },
    { src: 'images/gallery/rebutia-orange-snow.jpg', name: 'Rebutia Orange Snow' },
    { src: 'images/gallery/rebutia-senilis.jpg', name: 'Rebutia Senilis' },
];

// ------ ENABLES SELECTING IMAGES BY CURRENT INDEX ----- //
let currentIndex = 0;

// getElementById for selected imgage, image-name, and arrow buttons
const selectedImage = document.getElementById('selected-image');
const imageName = document.getElementById('image-name');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// get elements by querySelectorAll for the thumbnails (nodelist)
const thumbnails = document.querySelectorAll('.thumbnail');

// get elements for modal functionality
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

// updates the displayed image and its name
function updateGallery() {
  console.log(currentIndex, 'updating gallery');
  selectedImage.src=imagesArray[currentIndex].src;
  imageName.innerHTML=imagesArray[currentIndex].name;
} 

// move the currentIndex up to the next
// if the currentIndex reaches the end of array, reset it to 0
// call updateGallery function.    
function nextImage() {
    console.log('next image clicked');
    currentIndex++;
    if (currentIndex === imagesArray.length) currentIndex = 0;
    updateGallery();
}

// move the current index down to the previous
// if the currentIndex reaches 0, change it to the last index
// call updateGallery    

function prevImage() {
    console.log('prev image clicked');
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesArray.length - 1;
    }
    updateGallery();
}

// change currentIndex to selected thumbnail index
// call updateGallery

function selectThumbnail(index) {
    console.log('thumbnail clicked', index);
    currentIndex = index;
    updateGallery();
} 

//add functions to elements by adding event listeners:
leftArrow.addEventListener('click', prevImage);
rightArrow.addEventListener('click', nextImage);

// add function to 'thumbnail' element directly in the html. 
// 1.forEach adds eventListener to thumbnail.
// 2.the eventListener calls 'selectThumbnail' on click 
// 3.selectThumbnail assigns currentIndex the index value of the clicked thumbnail
// 4.calls updateGallery

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => selectThumbnail(index));
})

//adds modal functionality to the selectedImage:

selectedImage.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);

function openModal() {
    modalImage.src= imagesArray[currentIndex].src;
    modal.showModal();
}

function closeModal() {
    modal.close();
}



