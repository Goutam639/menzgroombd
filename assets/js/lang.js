const translations = [
    // Navigation
    { selector: ".nav-list li:nth-child(1) .nav-link", en: "Home", bn: "হোম" },
    { selector: ".nav-list li:nth-child(2) .nav-link", en: "About", bn: "সম্পর্কে" },
    { selector: ".nav-list li:nth-child(3) .nav-link", en: "Services", bn: "সেবাসমূহ" },
    { selector: ".nav-list li:nth-child(4) .nav-link", en: "Pricing", bn: "মূল্যতালিকা" },
    { selector: ".nav-list li:nth-child(5) .nav-link", en: "Reviews", bn: "রিভিউ" },
    { selector: ".nav-list li:nth-child(6) .nav-link", en: "Contact", bn: "যোগাযোগ" },
    { selector: ".btn-login", en: "Log in", bn: "লগইন" },

    // Hero Section (index.html)
    { selector: ".hero .sub-heading", en: "Premium Grooming Experience", bn: "প্রিমিয়াম গ্রুমিং অভিজ্ঞতা" },
    { selector: ".hero .main-heading", en: "Welcome to <br> <span class=\"text-gold\">MENZ GROOM Premium SALON & SPA.</span>", bn: "মেনজ গ্রুম প্রিমিয়াম সেলুন এন্ড স্পা <br><span class=\"text-gold\">-তে আপনাকে আমন্ত্রন।</span>" },
    { selector: ".hero-desc", en: "Achieve your dream style with our master barbers. Experience the finest grooming and spa services tailored exclusively for the modern man.", bn: "আমাদের মাস্টার হেয়ার ষ্টাইলারদের সাথে আপনার স্বপ্নের হেয়ারস্টাইল অর্জন করুন। আধুনিক পুরুষদের জন্য সেরা গ্রুমিং এবং স্পা সেবার অভিজ্ঞতা নিন।" },
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
    { selector: ".service-card:nth-child(1) h3", en: "Hair Cut & Shaving", bn: "হেয়ার কাট এবং শেভিং" },
    { selector: ".service-card:nth-child(1) p", en: "Precision cuts tailored to your face shape and personal style by our master barbers.", bn: "আপনার চেহারার সাথে মানানসই নিখুঁত হেয়ারকাট।" },
    { selector: ".service-card:nth-child(2) h3", en: "Hair Color & Shining", bn: "হেয়ার কালার এবং শাইনিং" },
    { selector: ".service-card:nth-child(2) p", en: "Revitalizing scalp massages and professional coloring tailored for men's hair.", bn: "মাথার ত্বক ম্যাসাজ এবং পুরুষদের চুলের জন্য প্রফেশনাল হেয়ার কালার।" },
    { selector: ".service-card:nth-child(3) h3", en: "Hair Treatment & Rebonding", bn: "হেয়ার ট্রিটমেন্ট এবং রিবন্ডিং" },
    { selector: ".service-card:nth-child(3) p", en: "Restore the health and shine of your hair with our advanced treatments.", bn: "আমাদের উন্নত ট্রিটমেন্টের মাধ্যমে আপনার চুলের স্বাস্থ্য এবং ঔজ্জ্বল্য ফিরিয়ে আনুন।" },
    { selector: ".service-card:nth-child(4) h3", en: "Facial", bn: "ফেসিয়াল" },
    { selector: ".service-card:nth-child(4) p", en: "Rejuvenating facial treatments and massages to relieve stress and clear your skin.", bn: "মানসিক চাপ কমাতে এবং ত্বক পরিষ্কার করতে আরামদায়ক ফেসিয়াল।" },
    { selector: ".service-card:nth-child(5) h3", en: "Spa Services", bn: "স্পা সার্ভিস" },
    { selector: ".service-card:nth-child(5) p", en: "Relaxing spa experiences designed to rejuvenate your body and mind.", bn: "আপনার শরীর ও মনকে সতেজ করতে আরামদায়ক স্পা অভিজ্ঞতা।" },
    { selector: ".service-card:nth-child(6) h3", en: "Groom Makeup & Attires", bn: "বর মেকআপ এবং পোশাক" },
    { selector: ".service-card:nth-child(6) p", en: "Complete grooming and styling services for your special day.", bn: "আপনার বিশেষ দিনের জন্য সম্পূর্ণ গ্রুমিং এবং স্টাইলিং পরিষেবা।" },
    { selector: ".service-card:nth-child(7) h3", en: "Tattoo & Other Services", bn: "ট্যাটু এবং অন্যান্য সেবাসমূহ" },
    { selector: ".service-card:nth-child(7) p", en: "Custom tattoos and additional premium grooming services.", bn: "কাস্টম ট্যাটু এবং অন্যান্য প্রিমিয়াম গ্রুমিং পরিষেবা।" },
    { selector: ".service-card:nth-child(8) h3", en: "Packages", bn: "প্যাকেজসমূহ" },
    { selector: ".service-card:nth-child(8) p", en: "Exclusive grooming packages offering a complete premium experience.", bn: "একচেটিয়া গ্রুমিং প্যাকেজ যা সম্পূর্ণ প্রিমিয়াম অভিজ্ঞতা প্রদান করে।" },
    { selector: ".service-link", en: "Book Service <i class=\"fas fa-arrow-right\"></i>", bn: "বুক সার্ভিস <i class=\"fas fa-arrow-right\"></i>" },

    // Full Pricing Section (index.html)
    { selector: ".pricing .subtitle", en: "Our Menu", bn: "আমাদের মেনু" },
    { selector: ".pricing .section-title h2", en: "Full Grooming Packages", bn: "সম্পূর্ণ গ্রুমিং প্যাকেজ" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-title", en: "<i class=\"fas fa-scissors text-gold\"></i> Hair Services", bn: "<i class=\"fas fa-scissors text-gold\"></i> চুলের সেবাসমূহ" },
    // Hair List 1
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(1) .pricing-item:nth-child(1) h4", en: "Classic Haircut", bn: "ক্লাসিক হেয়ারকাট" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(1) .pricing-item:nth-child(1) p", en: "Standard cut, wash & style", bn: "সাধারণ কাট, ওয়াশ এবং স্টাইল" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(1) .pricing-item:nth-child(2) h4", en: "Premium Skin Fade", bn: "প্রিমিয়াম স্কিন ফেড" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(1) .pricing-item:nth-child(2) p", en: "Zero fade with razor finish & hot towel", bn: "রেজর ফিনিশ এবং হট টাওয়েল সহ জিরো ফেড" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(1) .pricing-item:nth-child(3) h4", en: "Restyle / Scissor Cut", bn: "রিস্টাইল / কাঁচি কাট" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(1) .pricing-item:nth-child(3) p", en: "Complete transformation for long hair", bn: "লম্বা চুলের জন্য সম্পূর্ণ রূপান্তর" },
    // Hair List 2
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(2) .pricing-item:nth-child(1) h4", en: "Hair Color / Grey Blending", bn: "হেয়ার কালার / গ্রে ব্লেন্ডিং" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(2) .pricing-item:nth-child(1) p", en: "Natural looking color formulation", bn: "প্রাকৃতিক রঙের মিশ্রণ" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(2) .pricing-item:nth-child(2) h4", en: "Buzz Cut", bn: "বাজ কাট" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(2) .pricing-item:nth-child(2) p", en: "One grade all over with line up", bn: "লাইন আপ সহ সম্পূর্ণ এক গ্রেড" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(2) .pricing-item:nth-child(3) h4", en: "Kids Haircut (Under 12)", bn: "বাচ্চাদের হেয়ারকাট (১২ বছরের কম)" },
    { selector: ".pricing .menu-category:nth-child(2) .pricing-list:nth-child(2) .pricing-item:nth-child(3) p", en: "Gentle and stylish cut for children", bn: "বাচ্চাদের জন্য কোমল এবং আড়ম্বরপূর্ণ কাট" },

    { selector: ".pricing .menu-category:nth-child(3) .pricing-title", en: "<i class=\"fas fa-user-tie text-gold\"></i> Beard & Shave", bn: "<i class=\"fas fa-user-tie text-gold\"></i> দাড়ি এবং শেভ" },
    // Beard List 1
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(1) .pricing-item:nth-child(1) h4", en: "Beard Trim & Shape", bn: "দাড়ি ছাঁটাই এবং শেপিং" },
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(1) .pricing-item:nth-child(1) p", en: "Clipper and scissor work, shaping", bn: "ক্লিপার এবং কাঁচির কাজ, শেপিং" },
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(1) .pricing-item:nth-child(2) h4", en: "Luxury Hot Towel Shave", bn: "লাক্সারি হট টাওয়েল শেভ" },
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(1) .pricing-item:nth-child(2) p", en: "Traditional straight razor experience", bn: "ঐতিহ্যবাহী স্ট্রেইট রেজর অভিজ্ঞতা" },
    // Beard List 2
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(2) .pricing-item:nth-child(1) h4", en: "Beard Coloring", bn: "দাড়ির কালার" },
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(2) .pricing-item:nth-child(1) p", en: "Full color or grey blending", bn: "পূর্ণ রঙ বা গ্রে ব্লেন্ডিং" },
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(2) .pricing-item:nth-child(2) h4", en: "Mustache Trim", bn: "গোঁফ ছাঁটাই" },
    { selector: ".pricing .menu-category:nth-child(3) .pricing-list:nth-child(2) .pricing-item:nth-child(2) p", en: "Quick cleanup and wax styling", bn: "দ্রুত ক্লিনআপ এবং ওয়াক্স স্টাইলিং" },

    { selector: ".pricing .menu-category:nth-child(4) .pricing-title", en: "<i class=\"fas fa-spa text-gold\"></i> Spa Treatments", bn: "<i class=\"fas fa-spa text-gold\"></i> স্পা ট্রিটমেন্ট" },
    // Spa List 1
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(1) .pricing-item:nth-child(1) h4", en: "Signature Men's Facial", bn: "সিগনেচার মেনস ফেসিয়াল" },
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(1) .pricing-item:nth-child(1) p", en: "Deep cleanse, exfoliation, mask & massage", bn: "ডিপ ক্লিনজ, এক্সফোলিয়েশন, মাস্ক এবং ম্যাসাজ" },
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(1) .pricing-item:nth-child(2) h4", en: "Scalp Treatment", bn: "স্কাল্প ট্রিটমেন্ট" },
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(1) .pricing-item:nth-child(2) p", en: "Invigorating scrub and massage for hair health", bn: "চুলের স্বাস্থ্যের জন্য স্ক্রাব এবং ম্যাসাজ" },
    // Spa List 2
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(2) .pricing-item:nth-child(1) h4", en: "Express Facial", bn: "এক্সপ্রেস ফেসিয়াল" },
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(2) .pricing-item:nth-child(1) p", en: "Quick 30-minute refresh", bn: "দ্রুত ৩০-মিনিটের রিফ্রেশ" },
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(2) .pricing-item:nth-child(2) h4", en: "Waxing (Ears, Nose, Eyebrows)", bn: "ওয়াক্সিং (কান, নাক, ভ্রু)" },
    { selector: ".pricing .menu-category:nth-child(4) .pricing-list:nth-child(2) .pricing-item:nth-child(2) p", en: "Per area cleanup", bn: "প্রতি এলাকায় ক্লিনআপ" },

    { selector: ".pricing .menu-category:nth-child(5) .pricing-title", en: "<i class=\"fas fa-crown text-gold\"></i> Signature Packages", bn: "<i class=\"fas fa-crown text-gold\"></i> সিগনেচার প্যাকেজ" },
    // Packages List 1
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(1) .pricing-item:nth-child(1) h4", en: "The Gentleman", bn: "দ্য জেন্টলম্যান" },
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(1) .pricing-item:nth-child(1) p", en: "Classic Haircut + Beard Trim & Shape", bn: "ক্লাসিক হেয়ারকাট + দাড়ি ছাঁটাই এবং শেপিং" },
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(1) .pricing-item:nth-child(2) h4", en: "The Executive", bn: "দ্য এক্সিকিউটিভ" },
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(1) .pricing-item:nth-child(2) p", en: "Premium Fade + Luxury Hot Towel Shave", bn: "প্রিমিয়াম ফেড + লাক্সারি হট টাওয়েল শেভ" },
    // Packages List 2
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(2) .pricing-item:nth-child(1) h4", en: "The Royal Treatment", bn: "দ্য রয়্যাল ট্রিটমেন্ট" },
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(2) .pricing-item:nth-child(1) p", en: "Haircut, Hot Towel Shave, Mini Facial & Scalp Massage", bn: "হেয়ারকাট, হট টাওয়েল শেভ, মিনি ফেসিয়াল এবং স্কাল্প ম্যাসাজ" },
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(2) .pricing-item:nth-child(2) h4", en: "Groom's Special", bn: "গ্রুমস স্পেশাল" },
    { selector: ".pricing .menu-category:nth-child(5) .pricing-list:nth-child(2) .pricing-item:nth-child(2) p", en: "Complete styling, shave, facial & complimentary beverage", bn: "সম্পূর্ণ স্টাইলিং, শেভ, ফেসিয়াল এবং কমপ্লিমেন্টারি পানীয়" },

    { selector: ".pricing .btn-primary", en: "Book Your Appointment Now", bn: "এখনই আপনার অ্যাপয়েন্টমেন্ট বুক করুন" },

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

    // Removed obsolete menu.html specific translations
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
