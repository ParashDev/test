// Contact page specific JavaScript
console.log('Contact JS loaded');

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const formInputs = document.querySelectorAll('input, textarea');
    const contactItems = document.querySelectorAll('.contact-item');
    
    // Form submission
    if (submitButton) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Basic validation
            if (contactUtils.validateForm(formData)) {
                // Simulate form submission
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    utils.showNotification('Message sent successfully!', 'success');
                    contactUtils.resetForm();
                    submitButton.textContent = 'Send Message';
                    submitButton.disabled = false;
                }, 2000);
            } else {
                utils.showNotification('Please fill in all fields correctly.', 'error');
            }
        });
    }
    
    // Form input animations
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
        });
    });
    
    // Contact items animation
    contactItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200);
                }
            });
        });
        
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
});

// Contact page utilities
const contactUtils = {
    validateForm: (data) => {
        return data.name.trim() !== '' && 
               data.email.trim() !== '' && 
               data.subject.trim() !== '' && 
               data.message.trim() !== '' &&
               /\S+@\S+\.\S+/.test(data.email);
    },
    
    resetForm: () => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    },
    
    showFormSuccess: () => {
        const form = document.querySelector('.contact-form');
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.textContent = 'Thank you! Your message has been sent successfully.';
        form.insertBefore(successDiv, form.firstChild);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
};