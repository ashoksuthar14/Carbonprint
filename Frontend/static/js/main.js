// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.setAttribute('data-theme', 
        body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    themeToggle.querySelector('i').classList.toggle('fa-moon');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade in elements on scroll
document.querySelectorAll('.fade-in').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tree Animation
const treeContainer = document.querySelector('.tree-container');
if (treeContainer) {
    const tree = document.createElement('div');
    tree.className = 'tree';
    treeContainer.appendChild(tree);
}

// Form Validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form validation logic here
    });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(bar => {
    const value = bar.getAttribute('data-value');
    gsap.to(bar, {
        width: `${value}%`,
        duration: 1.5,
        ease: 'power2.out'
    });
});

// Chart Animations
const charts = document.querySelectorAll('.chart');
charts.forEach(chart => {
    const data = JSON.parse(chart.getAttribute('data-values'));
    // Add chart animation logic here
});

// Donation Form Animation
const donationForm = document.querySelector('.donation-form');
if (donationForm) {
    const amountInput = donationForm.querySelector('input[type="number"]');
    const impactDisplay = document.querySelector('.impact-display');
    
    amountInput.addEventListener('input', () => {
        const amount = parseFloat(amountInput.value) || 0;
        const trees = Math.floor(amount / 2); // $2 per tree
        if (impactDisplay) {
            impactDisplay.textContent = `Your donation will plant ${trees} trees`;
        }
    });
}

// Responsive Design
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}); 