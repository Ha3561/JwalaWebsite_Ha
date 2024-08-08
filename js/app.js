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
document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
}); 

function createCard(title,description,imgUrl,tags) {
    //create Card element
    const card = document.createElement('div');
    card.className = 'max-w-sm rounded-lg overflow-hidden shadow-lg';
    //image container
    const imgContainer = document.createElement('div');
    imgContainer.className = 'flex justify-center';
    const img = document.createElement('img');
    img.className = 'w-24 h-24 rounded-full border-2 border-gray-300';
    img.alt = title;
    imgContainer.appendChild(   img);

    //card body
    const content = document.createElement('div');
    content.className = 'px-6 py-4';
    const cardTitle = document.createElement('div');
    cardTitle.className = 'font-bold text-xl mb-2';
    cardTitle.textContent = title;
    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    content.appendChild(cardTitle);
    content.appendChild(cardDescription);

    //create tags container
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'px-6 pt-4 pb-2 text-center';
    tags.forEach(tag => { 
        const tagElement = document.createElement('span');
        tagElement.className = 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    //Assemble the card
    card.appendChild(imgContainer);
    card.appendChild(content);
    card.appendChild(tagsContainer);    
    document.getElementById('cards-container').appendChild(card);



} 
const people = [
    { title: 'Person 1', description: 'This is Person 1', imgUrl: 'https://via.placeholder.com/150', tags: ['#tag1', '#tag2', '#tag3'] },
    { title: 'Person 2', description: 'This is Person 2', imgUrl: 'https://via.placeholder.com/150', tags: ['#tag1', '#tag2', '#tag3'] },
    { title: 'Person 3', description: 'This is Person 3', imgUrl: 'https://via.placeholder.com/150', tags: ['#tag1', '#tag2', '#tag3'] },
    { title: 'Person 4', description: 'This is Person 4', imgUrl: 'https://via.placeholder.com/150', tags: ['#tag1', '#tag2', '#tag3'] },
    { title: 'Person 5', description: 'This is Person 5', imgUrl: 'https://via.placeholder.com/150', tags: ['#tag1', '#tag2', '#tag3'] },
    { title: 'Person 6', description: 'This is Person 6', imgUrl: 'https://via.placeholder.com/150', tags: ['#tag1', '#tag2', '#tag3'] }
];

let currentIndex = 0;

function renderCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % people.length;
        const currentPerson = people[index];

        const card = document.createElement('div');
        card.className = `mx-12 max-w-md rounded-lg overflow-hidden shadow-lg bg-white ${i === 1 ? 'col-span-1' : 'col-span-2'}`;

        card.innerHTML = `
            <div class="flex justify-center mt-4">
                <img class="w-12 h-14 rounded-full border-2 border-gray-300" src="${currentPerson.imgUrl}" alt="${currentPerson.title}">
            </div>
            <div class="px-6 py-4 text-center">
                <div class="font-bold text-xl mb-2">${currentPerson.title}</div>
                <p class="text-gray-700 text-base">${currentPerson.description}</p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
                ${currentPerson.tags.map(tag => `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${tag}</span>`).join('')}
            </div>
        `;

        cardContainer.appendChild(card);
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + people.length) % people.length;
    renderCards();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % people.length;
    renderCards();
});

// Initial render
renderCards();
;

document.addEventListener('DOMContentLoaded', () => {
    const customDiv = document.querySelector('.custom-div');
    const htmlContent = `
        <div class="slider-wrapper">
            <div class="card-list">
                <div class="flex flex-col items-center bg-white bg-opacity-50 backdrop-blur-sm border border-gray-300 rounded-lg p-4">
                    <img src="https://drive.google.com/thumbnail?id=15UlU38bx7TfCDU3fMC226qzb2pD1-Qc9" alt="user-image" class="rounded-lg w-48 h-auto mb-4">
                    <h2 class="user-name font-bold text-xl mb-2">Vatsal Jain</h2>
                    <p class="user-designation text-gray-700 mb-4">Cultural Secretary</p>
                    <div class="flex flex-row space-x-4">
                        <a href="https://www.instagram.com/vatsaljain_/" class="text-pink-500 text-2xl">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vatsaljain_" class="text-blue-500 text-2xl">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:vatsaljain@example.com" class="text-gray-500 text-2xl">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    
    for (let i = 0; i < 10; i++) { // Change the number 10 to however many times you want to insert the content
        customDiv.insertAdjacentHTML('beforeend', htmlContent);
    }
})