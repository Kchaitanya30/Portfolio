// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // We can stop observing if we only want it to fade in once
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and hidden elements
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Toggle older experience
    const toggleBtn = document.getElementById('toggle-experience');
    const olderExpDiv = document.getElementById('older-experience');
    
    if (toggleBtn && olderExpDiv) {
        toggleBtn.addEventListener('click', () => {
            olderExpDiv.classList.toggle('show-experience');
            
            if (olderExpDiv.classList.contains('show-experience')) {
                toggleBtn.innerHTML = 'Hide Previous Experience <i class="fa-solid fa-chevron-up"></i>';
            } else {
                toggleBtn.innerHTML = 'Show Previous Experience <i class="fa-solid fa-chevron-down"></i>';
            }
        });
    }
});

// Dynamic Navbar Box-Shadow on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
