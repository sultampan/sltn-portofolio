export type Localized<T = string> = T | { id: T; en: T };

export function resolveLocalized<T>(val: Localized<T>, lang: "id" | "en"): T {
  if (typeof val === "object" && val !== null && ("id" in val || "en" in val)) {
    const loc = val as { id: T; en: T };
    return loc[lang] ?? loc["en"] ?? loc["id"];
  }
  return val as T;
}

export interface ProjectItem {
  id: string;
  iconLabel: Localized<string>;
  title: Localized<string>;
  description: Localized<string>;
  meta: Localized<string>;
  image: string;
  imageAlt: string;
  imageRatio?: number;
  url?: string;
  github?: string;
  icon?: "sparkles" | "compass" | "line-chart" | "wand" | "layers" | "bot" | "code" | "globe" | "rocket";
}

export interface ExperienceItem {
  company: string;
  role: Localized<string>;
  period: Localized<string>;
  slug?: string;
  brand?: string;
  description?: Localized<string>;
}

export interface EducationItem {
  school: Localized<string>;
  degree: Localized<string>;
  period: string;
  slug?: string;
}

export interface TechStackItem {
  label: string;
  slug: string;
  bg: string;
  fg: string;
  iconUrl?: string;
}

export interface SkillCategoryItem {
  name: string;
  slug: string;
  category: "language" | "framework" | "tool";
  color: string;
  iconUrl?: string;
  level?: Localized<string>;
  description?: Localized<string>;
}

export interface WhatIDoItem {
  id: string;
  title: Localized<string>;
  subtitle: Localized<string>;
  description: Localized<string>;
  icon: "globe" | "smartphone" | "bot" | "brain" | "database" | "terminal";
  highlights: Localized<string[]>;
  tools: string[];
}

export interface CertificateItem {
  id: string;
  title: Localized<string>;
  issuer: string;
  date: string;
  category: "all" | "aviation" | "software" | "bootcamp" | "certification" | "competition" | "seminar";
  credentialId?: string;
  credentialUrl?: string;
  pdfUrl?: string;
  imageUrl?: string;
  metric?: string;
  description: Localized<string>;
  skills: string[];
  badge?: string;
}

export interface SocialLinkItem {
  name: string;
  url: string;
  type: "mail" | "linkedin" | "github" | "x" | "instagram" | "website";
}

export interface PortfolioData {
  personal: {
    name: string;
    shortName: string;
    greeting: Localized<string>;
    headlineRole: Localized<string[]>;
    bio: Localized<string>;
    rotatingWords?: {
      id: string[];
      en: string[];
    } | undefined;
    portrait: {
      default: string;
      hover: string;
      alt: string;
    };
    email: string;
    location?: string;
    aboutBio: Localized<string[]>;
  };
  site: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
    creator: string;
    keywords: string[];
    footerTagline?: Localized<string>;
  };
  socials: SocialLinkItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education?: EducationItem[];
  skills: Localized<string>[];
  techStack: TechStackItem[];
  categorizedSkills?: SkillCategoryItem[];
  whatIDo?: WhatIDoItem[];
  certificates?: CertificateItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sultan Syarif Al",
    shortName: "Sultan",
    greeting: {
      id: "Halo , Saya Sultan",
      en: "Hey , I'm Sultan",
    },
    headlineRole: {
      id: ["Full-Stack &", "Mobile Developer"],
      en: ["Full-Stack &", "Mobile Developer"],
    },
    bio: {
      id: "Mahasiswa Sistem Informasi Bisnis di Polinema. Selalu penasaran dan suka ngulik hal baru—mulai dari ngoding aplikasi sampai eksperimen drone di AVRO.",
      en: "Business Information Systems student at Polinema. Always curious, loves tinkering with new tech, building software, and flying drones at AVRO.",
    },
    rotatingWords: {
      id: [
        "Student",
        "Gamer",
        "GCS Operator",
        "Full-Stack Dev",
        "AI/ML Explorer",
        "Drone Enthusiast",
        "Footballer"
      ],
      en: [
        "Student",
        "Gamer",
        "GCS Operator",
        "Full-Stack Dev",
        "AI/ML Explorer",
        "Drone Enthusiast",
        "Footballer"
      ],
    },
    portrait: {
      default: "/sultan.jpg",
      hover: "/sultan_wave.jpg",
      alt: "Sultan Syarif Al portrait",
    },
    email: "sultansyarif630@gmail.com",
    location: "Malang, Indonesia",
    aboutBio: {
      id: [
        "Halo! Saya <strong>Sultan Syarif Al</strong>, mahasiswa Sistem Informasi Bisnis di Politeknik Negeri Malang dengan fokus utama pada <strong>Backend, Full-stack, dan Mobile Development</strong>. Di dunia perkuliahan, saya aktif merancang dan membangun aplikasi web serta mobile yang berorientasi pada efisiensi solusi bisnis dan pengalaman pengguna yang mulus.",
        "Di luar kelas, rasa penasaran saya pada teknologi autonomous membawa saya bergabung dengan tim riset robot terbang kampus, <strong>AVRO Polinema</strong>. Di sini, saya berperan sebagai <strong>Programmer dan Operator Ground Control Station (GCS)</strong>, bertanggung jawab atas pemrograman sistem komunikasi, pemantauan telemetri, dan kontrol misi robot terbang secara real-time.",
        "Pengalaman di dua lingkungan ini melatih saya untuk berpikir komprehensif: memadukan logika bisnis yang terstruktur dengan presisi dan keandalan tinggi (high reliability) khas sistem kendali robotika. Saya juga mendalami penerapan <strong>Machine Learning</strong> dan selalu bersemangat untuk mengeksplorasi backend yang scalable serta arsitektur software modern.",
      ],
      en: [
        "Hey! I'm <strong>Sultan Syarif Al</strong>, a Business Information Systems student at State Polytechnic of Malang with a strong focus on <strong>Backend, Full-Stack, and Mobile Development</strong>. Through my academic journey, I build web and mobile applications designed to solve real business challenges with clean code and intuitive workflows.",
        "Beyond the classroom, my passion for autonomous technologies led me to join <strong>AVRO Polinema</strong> (Aero Flying Robot Polinema). As a <strong>Programmer & Ground Control Station (GCS) Operator</strong>, I develop mission control software, monitor real-time telemetry communications, and ensure reliable data transmission between autonomous aerial vehicles and ground control.",
        "Bridging business information systems with aerospace robotics gives me a unique engineering perspective: pairing practical business logic with the strict precision and high reliability demanded by flying systems. I also explore <strong>Machine Learning</strong> and am constantly eager to tackle scalable backend architectures and impactful real-world software solutions.",
      ],
    },
  },

  site: {
    title: "Sultan Syarif Al | Full-Stack & Mobile Developer",
    description:
      "Personal portfolio of Sultan Syarif Al — Full-Stack Developer, Mobile Developer, and GCS Operator at AVRO Polinema.",
    url: "https://example.com",
    ogImage: "/og-image.png",
    creator: "@sultampan",
    keywords: [
      "Sultan Syarif Al",
      "Fullstack Developer",
      "Backend Developer",
      "Mobile Developer",
      "AVRO Polinema",
      "GCS Operator",
      "Ground Control Station",
      "Machine Learning",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
    ],
    footerTagline: {
      id: "Dibangun dengan presisi & Next.js",
      en: "Engineered with precision & Next.js",
    },
  },

  socials: [
    {
      name: "Email",
      url: "mailto:sultansyarif630@gmail.com",
      type: "mail",
    },
    {
      name: "GitHub",
      url: "https://github.com/sultampan",
      type: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sultansyarifal",
      type: "linkedin",
    },
    {
      name: "X",
      url: "https://x.com",
      type: "x",
    },
  ],

  projects: [
    {
      id: "uav-2025",
      icon: "rocket",
      iconLabel: {
        id: "Robotika & UAV",
        en: "Robotics & UAV",
      },
      title: {
        id: "Ground Control Station (GCS) & Telemetri Drone Autonomous - AVRO Polinema",
        en: "Autonomous UAV Ground Control Station (GCS) & Telemetry - AVRO Polinema",
      },
      description: {
        id: "Sistem kendali telemetri dan navigasi autonomous drone wahana terbang nirawak AVRO Polinema. Memantau parameter penerbangan real-time, protokol komunikasi MAVLink, waypoint tracking, serta fail-safe safety recovery.",
        en: "Autonomous UAV ground control and real-time telemetry streaming engineered for AVRO Polinema aerial missions. Features MAVLink protocols, waypoint tracking, and fail-safe recovery systems.",
      },
      meta: {
        id: "Programmer & GCS Operator, AVRO Polinema (2024 - Sekarang)",
        en: "Programmer & GCS Operator, AVRO Polinema (2024 - Present)",
      },
      imageRatio: 1024 / 768,
      image:
        "https://cdn.dribbble.com/userupload/46128964/file/b92b9d268dd928642ca94bd49e32923a.jpg?resize=1024x768&vertical=center",
      imageAlt: "Ground Control Station UAV Mockup",
    },
    {
      id: "epl-match-predictor",
      icon: "line-chart",
      iconLabel: {
        id: "Machine Learning",
        en: "Machine Learning",
      },
      title: {
        id: "Premier League (EPL) Match Outcome Predictor dengan Machine Learning",
        en: "English Premier League (EPL) Match Outcome Predictor using Machine Learning",
      },
      description: {
        id: "Model prediktif cerdas berbasis Machine Learning untuk menganalisis dan memperkirakan hasil laga Premier League Inggris menggunakan data statistik historis pertandingan, feature engineering, dan evaluasi akurasi model prediktif.",
        en: "Intelligent machine learning predictive model analyzing and forecasting English Premier League match results using historical football datasets, feature engineering, and validation metrics in Python & Google Colab.",
      },
      meta: {
        id: "Machine Learning & Python, Google Colab",
        en: "Machine Learning & Python, Google Colab",
      },
      imageRatio: 1024 / 768,
      image:
        "https://cdn.dribbble.com/userupload/47357856/file/75841fa59f32f05ca6c5ddf02d08dfe6.png?resize=1024x768&vertical=center",
      imageAlt: "EPL Match Prediction Mockup",
    },
    {
      id: "sepatustore",
      icon: "code",
      iconLabel: {
        id: "Full-Stack Web",
        en: "Full-Stack Web",
      },
      title: {
        id: "SepatuStore - E-Commerce & Filament Admin Portal",
        en: "SepatuStore - Footwear Commerce & Filament Portal",
      },
      description: {
        id: "Platform toko online e-commerce sepatu tangguh berbasis Laravel 11 dengan arsitektur Service Repository Pattern, integrasi dashboard admin interaktif Filament PHP, dan manajemen inventaris produk modern.",
        en: "Robust footwear commerce platform built on Laravel 11 implementing the Service Repository Pattern, paired with an interactive Filament PHP admin dashboard and inventory management.",
      },
      meta: {
        id: "Laravel 11, Filament PHP & MySQL",
        en: "Laravel 11, Filament PHP & MySQL",
      },
      imageRatio: 1024 / 768,
      image:
        "https://cdn.dribbble.com/userupload/24599416/file/original-1ae5075dcd129aebb16bdbca24b41ac7.png?resize=1024x768&vertical=center",
      imageAlt: "SepatuStore E-Commerce Mockup",
    },
    {
      id: "pwl-simple-pos",
      icon: "wand",
      iconLabel: {
        id: "Sistem Informasi Bisnis",
        en: "Business Information System",
      },
      title: {
        id: "PWL Simple Point of Sales (POS) & Retail Management",
        en: "PWL Simple Point of Sales (POS) & Retail Management",
      },
      description: {
        id: "Aplikasi kasir dan manajemen transaksi penjualan Point of Sales (POS) berbasis web untuk operasional retail. Memfasilitasi transaksi penjualan cepat, pencatatan stok barang, kategori produk, dan pelaporan keuangan berkala.",
        en: "Web-based Point of Sales (POS) and inventory management system designed for retail operations. Features rapid cashier checkouts, real-time stock tracking, product categorization, and periodic sales analytics.",
      },
      meta: {
        id: "Laravel, Blade & MySQL (Polinema SIB)",
        en: "Laravel, Blade & MySQL (Polinema SIB)",
      },
      imageRatio: 1024 / 768,
      image:
        "https://cdn.dribbble.com/userupload/43955214/file/original-d4cde1de803e84b97d8892e3444c04b0.png?resize=1024x768&vertical=center",
      imageAlt: "PWL Simple POS Mockup",
    },
  ],

  experiences: [
    {
      company: "AVRO Polinema",
      role: {
        id: "Programmer & Operator GCS",
        en: "Programmer & GCS Operator",
      },
      period: {
        id: "2024 – Sekarang",
        en: "2024 – Present",
      },
      brand: "#0AE448",
      description: {
        id: "Mengembangkan software dan mengoperasikan Ground Control Station (GCS) untuk sistem telemetri serta kendali misi drone.",
        en: "Developing software and operating Ground Control Station (GCS) for drone telemetry and mission control.",
      },
    },
    {
      company: "Politeknik Negeri Malang",
      role: {
        id: "Mahasiswa Sistem Informasi Bisnis",
        en: "Business Information Systems Student",
      },
      period: {
        id: "2023 – Sekarang",
        en: "2023 – Present",
      },
      brand: "#2F74C0",
      description: {
        id: "Membangun proyek web full-stack, mobile, dan sistem basis data.",
        en: "Building full-stack web projects, mobile apps, and database systems.",
      },
    },
  ],

  skills: [
    { id: "Full-Stack Web (React / Next.js)", en: "Full-Stack Web (React / Next.js)" },
    { id: "Backend & RESTful API", en: "Backend & RESTful API" },
    { id: "Pengembangan Aplikasi Mobile", en: "Mobile App Development" },
    { id: "Operator GCS & Telemetri Drone (AVRO)", en: "GCS Operator & Drone Telemetry (AVRO)" },
    { id: "Machine Learning & Python", en: "Machine Learning & Python" },
    { id: "Manajemen Database (SQL)", en: "Database Management (SQL)" },
    { id: "Git & Arsitektur Software", en: "Git & Software Architecture" },
  ],

  techStack: [
    { label: "Python", slug: "python", bg: "#3776AB", fg: "#ffffff" },
    { label: "TypeScript", slug: "typescript", bg: "#2F74C0", fg: "#ffffff" },
    { label: "Next.js", slug: "nextdotjs", bg: "#1f1f1f", fg: "#ffffff" },
    { label: "React", slug: "react", bg: "#1FB6CB", fg: "#ffffff" },
    { label: "Node.js", slug: "nodedotjs", bg: "#339933", fg: "#ffffff" },
    { label: "Flutter", slug: "flutter", bg: "#02569B", fg: "#ffffff" },
    { label: "Laravel", slug: "laravel", bg: "#FF2D20", fg: "#ffffff" },
    { label: "PostgreSQL", slug: "postgresql", bg: "#4169E1", fg: "#ffffff" },
    { label: "Tailwind CSS", slug: "tailwindcss", bg: "#2BBCF5", fg: "#ffffff" },
    { label: "Docker", slug: "docker", bg: "#2496ED", fg: "#ffffff" },
    { label: "GitHub", slug: "github", bg: "#181717", fg: "#ffffff" },
    { label: "Linux", slug: "linux", bg: "#FCC624", fg: "#000000" },
  ],

  categorizedSkills: [
    // Programming Languages
    {
      name: "TypeScript",
      slug: "typescript",
      category: "language",
      color: "#3178C6",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Type-safety untuk aplikasi web frontend & backend modern",
        en: "Type-safety for scalable frontend and backend applications",
      },
    },
    {
      name: "JavaScript",
      slug: "javascript",
      category: "language",
      color: "#F7DF1E",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "ES6+, asynchronous programming, event loop & DOM APIs",
        en: "ES6+, asynchronous programming, event loop, and DOM APIs",
      },
    },
    {
      name: "Python",
      slug: "python",
      category: "language",
      color: "#3776AB",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Machine learning, otomasi, script telemetri drone & backend",
        en: "Machine learning, automation, drone telemetry scripts & backend",
      },
    },
    {
      name: "PHP",
      slug: "php",
      category: "language",
      color: "#777BB4",
      level: { id: "Menengah", en: "Intermediate" },
      description: {
        id: "Pengembangan sistem web dinamis & REST API dengan Laravel",
        en: "Dynamic web systems development & REST APIs with Laravel",
      },
    },
    {
      name: "Dart",
      slug: "dart",
      category: "language",
      color: "#0175C2",
      level: { id: "Menengah", en: "Intermediate" },
      description: {
        id: "Bahasa utama untuk mobile development menggunakan Flutter",
        en: "Core language for cross-platform apps with Flutter",
      },
    },
    {
      name: "C++",
      slug: "cplusplus",
      category: "language",
      color: "#00599C",
      level: { id: "Dasar – Menengah", en: "Basic – Intermediate" },
      description: {
        id: "Pemrograman sistem robotika & mikrokontroler firmware",
        en: "Robotics systems programming & microcontroller firmware",
      },
    },
    {
      name: "SQL",
      slug: "postgresql",
      category: "language",
      color: "#4169E1",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Perancangan database relasional, query kompleks & indexing",
        en: "Relational database design, complex queries & indexing",
      },
    },
    {
      name: "HTML5 & CSS3",
      slug: "html5",
      category: "language",
      color: "#E34F26",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Struktur semantik web modern, animasi CSS & aksesibilitas",
        en: "Modern semantic web structure, CSS animations & a11y",
      },
    },

    // Frameworks & Libraries
    {
      name: "Next.js",
      slug: "nextdotjs",
      category: "framework",
      color: "#000000",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "App Router, SSR/SSG, Server Actions & optimasi SEO",
        en: "App Router, SSR/SSG, Server Actions & SEO optimization",
      },
    },
    {
      name: "React",
      slug: "react",
      category: "framework",
      color: "#61DAFB",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Komponen interaktif, custom hooks & state management",
        en: "Interactive components, custom hooks & state management",
      },
    },
    {
      name: "Flutter",
      slug: "flutter",
      category: "framework",
      color: "#02569B",
      level: { id: "Menengah", en: "Intermediate" },
      description: {
        id: "Aplikasi Android & iOS dari satu codebase dengan performa native",
        en: "Single codebase Android & iOS apps with native performance",
      },
    },
    {
      name: "Laravel",
      slug: "laravel",
      category: "framework",
      color: "#FF2D20",
      level: { id: "Menengah", en: "Intermediate" },
      description: {
        id: "Framework PHP untuk backend tangguh, Eloquent ORM & Blade",
        en: "Robust PHP backend framework, Eloquent ORM & Blade",
      },
    },
    {
      name: "Node.js & Express",
      slug: "nodedotjs",
      category: "framework",
      color: "#5FA04E",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "REST API asynchronous, middleware, otentikasi JWT",
        en: "Asynchronous REST APIs, middleware, JWT authentication",
      },
    },
    {
      name: "Tailwind CSS",
      slug: "tailwindcss",
      category: "framework",
      color: "#06B6D4",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Utility-first CSS, responsive styling, dark mode & animasi kustom",
        en: "Utility-first CSS, responsive styling, dark mode & animations",
      },
    },
    {
      name: "PyTorch & Scikit-Learn",
      slug: "pytorch",
      category: "framework",
      color: "#EE4C2C",
      level: { id: "Menengah", en: "Intermediate" },
      description: {
        id: "Model prediksi machine learning, klasifikasi data & training",
        en: "Machine learning prediction models, data classification & training",
      },
    },

    // Tools & Technologies
    {
      name: "Git & GitHub",
      slug: "git",
      category: "tool",
      color: "#F05032",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Version control, branching strategy, pull requests & CI/CD",
        en: "Version control, branching strategy, pull requests & CI/CD",
      },
    },
    {
      name: "Docker",
      slug: "docker",
      category: "tool",
      color: "#2496ED",
      level: { id: "Menengah", en: "Intermediate" },
      description: {
        id: "Kontainerisasi aplikasi, multi-container compose & deployment",
        en: "Application containerization, multi-container compose & deployment",
      },
    },
    {
      name: "Linux (Ubuntu / Debian)",
      slug: "linux",
      category: "tool",
      color: "#FCC624",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Server management, shell scripting, command line & environment UAV",
        en: "Server management, shell scripting, CLI & UAV environment",
      },
    },
    {
      name: "Postman",
      slug: "postman",
      category: "tool",
      color: "#FF6C37",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Pengujian endpoint API, automasi test & dokumentasi API",
        en: "API endpoint testing, test automation & API documentation",
      },
    },
    {
      name: "QGroundControl & Mission Planner",
      slug: "drone",
      category: "tool",
      color: "#0AE448",
      iconUrl: "https://cdn.simpleicons.org/drone",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Operator telemetri drone, waypoint mission planning & MAVLink GCS",
        en: "Drone telemetry operator, waypoint mission planning & MAVLink GCS",
      },
    },
    {
      name: "PostgreSQL & MySQL",
      slug: "postgresql",
      category: "tool",
      color: "#4169E1",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "RDBMS terpercaya, relasi tabel, indexing & manajemen data aman",
        en: "Reliable RDBMS, relations, indexing & secure data management",
      },
    },
    {
      name: "Figma",
      slug: "figma",
      category: "tool",
      color: "#F24E1E",
      level: { id: "Menengah", en: "Intermediate" },
      description: {
        id: "Wireframing, prototyping UI/UX, dan design system modern",
        en: "Wireframing, UI/UX prototyping, and modern design systems",
      },
    },
    {
      name: "VS Code",
      slug: "visualstudiocode",
      category: "tool",
      color: "#007ACC",
      level: { id: "Lanjutan", en: "Advanced" },
      description: {
        id: "Code editor utama dengan berbagai ekstensi produktivitas & debugger",
        en: "Primary code editor with rich productivity & debugging extensions",
      },
    },
  ],

  whatIDo: [
    {
      id: "fullstack-backend",
      title: {
        id: "Full-Stack & Rekayasa Backend",
        en: "Full-Stack & Backend Systems",
      },
      subtitle: {
        id: "Arsitektur web modern, API terstruktur, dan performa tinggi",
        en: "Modern web architecture, structured APIs, and high performance",
      },
      description: {
        id: "Merancang dan membangun aplikasi web end-to-end yang teruji: mulai dari antarmuka interaktif responsif berbasis Next.js dan Tailwind CSS, hingga server backend RESTful API yang aman dengan otentikasi JWT dan database PostgreSQL/MySQL.",
        en: "Designing and building production-ready end-to-end web apps: from interactive responsive frontends with Next.js & Tailwind CSS, to secure RESTful API backends with JWT authentication and PostgreSQL/MySQL databases.",
      },
      icon: "globe",
      highlights: {
        id: [
          "Arsitektur Next.js (App Router, Server Actions, SSR & SSG)",
          "Desain RESTful API bersih & terdokumentasi (Node.js / Laravel)",
          "Optimalisasi basis data relasional & manajemen koneksi",
        ],
        en: [
          "Next.js architecture (App Router, Server Actions, SSR & SSG)",
          "Clean & well-documented RESTful API design (Node.js / Laravel)",
          "Relational database optimization & connection pooling",
        ],
      },
      tools: ["Next.js", "React", "TypeScript", "Node.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: "mobile-development",
      title: {
        id: "Pengembangan Aplikasi Mobile",
        en: "Mobile App Engineering",
      },
      subtitle: {
        id: "Aplikasi cross-platform modern dan mulus untuk Android & iOS",
        en: "Modern & seamless cross-platform apps for Android & iOS",
      },
      description: {
        id: "Membangun aplikasi mobile multiplatform dengan Flutter & Dart yang mengutamakan performa 60fps, transisi halus, manajemen state terstruktur (Bloc / Provider), serta integrasi REST API backend secara real-time.",
        en: "Building multiplatform mobile applications with Flutter & Dart focusing on 60fps performance, smooth transitions, structured state management (Bloc / Provider), and real-time backend REST API integration.",
      },
      icon: "smartphone",
      highlights: {
        id: [
          "Desain UI/UX adaptif mengikuti pedoman Material 3 & iOS",
          "Manajemen state terstruktur dan modular",
          "Integrasi REST API, penyimpanan lokal, dan push notifications",
        ],
        en: [
          "Adaptive UI/UX following Material 3 & iOS design guidelines",
          "Structured and modular state management",
          "REST API integration, offline storage, and push notifications",
        ],
      },
      tools: ["Flutter", "Dart", "Firebase", "REST API", "Android", "iOS"],
    },
    {
      id: "robotics-gcs",
      title: {
        id: "Sistem Robotika UAV & Operator GCS",
        en: "UAV Robotics & GCS Operations",
      },
      subtitle: {
        id: "Telemetri real-time, kontrol misi drone, dan komunikasi radio",
        en: "Real-time telemetry, drone mission control, and radio links",
      },
      description: {
        id: "Sebagai Programmer & Operator Ground Control Station (GCS) di AVRO Polinema, saya mengoperasikan workstation kendali penerbangan drone nirawak (UAV), memprogram jalur misi otonom, dan memonitor data telemetri kritis secara real-time.",
        en: "As a Programmer & Ground Control Station (GCS) Operator at AVRO Polinema, I operate UAV flight control workstations, program autonomous mission waypoints, and monitor critical telemetry data streams in real-time.",
      },
      icon: "bot",
      highlights: {
        id: [
          "Pengoperasian QGroundControl & Mission Planner untuk misi UAV",
          "Protokol komunikasi MAVLink & analisis telemetri sensor",
          "Pengujian lapangan & troubleshooting sistem terbang otonom",
        ],
        en: [
          "QGroundControl & Mission Planner operation for UAV missions",
          "MAVLink communication protocol & sensor telemetry analysis",
          "Field testing & troubleshooting autonomous flight systems",
        ],
      },
      tools: ["QGroundControl", "Mission Planner", "MAVLink", "Python", "Linux", "Robotics"],
    },
    {
      id: "machine-learning",
      title: {
        id: "Machine Learning & Analisis Data",
        en: "Machine Learning & Data Intelligence",
      },
      subtitle: {
        id: "Eksplorasi data prediktif, pemodelan ML, dan visualisasi",
        en: "Predictive data exploration, ML modeling, and visualization",
      },
      description: {
        id: "Mengeksplorasi algoritma Machine Learning menggunakan Python untuk memecahkan problem analisis prediktif (seperti proyek Football Prediction), pembersihan dataset, ekstraksi fitur, serta integrasi hasil model ke dalam aplikasi interaktif.",
        en: "Exploring Machine Learning algorithms with Python to solve predictive analytics challenges (like Football Prediction project), data cleaning, feature extraction, and deploying models into interactive applications.",
      },
      icon: "brain",
      highlights: {
        id: [
          "Data preprocessing, exploratory data analysis (EDA) & feature engineering",
          "Pelatihan model klasifikasi & regresi dengan Scikit-learn & PyTorch",
          "Visualisasi data dan evaluasi metrik akurasi (Confusion Matrix, ROC/AUC)",
        ],
        en: [
          "Data preprocessing, exploratory data analysis (EDA) & feature engineering",
          "Classification & regression training with Scikit-learn & PyTorch",
          "Data visualization and metric evaluations (Confusion Matrix, ROC/AUC)",
        ],
      },
      tools: ["Python", "Scikit-Learn", "PyTorch", "Pandas", "NumPy", "Jupyter"],
    },
  ],

  certificates: [
    {
      id: "cert-fasi-drone-pilot",
      title: {
        id: "Junior Remote Pilot Aeronautical Knowledge Course (sUAS)",
        en: "Junior Remote Pilot Aeronautical Knowledge Course (sUAS)",
      },
      issuer: "Federasi Aero Sport Indonesia (FASI) - UAV Drone Committee",
      date: "1 August 2026",
      category: "aviation",
      badge: "Official Pilot License",
      credentialId: "20260907-JRPFASI",
      pdfUrl: "/certificates/CERTIFICATE-20260907-JRPFASI.pdf",
      imageUrl: "/certificates/cert-fasi-drone.png",
      metric: "Score: 95/100 • CASR Part 107",
      description: {
        id: "Sertifikasi resmi pilot drone dari Federasi Aero Sport Indonesia (FASI). Memenuhi regulasi DGCA CASR Part 107 & FAI Sporting Code Section 12, dengan materi mencakup hukum ruang udara Indonesia, meteorologi penerbangan, airmanship, manajemen risiko, dan prosedur inspeksi UAS.",
        en: "Official drone remote pilot certification from Indonesian Aero Sport Federation (FASI). Compliant with DGCA CASR Part 107 & FAI Sporting Code Section 12, covering Indonesian airspace regulations, aeronautical meteorology, airmanship, risk management, and UAS inspection procedures.",
      },
      skills: ["CASR Part 107", "Remote Pilot License", "Aerodynamics", "Aeronautical Meteorology", "Airspace & KKOP", "UAS Maintenance"],
    },
    {
      id: "cert-avro-vtol-team",
      title: {
        id: "Sertifikat Tim Inti Divisi VTOL (Vertical Take Off Landing)",
        en: "Core Team Certificate - VTOL Division (AVRO Polinema)",
      },
      issuer: "Komunitas Aerial Vehicle Robo Team (AVRO) Polinema",
      date: "13 Juli 2026",
      category: "aviation",
      badge: "Robotics Core Team",
      credentialId: "16650/PL2.3/KM/2026",
      pdfUrl: "/certificates/SERTIF AVRO SLTN.pdf",
      imageUrl: "/certificates/cert-avro-vtol.png",
      metric: "Periode 2024/2025 • Tim Inti",
      description: {
        id: "Penghargaan resmi atas dedikasi dan kontribusi sebagai Tim Inti Divisi Vertical Take Off Landing (VTOL) Komunitas AVRO Polinema. Berperan dalam riset wahana terbang tanpa awak, pengujian telemetri sistem Ground Control Station (GCS), dan operasi terbang otonom.",
        en: "Official credential of service as Core Team of the Vertical Take Off Landing (VTOL) Division at AVRO Polinema. Contributing to autonomous UAV research, flight telemetry validation on Ground Control Stations (GCS), and autonomous flight operations.",
      },
      skills: ["VTOL Systems", "Autonomous Flight", "GCS Operation", "MAVLink", "Telemetry", "Field Operations"],
    },
    {
      id: "cert-bwa-laravel-filament",
      title: {
        id: "Laravel 11, Filament, Service Repository Pattern: Web Sepatu",
        en: "Laravel 11, Filament, Service Repository Pattern: Shoe E-Commerce",
      },
      issuer: "BuildWithAngga",
      date: "30 Oktober 2026",
      category: "software",
      badge: "Backend & Clean Arch",
      credentialId: "FP6rrpDles",
      pdfUrl: "/certificates/laravel-11-filament-service-repository-pattern-web-sepatu-sultan-syarif-al.pdf",
      imageUrl: "/certificates/cert-laravel-filament.png",
      metric: "35 Lessons • 5h 34m",
      description: {
        id: "Kelulusan kelas backend komprehensif BuildWithAngga. Mempelajari arsitektur modern Service Repository Pattern pada framework Laravel 11, integrasi panel admin interaktif berbasis Filament PHP, serta perancangan logika bisnis web e-commerce sepatu.",
        en: "Graduation certificate from BuildWithAngga comprehensive backend course. Implemented modern Service Repository Pattern architecture in Laravel 11, built interactive admin dashboards with Filament PHP, and engineered complete e-commerce shoe platform logic.",
      },
      skills: ["Laravel 11", "Filament PHP", "Service Repository Pattern", "Clean Architecture", "PHP", "MySQL"],
    },
    {
      id: "cert-udemy-python-mastery",
      title: {
        id: "Kelas Python Lengkap 2026: Pemula Sampai Mahir (+Projects)",
        en: "Complete Python Mastery 2026: Beginner to Advanced (+Projects)",
      },
      issuer: "Udemy (Risdan Kristori & BAYOU DATA)",
      date: "25 Oktober 2026",
      category: "software",
      badge: "Programming Mastery",
      credentialId: "UC-8e419c6d-3b6c-4c87-92ae-8a6c7a29b3db",
      credentialUrl: "https://ude.my/UC-8e419c6d-3b6c-4c87-92ae-8a6c7a29b3db",
      pdfUrl: "/certificates/UC-8e419c6d-3b6c-4c87-92ae-8a6c7a29b3db.pdf",
      imageUrl: "/certificates/cert-udemy-python.png",
      metric: "17.5 Total Hours",
      description: {
        id: "Kursus intensif 17.5 jam pemrograman Python dari dasar hingga tingkat mahir. Meliputi Object-Oriented Programming (OOP), automasi skrip, struktur data kompleks, penanganan file, dan pengerjaan proyek komputasi praktis.",
        en: "Intensive 17.5-hour Python programming course from fundamentals to advanced concepts. Covers Object-Oriented Programming (OOP), script automation, complex data structures, file handling, and practical software projects.",
      },
      skills: ["Python", "OOP", "Automation", "Data Structures", "Scripting", "Projects"],
    },
  ],
};
