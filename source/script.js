// script.js
// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile Navigation Toggle
const navbar = document.querySelector('navbar');
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Menu';
toggleButton.classList.add('navbar-toggle');
navbar.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Dynamic Testimonials Carousel
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const testimonialCount = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialCount;
    showTestimonial(currentIndex);
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

// Validate Forms
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        const inputs = form.querySelectorAll('input[required]');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.style.borderColor = 'red'; // Highlight empty fields
            } else {
                input.style.borderColor = ''; // Reset border color
            }
        });

        if (!valid) {
            e.preventDefault(); // Prevent form submission if not valid
            alert('Please fill out all required fields.');
        }
    });
});

// Show the first testimonial by default
showTestimonial(currentIndex);
