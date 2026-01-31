export const portfolioData = {
  personal: {
    name: "Paul Doho",
    title: "Fullstack/AI Engineer",
    location: "London, UK",
    email: "pauldoho@outlook.com",
    linkedin: "https://www.linkedin.com/in/paul-doho-702b82200/",
    github: "https://github.com/pdd27673",
    resume: "https://github.com/pdd27673/pdd27673/blob/0dba0482129167454108cd04ab29a1c1841a7f64/Paul_Doho_Resume%20(1).docx",
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
  projects: [
    {
      title: "Time for Tennis (10s)",
      description: "Monitoring service automating court tracking across ClubSpark and Courtside. Features intelligent 10-minute scraping, granular venue watches, and real-time Telegram and email alerts.",
      technologies: ["Next.js 15", "TypeScript", "SQLite", "Drizzle ORM", "NextAuth.js", "Cheerio", "Telegram API", "Resend", "Tailwind CSS 4.0", "Railway"],
      url: "https://timefor10s.com",
      github: "https://github.com/pdd27673/10s-court-monitor",
      featured: true
    },
    {
      title: "Ivory Coast Housing Platform",
      description: "Contributing to a project bringing streamlined technology solutions to the housing sector in Cote d'Ivoire, helping modernize real estate processes.",
      technologies: ["React", "AWS", "Node.js"],
      url: null,
      github: null,
      featured: false
    },
    {
      title: "Xgridz - Disability Assessment App",
      description: "Built an application for disability assessments, improving accessibility for special education kids and streamlining the evaluation process.",
      technologies: ["React", "TypeScript", "Firebase"],
      url: null,
      github: "https://github.com/pdd27673/Xgridz",
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
      title: "Building a React Microsoft Teams App: What We Learned",
      date: "2026-01",
      url: "/building-react-teams-app",
      isLatest: true
    },
    {
      title: "On Starting Out, Learning the Flow",
      date: "2024-12",
      url: "/on-starting-out",
      isLatest: false
    }
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
