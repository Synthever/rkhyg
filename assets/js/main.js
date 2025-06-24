// Main JavaScript for Portfolio Website
// Author: Raekhandi Yoga Gusmawan

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeScrollEffects();
    initializeSkillBars();
    initializeContactForm();
    initializeLoading();
    
    // Remove loading screen after everything is loaded
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            anime({
                targets: loading,
                opacity: 0,
                duration: 500,
                easing: 'easeOutQuad',
                complete: () => {
                    loading.style.display = 'none';
                    startInitialAnimations();
                }
            });
        }    }, 1000);
});

// Navigation Management
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation
                updateActiveNavigation(targetId);
            }
        });
    });
    
    // Update navigation on scroll
    window.addEventListener('scroll', throttle(() => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        if (current) {
            updateActiveNavigation(current);
        }
    }, 100));
}

function updateActiveNavigation(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}

// Animation Initialization
function initializeAnimations() {
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        anime({
            targets: element,
            translateY: [-10, 10],
            rotate: [-5, 5],
            duration: 3000 + (index * 500),
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            delay: index * 200
        });
    });
}

function startInitialAnimations() {
    // Hero section animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('animated');
        
        anime.timeline()
            .add({
                targets: '.hero-content h1',
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1000,
                easing: 'easeOutExpo'
            })
            .add({
                targets: '.hero-content p',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutExpo',
                delay: anime.stagger(200)
            }, '-=500')
            .add({
                targets: '.hero-content .cta-button, .hero-content .cta-button-outline',
                opacity: [0, 1],
                translateY: [20, 0],
                scale: [0.8, 1],
                duration: 600,
                easing: 'easeOutBack',
                delay: anime.stagger(100)
            }, '-=400');
    }
    
    // Animate section headings on page load
    anime({
        targets: 'section h2',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(200, {start: 1500})
    });
    
    // Animate stat items in about section
    setTimeout(() => {
        anime({
            targets: '.stat-item',
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.9, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: anime.stagger(100)
        });
    }, 2000);
      // Floating navigation animation
    anime({
        targets: '#floating-nav',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        easing: 'easeOutBack',
        delay: 1200
    });
      // Animate contact items
    setTimeout(() => {
        anime({
            targets: '.contact-item',
            opacity: [0, 1],
            translateX: [-30, 0],
            duration: 500,
            easing: 'easeOutExpo',
            delay: anime.stagger(100)
        });
    }, 2000);
}

// Scroll Effect Management
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Animate different elements based on their class
                if (target.classList.contains('timeline-item')) {
                    animateTimelineItem(target);
                } else if (target.classList.contains('project-card')) {
                    animateProjectCard(target);
                } else if (target.classList.contains('blog-card')) {
                    animateBlogCard(target);
                } else if (target.classList.contains('skills-category')) {
                    animateSkillsCategory(target);
                } else if (target.classList.contains('about-image')) {
                    animateAboutImage(target);                } else if (target.classList.contains('about-content')) {
                    animateAboutContent(target);
                } else if (target.classList.contains('featured-article')) {
                    animateFeaturedArticle(target);
                } else if (target.classList.contains('contact-form')) {
                    animateContactForm(target);
                }
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);
      // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.timeline-item, .project-card, .blog-card, .skills-category, .about-image, .about-content, .featured-article, .contact-form'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Individual Animation Functions
function animateTimelineItem(element) {
    element.classList.add('animated');
    
    // Animate the entire timeline item
    anime({
        targets: element,
        opacity: [0, 1],
        translateX: [element.classList.contains('even') ? 50 : -50, 0],
        duration: 800,
        easing: 'easeOutExpo'
    });
    
    // Animate timeline date badge
    const timelineDate = element.querySelector('.timeline-date');
    if (timelineDate) {
        anime({
            targets: timelineDate,
            scale: [0, 1],
            duration: 500,
            easing: 'easeOutBack',
            delay: 200
        });
    }
    
    // Animate tags with stagger effect
    const tags = element.querySelectorAll('span[class*="px-3"]');
    if (tags.length > 0) {
        anime({
            targets: tags,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 400,
            easing: 'easeOutBack',
            delay: anime.stagger(50, {start: 600})
        });
    }
}

function animateProjectCard(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.9, 1],
        duration: 600,
        easing: 'easeOutBack'
    });
    
    // Animate project image icon
    const projectIcon = element.querySelector('.project-image i');
    if (projectIcon) {
        anime({
            targets: projectIcon,
            scale: [0, 1],
            rotate: [180, 0],
            duration: 800,
            easing: 'easeOutElastic(1, .6)',
            delay: 300
        });
    }
    
    // Animate tech tags
    const techTags = element.querySelectorAll('span[class*="px-2"]');
    if (techTags.length > 0) {
        anime({
            targets: techTags,
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 400,
            easing: 'easeOutExpo',
            delay: anime.stagger(50, {start: 400})
        });
    }
    
    // Animate button
    const button = element.querySelector('button');
    if (button) {
        anime({
            targets: button,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 500,
            easing: 'easeOutBack',
            delay: 600
        });
    }
}

function animateBlogCard(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutExpo'
    });
    
    // Animate blog image
    const blogImage = element.querySelector('.blog-image');
    if (blogImage) {
        anime({
            targets: blogImage,
            scale: [0.8, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 200
        });
    }
    
    // Animate blog category tag
    const categoryTag = element.querySelector('span[class*="px-2"]');
    if (categoryTag) {
        anime({
            targets: categoryTag,
            opacity: [0, 1],
            scale: [0, 1],
            duration: 400,
            easing: 'easeOutBack',
            delay: 300
        });
    }
}

function animateSkillsCategory(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        easing: 'easeOutExpo',
        complete: () => {
            // Trigger skill bar animations
            const skillBars = element.querySelectorAll('.skill-progress');
            animateSkillBars(skillBars);
        }
    });
}

function animateAboutImage(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, .6)'
    });
}

function animateAboutContent(element) {
    const children = element.children;
    anime({
        targets: children,
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: 600,
        easing: 'easeOutExpo',
        delay: anime.stagger(100)
    });
    
    // Animate the professional summary text with typewriter effect
    const summaryText = element.querySelector('p');
    if (summaryText) {
        summaryText.style.opacity = '0';
        setTimeout(() => {
            anime({
                targets: summaryText,
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutExpo'
            });        }, 500);
    }
}

function animateFeaturedArticle(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        easing: 'easeOutExpo'
    });
    
    // Animate the blog image
    const blogImage = element.querySelector('.blog-image');
    if (blogImage) {
        anime({
            targets: blogImage,
            scale: [0.8, 1],
            rotate: [-5, 0],
            duration: 1000,
            easing: 'easeOutElastic(1, .6)',
            delay: 200
        });
    }
    
    // Animate the article button
    const button = element.querySelector('button');
    if (button) {
        anime({
            targets: button,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 500,
            easing: 'easeOutBack',
            delay: 600
        });
    }
}

function animateContactForm(element) {
    const formElements = element.querySelectorAll('div, button');
    anime({
        targets: formElements,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutExpo',
        delay: anime.stagger(100)
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    // This will be triggered by scroll observer
}

function animateSkillBars(skillBars) {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        anime({
            targets: bar,
            width: `${width}%`,
            duration: 1500,
            easing: 'easeOutExpo',
            delay: anime.stagger(100)
        });
    });
}

// Contact Form Management
function initializeContactForm() {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                form.reset();
                showNotification('Message sent successfully!', 'success');
            }, 2000);
        });
    }
}

// Loading Management
function initializeLoading() {
    // Additional loading logic if needed
}

// Utility Functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 
                'fa-info-circle'
            } mr-2"></i>
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: 'easeOutExpo'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            opacity: [1, 0],
            translateX: [0, 100],
            duration: 300,
            easing: 'easeInExpo',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Project Card Click Handlers
document.addEventListener('click', (e) => {
    if (e.target.closest('.project-card button')) {
        const projectCard = e.target.closest('.project-card');
        const projectTitle = projectCard.querySelector('h3').textContent;
        
        // Animate button click
        anime({
            targets: e.target,
            scale: [1, 0.95, 1],
            duration: 200,
            easing: 'easeOutQuad'
        });
        
        // Show project details (placeholder)
        showNotification(`Opening ${projectTitle} details...`, 'info');
    }
});

// Blog Card Click Handlers
document.addEventListener('click', (e) => {
    if (e.target.closest('.blog-card button')) {
        const blogCard = e.target.closest('.blog-card');
        const blogTitle = blogCard.querySelector('h4').textContent;
        
        // Animate button click
        anime({
            targets: e.target,
            scale: [1, 0.95, 1],
            duration: 200,
            easing: 'easeOutQuad'
        });
        
        // Show blog post (placeholder)
        showNotification(`Opening "${blogTitle}"...`, 'info');
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // ESC key to close any open modals/notifications
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.fixed.top-4.right-4');
        notifications.forEach(notification => {
            notification.remove();
        });
    }
    
    // Arrow key navigation for sections
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'blog', 'contact'];
    const currentSection = document.querySelector('.nav-link.active')?.getAttribute('href')?.substring(1);
    const currentIndex = sections.indexOf(currentSection);
    
    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        e.preventDefault();
        document.getElementById(sections[currentIndex + 1]).scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        document.getElementById(sections[currentIndex - 1]).scrollIntoView({ behavior: 'smooth' });
    }
});

// Performance optimizations
// Lazy load images when they come into view
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
initializeLazyLoading();

// Initialize preloading
preloadCriticalResources();

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You can add error reporting here
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}
