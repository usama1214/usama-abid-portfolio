// Career start from the CV (Software Engineer, May 2020). Years are
// calculated from this date, so the number updates by itself every year.
export const careerStart = new Date(2020, 4, 1);
export const yearsOfExperience = Math.floor(
  (Date.now() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
);

export const profile = {
  name: "Usama Abid",
  role: "Software Engineer & WordPress Developer",
  email: "syedusama3389@gmail.com",
  phone: "+92 333 1765592",
  whatsapp:
    "https://wa.me/923331765592?text=" +
    encodeURIComponent("Hi Usama, I saw your portfolio and would like to connect."),
  linkedin: "", // left empty: button is hidden until a real link is added
  github: "", // left empty: button is hidden until a real link is added
  available: true,
  tagline:
    `Software Engineer & WordPress Developer with ${yearsOfExperience} years of experience building custom themes, Gutenberg block patterns, and conversion-focused websites for healthcare and wellness practices.`,
  bio: "Detail-oriented web developer who turns designs into fast, responsive WordPress sites: custom block and child themes, reusable Gutenberg pattern libraries, lead-capture forms, and online booking. Also experienced in UI design, database management, and technical documentation.",
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Tailwind CSS",
      "Swiper.js",
      "Responsive design",
    ],
  },
  {
    title: "WordPress & CMS",
    items: [
      "WordPress",
      "Gutenberg blocks & patterns",
      "Block themes (FSE)",
      "Custom child themes",
      "Custom plugins",
      "WooCommerce",
      "Essential Blocks",
    ],
  },
  {
    title: "Backend & Data",
    items: ["PHP", "MySQL", "Database management", "MS Access"],
  },
  {
    title: "Forms & Integrations",
    items: ["WPForms", "Popup Maker", "Zocdoc booking", "Embeds & media", "Click-to-call CTAs"],
  },
  {
    title: "Design & Docs",
    items: [
      "UI design",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Technical documentation",
      "MS Office",
      "Git / GitHub",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  country?: string; // client/market country, shown as a small tag on the card + detail page
  industry?: string; // client/market industry, shown as a small tag on the card + detail page
  blurb: string;
  myRole?: string; // what I personally built, shown on the detail page
  highlights: string[];
  workflow?: { title: string; detail: string | string[] }[]; // optional "how it works" phases, detail page only — string[] renders as bullets
  techStack?: { label: string; detail: string }[]; // optional detailed tech breakdown (what + why), detail page only
  tech: string[];
  demoUrl?: string; // real live demo link, shown as "View Demo" on card + detail page
  codeUrl?: string; // real public repo link, shown as "View Code" on card + detail page
  accent: string; // tailwind gradient classes for the mock panel
  image?: string; // optional single screenshot, public/projects/<slug>/<file>
  images?: { src: string; caption: string }[]; // optional gallery, overrides `image`
};

export const projects: Project[] = [
  {
    slug: "gutenberg-pattern-library",
    title: "Gutenberg Pattern Library: Reusable Block Design System",
    category: "WordPress Block Theme · Custom Plugin · Design System",
    status: "Live",
    industry: "Web Agency Tooling",
    blurb:
      "A browsable library of ready-made Gutenberg block patterns (hero sections, service grids, testimonials, FAQs, CTAs and full landing pages) that the team drops into new client sites instead of designing each one from scratch.",
    myRole:
      "Built and styled the patterns as native Gutenberg blocks inside a custom block theme, and organized them into a filterable library with a shared navigation, so every pattern is consistent, responsive, and reusable across client builds.",
    highlights: [
      "Full-page landing layouts and individual sections, all as native, editable Gutenberg blocks",
      "Library index built with the Query Loop: featured images, excerpts, authors, and pagination",
      "Tailwind CSS utilities inside WordPress via WindPress, with Swiper sliders and scroll animations",
    ],
    techStack: [
      {
        label: "CMS",
        detail: "WordPress 7.1 on PHP 8.1, served from a LiteSpeed web server.",
      },
      {
        label: "Theme",
        detail:
          "A custom block theme (upt-solutions) built on Twenty Twenty-Five, using Full Site Editing templates and theme.json styling.",
      },
      {
        label: "Pattern engine",
        detail:
          "A custom upt-patterns plugin registers and serves the pattern collection; the /all/ index is a Query Loop of post titles, featured images, excerpts, and pagination.",
      },
      {
        label: "Blocks",
        detail:
          "Core Gutenberg blocks (Group, Columns, Buttons, Image, Accordion, Embed, Navigation) plus Essential Blocks for extra layout components.",
      },
      {
        label: "Styling & motion",
        detail:
          "WindPress brings Tailwind CSS into the block editor; Swiper.js powers sliders and a scroll-animations plugin adds on-scroll reveals.",
      },
      {
        label: "Interactions",
        detail:
          "Popup Maker for modal forms, Sticky Block for fixed headers/CTAs, Easy FancyBox for lightbox media.",
      },
      {
        label: "Forms",
        detail: "WPForms Lite 'Get Started Today!' lead forms, using the modern form styles and client-side validation.",
      },
    ],
    tech: [
      "WordPress",
      "Gutenberg",
      "Block Theme (FSE)",
      "PHP",
      "Tailwind CSS (WindPress)",
      "Essential Blocks",
      "Swiper.js",
      "WPForms",
      "Popup Maker",
    ],
    demoUrl: "https://patterndev.upthinksolutions.com/all/",
    accent: "from-accent/20 to-violet-500/10",
    images: [
      { src: "/projects/gutenberg-pattern-library/01.jpg", caption: "Pattern library index with search and category filters" },
      { src: "/projects/gutenberg-pattern-library/02.jpg", caption: "Accordion and FAQ patterns, ready to drop into any page" },
      { src: "/projects/gutenberg-pattern-library/03.jpg", caption: "Banner patterns: hero layouts with gradients and image overlays" },
    ],
  },
  {
    slug: "therapy-landing-page",
    title: "Therapy Practice Landing Page Template (LP0017)",
    category: "Landing Page · Gutenberg Pattern · Lead Generation",
    status: "Live",
    industry: "Mental Health & Wellness",
    blurb:
      "A conversion-focused, full-page landing template for therapy practices: hero with a strong call to action, a step-by-step process section, client stories, a trust section, an FAQ accordion, and a free-consultation form.",
    myRole:
      "Designed and built the complete page as one reusable Gutenberg pattern, so it can be dropped into any client site and edited visually, with no code needed to change text or images.",
    highlights: [
      "Built to convert: repeated free-consultation CTAs and a 'limited slots' urgency section",
      "FAQ accordion (office location, video sessions, session length, payment) using native accordion blocks",
      "WPForms lead form, also opened as a popup modal from every CTA button",
    ],
    workflow: [
      {
        title: "Page sections",
        detail: [
          "Hero: headline, supporting text, and primary 'Free Consultation' button.",
          "'How Our Work Unfolds': a 3-step process in columns.",
          "'Explore Your Story': service cards with images and buttons.",
          "'What Other Parents Are Saying': testimonials section.",
          "'Why Trust Me As Your Partner in Healing': credentials and trust builder.",
          "'Frequently Asked Questions': accordion FAQ.",
          "'Take the First Step Today': closing CTA with the 'Get Started Today!' form.",
        ],
      },
    ],
    tech: [
      "WordPress",
      "Gutenberg Patterns",
      "Accordion Blocks",
      "WPForms",
      "Popup Maker",
      "Sticky Block",
      "Responsive Design",
    ],
    demoUrl: "https://patterndev.upthinksolutions.com/landing-page/lp0017/",
    accent: "from-violet-500/20 to-indigo-500/10",
    images: [
      { src: "/projects/therapy-landing-page/01.jpg", caption: "Hero with headshot, call-to-action buttons and trust badges" },
      { src: "/projects/therapy-landing-page/02.jpg", caption: "Content section with image and bullet points" },
      { src: "/projects/therapy-landing-page/04.jpg", caption: "\"How Our Work Unfolds\" steps and parent testimonials" },
      { src: "/projects/therapy-landing-page/06.jpg", caption: "Trust section and FAQ accordion" },
    ],
  },
  {
    slug: "iris-wellness-consultants",
    title: "IRIS Wellness Consultants: Women's Therapy Clinic Website",
    category: "Client Website · WordPress Child Theme · Online Booking",
    status: "Live client site",
    industry: "Mental Health & Wellness",
    blurb:
      "Website for a woman-owned therapy and wellness clinic, offering individual therapy, resiliency coaching, and teletherapy, with online booking built in.",
    myRole:
      "Built the site on a custom therapist child theme: the service sections, tabbed client stories, contact form, and the Zocdoc online-booking integration.",
    highlights: [
      "Zocdoc online scheduling, so clients can book a free consultation straight from the site",
      "Tabbed client stories (names changed for confidentiality) that help visitors see themselves in the work",
      "Contact form with an 'Interested In' service selector and human verification",
    ],
    techStack: [
      { label: "CMS", detail: "WordPress." },
      {
        label: "Theme",
        detail: "Custom therapist_child child theme, so the shared base theme can be updated without losing site customizations.",
      },
      { label: "Booking", detail: "Zocdoc offsite scheduling widget for online appointment booking." },
      {
        label: "Forms",
        detail: "Contact form (name, email, phone, service select, message) with a human-verification step.",
      },
      {
        label: "Conversion",
        detail: "'Book a free consult' and click-to-call buttons throughout, plus Psychology Today and social profile links.",
      },
    ],
    tech: ["WordPress", "Custom Child Theme", "PHP", "Zocdoc Integration", "Contact Forms", "Responsive Design"],
    demoUrl: "https://iriswellnessconsultants.com/",
    codeUrl: "https://github.com/waqas-upthink/therapist-child",
    accent: "from-sky-500/20 to-cyan-500/10",
    images: [
      { src: "/projects/iris-wellness-consultants/01.jpg", caption: "Home page hero with free-consultation call to action" },
      { src: "/projects/iris-wellness-consultants/02.jpg", caption: "Tabbed client stories (Lauren, Kim, Carol)" },
      { src: "/projects/iris-wellness-consultants/04.jpg", caption: "About the clinic and its lead therapist" },
      { src: "/projects/iris-wellness-consultants/06.jpg", caption: "Contact form with service selector" },
    ],
  },
  {
    slug: "horses-heal",
    title: "Horses Heal: Equine Therapy Practice Website",
    category: "Client Website · WordPress Child Theme",
    status: "Live client site",
    industry: "Mental Health & Wellness",
    blurb:
      "Website for an equine-facilitated therapy practice that offers therapy for individuals, teens, families, and couples, plus parent and caregiver coaching.",
    myRole:
      "Built the site on the same custom therapist child theme: the home page, service pages, blog, FAQ, and popup contact forms.",
    highlights: [
      "Home page that names the problems clients face, then walks them to a matching service",
      "Five service pages: Individual, Teen, Family, Couples, and Parent & Caregiver",
      "Contact forms available inline and as a popup, with click-to-call in the header and footer",
    ],
    techStack: [
      { label: "CMS", detail: "WordPress." },
      { label: "Theme", detail: "Custom therapist_child child theme, shared with other therapist client sites." },
      { label: "Content", detail: "Service pages, blog, FAQ, and about pages." },
      {
        label: "Forms",
        detail: "Contact form (name, email, phone, message) with captcha, shown inline and in modal popups.",
      },
      { label: "Integrations", detail: "Psychology Today profile, Facebook and Instagram links." },
    ],
    tech: ["WordPress", "Custom Child Theme", "PHP", "Contact Forms", "Modal Popups", "Responsive Design"],
    demoUrl: "https://www.horses-heal.net/",
    codeUrl: "https://github.com/waqas-upthink/therapist-child",
    accent: "from-amber-500/20 to-orange-500/10",
    images: [
      { src: "/projects/horses-heal/01.jpg", caption: "Home page hero: equine-facilitated therapy" },
      { src: "/projects/horses-heal/03.jpg", caption: "About the therapist" },
      { src: "/projects/horses-heal/04.jpg", caption: "\"What I Offer\" service cards in a hexagon layout" },
      { src: "/projects/horses-heal/06.jpg", caption: "Contact form, phone and email" },
    ],
  },
  {
    slug: "lotus-light-psychology",
    title: "Lotus Light Psychology: Psychologist Practice Website",
    category: "Client Website · WordPress Block Theme · Blog",
    status: "Live client site",
    industry: "Mental Health & Wellness",
    blurb:
      "Website for a licensed psychologist's private practice that blends psychological methods with clients' spiritual or philosophical views. It covers individual therapy, consultations, and specialties such as ADHD, autism, and neurodivergence.",
    myRole:
      "Built the site's pages and blog templates, including the multi-level Services and Specialties menu and the 'Get In Touch With Me' contact form.",
    highlights: [
      "Multi-level navigation for About, Services, and Specialties",
      "Blog article layout for long-form content, e.g. 'Integrating Spiritual Guidance for Mental Balance'",
      "Contact form with human verification, plus Psychology Today and Facebook links",
    ],
    techStack: [
      { label: "CMS", detail: "WordPress, using a block-based theme." },
      { label: "Navigation", detail: "Nested dropdown menus for services and specialties." },
      { label: "Content", detail: "Blog posts, FAQ, privacy policy, and contact pages." },
      { label: "Forms", detail: "JavaScript-validated contact form with a 'prove you are human' check." },
      { label: "Accessibility", detail: "Skip-to-content link and semantic page structure." },
    ],
    tech: ["WordPress", "Block Theme", "Gutenberg", "Contact Forms", "Responsive Design"],
    demoUrl: "https://lotuslightpsychology.com/integrating-spiritual-guidance-for-mental-balance/",
    accent: "from-emerald-500/20 to-teal-500/10",
    images: [
      { src: "/projects/lotus-light-psychology/01.jpg", caption: "Blog article hero" },
      { src: "/projects/lotus-light-psychology/02.jpg", caption: "Long-form article layout with images" },
      { src: "/projects/lotus-light-psychology/04.jpg", caption: "\"Get In Touch With Me\" contact form" },
    ],
  },
  {
    slug: "mountain-view-counseling",
    title: "Mountain View Counseling: Counseling Practice Website",
    category: "Client Website · Custom WordPress Theme · WPForms",
    status: "Live client site",
    industry: "Mental Health & Wellness",
    blurb:
      "Website for a counseling practice offering individual therapy, teen therapy, and chess therapy, with specialty pages for anxiety and depression, grief and loss, and chronic illness.",
    myRole:
      "Built the site on a custom theme made for this practice: the specialty pages and the 'Get Started Today!' WPForms lead forms, inline and as a popup.",
    highlights: [
      "Custom theme built for this one practice",
      "Specialty pages, such as Anxiety & Depression, that each lead to a free phone consultation",
      "WPForms lead form available inline and as a popup",
    ],
    techStack: [
      { label: "CMS", detail: "WordPress." },
      { label: "Theme", detail: "Custom theme (Amber-Sirstad) built for the practice." },
      { label: "Forms", detail: "WPForms 'Get Started Today!' contact forms with a math verification field, inline and as a popup." },
      { label: "Content", detail: "About, services, specialties, FAQ, contact, and privacy policy pages." },
      { label: "Integrations", detail: "Psychology Today profile, Facebook and Instagram links, click-to-call." },
    ],
    tech: ["WordPress", "Custom Theme", "PHP", "WPForms", "Modal Popups", "Responsive Design"],
    demoUrl: "https://mountainviewcounselingllc.org/anxiety-and-depression/",
    accent: "from-rose-500/20 to-purple-500/10",
    images: [
      { src: "/projects/mountain-view-counseling/01.jpg", caption: "Anxiety & Depression specialty page hero" },
      { src: "/projects/mountain-view-counseling/02.jpg", caption: "Specialty page content sections" },
      { src: "/projects/mountain-view-counseling/04.jpg", caption: "Free-consultation call to action and footer" },
    ],
  },
];

export const experience = [
  {
    company: "Software Engineering",
    role: "Software Engineer",
    period: "05/2020 – Present",
    points: [
      "Worked with cross-functional teams to define system requirements, improving software functionality and user experience.",
      "Developed and shipped new software applications, raising company productivity and client satisfaction.",
      "Monitored system performance after deployment and fixed issues quickly.",
      "Worked with product managers to define clear project scopes aligned with business goals.",
    ],
  },
];

export const education = {
  degree: "MSCIT",
  school: "University of Sargodha",
  period: "2017",
  certs: ["Young Professionals: IEEE (June 2016)", "PSCSC 2016: IEEE (April 2016)"],
};
