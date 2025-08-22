// Thanks page functionality
if (document.body.contains(document.querySelector('.success-icon'))) {
    // Add some interactive elements for thanks page
    document.addEventListener('DOMContentLoaded', function() {
        // Animate cards on scroll/load
        const cards = document.querySelectorAll('.info-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = (1.2 + index * 0.2) + 's';
            card.classList.add('animate-in');
        });

        // Create floating particles with purple theme
        function createParticle() {
            const particle = document.createElement('div');
            const colors = [
                'rgba(109, 70, 107, 0.4)',
                'rgba(180, 159, 204, 0.4)',
                'rgba(234, 215, 215, 0.6)'
            ];
            
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: 100%;
                animation: floatUp 8s linear forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 8000);
        }

        // Add floating up animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0;
                }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            .animate-in {
                animation: slideInUp 0.8s ease-out both;
            }
        `;
        document.head.appendChild(style);

        // Generate particles periodically
        setInterval(createParticle, 2000);

        // Add subtle hover effects to floating elements
        document.querySelectorAll('.floating-element').forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2)';
                this.style.color = 'var(--medium-purple)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.color = 'var(--light-purple)';
            });
        });
    });
}

// Index page form functionality
if (document.getElementById('leadForm')) {
    // Form submission handling
    document.getElementById('leadForm').addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const loading = submitBtn.querySelector('.loading');
        
        // Show loading state
        btnText.style.opacity = '0';
        loading.style.display = 'block';
        submitBtn.disabled = true;
        
        // Basic form validation
        const requiredFields = this.querySelectorAll('input[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                field.style.borderColor = 'var(--pale-pink)';
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            // Reset button state
            btnText.style.opacity = '1';
            loading.style.display = 'none';
            submitBtn.disabled = false;
            
            alert('Please complete all required fields to begin your Beeversity journey.');
            return;
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            e.preventDefault();
            email.style.borderColor = '#e74c3c';
            
            // Reset button state
            btnText.style.opacity = '1';
            loading.style.display = 'none';
            submitBtn.disabled = false;
            
            alert('Please enter a valid email address to stay connected with Beeversity.');
            return;
        }
    });

    // Input field animations with enhanced effects
    document.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.querySelector('label').style.color = 'var(--medium-purple)';
            this.parentElement.querySelector('label').style.transform = 'translateY(-2px)';
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.querySelector('label').style.color = 'var(--dark-purple)';
            this.parentElement.querySelector('label').style.transform = 'translateY(0)';
        });

        // Add typing effect
        field.addEventListener('input', function() {
            this.style.boxShadow = '0 0 8px rgba(109, 70, 107, 0.15)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 300);
        });
    });

    // Enhanced phone number formatting
    document.getElementById('phone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = value.match(/^(\d{3})(\d{3})(\d{4})$/);
        
        if (formattedValue) {
            e.target.value = `(${formattedValue[1]}) ${formattedValue[2]}-${formattedValue[3]}`;
        }
    });

    // Create floating particles dynamically
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Randomize particle colors within the purple theme
        const colors = [
            'rgba(109, 70, 107, 0.3)',
            'rgba(180, 159, 204, 0.4)',
            'rgba(234, 215, 215, 0.5)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    // Generate particles periodically
    setInterval(createParticle, 3000);
}
