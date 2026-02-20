// Home page specific JavaScript
console.log('Home JS loaded');

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Home button click handler
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            utils.showNotification('Welcome! Thanks for clicking the button!', 'success');
            
            // Add some animation
            homeButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                homeButton.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Feature cards hover effect
    featureCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0deg)';
        });
        
        // Staggered animation on load
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Initialize cards as hidden for animation
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
});

// Page-specific utility functions
const homeUtils = {
    highlightActiveFeature: (index) => {
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.background = '#e8f4fd';
            } else {
                card.style.background = '#f8f9fa';
            }
        });
    }
};