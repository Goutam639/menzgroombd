const translations = [
    // Navigation
    { selector: ".nav-list li:nth-child(1) .nav-link", en: "Home", bn: "হোম" },
    { selector: ".nav-list li:nth-child(2) .nav-link", en: "About", bn: "সম্পর্কে" },
    { selector: ".nav-list li:nth-child(3) .nav-link", en: "Services", bn: "সেবাসমূহ" },
    { selector: ".nav-list li:nth-child(4) .nav-link", en: "Pricing", bn: "মূল্যতালিকা" },
    { selector: ".nav-list li:nth-child(5) .nav-link", en: "Reviews", bn: "রিভিউ" },
    { selector: ".nav-list li:nth-child(6) .nav-link", en: "Contact", bn: "যোগাযোগ" },
    { selector: ".btn-book", en: "Book Now", bn: "বুক করুন" },

    // Hero Section (index.html)
    { selector: ".hero .sub-heading", en: "Premium Grooming Experience", bn: "প্রিমিয়াম গ্রুমিং অভিজ্ঞতা" },
    { selector: ".hero .main-heading", en: "Welcome to <br> <span class=\"text-gold\">MENZ GROOM Premium SALON & SPA.</span>", bn: "মেনজ গ্রুম প্রিমিয়াম সেলুন এন্ড স্পা <br><span class=\"text-gold\">-তে আপনাকে স্বাগতম।</span>" },
    { selector: ".hero-desc", en: "Achieve your dream style with our master barbers. Experience the finest grooming and spa services tailored exclusively for the modern man.", bn: "আমাদের মাস্টার নাপিতদের সাথে আপনার স্বপ্নের হেয়ারস্টাইল অর্জন করুন। আধুনিক পুরুষদের জন্য সেরা গ্রুমিং এবং স্পা সেবার অভিজ্ঞতা নিন।" },
    { selector: ".hero-buttons a.btn-primary", en: "Book Appointment", bn: "অ্যাপয়েন্টমেন্ট বুক করুন" },
    { selector: ".hero-buttons a.btn-outline", en: "Explore Services", bn: "সেবাগুলো দেখুন" },

    // About Section (index.html)
    { selector: ".experience-badge .text", en: "Years of<br>Excellence", bn: "বছরের<br>উৎকর্ষতা" },
    { selector: ".about .subtitle", en: "About Our Story", bn: "আমাদের গল্প" },
    { selector: ".about h2", en: "A Legacy of Refined Men's Grooming", bn: "মার্জিত পুরুষদের গ্রুমিং-এর এক ঐতিহ্য" },
    { selector: ".about p:nth-of-type(1)", en: "Welcome to Menz Groom Premium Salon & Spa, where tradition meets modern sophistication. For over a decade, we have been the sanctuary for gentlemen who value sharp looks and a moment of relaxation.", bn: "মেনজ গ্রুম প্রিমিয়াম সেলুন এবং স্পাতে স্বাগতম, যেখানে ঐতিহ্য এবং আধুনিকতার এক অপূর্ব সমন্বয় ঘটেছে। এক দশকেরও বেশি সময় ধরে আমরা সেইসব ভদ্রলোকদের জন্য এক নির্ভরযোগ্য আশ্রয়স্থল যারা রুচিশীলতা পছন্দ করেন।" },
    { selector: ".about p:nth-of-type(2)", en: "Our master barbers and spa therapists are dedicated to providing an unparalleled experience. We don't just cut hair; we sculpt confidence. Step into our world of luxury, enjoy a complimentary beverage, and let us take care of the rest.", bn: "আমাদের মাস্টার নাপিত এবং স্পা থেরাপিস্টরা একটি অতুলনীয় অভিজ্ঞতা প্রদানে নিবেদিত। আমরা শুধু চুল কাটি না; আমরা আত্মবিশ্বাস তৈরি করি। আমাদের বিলাসবহুল বিশ্বে প্রবেশ করুন এবং আমাদের সেবা উপভোগ করুন।" },
    { selector: ".feature-item:nth-child(1) span", en: "Master Barbers", bn: "মাস্টার হেয়ার ষ্টাইলিস্ট" },
    { selector: ".feature-item:nth-child(2) span", en: "Premium Products", bn: "প্রিমিয়াম পণ্য" },
    { selector: ".feature-item:nth-child(3) span", en: "Luxury Ambience", bn: "বিলাসবহুল পরিবেশ" },
    { selector: ".about .btn-primary", en: "Discover More", bn: "আরও জানুন" },

    // Services Section (index.html)
    { selector: ".services .subtitle", en: "What We Offer", bn: "আমাদের সেবাসমূহ" },
    { selector: ".services .section-title h2", en: "Premium Services", bn: "প্রিমিয়াম সার্ভিস" },
    { selector: ".service-card:nth-child(1) h3", en: "Stylish Hair Cut", bn: "স্টাইলিশ হেয়ার কাট" },
    { selector: ".service-card:nth-child(1) p", en: "Precision cuts tailored to your face shape and personal style by our master barbers.", bn: "আপনার চেহারার সাথে মানানসই নিখুঁত হেয়ারকাট।" },
    { selector: ".service-card:nth-child(2) h3", en: "Color & Hair Wash", bn: "হেয়ার কালার এবং ওয়াশ" },
    { selector: ".service-card:nth-child(2) p", en: "Revitalizing scalp massages and professional coloring tailored for men's hair.", bn: "মাথার ত্বক ম্যাসাজ এবং পুরুষদের চুলের জন্য প্রফেশনাল হেয়ার কালার।" },
    { selector: ".service-card:nth-child(3) h3", en: "Beard Grooming", bn: "দাড়ির যত্ন" },
    { selector: ".service-card:nth-child(3) p", en: "Expert beard trimming, shaping, and conditioning with premium oils and balms.", bn: "প্রিমিয়াম তেল এবং বাম দিয়ে দাড়ির সঠিক ট্রিমিং এবং শেপিং।" },
    { selector: ".service-card:nth-child(4) h3", en: "Facial & Spa", bn: "ফেসিয়াল এবং স্পা" },
    { selector: ".service-card:nth-child(4) p", en: "Rejuvenating facial treatments and massages to relieve stress and clear your skin.", bn: "মানসিক চাপ কমাতে এবং ত্বক পরিষ্কার করতে আরামদায়ক ফেসিয়াল।" },
    { selector: ".service-link", en: "Book Service <i class=\"fas fa-arrow-right\"></i>", bn: "বুক সার্ভিস <i class=\"fas fa-arrow-right\"></i>" },

    // Pricing Preview (index.html)
    { selector: ".pricing .subtitle", en: "Our Top Prices", bn: "আমাদের সেরা মূল্য" },
    { selector: ".pricing .section-title h2", en: "Grooming Packages", bn: "গ্রুমিং প্যাকেজ" },
    { selector: ".pricing .btn-outline", en: "View Full Menu", bn: "সম্পূর্ণ মেনু দেখুন" },
    { selector: ".pricing-col:nth-child(1) .pricing-title", en: "<i class=\"fas fa-scissors text-gold\"></i> For Hair", bn: "<i class=\"fas fa-scissors text-gold\"></i> চুলের জন্য" },
    { selector: ".pricing-col:nth-child(2) .pricing-title", en: "<i class=\"fas fa-user-tie text-gold\"></i> For Beard", bn: "<i class=\"fas fa-user-tie text-gold\"></i> দাড়ির জন্য" },

    // Testimonials
    { selector: ".testimonials .subtitle", en: "Testimonials", bn: "গ্রাহক রিভিউ" },
    { selector: ".testimonials .section-title h2", en: "Customers Say About Us", bn: "আমাদের গ্রাহকরা যা বলেন" },

    // Team
    { selector: ".team .subtitle", en: "Meet Our Experts", bn: "আমাদের বিশেষজ্ঞদের সাথে পরিচিত হোন" },
    { selector: ".team .section-title h2", en: "Our Team Members", bn: "আমাদের টিমের সদস্যরা" },
    { selector: ".team-card:nth-child(1) span", en: "Master Barber", bn: "মাস্টার হেয়ার ষ্টাইলিস্ট" },
    { selector: ".team-card:nth-child(2) span", en: "Senior Stylist", bn: "সিনিয়র স্টাইলিস্ট" },
    { selector: ".team-card:nth-child(3) span", en: "Spa Therapist", bn: "স্পা থেরাপিস্ট" },
    { selector: ".team-card:nth-child(4) span", en: "Color Specialist", bn: "কালার স্পেশালিস্ট" },

    // Contact Section
    { selector: ".contact .subtitle", en: "Get In Touch", bn: "যোগাযোগ করুন" },
    { selector: ".contact .section-title h2", en: "Contact Us", bn: "আমাদের সাথে যোগাযোগ করুন" },
    { selector: "#contactSubmitBtn", en: "Send Message", bn: "বার্তা পাঠান" },

    // Footer (Both)
    { selector: ".footer-desc", en: "Premium men's grooming salon delivering exceptional cuts, hot towel shaves, and spa treatments in a luxurious environment.", bn: "একটি প্রিমিয়াম মেনস গ্রুমিং সেলুন যা বিলাসবহুল পরিবেশে চমৎকার হেয়ারকাট, হট টাওয়েল শেভ এবং স্পা সেবা প্রদান করে।" },
    { selector: ".footer-col:nth-child(2) h3", en: "Contact Info", bn: "যোগাযোগ" },
    { selector: ".footer-col:nth-child(3) h3", en: "Working Hours", bn: "কাজের সময়" },
    { selector: ".hours-list li:nth-child(1) span:nth-child(1)", en: "Mon - Fri:", bn: "সোম - শুক্র:" },
    { selector: ".hours-list li:nth-child(2) span:nth-child(1)", en: "Saturday:", bn: "শনিবার:" },
    { selector: ".hours-list li:nth-child(3) span:nth-child(1)", en: "Sunday:", bn: "রবিবার:" },
    { selector: ".hours-list li:nth-child(3) span:nth-child(2)", en: "Closed", bn: "বন্ধ" },
    { selector: ".footer-col:nth-child(4) h3", en: "Facebook", bn: "ফেসবুক" },

    // Menu specific (menu.html)
    { selector: ".page-banner h1", en: "Our Full Menu", bn: "আমাদের সম্পূর্ণ মেনু" },
    { selector: ".breadcrumb", en: "<a href=\"index.html\">Home</a> <i class=\"fas fa-chevron-right text-muted mx-2\" style=\"font-size: 0.7rem; margin: 0 10px;\"></i> Menu", bn: "<a href=\"index.html\">হোম</a> <i class=\"fas fa-chevron-right text-muted mx-2\" style=\"font-size: 0.7rem; margin: 0 10px;\"></i> মেনু" },
    { selector: ".full-menu-section .menu-category:nth-child(1) .pricing-title", en: "<i class=\"fas fa-scissors text-gold\"></i> Hair Services", bn: "<i class=\"fas fa-scissors text-gold\"></i> চুলের সেবাসমূহ" },
    { selector: ".full-menu-section .menu-category:nth-child(2) .pricing-title", en: "<i class=\"fas fa-user-tie text-gold\"></i> Beard & Shave", bn: "<i class=\"fas fa-user-tie text-gold\"></i> দাড়ি এবং শেভ" },
    { selector: ".full-menu-section .menu-category:nth-child(3) .pricing-title", en: "<i class=\"fas fa-spa text-gold\"></i> Spa Treatments", bn: "<i class=\"fas fa-spa text-gold\"></i> স্পা ট্রিটমেন্ট" },
    { selector: ".full-menu-section .menu-category:nth-child(4) .pricing-title", en: "<i class=\"fas fa-crown text-gold\"></i> Signature Packages", bn: "<i class=\"fas fa-crown text-gold\"></i> সিগনেচার প্যাকেজ" },
    { selector: ".full-menu-section .btn-primary:not(#btn_book)", en: "Book Your Appointment Now", bn: "এখনই আপনার অ্যাপয়েন্টমেন্ট বুক করুন" },
];

document.addEventListener("DOMContentLoaded", () => {
    const langBtns = document.querySelectorAll(".lang-btn");
    let currentLang = localStorage.getItem("menzGroomLang") || "en";

    function applyLanguage(lang) {
        // Toggle body class for font switching
        if (lang === "bn") {
            document.body.classList.add("lang-bn");
        } else {
            document.body.classList.remove("lang-bn");
        }

        // Toggle active class on buttons
        langBtns.forEach(btn => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Translate elements based on dictionary
        translations.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach(el => {
                if (item[lang]) {
                    el.innerHTML = item[lang];
                }
            });
        });

        // specific fixes for placeholder (not in main dict above because of innerHTML collision)

        const contactName = document.getElementById("contactName");
        if (contactName) contactName.placeholder = (lang === "en") ? "Your Name" : "আপনার নাম";
        
        const contactPhone = document.getElementById("contactPhone");
        if (contactPhone) contactPhone.placeholder = (lang === "en") ? "Mobile Number" : "আপনার মোবাইল নম্বর";
        
        const contactSubject = document.getElementById("contactSubject");
        if (contactSubject) contactSubject.placeholder = (lang === "en") ? "Subject" : "বিষয়";
        
        const contactMessage = document.getElementById("contactMessage");
        if (contactMessage) contactMessage.placeholder = (lang === "en") ? "Your Message" : "আপনার বার্তা";
    }

    // Apply initially
    applyLanguage(currentLang);

    // Click event
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                localStorage.setItem("menzGroomLang", selectedLang);
                applyLanguage(selectedLang);
            }
        });
    });
});
