// All editable site content for Webro Studios lives here.
export const site = {
  name: "Webro Studios",
  tagline: "Student-led product & web development studio from Dibrugarh, Assam.",
  email: "help@webrostudios.in",
  phone: "+91 60032 75519",
  whatsapp: "https://wa.me/916003275519",
  location: "Dibrugarh, Assam, India",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
  founderSite: "https://www.gauravdeori.in",
  // Contact + newsletter forms post here (FormSubmit). The first submission sends a
  // one-time activation email to this inbox — click the link in it to start receiving messages.
  // After activating, you can swap the email for the random alias FormSubmit gives you.
  formEndpoint: "https://formsubmit.co/ajax/deorigaurav1400@gmail.com",
  // Founder's profiles — swap in studio accounts here when they exist.
  socials: {
    github: "https://github.com/Gauravdeori",
    instagram: "https://www.instagram.com/_gauravdeori__/",
    linkedin: "https://www.linkedin.com/in/gaurav-deori-759214304",
    x: "https://x.com/gauravdeori",
  },
};

// Homepage sections — the navbar scrolls to these on "/" and the side rail tracks them.
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const pageLinks = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const heroChips = ["⚡ Web Apps", "📱 PWA", "◈ Platforms", "</> Custom Dev", "🎨 UI/UX"];

export const clients = [
  "theposterzz",
  "Present IQ",
  "Poba Express",
  "Golden Stay",
  "Echoes of Poba",
  "WasteWise · IITG TIH",
  "Amar Adda",
  "GDG On Campus DU",
  "CTII · DU",
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  points: string[];
  included: string[];
  tech: string[];
};
export const services: Service[] = [
  {
    slug: "web-development",
    icon: "code",
    title: "Web Development",
    desc: "Modern, responsive, high-performance websites & web apps.",
    points: [
      "Responsive, fast-loading sites",
      "SEO & analytics setup",
      "CMS so you can edit content",
    ],
    included: [
      "Custom design & development",
      "Domain, hosting & SSL",
      "Performance optimisation",
      "Contact forms & integrations",
    ],
    tech: ["Next.js", "React", "Tailwind", "Node.js"],
  },
  {
    slug: "app-development",
    icon: "smartphone",
    title: "App Development",
    desc: "Cross-platform mobile apps & PWAs that solve real problems.",
    points: [
      "Android & iOS from one codebase",
      "Installable PWAs",
      "Push notifications & offline mode",
    ],
    included: [
      "App architecture & UX",
      "Backend & admin panel",
      "Store submission help",
      "Crash & analytics monitoring",
    ],
    tech: ["React Native", "Flutter", "Firebase", "PWA"],
  },
  {
    slug: "product-design",
    icon: "pen-tool",
    title: "Product Design (UI/UX)",
    desc: "Clean, user-focused interfaces, wireframes & prototypes.",
    points: ["User flows & wireframes", "High-fidelity UI in Figma", "Clickable prototypes"],
    included: [
      "Research & competitor review",
      "Design system",
      "Usability feedback round",
      "Dev-ready handoff",
    ],
    tech: ["Figma", "FigJam", "Adobe"],
  },
  {
    slug: "ecommerce",
    icon: "shopping-cart",
    title: "E-commerce Solutions",
    desc: "Online stores with payments, inventory & order tracking.",
    points: ["UPI, cards & COD payments", "Inventory & order dashboard", "WhatsApp order updates"],
    included: [
      "Store design & setup",
      "Product catalogue upload",
      "Payment gateway integration",
      "Shipping & tracking",
    ],
    tech: ["Next.js", "Shopify", "Razorpay", "Supabase"],
  },
  {
    slug: "brand-media",
    icon: "rocket",
    title: "Brand & Media",
    desc: "Logos, brand identity, social creatives & visual content.",
    points: ["Logo & brand identity", "Social media creatives", "Posters & print-ready files"],
    included: [
      "Logo concepts & revisions",
      "Colour & type guide",
      "Social templates",
      "Launch creative kit",
    ],
    tech: ["Figma", "Canva", "Adobe"],
  },
  {
    slug: "tech-consulting",
    icon: "lightbulb",
    title: "Tech Consulting",
    desc: "Idea validation, MVP planning & scalable architecture.",
    points: ["Idea & market validation", "MVP scope & roadmap", "Tech stack & cost planning"],
    included: [
      "Discovery workshop",
      "Feature prioritisation",
      "Architecture document",
      "Hiring & vendor guidance",
    ],
    tech: ["Notion", "Miro", "Cloud"],
  },
];

export const whyUs = [
  { icon: "zap", title: "Fast Delivery", desc: "Most websites live in 2–4 weeks." },
  {
    icon: "package",
    title: "All-in-One",
    desc: "Domain, hosting, SEO, security & support bundled.",
  },
  {
    icon: "indian-rupee",
    title: "Starts at ₹5,000",
    desc: "Honest pricing built for startups & small businesses.",
  },
  { icon: "cpu", title: "Modern Tech", desc: "Next.js, React, Tailwind, Node, Firebase." },
  { icon: "search", title: "SEO-Ready", desc: "Optimised for Google from day one." },
  { icon: "life-buoy", title: "Ongoing Support", desc: "We stay with you after launch." },
];

export type ProjectCategory = "Web" | "App" | "E-commerce" | "AI & IoT";
export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  desc: string;
  tech: string[];
  url: string;
  /** Screenshot base name in /public/projects — `<shot>.webp` (desktop) and `<shot>-mobile.webp`. */
  shot: string;
  client: string;
  problem: string;
  solution: string;
  highlights: string[];
  results?: { label: string; value: number; suffix: string }[];
};

export const projects: Project[] = [
  {
    slug: "theposterzz",
    title: "theposterzz",
    category: "E-commerce",
    url: "https://www.theposterzz.in",
    shot: "theposterzz",
    desc: "Premium matte poster store for cinephiles, anime & pop-culture fans.",
    tech: ["Next.js", "Payments", "SEO"],
    client: "theposterzz (parent brand)",
    problem: "The old store was slow on mobile and lost buyers at checkout.",
    solution:
      "Rebuilt the store for speed and conversions with a lighter storefront, room-based shopping and a simpler checkout.",
    highlights: [
      "Themed & room-based collections",
      "Custom poster orders",
      "Wishlist, accounts & dark mode",
      "Limited numbered drops",
    ],
    results: [
      { label: "Faster load time", value: 3, suffix: "x" },
      { label: "More orders", value: 60, suffix: "%" },
      { label: "More traffic", value: 2, suffix: "x" },
    ],
  },
  {
    slug: "present-iq",
    title: "Present IQ",
    category: "App",
    url: "https://www.present-iq.in",
    shot: "present-iq",
    desc: "Role-based smart attendance platform for schools, colleges & universities.",
    tech: ["React", "Firebase", "PWA"],
    client: "Incubated at CTII, Dibrugarh University",
    problem: "Paper attendance wasted class time and made reports slow and error-prone.",
    solution:
      "A web + PWA platform with one-tap attendance, role-based dashboards for admins, teachers and students, and automatic reports.",
    highlights: [
      "Admin, teacher & student roles",
      "Installable PWA",
      "Live charts & exports",
      "Automated reports",
    ],
    results: [
      { label: "Minutes saved / class", value: 10, suffix: "+" },
      { label: "Students onboarded", value: 1000, suffix: "+" },
      { label: "Reports automated", value: 100, suffix: "%" },
    ],
  },
  {
    slug: "poba-express",
    title: "Poba Express",
    category: "App",
    url: "https://www.pobaexpress.in",
    shot: "poba-express",
    desc: "Food, cake & medicine delivery platform for Jonai, Assam.",
    tech: ["React", "Node", "PWA"],
    client: "Local delivery startup, Jonai",
    problem: "Orders came in over phone calls and were hard to track.",
    solution:
      "An installable ordering app with restaurant, bakery and pharmacy categories, search, prescription upload and live doorstep tracking.",
    highlights: [
      "Food, cakes & medicines",
      "Installable app",
      "Prescription upload",
      "Live order tracking",
    ],
    results: [
      { label: "Orders handled online", value: 80, suffix: "%" },
      { label: "Categories", value: 3, suffix: "" },
      { label: "Avg. order time (min)", value: 2, suffix: "" },
    ],
  },
  {
    slug: "golden-stay",
    title: "Golden Stay",
    category: "Web",
    url: "https://www.goldenstay.space",
    shot: "golden-stay",
    desc: "Direct-booking homestay website in Maligaon, Guwahati.",
    tech: ["Next.js", "Payments", "Maps"],
    client: "Golden Stay Homestay",
    problem: "Guests could only book through third-party apps that charged high commission.",
    solution:
      "A direct-booking website with room listings, online payment, a gallery, nearby attractions and WhatsApp enquiries.",
    highlights: [
      "Book & pay online",
      "WhatsApp enquiries",
      "Room gallery & amenities",
      "Guest accounts",
    ],
    results: [
      { label: "Direct enquiries", value: 40, suffix: "%" },
      { label: "Lighthouse score", value: 95, suffix: "" },
      { label: "Weeks to launch", value: 2, suffix: "" },
    ],
  },
  {
    slug: "wastewise",
    title: "WasteWise",
    category: "AI & IoT",
    url: "https://waste-wise-psi.vercel.app/",
    shot: "wastewise",
    desc: "IoT food-waste monitoring for hostels & mess kitchens.",
    tech: ["React", "ESP32", "Cloud"],
    client: "Technology Innovation Hub, IIT Guwahati",
    problem: "Hostel kitchens had no reliable way to measure how much food was being thrown away.",
    solution:
      "Wi-Fi load-cell scales stream every weighing to a live cloud dashboard with cost, carbon and trend analytics.",
    highlights: [
      "Automated IoT weighing",
      "Real-time dashboard",
      "Cost & carbon analytics",
      "Hostel TV display mode",
    ],
  },
  {
    slug: "echoes-of-poba",
    title: "Echoes of Poba",
    category: "Web",
    url: "https://www.echoesofpoba.in",
    shot: "echoes-of-poba",
    desc: "Website for a conservation group protecting Poba Reserve Forest.",
    tech: ["React", "Tailwind"],
    client: "Echoes of Poba (community initiative)",
    problem:
      "Volunteers and supporters had no single place to learn about the mission and get involved.",
    solution:
      "A story-led site covering the mission, events, gallery and updates, with clear calls to volunteer.",
    highlights: [
      "Mission & vision pages",
      "Events & updates",
      "Photo gallery",
      "Volunteer sign-up",
    ],
  },
  {
    slug: "amar-adda",
    title: "Amar Adda",
    category: "E-commerce",
    url: "https://www.amaaradda.shop/",
    shot: "amar-adda",
    desc: "Online ordering for a street-food kitchen — chowmein, fried rice & more.",
    tech: ["React", "Cart", "WhatsApp"],
    client: "Amar Adda street-food kitchen",
    problem: "Customers had to call or walk in to order.",
    solution:
      "An appetising menu site with a cart and one-tap WhatsApp ordering for doorstep delivery.",
    highlights: ["Visual menu", "Cart & checkout", "WhatsApp ordering", "Mobile-first"],
  },
  {
    slug: "qr-shield-ai",
    title: "QR Shield AI",
    category: "AI & IoT",
    url: "https://qr-shield-ai.vercel.app/",
    shot: "qr-shield-ai",
    desc: "AI-powered QR security scanner that flags phishing links.",
    tech: ["React", "AI", "Camera API"],
    client: "In-house product",
    problem:
      "QR codes hide their destination, which makes them an easy way to deliver phishing links.",
    solution:
      "Scan with your camera or paste a URL — QR Shield analyses the link and rates it safe, suspicious or dangerous.",
    highlights: ["Live camera scanning", "Manual URL check", "Risk scoring", "Scan statistics"],
  },
  {
    slug: "tapplay",
    title: "TapPlay",
    category: "Web",
    url: "https://tapplayhub.vercel.app/",
    shot: "tapplay",
    desc: "Mini-games hub with a dozen quick browser games and a leaderboard.",
    tech: ["React", "Canvas", "PWA"],
    client: "In-house product",
    problem: "Wanted a fast, ad-free place to play quick games on any device.",
    solution:
      "A hub of 12+ instant-play games — Snake, Brick Breaker, Memory Flip and more — with a leaderboard and light/dark themes.",
    highlights: ["12+ instant games", "Leaderboard", "Light & dark themes", "Works on phones"],
  },
  {
    slug: "gaurav-deori",
    title: "Gaurav Deori — Portfolio",
    category: "Web",
    url: "https://www.gauravdeori.in",
    shot: "gauravdeori",
    desc: "A retro desktop-OS style developer portfolio.",
    tech: ["React", "Pixel Art", "Animation"],
    client: "Personal brand",
    problem: "A plain résumé site doesn't stand out to recruiters and clients.",
    solution:
      "A playful retro-desktop portfolio with windows, a taskbar and pixel art that shows projects, experience and contact details.",
    highlights: [
      "Retro OS interface",
      "Projects & experience",
      "Downloadable CV",
      "Custom pixel art",
    ],
  },
];

export const process = [
  {
    n: "01",
    icon: "search",
    title: "Discover",
    desc: "Understand your goals, users & problem.",
    time: "2–3 days",
  },
  {
    n: "02",
    icon: "pen-tool",
    title: "Design",
    desc: "Wireframes & pixel-perfect UI.",
    time: "1 week",
  },
  {
    n: "03",
    icon: "code",
    title: "Build",
    desc: "Develop, test & iterate rapidly.",
    time: "1–3 weeks",
  },
  {
    n: "04",
    icon: "rocket",
    title: "Launch",
    desc: "Deploy, SEO setup & go live.",
    time: "1–2 days",
  },
  {
    n: "05",
    icon: "trending-up",
    title: "Grow",
    desc: "Support, updates & scaling.",
    time: "ongoing",
  },
];

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { group: "Backend", items: ["Node.js", "Express", "Firebase", "Supabase", "MongoDB"] },
  { group: "Mobile", items: ["React Native", "Flutter", "PWA"] },
  { group: "Design", items: ["Figma", "Canva", "Adobe"] },
  { group: "Deploy", items: ["Vercel", "Netlify", "Cloudflare"] },
];

export const industries = [
  { icon: "graduation-cap", title: "Education & Institutions" },
  { icon: "shopping-bag", title: "E-commerce & Retail" },
  { icon: "bed", title: "Hospitality & Homestays" },
  { icon: "utensils", title: "Food & Delivery" },
  { icon: "rocket", title: "Startups" },
  { icon: "heart-pulse", title: "Healthcare" },
  { icon: "hand-heart", title: "NGOs & Societies" },
  { icon: "user", title: "Personal Brands & Portfolios" },
];

export const pricing = [
  {
    name: "Starter",
    price: "₹5,000",
    for: "Personal, portfolio & small business sites",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Domain, SEO & SSL",
      "1 month support",
    ],
    cta: "Start Small",
    popular: false,
  },
  {
    name: "Business",
    price: "₹12,000",
    for: "Growing local businesses",
    features: [
      "Up to 10 pages",
      "CMS / blog",
      "Google Business + SEO",
      "WhatsApp integration",
      "3 months support",
    ],
    cta: "Grow My Business",
    popular: true,
  },
  {
    name: "Custom / Platform",
    price: "₹25,000",
    for: "Apps, dashboards & stores",
    features: [
      "Web apps & dashboards",
      "E-commerce stores",
      "Admin panels",
      "Custom integrations",
      "Priority support",
    ],
    cta: "Plan My Platform",
    popular: false,
  },
];

export const comparison = [
  { feature: "Pages", values: ["Up to 5", "Up to 10", "Unlimited"] },
  { feature: "Domain + SSL", values: [true, true, true] },
  { feature: "SEO setup", values: [true, true, true] },
  { feature: "CMS / blog", values: [false, true, true] },
  { feature: "WhatsApp integration", values: [false, true, true] },
  { feature: "Google Business profile", values: [false, true, true] },
  { feature: "Payments & user accounts", values: [false, false, true] },
  { feature: "Admin dashboard", values: [false, false, true] },
  { feature: "Support", values: ["1 month", "3 months", "Priority"] },
];

export const addOns = [
  { title: "Logo Design", desc: "Logo concepts, revisions & brand files.", price: "from ₹1,500" },
  { title: "Extra Pages", desc: "Add more pages to any package.", price: "₹500 / page" },
  { title: "Maintenance Plan", desc: "Monthly updates, backups & fixes.", price: "₹999 / month" },
  {
    title: "Social Creative Pack",
    desc: "Ready-to-post designs for launch.",
    price: "from ₹1,999",
  },
];

export const budgets = ["₹5k – ₹15k", "₹15k – ₹40k", "₹40k – ₹1L", "₹1L+", "Not sure yet"];

export const stats = [
  { value: 10, suffix: "+", label: "Projects Live" },
  { value: 5, suffix: "+", label: "Clients & Partners" },
  { value: 1, suffix: "L+", label: "Users Reached" },
  { value: 1, suffix: "st", label: "Place, TigmaMinds Hackathon" },
];

// Entries whose name starts with "[" are placeholders and are hidden on the site until filled in.
export const team = [
  {
    name: "Gaurav Deori",
    role: "Founder & Lead Web Developer",
    line: "Turns ideas into fast, useful web products.",
    initials: "GD",
    url: "https://www.gauravdeori.in",
  },
  {
    name: "[Team Member]",
    role: "UI/UX Designer",
    line: "Designs interfaces people enjoy using.",
    initials: "UX",
    url: "",
  },
  {
    name: "[Team Member]",
    role: "Full-Stack Developer",
    line: "Builds the engine behind every product.",
    initials: "FS",
    url: "",
  },
  {
    name: "[Team Member]",
    role: "Marketing Lead",
    line: "Helps products reach the right people.",
    initials: "MK",
    url: "",
  },
];

export const milestones = [
  {
    icon: "🏆",
    title: "1st Place — TigmaMinds Hackathon",
    desc: "Won against 18 teams across Assam.",
  },
  { icon: "🚀", title: "Present IQ incubated", desc: "Incubated at CTII, Dibrugarh University." },
  {
    icon: "🌱",
    title: "WasteWise with IIT Guwahati",
    desc: "IoT food-waste monitoring with the Technology Innovation Hub.",
  },
  { icon: "🤝", title: "Marketing Core Team", desc: "GDG On Campus, Dibrugarh University." },
  { icon: "🎉", title: "theposterzz turns 1", desc: "One year of building the poster brand." },
  {
    icon: "⚡",
    title: "Hackathon entries",
    desc: "Smart India Hackathon, India Energy Week & more.",
  },
];

// Quotes starting with "[" are placeholders; the testimonials section stays hidden until real ones are added.
export const testimonials = [
  { quote: "[Add real client quote]", name: "[Client Name]", business: "[Business]" },
  { quote: "[Add real client quote]", name: "[Client Name]", business: "[Business]" },
  { quote: "[Add real client quote]", name: "[Client Name]", business: "[Business]" },
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Websites start from ₹5,000 for a Starter site (up to 5 pages). Business sites start at ₹12,000 and custom platforms at ₹25,000 — we give you an exact quote after a free consultation.",
  },
  {
    q: "How long does it take?",
    a: "Most websites go live in 2–4 weeks. Apps and platforms usually take 4–8 weeks depending on scope.",
  },
  {
    q: "Do you provide domain & hosting?",
    a: "Yes. Every package includes domain, hosting setup and SSL security.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Always. We design mobile-first and test on real phones.",
  },
  {
    q: "Do you do SEO?",
    a: "Every site ships with on-page SEO, Google Search Console and fast load times. Business packages add Google Business setup.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes. We can add a simple CMS so you can edit text, images and blog posts without code.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — 1 to 3 months of support is included, and you can extend it with a maintenance plan from ₹999/month.",
  },
  {
    q: "Do you work with clients outside Assam?",
    a: "Absolutely. We work remotely with clients across India and abroad.",
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  read: string;
  excerpt: string;
  body: string[];
};
export const posts: Post[] = [
  {
    slug: "why-small-businesses-in-assam-need-a-website",
    title: "Why every small business in Assam needs a website",
    category: "Business",
    read: "5 min",
    excerpt:
      "Your customers search Google before they visit. Here is why a website pays for itself.",
    body: [
      "Most customers today search online before they walk into a shop, book a homestay or order food. If they cannot find you, they find someone else.",
      "A website works for you 24/7. It shows your products, prices, location and reviews, and lets people reach you on WhatsApp in one tap.",
      "Unlike social media, you own your website. Algorithms can't hide it, and it shows up on Google when people search for what you sell.",
      "For small businesses in Assam, a simple 5-page site is often enough to start getting more calls and orders.",
    ],
  },
  {
    slug: "website-vs-instagram-page",
    title: "Website vs Instagram page: what your business really needs",
    category: "Strategy",
    read: "4 min",
    excerpt:
      "Instagram is great for discovery. A website is great for trust and sales. You need both.",
    body: [
      "Instagram helps people discover you. A website helps them trust you and buy from you.",
      "Instagram posts get buried in hours. A website keeps your menu, catalogue and contact details one search away.",
      "The best setup: use Instagram to attract attention, and link to your website to convert that attention into orders.",
      "If you can only start with one, start with the platform where your customers already spend time — then add the other.",
    ],
  },
  {
    slug: "how-we-built-theposterzz-store",
    title: "How we built theposterzz's new store",
    category: "Case Study",
    read: "6 min",
    excerpt: "A look behind the scenes of rebuilding a poster store for speed and conversions.",
    body: [
      "theposterzz started as a passion project for cinephiles and anime fans. As orders grew, the old store started to slow down.",
      "We began by measuring: where were buyers dropping off? Most left on mobile, during checkout.",
      "We rebuilt the storefront with lighter pages, optimised images and a shorter checkout with UPI first.",
      "The result was a store that loads much faster and turns more visitors into customers.",
    ],
  },
];

export const isPlaceholder = (s: string) => s.trim().startsWith("[");
