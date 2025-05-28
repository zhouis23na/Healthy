// Healthcare Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '1rem';
            navLinks.style.backdropFilter = 'blur(10px)';
            navLinks.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
            
            // Animate menu toggle button
            menuToggle.style.transform = 'rotate(45deg)';
        } else {
            navLinks.style.display = 'none';
            menuToggle.style.transform = 'rotate(0deg)';
        }
    });

    // Smooth scrolling for navigation links
    const navLinksElements = document.querySelectorAll('.nav-link');
    navLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinksElements.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (isMenuOpen) {
                navLinks.style.display = 'none';
                menuToggle.style.transform = 'rotate(0deg)';
                isMenuOpen = false;
            }
        });
    });

    // Button interactions
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Button specific actions
            if (this.classList.contains('btn-primary')) {
                console.log('Primary button clicked - Navigate to registration');
                // Here you would typically navigate to a registration page
                alert('Fitur registrasi akan segera tersedia!');
            } else if (this.classList.contains('btn-secondary')) {
                console.log('Secondary button clicked - Show more info');
                // Here you would typically show more information
                alert('Informasi lebih lanjut akan ditampilkan di sini!');
            }
        });

        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.hero-text, .hero-visual');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add dynamic floating animation to medical icons
    const floatingIcons = document.querySelectorAll('.icon-floating');
    floatingIcons.forEach((icon, index) => {
        // Add random delay and duration variations
        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 2;
        
        icon.style.animationDelay = `${delay}s`;
        icon.style.animationDuration = `${duration}s`;
        
        // Add click interaction
        icon.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 100);
        });
    });

    // Phone mockup interaction
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneMockup.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(-5deg)';
            this.style.transition = 'transform 0.3s ease';
        });

        phoneMockup.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
        });
    }

    // Central symbol pulse effect on hover
    const centralSymbol = document.querySelector('.central-symbol');
    if (centralSymbol) {
        centralSymbol.addEventListener('mouseenter', function() {
            const symbolCircle = this.querySelector('.symbol-circle');
            symbolCircle.style.animationDuration = '0.5s';
        });

        centralSymbol.addEventListener('mouseleave', function() {
            const symbolCircle = this.querySelector('.symbol-circle');
            symbolCircle.style.animationDuration = '2s';
        });
    }

    // Responsive navigation handling
    function handleResize() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'static';
            navLinks.style.flexDirection = 'row';
            navLinks.style.background = 'none';
            navLinks.style.padding = '0';
            navLinks.style.backdropFilter = 'none';
            navLinks.style.borderTop = 'none';
            isMenuOpen = false;
            menuToggle.style.transform = 'rotate(0deg)';
        } else {
            if (!isMenuOpen) {
                navLinks.style.display = 'none';
            }
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on load

    // Add loading animation
    document.body.style.opacity = '0';
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });

    // Console welcome message
    console.log('🏥 Welcome to Salford & Co. Healthcare Platform!');
    console.log('💻 Website loaded successfully');
});