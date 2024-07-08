const slides = document.querySelectorAll('.slider'); // return an array of all images that have the slider class 
console.log(slides); 
let counter = 0;

// Set initial position of each slide
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
    slide.style.position = 'absolute'; // Ensure the slides are positioned absolutely
    slide.style.transition = 'transform 0.5s ease-in-out'; // Add transition for smooth sliding
});

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const goPrev = () => {
    counter--;
     
    if (counter < 0) counter = slides.length - 1;
    slideImage();
};

const goNext = () => {
    counter++;
     
    if (counter > slides.length - 1) counter = 0;
    slideImage();
};

// Initialize the first slide position
slideImage();
