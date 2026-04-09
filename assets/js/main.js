document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    
    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Sticky Header
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if(navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }

            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust scroll position for header height
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Reveal Animation via Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };
    
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Active Navigation Link Update on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = header.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Testimonial Slider Logic
    const track = document.getElementById('testimonialTrack');
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const nextBtn = document.getElementById('nextTestimonial');
    const prevBtn = document.getElementById('prevTestimonial');
    const dotsContainer = document.getElementById('testimonialDots');
    
    if (track && slides.length > 0) {
        let currentIndex = 0;
        let isMobile = window.innerWidth < 768;
        let slidesPerView = isMobile ? 1 : 2;
        let totalDots = Math.ceil((slides.length - slidesPerView) / slidesPerView) + 1;
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const wasMobile = isMobile;
            isMobile = window.innerWidth < 768;
            
            if (wasMobile !== isMobile) {
                slidesPerView = isMobile ? 1 : 2;
                totalDots = Math.max(1, Math.ceil((slides.length - slidesPerView) / slidesPerView) + 1);
                createDots();
                currentIndex = 0; // Reset on resize to avoid broken layouts
                updateSlider();
            }
        });

        // Initialize dots
        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('div');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            }
        }

        function updateSlider() {
            // Calculate percentage to translate
            // Each slide is either 100% or 50% width depending on mobile/desktop
            const slideWidth = isMobile ? 100 : 50;
            const translateAmount = -(currentIndex * slidesPerView * slideWidth);
            
            track.style.transform = `translateX(${translateAmount}%)`;

            // Update dots
            if (dotsContainer) {
                Array.from(dotsContainer.children).forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentIndex < totalDots - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Loop back
                }
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = totalDots - 1; // Loop back to end
                }
                updateSlider();
            });
        }

        // Auto slide
        let autoSlideInterval = setInterval(() => {
            if (nextBtn) nextBtn.click();
        }, 5000);

        // Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        track.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                if (nextBtn) nextBtn.click();
            }, 5000);
        });

        // Init
        createDots();
        updateSlider();
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('contactName').value.trim();
            const phone = document.getElementById('contactPhone').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            const statusDiv = document.getElementById('contactFormStatus');

            if (!name || !phone || !subject || !message) {
                statusDiv.textContent = 'Please fill out all fields.';
                statusDiv.className = 'form-status error';
                statusDiv.style.display = 'block';
                return;
            }

            // Create entry object
            const entry = {
                id: Date.now(),
                date: new Date().toLocaleString(),
                name,
                phone,
                subject,
                message,
                status: 'unread'
            };

            // Save to localStorage
            let contacts = [];
            const existingContacts = localStorage.getItem('menzgroom_contacts');
            if (existingContacts) {
                try {
                    contacts = JSON.parse(existingContacts);
                } catch (err) {
                    console.error('Error parsing contacts from localStorage', err);
                }
            }
            contacts.push(entry);
            localStorage.setItem('menzgroom_contacts', JSON.stringify(contacts));

            // Show success message
            const currentLang = localStorage.getItem('menzGroomLang') || 'en';
            statusDiv.textContent = currentLang === 'bn' ? 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!' : 'Your message has been sent successfully!';
            statusDiv.className = 'form-status success';
            statusDiv.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 5000);
        });
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
