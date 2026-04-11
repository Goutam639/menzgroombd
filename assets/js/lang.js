/* ==========================================================================
   lang.js — Menz Groom Premium Salon & Spa
   Attribute-based bilingual (EN / BN) translation engine.

   How it works:
   • Elements with [data-i18n="key"]         → textContent is replaced.
   • Elements with [data-i18n-html="key"]    → innerHTML is replaced (safe for
                                               inner tags like <span>, <br>, <i>).
   • Elements with [data-i18n-placeholder]   → placeholder attribute is replaced.
   ========================================================================== */

const t = {

    /* ── Navigation ─────────────────────────────────────────────────── */
    nav_home: { en: "Home", bn: "হোম" },
    nav_about: { en: "About", bn: "সম্পর্কে" },
    nav_services: { en: "Services", bn: "সেবাসমূহ" },
    nav_pricing: { en: "Pricing", bn: "মূল্যতালিকা" },
    nav_reviews: { en: "Reviews", bn: "রিভিউ" },
    nav_contact: { en: "Contact", bn: "যোগাযোগ" },
    nav_login: { en: "Log in", bn: "লগইন" },

    /* ── Hero Section ───────────────────────────────────────────────── */
    hero_sub: { en: "Premium Grooming Experience", bn: "প্রিমিয়াম গ্রুমিং অভিজ্ঞতা" },
    hero_main: {
        en: `Welcome To <br><span class="text-gold">Menz Groom Premium Salon &amp; Spa</span>`,
        bn: `মেনজ গ্রুম প্রিমিয়াম সেলুন এন্ড স্পা <br><span class="text-gold">-তে আপনাকে স্বাগতম</span>`,
    },
    hero_desc: {
        en: `Experience premium grooming in Savar, where style meets precision. At Menz Groom, we deliver expert haircuts, flawless facials, and modern makeovers designed to elevate your confidence and redefine your look. Step in, stand out, and own your style.`,
        bn: `সাভারে প্রিমিয়াম গ্রুমিংয়ের অভিজ্ঞতা নিন, যেখানে স্টাইলের সঙ্গে মেলে নিখুঁত যত্ন। Menz Groom-এ আমরা দিই দক্ষ হেয়ার কাট, পারফেক্ট ফেশিয়াল, আর আধুনিক মেকওভার—যা আপনার আত্মবিশ্বাস বাড়িয়ে তোলে এবং লুকে আনে নতুন মাত্রা। আসুন, নিজেকে আরও আকর্ষণীয়ভাবে উপস্থাপন করুন।
`,
    },
    hero_btn_book: { en: "Book Appointment", bn: "অ্যাপয়েন্টমেন্ট বুক করুন" },
    hero_btn_explore: { en: "Explore Services", bn: "সেবাগুলো দেখুন" },

    /* ── About Section ──────────────────────────────────────────────── */
    about_badge: { en: "Years of<br>Excellence", bn: "বছরের<br>উৎকর্ষতা" },
    about_sub: { en: "Our Journey", bn: "আমাদের যাত্রা" },
    about_h2: { en: "From Vision to Elegance", bn: "স্বপ্ন থেকে সফলতার গল্প" },
    about_p1: {
        en: "Welcome to our premium salon and spa, where luxury meets care. As the owner, I ensure exceptional service, expert care, and a relaxing experience. Our dedicated team is here to enhance your beauty and well-being with personalized attention and professionalism.",
        bn: "শূন্য থেকে শুরু করে, অনেক স্বপ্ন আর পরিশ্রমে আমরা সাভারে গড়ে তুলেছি আপনাদের প্রিয় মেনজ গ্রুম প্রিমিয়াম সেলুন অ্যান্ড স্পা। আমরা নিশ্চিত করছি আপনার জন্য সর্বোচ্চ মানের সেবা, যত্ন ও আরামদায়ক অভিজ্ঞতা। আমাদের দক্ষ টিম আপনার সৌন্দর্য ও আত্মবিশ্বাস বাড়াতে সর্বদা প্রস্তুত। আপনার সন্তুষ্টিই আমাদের প্রধান লক্ষ্য। আসুন, নিজেকে নতুনভাবে আবিষ্কার করুন।",
    },
    about_author: { en: "Md. Rajib Khan", bn: "মোঃ রাজীব খান" },
    about_desig: { en: "Founder, Menz Groom Premium Salon & Spa", bn: "প্রতিষ্ঠাতা, মেনজ গ্রুম প্রিমিয়াম সেলুন এন্ড স্পা" },

    about_author2: { en: "Jibon Robidas", bn: "জীবন রবিদাস" },
    about_desig2: { en: "Co-Founder, Menz Groom Premium Salon & Spa", bn: "সহ-প্রতিষ্ঠাতা, মেনজ গ্রুম প্রিমিয়াম সেলুন এন্ড স্পা" },

    about_p2: {
        en: "Welcome to our premium salon and spa. As co-owner, I am delighted to ensure you receive exceptional service in a relaxing, luxurious environment. Our skilled team is dedicated to your beauty, comfort, and satisfaction, making every visit a truly memorable experience.",
        bn: "আমি সহ-প্রতিষ্ঠাতা হিসেবে মেনজ গ্রুম প্রিমিয়াম সেলুন অ্যান্ড স্পা-তে আপনাকে আন্তরিক স্বাগতম জানাই। সাভারে আমরাই প্রতিশ্রুতি দিই সর্বোচ্চ মানের সেবা, যত্ন ও স্টাইল এর। আপনার আত্মবিশ্বাসকে নতুন উচ্চতায় নিতে আজই আমাদের সাথে যুক্ত হোন—নিজেকে সেরাভাবে উপস্থাপন করার এই যাত্রায় আপনিই আমাদের অনুপ্রেরণা।",
    },
    about_feat1: { en: "Master Barbers", bn: "মাস্টার হেয়ার ষ্টাইলিস্ট" },
    about_feat2: { en: "Premium Products", bn: "প্রিমিয়াম পণ্য" },
    about_feat3: { en: "Luxury Ambience", bn: "বিলাসবহুল পরিবেশ" },
    about_btn: { en: "We are just a call away!", bn: "আমরা মাত্র একটি কলের দূরত্বে!" },

    /* ── Services Section ───────────────────────────────────────────── */
    svc_sub: { en: "What We Offer", bn: "আমাদের সেবাসমূহ" },
    svc_h2: { en: "Our Premium Services", bn: "আমাদের প্রিমিয়াম সার্ভিস" },
    svc_link: {
        en: `See Details <i class="fas fa-arrow-right"></i>`,
        bn: `বিস্তারিত দেখুন <i class="fas fa-arrow-right"></i>`,
    },

    svc1_h3: { en: "Hair Cut & Shaving", bn: "হেয়ার কাট এবং শেভিং" },
    svc1_p: { en: "Precision cuts tailored to your face shape and personal style by our master barbers.", bn: "আমাদের মাস্টার হেয়ার ষ্টাইলিস্টদের দ্বারা আপনার মুখের আকৃতি অনুযায়ী নিখুঁত হেয়ারকাট।" },
    svc2_h3: { en: "Hair Color & Shining", bn: "হেয়ার কালার এবং শাইনিং" },
    svc2_p: { en: "Revitalizing scalp massages and professional coloring tailored for men's hair.", bn: "মাথার ত্বকের সতেজকারী ম্যাসাজ এবং পুরুষদের চুলের জন্য প্রফেশনাল হেয়ার কালার।" },
    svc3_h3: { en: "Hair Treatment & Rebonding", bn: "হেয়ার ট্রিটমেন্ট এবং রিবন্ডিং" },
    svc3_p: { en: "Restore the health and shine of your hair with our advanced treatments.", bn: "আমাদের উন্নত ট্রিটমেন্টের মাধ্যমে আপনার চুলের স্বাস্থ্য এবং ঔজ্জ্বল্য ফিরিয়ে আনুন।" },
    svc4_h3: { en: "Facial", bn: "ফেসিয়াল" },
    svc4_p: { en: "Rejuvenating facial treatments and massages to relieve stress and clear your skin.", bn: "মানসিক চাপ কমাতে এবং ত্বক পরিষ্কার করতে আরামদায়ক ফেসিয়াল ট্রিটমেন্ট ও ম্যাসাজ।" },
    svc5_h3: { en: "Spa Services", bn: "স্পা সার্ভিস" },
    svc5_p: { en: "Relaxing spa experiences designed to rejuvenate your body and mind.", bn: "আপনার শরীর ও মনকে সতেজ করতে আরামদায়ক স্পা অভিজ্ঞতা।" },
    svc6_h3: { en: "Groom Makeup & Attires", bn: "বর মেকআপ এবং পোশাক" },
    svc6_p: { en: "Complete grooming and styling services for your special day.", bn: "আপনার বিশেষ দিনের জন্য সম্পূর্ণ গ্রুমিং এবং স্টাইলিং পরিষেবা।" },
    svc7_h3: { en: "Tattoo & Other Services", bn: "ট্যাটু এবং অন্যান্য সেবাসমূহ" },
    svc7_p: { en: "Custom tattoos and additional premium grooming services.", bn: "কাস্টম ট্যাটু এবং অন্যান্য প্রিমিয়াম গ্রুমিং পরিষেবা।" },
    svc8_h3: { en: "Packages", bn: "প্যাকেজসমূহ" },
    svc8_p: { en: "Exclusive grooming packages offering a complete premium experience.", bn: "অনন্য গ্রুমিং প্যাকেজ যা সম্পূর্ণ প্রিমিয়াম অভিজ্ঞতা প্রদান করে।" },

    /* ── Pricing Header ─────────────────────────────────────────────── */
    pricing_sub: { en: "Our Menu", bn: "আমাদের মেনু" },
    pricing_h2: { en: "Our Exclusive Price Offerings", bn: "আমাদের এক্সক্লুসিভ মূল্য তালিকা" },
    pricing_btn: { en: "Book Your Appointment Now", bn: "এখনই আপনার অ্যাপয়েন্টমেন্ট বুক করুন" },

    /* ── Hair Cut & Shaving ─────────────────────────────────────────── */
    hcs_title: { en: `<i class="fas fa-scissors text-gold"></i> Hair Cut &amp; Shaving`, bn: `<i class="fas fa-scissors text-gold"></i> চুল কাটা এবং শেভিং` },

    hcs_1_h4: { en: "Standard Haircut", bn: "স্ট্যান্ডার্ড হেয়ারকাট" },
    hcs_1_p: { en: "Standard cut, wash &amp; style", bn: "স্ট্যান্ডার্ড কাট, ওয়াশ এবং স্টাইল" },
    hcs_2_h4: { en: "Gel Shaving", bn: "জেল শেভিং" },
    hcs_2_p: { en: "Smooth glide, irritation-free shaving experience", bn: "মসৃণ শেভ, জ্বালা-যন্ত্রণামুক্ত শেভিং অভিজ্ঞতা" },
    hcs_3_h4: { en: "Style Shaving", bn: "স্টাইল শেভিং" },
    hcs_3_p: { en: "Sharp look with precise shaving style", bn: "স্টাইলিশ এবং নিখুঁত শেভিং স্টাইল" },
    hcs_4_h4: { en: "Catalogue Hair Cut", bn: "ক্যাটালগ হেয়ারকাট" },
    hcs_4_p: { en: "Trendy styles from curated haircut catalogue", bn: "কিউরেটেড হেয়ারকাট ক্যাটালগ থেকে ট্রেন্ডি স্টাইল" },
    hcs_5_h4: { en: "Fire Hair Cut", bn: "ফায়ার হেয়ারকাট" },
    hcs_5_p: { en: "Unique fire styling for bold look", bn: "বোল্ড লুকের জন্য অনন্য ফায়ার স্টাইলিং" },
    hcs_6_h4: { en: "Baby Hair Cut", bn: "বেবি হেয়ারকাট" },
    hcs_6_p: { en: "Gentle and stylish cut for children", bn: "বাচ্চাদের জন্য কোমল এবং আড়ম্বরপূর্ণ কাট" },
    hcs_7_h4: { en: "Beard Trimming", bn: "দাড়ি ছাঁটাই" },
    hcs_7_p: { en: "Beard trimming and shaping", bn: "দাড়ি ট্রিমিং এবং শেপিং" },
    hcs_8_h4: { en: "Hair Shampoo Wash (Regular)", bn: "শ্যাম্পু হেয়ার ওয়াশ (রেগুলার)" },
    hcs_8_p: { en: "Regular hair wash with shampoo", bn: "শ্যাম্পু দিয়ে স্বাভাবিক চুল ধোয়া" },
    hcs_9_h4: { en: "Shampoo & Conditioner with Gel Setting", bn: "শ্যাম্পু এবং কন্ডিশনার সহ জেল সেটিং" },
    hcs_9_p: { en: "Hair wash with conditioner and gel setting", bn: "কন্ডিশনার এবং জেল সেটিং সহ চুল ধোয়া" },
    hcs_10_h4: { en: "Mango Shaving", bn: "ম্যাঙ্গো শেভিং" },
    hcs_10_p: { en: "Refreshing shaving experience with mango", bn: "আমের সুবাসে সতেজ শেভিং অভিজ্ঞতা" },

    /* ── Hair Color & Shining ───────────────────────────────────────── */
    hco_title: { en: `<i class="fas fa-spray-can text-gold"></i> Hair Color &amp; Shining`, bn: `<i class="fas fa-spray-can text-gold"></i> হেয়ার কালার এবং শাইনিং` },

    hco_1_h4: { en: "Bigen Hair Shining", bn: "বিগেন হেয়ার শাইনিং" },
    hco_1_p: { en: "Shine your hair with Bigen Natural Hair Color", bn: "বিগেন ন্যাচারাল হেয়ার কালার দিয়ে চুল চকচকে করুন" },
    hco_2_h4: { en: "Hi-Speed Hair Color", bn: "হাই-স্পিড হেয়ার কালার" },
    hco_2_p: { en: "Hair coloring with Hi-Speed Hair Color", bn: "হাই-স্পিড হেয়ার কালার দিয়ে রঙ করা" },
    hco_3_h4: { en: "Revlon Silk Shining", bn: "রেভলন সিল্ক শাইনিং" },
    hco_3_p: { en: "Hair coloring with Revlon Silk Shining", bn: "রেভলন সিল্ক শাইনিং দিয়ে হেয়ার কালার" },
    hco_4_h4: { en: "Burgundy Hair Color", bn: "বার্গান্ডি হেয়ার কালার" },
    hco_4_p: { en: "Coloring with Burgundy Hair Color", bn: "বার্গান্ডি হেয়ার কালার দিয়ে রঙ করা" },
    hco_5_h4: { en: "Fashionable Color Stick (Regular)", bn: "ফ্যাশনেবল কালার স্টিক (রেগুলার)" },
    hco_5_p: { en: "Coloring hair with Fashionable Color Stick (Regular)", bn: "ফ্যাশনেবল কালার স্টিক (রেগুলার) দিয়ে চুলে রঙ করা" },
    hco_6_h4: { en: "Fashionable Color Stick (Premium)", bn: "ফ্যাশনেবল কালার স্টিক (প্রিমিয়াম)" },
    hco_6_p: { en: "Coloring hair with Fashionable Color Stick (Premium)", bn: "ফ্যাশনেবল কালার স্টিক (প্রিমিয়াম) দিয়ে চুলে রঙ করা" },
    hco_7_h4: { en: "Garnier Black Hair Shining", bn: "গার্নিয়ার ব্ল্যাক হেয়ার শাইনিং" },
    hco_7_p: { en: "Hair coloring with Garnier Black Hair Shining", bn: "গার্নিয়ার ব্ল্যাক হেয়ার শাইনিং দিয়ে হেয়ার কালার" },
    hco_8_h4: { en: "Highlight Color Full Head", bn: "হাইলাইট কালার ফুল হেড" },
    hco_8_p: { en: "Hair coloring with Highlight Color Full Head", bn: "হাইলাইট কালার দিয়ে পুরো মাথায় রঙ করা" },
    hco_9_h4: { en: "Fancy Hair Color", bn: "ফ্যান্সি হেয়ার কালার" },
    hco_9_p: { en: "Hair coloring with Fancy Hair Color", bn: "ফ্যান্সি হেয়ার কালার দিয়ে রঙ করা" },

    /* ── Hair Treatment & Rebonding ─────────────────────────────────── */
    htr_title: { en: `<i class="fas fa-spa text-gold"></i> Hair Treatment &amp; Rebonding`, bn: `<i class="fas fa-spa text-gold"></i> হেয়ার ট্রিটমেন্ট এবং রিবন্ডিং` },

    htr_1_h4: { en: "Magic Hair Spa", bn: "ম্যাজিক হেয়ার স্পা" },
    htr_1_p: { en: "Hair spa treatment for hair health", bn: "চুলের স্বাস্থ্যের জন্য হেয়ার স্পা ট্রিটমেন্ট" },
    htr_2_h4: { en: "Hair Protein Treatment", bn: "হেয়ার প্রোটিন ট্রিটমেন্ট" },
    htr_2_p: { en: "Hair protein treatment for hair health", bn: "চুলের স্বাস্থ্যের জন্য হেয়ার প্রোটিন ট্রিটমেন্ট" },
    htr_3_h4: { en: "Hair Fall Treatment", bn: "হেয়ার ফল ট্রিটমেন্ট" },
    htr_3_p: { en: "Hair fall treatment for hair health", bn: "চুল পড়া রোধে হেয়ার ফল ট্রিটমেন্ট" },
    htr_4_h4: { en: "Hair Rebonding", bn: "হেয়ার রিবন্ডিং" },
    htr_4_p: { en: "Hair rebonding treatment for hair health", bn: "চুলের স্বাস্থ্যের জন্য হেয়ার রিবন্ডিং ট্রিটমেন্ট" },
    htr_5_h4: { en: "Hair Straightening", bn: "হেয়ার স্ট্রেটেনিং" },
    htr_5_p: { en: "Hair straightening treatment for hair health", bn: "চুলের স্বাস্থ্যের জন্য হেয়ার স্ট্রেটেনিং ট্রিটমেন্ট" },
    htr_6_h4: { en: "Hair Curling", bn: "হেয়ার কার্লিং" },
    htr_6_p: { en: "Hair curling treatment for hair health", bn: "চুলের স্বাস্থ্যের জন্য হেয়ার কার্লিং ট্রিটমেন্ট" },

    /* ── Facials ────────────────────────────────────────────────────── */
    fac_title: { en: `<i class="fa-regular fa-face-smile-beam text-gold"></i> Facials`, bn: `<i class="fa-regular fa-face-smile-beam text-gold"></i> ফেসিয়াল` },

    fac_1_h4: { en: "Milk Facial", bn: "মিল্ক ফেসিয়াল" },
    fac_1_p: { en: "Nourishing skin treatment with milk extracts", bn: "দুধের নির্যাস দিয়ে পুষ্টিকর ত্বক ট্রিটমেন্ট" },
    fac_2_h4: { en: "Shahnaz Herbal Facial", bn: "শাহনাজ হার্বাল ফেসিয়াল" },
    fac_2_p: { en: "Ayurvedic glow treatment by Shahnaz Herbals", bn: "শাহনাজ হার্বালস-এর আয়ুর্বেদিক গ্লো ট্রিটমেন্ট" },
    fac_3_h4: { en: "Shahnaz Gold Facial", bn: "শাহনাজ গোল্ড ফেসিয়াল" },
    fac_3_p: { en: "Luxury gold treatment for radiance", bn: "উজ্জ্বলতার জন্য বিলাসবহুল গোল্ড ট্রিটমেন্ট" },
    fac_4_h4: { en: "Shahnaz Rose Facial", bn: "শাহনাজ রোজ ফেসিয়াল" },
    fac_4_p: { en: "Refreshing rose treatment for natural glow", bn: "প্রাকৃতিক আভার জন্য সতেজকারী রোজ ট্রিটমেন্ট" },
    fac_5_h4: { en: "Shahnaz Pearl Facial", bn: "শাহনাজ পার্ল ফেসিয়াল" },
    fac_5_p: { en: "Pearl facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে পার্ল ফেসিয়াল ট্রিটমেন্ট" },
    fac_6_h4: { en: "Diamond Facial", bn: "ডায়মন্ড ফেসিয়াল" },
    fac_6_p: { en: "Diamond facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে ডায়মন্ড ফেসিয়াল ট্রিটমেন্ট" },
    fac_7_h4: { en: "Pearl White Toning Facial", bn: "পার্ল হোয়াইট টোনিং ফেসিয়াল" },
    fac_7_p: { en: "Pearl white toning facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে পার্ল হোয়াইট টোনিং ফেসিয়াল" },
    fac_8_h4: { en: "Bio-Hydra Facial (Regular)", bn: "বায়ো-হাইড্রা ফেসিয়াল (রেগুলার)" },
    fac_8_p: { en: "Deep hydration facial for radiant skin", bn: "উজ্জ্বল ত্বকের জন্য গভীর হাইড্রেশন ফেসিয়াল" },
    fac_9_h4: { en: "Bio-Hydra Facial (Premium)", bn: "বায়ো-হাইড্রা ফেসিয়াল (প্রিমিয়াম)" },
    fac_9_p: { en: "Premium hydration facial for radiant skin", bn: "উজ্জ্বল ত্বকের জন্য প্রিমিয়াম হাইড্রেশন ফেসিয়াল" },
    fac_10_h4: { en: "Signature Gold Facial", bn: "সিগনেচার গোল্ড ফেসিয়াল" },
    fac_10_p: { en: "Luxury gold facial for radiant glow", bn: "উজ্জ্বল আভার জন্য বিলাসবহুল গোল্ড ফেসিয়াল" },
    fac_11_h4: { en: "Bron Curing Facial", bn: "ব্রন কিউরিং ফেসিয়াল" },
    fac_11_p: { en: "Bron curing facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে ব্রন কিউরিং ফেসিয়াল" },
    fac_12_h4: { en: "Food Facial", bn: "ফুড ফেসিয়াল" },
    fac_12_p: { en: "Food facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে ফুড ফেসিয়াল ট্রিটমেন্ট" },
    fac_13_h4: { en: "Jojoba Facial", bn: "জোজোবা ফেসিয়াল" },
    fac_13_p: { en: "Jojoba facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে জোজোবা ফেসিয়াল ট্রিটমেন্ট" },
    fac_14_h4: { en: "Herbal Facial", bn: "হার্বাল ফেসিয়াল" },
    fac_14_p: { en: "Herbal facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে হার্বাল ফেসিয়াল ট্রিটমেন্ট" },
    fac_15_h4: { en: "Strawberry Facial", bn: "স্ট্রবেরি ফেসিয়াল" },
    fac_15_p: { en: "Strawberry facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে স্ট্রবেরি ফেসিয়াল ট্রিটমেন্ট" },
    fac_16_h4: { en: "Steam Facial", bn: "স্টিম ফেসিয়াল" },
    fac_16_p: { en: "Steam facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে স্টিম ফেসিয়াল ট্রিটমেন্ট" },
    fac_17_h4: { en: "Advanced Hydra Facial", bn: "অ্যাডভান্সড হাইড্রা ফেসিয়াল" },
    fac_17_p: { en: "Advanced hydra facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে অ্যাডভান্সড হাইড্রা ফেসিয়াল" },
    fac_18_h4: { en: "Carbon Facial (Per Session)", bn: "কার্বন ফেসিয়াল (প্রতি সেশন)" },
    fac_18_p: { en: "Carbon facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে কার্বন ফেসিয়াল ট্রিটমেন্ট" },
    fac_19_h4: { en: "BB Glow Facial", bn: "বিবি গ্লো ফেসিয়াল" },
    fac_19_p: { en: "BB glow facial treatment for skin brightening", bn: "ত্বক উজ্জ্বল করতে বিবি গ্লো ফেসিয়াল ট্রিটমেন্ট" },

    /* ── Spa Services ──────────────────────────────────────────────── */
    spa_title: { en: `<i class="fas fa-spa text-gold"></i> Spa Services`, bn: `<i class="fas fa-spa text-gold"></i> স্পা সার্ভিস` },

    spa_1_h4: { en: "Body Therapy (1 Hour)", bn: "বডি থেরাপি (এক ঘণ্টা)" },
    spa_1_p: { en: "Relaxing treatment to rejuvenate body and mind", bn: "শরীর ও মন সতেজ করতে আরামদায়ক ট্রিটমেন্ট" },
    spa_2_h4: { en: "Aroma Body Massage (1 Hour)", bn: "অ্যারোমা বডি ম্যাসাজ (এক ঘণ্টা)" },
    spa_2_p: { en: "Relaxing treatment to rejuvenate body and mind", bn: "শরীর ও মন সতেজ করতে আরামদায়ক ট্রিটমেন্ট" },
    spa_3_h4: { en: "Tissue Massage (1 Hour)", bn: "টিস্যু ম্যাসাজ (এক ঘণ্টা)" },
    spa_3_p: { en: "Relaxing treatment to rejuvenate body and mind", bn: "শরীর ও মন সতেজ করতে আরামদায়ক ট্রিটমেন্ট" },
    spa_4_h4: { en: "Steam Bath (30 Min.)", bn: "স্টিম বাথ (৩০ মিনিট)" },
    spa_4_p: { en: "Detoxifying steam bath for relaxation and cleansing", bn: "শিথিলায়ন ও পরিষ্কারের জন্য ডিটক্সিফাইং স্টিম বাথ" },

    /* ── Groom Makeup & Attire ──────────────────────────────────────── */
    gma_title: { en: `<i class="fa-solid fa-heart-circle-check text-gold"></i> Groom Makeup &amp; Attire`, bn: `<i class="fa-solid fa-heart-circle-check text-gold"></i> বর মেকআপ এবং পোশাক` },

    gma_1_h4: { en: "Groom Attire (Standard)", bn: "বর সাজ (স্ট্যান্ডার্ড)" },
    gma_1_p: { en: "Elegant outfit styling for modern groom look", bn: "আধুনিক বরের সাজের জন্য মার্জিত স্টাইলিং" },
    gma_2_h4: { en: "Groom Attire (Special)", bn: "বর সাজ (স্পেশাল)" },
    gma_2_p: { en: "Special outfit styling for modern groom look", bn: "আধুনিক বরের সাজের জন্য বিশেষ স্টাইলিং" },
    gma_3_h4: { en: "Groom Attire (Premium)", bn: "বর সাজ (প্রিমিয়াম)" },
    gma_3_p: { en: "Premium outfit styling for modern groom look", bn: "আধুনিক বরের সাজের জন্য প্রিমিয়াম স্টাইলিং" },
    gma_4_h4: { en: "Party Makeup", bn: "পার্টি মেকআপ" },
    gma_4_p: { en: "Professional makeup for party look", bn: "পার্টি লুকের জন্য প্রফেশনাল মেকআপ" },

    /* ── Tattoo & Other Services ────────────────────────────────────── */
    tos_title: { en: `<i class="fa-solid fa-ankh text-gold"></i> Tattoo &amp; Other Services`, bn: `<i class="fa-solid fa-ankh text-gold"></i> ট্যাটু এবং অন্যান্য সেবাসমূহ` },

    tos_1_h4: { en: "Mole Removing", bn: "মোল রিমুভিং" },
    tos_1_p: { en: "Mole removing treatment for skin", bn: "ত্বক থেকে মোল অপসারণ ট্রিটমেন্ট" },
    tos_2_h4: { en: "Tattoo Removal", bn: "ট্যাটু রিমুভাল" },
    tos_2_p: { en: "Tattoo removal from skin (per Inch)", bn: "ত্বক থেকে ট্যাটু অপসারণ (প্রতি ইঞ্চি)" },
    tos_3_h4: { en: "Tattoo Design (Regular)", bn: "ট্যাটু ডিজাইন (রেগুলার)" },
    tos_3_p: { en: "Tattoo design on skin (Per Inch)", bn: "ত্বকে ট্যাটু ডিজাইন (প্রতি ইঞ্চি)" },
    tos_4_h4: { en: "Tattoo Design (Radium)", bn: "ট্যাটু ডিজাইন (রেডিয়াম)" },
    tos_4_p: { en: "Radium Tattoo design on skin (Per Inch)", bn: "ত্বকে রেডিয়াম ট্যাটু ডিজাইন (প্রতি ইঞ্চি)" },
    tos_5_h4: { en: "Fair Polish (Both Hand, Face & Neck)", bn: "ফেয়ার পলিশ (উভয় হাত, মুখ ও গলা)" },
    tos_5_p: { en: "Fair Polish treatment for men", bn: "পুরুষদের জন্য ফেয়ার পলিশ ট্রিটমেন্ট" },
    tos_6_h4: { en: "Pedicure & Manicure (Regular)", bn: "পেডিকিউর এবং মেনিকিউর (রেগুলার)" },
    tos_6_p: { en: "Pedicure & Manicure treatment for men", bn: "পুরুষদের জন্য পেডিকিউর এবং মেনিকিউর ট্রিটমেন্ট" },
    tos_7_h4: { en: "Ear Piercing", bn: "কান ফোঁড়ানো" },
    tos_7_p: { en: "Ear piercing for men (Per Ear)", bn: "পুরুষদের কান ফোঁড়ানো (প্রতি কান)" },
    tos_8_h4: { en: "Eyebrow Pluck", bn: "ভ্রু প্লাক" },
    tos_8_p: { en: "Eyebrow Pluck for men", bn: "পুরুষদের ভ্রু প্লাক" },

    /* ── Signature Packages ─────────────────────────────────────────── */
    pkg_title: { en: `<i class="fas fa-crown text-gold"></i> Signature Packages`, bn: `<i class="fas fa-crown text-gold"></i> সিগনেচার প্যাকেজ` },

    pkg_1_h4: { en: "Package- 01", bn: "প্যাকেজ- ০১" },
    pkg_1_p: { en: "Haircut + Beard Cut + Hair wash with Setup + Diamond Facial + Lips Care", bn: "হেয়ারকাট + দাড়ি কাটা + সেটাপসহ হেয়ার ওয়াশ + ডায়মন্ড ফেসিয়াল + লিপস কেয়ার" },
    pkg_2_h4: { en: "Package- 02", bn: "প্যাকেজ- ০২" },
    pkg_2_p: { en: "Haircut + Beard Cut + Hair wash with Setup + Garnier Black Natural Shining + Food Facial + Lips Care", bn: "হেয়ারকাট + দাড়ি কাটা + সেটাপসহ হেয়ার ওয়াশ + গার্নিয়ার ব্ল্যাক ন্যাচারাল শাইনিং + ফুড ফেসিয়াল + লিপস কেয়ার" },
    pkg_3_h4: { en: "Package- 03", bn: "প্যাকেজ- ০৩" },
    pkg_3_p: { en: "Haircut + Beard Cut + Hair wash with Setup + Milk Facial + Regular Pedicure &amp; Menicure + Lips Care", bn: "হেয়ারকাট + দাড়ি কাটা + সেটাপসহ হেয়ার ওয়াশ + মিল্ক ফেসিয়াল + রেগুলার পেডিকিউর ও মেনিকিউর + লিপস কেয়ার" },
    pkg_4_h4: { en: "Package- 04", bn: "প্যাকেজ- ০৪" },
    pkg_4_p: { en: "Haircut + Beard Cut + Hair wash with Setup + Mark Gel Shining + Gold Facial + Lips Care", bn: "হেয়ারকাট + দাড়ি কাটা + সেটাপসহ হেয়ার ওয়াশ + মার্ক জেল শাইনিং + গোল্ড ফেসিয়াল + লিপস কেয়ার" },
    pkg_5_h4: { en: "Premium Package- 05", bn: "প্রিমিয়াম প্যাকেজ- ০৫" },
    pkg_5_p: { en: "Haircut + Beard Cut + Hair wash + Lip Care + Bigen Hair Shining + Hair Spa + Advanced Hydra Facial + Aroma Body Massage (1 Hour) + Pedicure &amp; Manicure (Regular) + Steam Bath (30 Min.)", bn: "হেয়ারকাট + দাড়ি কাটা + হেয়ার ওয়াশ + লিপ কেয়ার + বিগেন হেয়ার শাইনিং + হেয়ার স্পা + অ্যাডভান্সড হাইড্রা ফেসিয়াল + অ্যারোমা বডি ম্যাসাজ (১ ঘণ্টা) + পেডিকিউর ও মেনিকিউর (রেগুলার) + স্টিম বাথ (৩০ মিনিট)" },
    pkg_6_h4: { en: "Pedicure & Manicure (Regular)", bn: "পেডিকিউর এবং মেনিকিউর (রেগুলার)" },
    pkg_6_p: { en: "Pedicure & Manicure treatment for men", bn: "পুরুষদের জন্য পেডিকিউর এবং মেনিকিউর ট্রিটমেন্ট" },
    pkg_7_h4: { en: "Pedicure & Manicure with Fair Polish", bn: "ফেয়ার পলিশসহ পেডিকিউর এবং মেনিকিউর" },
    pkg_7_p: { en: "Pedicure & Manicure with Fair Polish treatment for men", bn: "পুরুষদের জন্য ফেয়ার পলিশসহ পেডিকিউর এবং মেনিকিউর ট্রিটমেন্ট" },

    /* ── Testimonials ───────────────────────────────────────────────── */
    tst_sub: { en: "Testimonials", bn: "গ্রাহক রিভিউ" },
    tst_h2: { en: "Customers Say About Us", bn: "আমাদের গ্রাহকরা যা বলেন" },

    /* ── Team Section ───────────────────────────────────────────────── */
    team_sub: { en: "Our Team", bn: "আমাদের টিম" },
    team_h2: { en: "Meet Our Grooming Experts", bn: "আমাদের গ্রুমিং বিশেষজ্ঞদের সাথে পরিচিত হোন" },
    team_name1: { en: "Nabila Tabassum", bn: "নাবিলা তাবাসসুম" },
    team_role1: { en: "Master Hair Styler", bn: "মাস্টার হেয়ার ষ্টাইলার" },
    team_name2: { en: "Md. Shafin Rahman", bn: "মোঃ শাফিন রহমান" },
    team_role2: { en: "Senior Stylist", bn: "সিনিয়র স্টাইলিস্ট" },
    team_name3: { en: "Gloria Halder", bn: "গ্লোরিয়া হালদার" },
    team_role3: { en: "Facial Expert", bn: "ফেসিয়াল বিশেষজ্ঞ" },
    team_name4: { en: "Binoy Kumar Das", bn: "বিনয় কুমার দাস" },
    team_role4: { en: "Color Specialist", bn: "কালার স্পেশালিস্ট" },

    /* ── Contact Section ────────────────────────────────────────────── */
    contact_sub: { en: "Get In Touch", bn: "যোগাযোগ করুন" },
    contact_h2: { en: "Contact Us", bn: "আমাদের সাথে থাকুন" },
    contact_btn: { en: "Send Message", bn: "বার্তা পাঠান" },
    contact_ph_name: { en: "Your Name", bn: "আপনার নাম" },
    contact_ph_phone: { en: "Mobile Number", bn: "আপনার মোবাইল নম্বর" },
    contact_ph_subject: { en: "Subject", bn: "বিষয়" },
    contact_ph_msg: { en: "Your Message", bn: "আপনার বার্তা" },

    /* ── Footer ─────────────────────────────────────────────────────── */
    footer_locations: {
        en: "Our Locations",
        bn: "আমাদের শাখাসমূহ"
    },
    footer_touch: {
        en: "Stay in Touch",
        bn: "আমাদের সাথে থাকুন"
    },
    call_us: {
        en: "Call Us",
        bn: "কল করুন"
    },
    email_us: {
        en: "Email Us",
        bn: "ইমেল করুন"
    },
    follow_us: {
        en: "Follow Us On Social Media",
        bn: "আমাদের সোশ্যাল মিডিয়া"
    },
    footer_desc1: {
        en: "Step into Menz Groom Premium Salon & Spa, your trusted grooming destination in Savar. We warmly invite you to enjoy expert haircuts, relaxing spa treatments, and premium skincare services.",
        bn: "সাভারে আপনার বিশ্বস্ত গ্রুমিং গন্তব্য, মেঞ্জ গ্রুম প্রিমিয়াম স্যালন অ্যান্ড স্পা-তে চলে আসুন। আমরা আপনাকে বিশেষজ্ঞের হাতে চুল কাটা, আরামদায়ক স্পা ট্রিটমেন্ট এবং প্রিমিয়াম স্কিনকেয়ার পরিষেবা উপভোগ করার জন্য আন্তরিকভাবে আমন্ত্রণ জানাচ্ছি।"
    },
    footer_desc2: {
        en: "Experience personalized care, modern style, and ultimate relaxation designed to refresh your look and boost your confidence.",
        bn: "আমাদের বিশেষজ্ঞ যত্ন, আধুনিক স্টাইল এবং আরামদায়ক পরিবেশ আপনার চেহারাকে সতেজ করে তুলবে এবং আত্মবিশ্বাস বাড়িয়ে দেবে।"
    },
    footer_desc3: {
        en: "We are waiting for you!!",
        bn: "আমরা আপনার জন্য অপেক্ষা করছি!!"
    },
    store_name1: {
        en: "Flagship Outlet",
        bn: "ফ্ল্যাগশিপ আউটলেট"
    },
    store_address1: {
        en: "B-116/1, Shikder Tower (Ground Floor) Shop#B-04, Behind of Savar City Center, Savar, Dhaka-1340",
        bn: "বি-১১৬/১, শিকদার টাওয়ার (গ্রাউন্ড ফ্লোর) শপ#বি-০৪, সাভার সিটি সেন্টারের পিছনে, সাভার, ঢাকা-১৩৪০"
    },
    store_service_hour1: {
        en: "Service Hour: 10:00 AM - 12:00 AM",
        bn: "সার্ভিস আওয়ার: সকাল ১০:০০ - রাত ১২:০০"
    },
    store_open_day1: {
        en: "Everyday Open",
        bn: "প্রতিদিন খোলা"
    },
    store_name2: {
        en: "City Center Outlet",
        bn: "সিটি সেন্টার আউটলেট"
    },
    store_address2: {
        en: "Shop#3039, Level#04 (Lift-03), Savar City Center, Bus Stand, Savar, Dhaka-1340",
        bn: "দোকান নং#৩০৩৯, লেভেল#০৪ (লিফট-০3), সাভার সিটি সেন্টার, বাস স্ট্যান্ড, সাভার, ঢাকা-১৩৪০"
    },
    store_service_hour2: {
        en: "Service Hour: 11:00 AM - 09:00 PM",
        bn: "সার্ভিস আওয়ার: সকাল ১১:০০ - রাত ০৯:০০"
    },
    store_closed_day2: {
        en: "Saturday Closed",
        bn: "শনিবার বন্ধ"
    },

    /* ── Privacy Policy ──────────────────────────────────────────────── */
    footer_privacy: {
        en: "Privacy Policy",
        bn: "গোপনীয়তা নীতিমালা"
    },
    privacy_title: {
        en: "Privacy & Policy",
        bn: "গোপনীয়তা এবং নীতিমালা"
    },
    privacy_intro: {
        en: "At Menz Groom Premium Salon & Spa, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.",
        bn: "মেঞ্জ গ্রুম প্রিমিয়াম স্যালন অ্যান্ড স্পা-তে আমরা আপনার গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতিমালা ব্যাখ্যা করে যে আপনি যখন আমাদের ওয়েবসাইট ব্যবহার করেন তখন আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ করি, ব্যবহার করি এবং সুরক্ষিত রাখি।"
    },
    privacy_sect1_title: {
        en: "1. Information We Collect",
        bn: "১. আমরা যে তথ্য সংগ্রহ করি"
    },
    privacy_sect1_p: {
        en: "We may collect personal information such as your name, mobile number, and email address when you book an appointment, fill out a contact form, or use our login services.",
        bn: "আপনি যখন অ্যাপয়েন্টমেন্ট বুক করেন, আমাদের কন্টাক্ট ফরম পূরণ করেন বা আমাদের লগইন পরিষেবাগুলি ব্যবহার করেন তখন আমরা আপনার নাম, মোবাইল নম্বর এবং ইমেল ঠিকানার মতো ব্যক্তিগত তথ্য সংগ্রহ করতে পারি।"
    },
    privacy_sect2_title: {
        en: "2. How We Use Your Information",
        bn: "২. আমরা কীভাবে আপনার তথ্য ব্যবহার করি"
    },
    privacy_sect2_p: {
        en: "We use your information to manage your appointments, respond to your inquiries, improve our grooming services, and provide you with a more personalized experience.",
        bn: "আমরা আপনার তথ্যগুলি অ্যাপয়েন্টমেন্ট ম্যানেজমেন্ট, আপনার জিজ্ঞাসার উত্তর প্রদান, আমাদের গ্রুমিং পরিষেবাগুলির মান উন্নয়ন এবং আপনাকে আরও ব্যক্তিগত অভিজ্ঞতা প্রদানের জন্য ব্যবহার করি।"
    },
    privacy_sect3_title: {
        en: "3. Data Security",
        bn: "৩. ডেটা নিরাপত্তা"
    },
    privacy_sect3_p: {
        en: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
        bn: "আমরা আপনার ব্যক্তিগত তথ্য অননুমোদিত অ্যাক্সেস, পরিবর্তন বা প্রকাশ থেকে রক্ষা করার জন্য উপযুক্ত নিরাপত্তা ব্যবস্থা গ্রহণ করি।"
    },
    privacy_sect4_title: {
        en: "4. Third-Party Services",
        bn: "৪. থার্ড-পার্টি পরিষেবা"
    },
    privacy_sect4_p: {
        en: "Our website may use third-party services like Google Analytics and Facebook Plugins to improve user experience. These services may collect information in accordance with their own privacy policies.",
        bn: "আমাদের ওয়েবসাইট ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে গুগল অ্যানালিটিক্স এবং ফেসবুক প্লাগইনগুলির মতো থার্ড-পার্টি পরিষেবা ব্যবহার করতে পারে। এই পরিষেবাগুলি তাদের নিজস্ব গোপনীয়তা নীতিমালা অনুযায়ী তথ্য সংগ্রহ করতে পারে।"
    },
    privacy_sect5_title: {
        en: "5. Cookies",
        bn: "৫. কুকিজ"
    },
    privacy_sect5_p: {
        en: "We use cookies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings.",
        bn: "আমরা আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে এবং ওয়েবসাইট ট্র্যাফিক বিশ্লেষণ করতে কুকিজ ব্যবহার করি। আপনি চাইলে আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকিজ নিষ্ক্রিয় করতে পারেন।"
    },
    privacy_sect6_title: {
        en: "6. Updates to Policy",
        bn: "৬. নীতিমালার পরিবর্তন"
    },
    privacy_sect6_p: {
        en: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
        bn: "আমরা সময়ে সময়ে এই গোপনীয়তা নীতিমালা আপডেট করতে পারি। যে কোনও পরিবর্তন এই পৃষ্ঠায় নতুন ডেট সহ পোস্ট করা হবে।"
    },
    privacy_contact: {
        en: "If you have any questions about our Privacy Policy, please contact us at:",
        bn: "আমাদের গোপনীয়তা নীতিমালা সম্পর্কে আপনার কোনও প্রশ্ন থাকলে, দয়া করে আমাদের সাথে যোগাযোগ করুন:"
    }
};


/* ==========================================================================
   Translation Engine
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {

    const langBtns = document.querySelectorAll(".lang-btn");
    let currentLang = localStorage.getItem("menzGroomLang") || "en";

    /* ── Inject smooth-transition styles ─────────────────────────────── */
    const style = document.createElement("style");
    style.textContent = `
        .lang-switching { transition: opacity 0.18s ease; opacity: 0.6; }
    `;
    document.head.appendChild(style);

    /* ── Core apply function ─────────────────────────────────────────── */
    function applyLanguage(lang) {

        // ① Smooth fade
        document.body.classList.add("lang-switching");

        // ② Bengali font body class
        document.body.classList.toggle("lang-bn", lang === "bn");

        // ③ Active button highlight
        langBtns.forEach(btn =>
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang)
        );

        // ④ Plain-text keys → textContent (safe, no XSS risk)
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (t[key] && t[key][lang] !== undefined) {
                el.textContent = t[key][lang];
            }
        });

        // ⑤ HTML keys → innerHTML (icons, <br>, nested spans)
        document.querySelectorAll("[data-i18n-html]").forEach(el => {
            const key = el.getAttribute("data-i18n-html");
            if (t[key] && t[key][lang] !== undefined) {
                el.innerHTML = t[key][lang];
            }
        });

        // ⑥ Placeholder keys (inputs / textareas)
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (t[key] && t[key][lang] !== undefined) {
                el.placeholder = t[key][lang];
            }
        });

        // ⑦ Restore opacity after brief fade
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.body.classList.remove("lang-switching");
            });
        });
    }

    /* ── Initial render ──────────────────────────────────────────────── */
    applyLanguage(currentLang);

    /* ── Button click handler ────────────────────────────────────────── */
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selected = btn.getAttribute("data-lang");
            if (selected !== currentLang) {
                currentLang = selected;
                localStorage.setItem("menzGroomLang", selected);
                applyLanguage(selected);
            }
        });
    });
});
