export const portfolioData = {
  personal: {
    name: "Paul Doho",
    title: "Fullstack/AI Engineer",
    location: "London, UK",
    email: "pauldoho@outlook.com",
    linkedin: "https://www.linkedin.com/in/paul-doho-702b82200/",
    github: "https://github.com/pdd27673",
    resume: "https://raw.githubusercontent.com/pdd27673/pdd27673/main/2026_PDD_Resume.pdf",
    bio: [
      "I'm a **full-stack software engineer** with experience in building scalable applications, cloud infrastructure (AWS), CI/CD pipelines, and AI/ML systems.",
      "Currently at [Goldman Sachs](https://www.goldmansachs.com/), I focus on internal tooling and infrastructure projects. I contributed to building a documentation portal that transformed how engineering teams share and discover information across the organization. I am currently working on an internal full stack mobile app to help serve senior members of the firm.",
      "I'm also a freelance AI/ML consultant at [Excetra Lab](https://excetra.ai/), where I help businesses build production-ready ML systems and AI solutions.",
      "I'm passionate about creating technology solutions that solve real-world problems, particularly in underserved markets."
    ]
  },
  experience: [
    {
      company: "Excetra Lab",
      role: "AI/ML Engineer",
      location: "London, UK",
      dateRange: "Mar 2025 – Present",
      achievements: [
        "Helped launch an AI consulting firm focused on building production-ready ML systems and AI solutions for enterprise-level clients",
        "Architected and deployed RAG-based document intelligence systems using Python, vector databases, and LLM APIs",
        "Developed asynchronous backend services with FastAPI to support real-time inference and high-speed data processing"
      ]
    },
    {
      company: "Goldman Sachs",
      role: "Software Engineer II (Associate)",
      location: "London, UK",
      dateRange: "Jan 2025 – Present",
      achievements: [
        "Develop enterprise solutions including Microsoft Teams and global notification systems using Graph API and SharePoint",
        "Architect NLP-powered documentation system using RAG patterns, vector embeddings, and GPT APIs to automate quality audits",
        "Engineer scalable backend services in Python, Go, and Java using AWS ECS, Lambda, and DynamoDB serverless architecture",
        "Optimized delivery lifecycles by 64% via GitLab CI/CD, saving engineering teams 4 hours of manual effort weekly",
        "Built high-traffic full-stack apps with React and Next.js, maintaining a platform serving 16k+ users and 1M+ monthly views"
      ]
    },
    {
      company: "Goldman Sachs",
      role: "Software Engineer (Analyst)",
      location: "Salt Lake City, UT, USA",
      dateRange: "Jan 2022 – Dec 2024",
      achievements: [
        "Engineered scalable UIs and front-facing components using React, TypeScript, and Gatsby to enhance internal client experiences",
        "Designed RESTful APIs in Java with MongoDB, improving data efficiency, reducing latency, and ensuring high reliability",
        "Architected cloud-native backend services leveraging AWS EC2, S3, and Lambda to deliver secure and scalable infrastructure",
        "Automated software delivery via CI/CD pipelines in Git environments, incorporating automated testing and containerization",
        "Collaborated with global teams to troubleshoot technical issues and refine data validation, minimizing system downtime"
      ]
    }
  ],
  education: [
    {
      institution: "California State University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Northridge, CA, USA",
      dateRange: "2018 – 2021",
      achievements: [
        "Focused on software engineering, algorithms, and data structures",
        "Completed coursework in distributed systems, database design, AI models,and web development"
      ]
    }
  ],
  projects: [
    {
      title: "Time for Tennis (10s)",
      description: "Monitoring service automating court tracking across ClubSpark and Courtside. Features intelligent 10-minute scraping, granular venue watches, and real-time Telegram and email alerts.",
      technologies: ["Next.js 15", "TypeScript", "SQLite", "Drizzle ORM", "NextAuth.js", "Cheerio", "Telegram API", "Resend", "Tailwind CSS 4.0", "Railway"],
      url: "https://timefor10s.com",
      github: "https://github.com/pdd27673/10s-court-monitor",
      caseStudy: null,
      featured: true
    },
    {
      title: "Midnight Court Booker",
      description: "The autonomous other half of Time for Tennis: a bot that wins London's midnight court-release race. Trusts the Stripe PaymentIntent as the real lock, splits on the pay_init response (fail fast on 4xx, recover held slots via Playwright on 5xx), cascades court → time → venue fallbacks, and is driven from a Telegram approval card with crash-recoverable SQLite state.",
      technologies: ["TypeScript", "Node.js", "Playwright", "got", "SQLite", "node-cron", "Telegram API", "Fly.io"],
      url: null,
      github: null,
      caseStudy: "/winning-the-midnight-court-race",
      featured: false
    },
    {
      title: "Terra",
      description: "A bilingual (FR/EN) property marketplace for Côte d'Ivoire, focused on Abidjan. A pnpm monorepo pairing an Expo / React Native mobile app with Next.js admin and marketing/listings web apps on a Supabase backend — OTP auth, a live listings feed, favorites, real-time messaging, and profiles.",
      technologies: ["React Native", "Expo", "Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "pnpm Monorepo", "Tailwind CSS"],
      url: null,
      github: null,
      caseStudy: null,
      featured: false
    },
    {
      title: "Wada Palette Archive",
      description: "A digital companion to Sanzo Wada's Dictionary of Color Combinations — 200 palettes from the 1930s Japanese reference work, browsable and filterable in a clean single-page archive.",
      technologies: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
      url: null,
      github: "https://github.com/pdd27673/misc-projects/tree/wada-palette-archive",
      caseStudy: null,
      featured: false
    },
    {
      title: "Gametime Grid",
      description: "A TV-guide-style EPG for sports — a scrolling grid of live and upcoming games across the major leagues, so you can see what's on at a glance.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      url: null,
      github: "https://github.com/pdd27673/misc-projects/tree/gametime-grid-sports-epg",
      caseStudy: null,
      featured: false
    },
    {
      title: "Xgridz - Disability Assessment App",
      description: "Built an application for disability assessments, improving accessibility for special education kids and streamlining the evaluation process.",
      technologies: ["React", "TypeScript", "Firebase"],
      url: null,
      github: "https://github.com/pdd27673/Xgridz",
      caseStudy: null,
      featured: false
    }
  ],
  skills: [
    "Python",
    "TypeScript",
    "Go",
    "Java",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "GitLab CI/CD",
    "Terraform",
    "TensorFlow",
    "OpenAI",
    "GraphQL",
    "REST APIs",
    "Microservices"
  ],
  writings: [
    {
      title: "Winning the Midnight Court Race",
      date: "2026-06",
      url: "/winning-the-midnight-court-race",
      isLatest: true
    },
    {
      title: "Building a React Microsoft Teams App: What We Learned",
      date: "2026-01",
      url: "/building-react-teams-app",
      isLatest: false
    },
    {
      title: "On Starting Out, Learning the Flow",
      date: "2024-12",
      url: "/on-starting-out",
      isLatest: false
    }
  ],
  interests: [
    {
      title: "Socialism",
      icon: "Users",
      description: "I'm interested in exploring socialist theory and its various interpretations—from democratic socialism to more radical approaches. The ideas around collective ownership, worker rights, and economic democracy resonate with me. I'm particularly drawn to understanding how these principles can be applied in modern contexts and what they mean for building more equitable societies."
    },
    {
      title: "Tennis",
      icon: "Circle",
      description: "Tennis combines physical endurance with mental strategy in a way that's uniquely challenging. I appreciate the physical aspect of the sport and the mental strategy required to win a point. I also like challenges, and tennis provides a lot of them."
    },
    {
      title: "Vinyls",
      icon: "Disc",
      description: "There's something special about the ritual of playing vinyl records—the tactile experience of handling the record, placing it on the turntable, hearing that warm, analog sound and being transported to another time and place. I enjoy collecting records across genres. One my favorite latest addition is 'Debi Tirar Mas Fotos' by Bad Bunny."
    },
    {
      title: "Cooking",
      icon: "ChefHat",
      description: "Cooking is my way of expressing creativity and showing love. I enjoy trying out new recipes and sharing them with my family and friends. It's a way to connect with others through shared meals and create a sense of community."
    },
    {
      title: "Fashion",
      icon: "Shirt",
      description: "I enjoy fashion as a form of self-expression—the way an outfit can shift how you carry yourself and how the right pieces come together. I like paying attention to fit, fabric, and silhouette, and building a wardrobe that feels considered rather than trend-chasing."
    },
  ],
  activities: {
    leetcode: [
      // {
      //   id: "239",
      //   title: "Sliding Window Maximum",
      //   number: "#239",
      //   tags: ["Array", "Queue"],
      //   date: "2026-01-31"
      // }
    ],
    github: []
  }
} as const
