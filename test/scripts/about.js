// About page specific JavaScript
console.log('About JS loaded');

document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('aboutButton');
    const teamMembers = document.querySelectorAll('.team-member');
    
    // About button functionality
    if (aboutButton) {
        aboutButton.addEventListener('click', () => {
            utils.showNotification('Thanks for your interest in learning more!', 'success');
            
            // Scroll to team section
            const teamSection = document.querySelector('.team-section');
            if (teamSection) {
                teamSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Team member interactions
    teamMembers.forEach((member, index) => {
        member.addEventListener('click', () => {
            const name = member.querySelector('h4').textContent;
            utils.showNotification(`You clicked on ${name}!`, 'info');
        });
        
        // Animate team members on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        });
        
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        member.style.transition = 'all 0.6s ease';
        observer.observe(member);
    });
});

// About page utilities
const aboutUtils = {
    toggleMemberDetails: (memberIndex) => {
        const members = document.querySelectorAll('.team-member');
        const member = members[memberIndex];
        if (member) {
            member.classList.toggle('expanded');
        }
    }
};