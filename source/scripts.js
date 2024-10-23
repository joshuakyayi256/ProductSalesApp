// scripts.js

window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});


// Form Validation for Order and Registration Forms
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const registerForm = document.getElementById('registerForm');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            const service = document.getElementById('service').value;
            const details = document.getElementById('details').value.trim();

            if (service === '') {
                alert('Please select a service.');
                e.preventDefault();
            }

            if (details.length < 10) {
                alert('Please provide more details about your requirements.');
                e.preventDefault();
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            if (name === '') {
                alert('Please enter your name.');
                e.preventDefault();
            }

            if (email === '') {
                alert('Please enter your email.');
                e.preventDefault();
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    e.preventDefault();
                }
            }
        });
    }
});
