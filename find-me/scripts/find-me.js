// find-me.js

// Function to handle search functionality
function search() {
    let query = document.getElementById('search-bar').value;
    alert(`Search functionality coming soon: ${query}`);
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('reviewText').value;

    // Save form data to localStorage
    localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));

    alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
});

// Initialize Google Map
function initMap() {
    const mapOptions = {
        zoom: 12,
        center: { lat: 40.7128, lng: -74.0060 },
    };
    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: 'New York',
    });
}

// Example of using objects, arrays, and array methods
const categories = [
    { name: 'Restaurants', img: 'images/restaurant.jpg' },
    { name: 'Hospitals', img: 'images/hospital.jpg' },
    { name: 'Schools', img: 'images/school.jpg' }
];

// Populate categories section (for category.html)
function populateCategories() {
    const section = document.getElementById('categories');
    categories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'category';
        div.innerHTML = `<img src="${category.img}" alt="${category.name}" loading="lazy"><p>${category.name}</p>`;
        section.appendChild(div);
    });
}

// Call the function if the section exists
if (document.getElementById('categories')) {
    populateCategories();
}

