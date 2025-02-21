// Function to open the main invitation with fade effect
function openInvitation() {
    const landingPage = document.querySelector('.landing-page');
    const mainContent = document.querySelector('.main-content');
    
    landingPage.style.opacity = '0';
    landingPage.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        landingPage.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            startCountdown();
        }, 100);
    }, 500);
}

// Countdown Timer
function startCountdown() {
    // Set the date we're counting down to
    const weddingDate = new Date("Dec 12, 2025 08:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros
        const formatNumber = (num) => String(num).padStart(2, '0');

        // Display the result with animation
        updateCountdownValue('days', formatNumber(days));
        updateCountdownValue('hours', formatNumber(hours));
        updateCountdownValue('minutes', formatNumber(minutes));
        updateCountdownValue('seconds', formatNumber(seconds));

        // If the countdown is finished, display expired message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "The wedding has already taken place!";
        }
    }, 1000);
}

// Function to update countdown values with animation
function updateCountdownValue(id, value) {
    const element = document.getElementById(id);
    if (element.textContent !== value) {
        element.style.transform = 'translateY(-20px)';
        element.style.opacity = '0';
        setTimeout(() => {
            element.textContent = value;
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }, 300);
    }
}

// RSVP Form Handling with animation
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.style.opacity = '0.7';
    
    setTimeout(() => {
        alert('Thank you for your RSVP!');
        this.reset();
        button.textContent = originalText;
        button.style.opacity = '1';
    }, 1000);
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.ceremony-card, .gallery-item, .rsvp, .location');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.ceremony-card, .gallery-item, .rsvp, .location');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
});
