document.addEventListener('DOMContentLoaded', function() {
    initNav();
    initHero();
    initAbout();
    initWork();
    initSkills();
    initContact();
    initScrollAnimations();
    initParticles();
    initThreeJSBackground();
});

function initNav() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

function initHero() {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 300);
    });

    const avatar = document.querySelector('.avatar-container');
    avatar.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        avatar.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    avatar.addEventListener('mouseenter', () => {
        avatar.style.transition = 'all 0.1s ease';
    });
    
    avatar.addEventListener('mouseleave', () => {
        avatar.style.transition = 'all 0.5s ease';
        avatar.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
}

function initAbout() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            number.textContent = Math.floor(current);
        }, 10);
    });

    const techBubbles = document.querySelectorAll('.tech-bubble');
    
    techBubbles.forEach(bubble => {
        gsap.to(bubble, {
            y: (Math.random() * 20) - 10,
            duration: 2 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
}

function initWork() {
    const workCards = document.querySelectorAll('.work-card');

    workCards.forEach((card, index) => {
        const inner = card.querySelector('.work-card-inner');

        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out"
        });

        card.addEventListener('click', () => {
            inner.classList.toggle('flipped');
        });
    });
}

function initSkills() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    skillProgresses.forEach(progress => {
        const width = progress.getAttribute('data-width');
        gsap.to(progress, {
            width: `${width}%`,
            duration: 1.5,
            ease: "power3.out"
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
            inputs.forEach(input => {
                if (input.value) {
                    input.classList.add('has-value');
                }

                input.addEventListener('input', function() {
                    if (this.value) {
                        this.classList.add('has-value');
                    } else {
                        this.classList.remove('has-value');
                    }
                });

                if (input.tagName === 'TEXTAREA') {
                    input.addEventListener('focus', function() {
                        this.style.minHeight = '120px';
                    });
                    
                    input.addEventListener('blur', function() {
                        if (!this.value) {
                            this.style.minHeight = '44px';
                        }
                    });
                }
            });
        });
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initParticles() {}

function initThreeJSBackground() {}

function initHero() {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 300);
    });
}

function initSkills() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    const skillPercents = document.querySelectorAll('.skill-percent');
    
    skillProgresses.forEach((progress, index) => {
        const width = progress.getAttribute('data-width');
        const percentElement = skillPercents[index];
        let current = 0;
        const target = parseInt(width);
        const increment = target / 200;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            progress.style.width = `${current}%`;
            percentElement.textContent = `${Math.floor(current)}%`;
        }, 20);
    });
}

function initNav() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}