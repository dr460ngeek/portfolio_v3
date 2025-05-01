document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });

            // Show success message
            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            contactForm.reset();
        });
    }
});

// Gallery Slider Logic
document.querySelectorAll('.slider-controls input').forEach((radio, index) => {
    radio.addEventListener('change', function() {
        const slides = document.querySelectorAll('.gallery-section .slide');
        
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.transitionDelay = '0s'; // Reset delay
        });

        // Add active class to corresponding slide
        slides[index].classList.add('active');
    });
});

