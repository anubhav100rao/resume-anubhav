
import type { Experience, Project, Education, SkillCategory, SocialLinks, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
    name: "Anubhav Kumar Rao",
    title: "Software Engineer",
    email: "anubhav100rao@gmail.com",
    phone: "+91 8219629821",
    about: "A dedicated and passionate software engineer with a knack for building scalable, efficient, and user-centric applications. Experienced in full-stack development, LLM integration, and cloud technologies."
};

export const socialLinks: SocialLinks = {
    github: "https://github.com/anubhav100rao",
    linkedin: "https://www.linkedin.com/in/anubhav100rao/",
    resume: "https://drive.google.com/file/d/1nhTYvt1FnTJ6nMsw7eqvgBLDrxiC7Ydy/view?usp=sharing"
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Coinbase",
    location: "Remote, India",
    duration: "June 2025 - Present",
    description: [
      "Architected an LLM-powered infrastructure to centralize and analyze customer issues, enhancing issue resolution.",
      "Developed ETL pipelines using LLMs for automated chat transcript classification, reducing project estimation timelines by 50%."
    ],
  },
  {
    role: "Member Technical (Software Engineer)",
    company: "D.E. Shaw & Co",
    location: "Hyderabad, India",
    duration: "Aug 2024 - June 2025",
    description: [
      "Integrated a RAG-based LLM solution into the DESTerm platform, significantly improving financial modeling for 13M+ instruments.",
      "Designed a high-throughput batch processing and log storage platform, scaling to 2TB using Redis for caching.",
      "Built a time series library for efficient retrieval of EOD and intraday data for over 13 million tickers."
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Rubrik",
    location: "Bangalore, India",
    duration: "Jan 2024 - Jun 2024",
    description: [
      "Expanded Azure archival storage capacity from 8TB to 32TB, a 300% increase.",
      "Integrated GCP metrics into Rubrik's reporting system, boosting monitoring coverage by 10% and report traffic by 17%.",
      "Developed a multi-cloud (Azure, AWS, GCP) reporting, metrics, and licensing framework to streamline customer onboarding."
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Razorpay",
    location: "Bangalore, India",
    duration: "May 2023 - Jul 2023",
    description: [
      "Implemented departmental filtering for Razorpay XPayroll, enabling precise payroll processing for 50+ large organizations.",
      "Architected a full-stack solution with scalable MySQL, backend APIs, and a React frontend to streamline department onboarding.",
    ],
  },
  {
    role: "Contest Tester & Coordinator - Part time",
    company: "Leetcode",
    location: "USA, India (Remote)",
    duration: "Jan 2025 - Present",
    description: [
      "Evaluated hundreds of algorithmic problems and collaborated with setters to ensure quality, impacting over 5 million competitive programmers.",
      "Coordinated weekly and bi-weekly programming contests, managing timelines and communication between problem setters and the editorial team.",
      "Authored and rigorously tested problem statements, solutions, and test cases to guarantee clarity, correctness, and optimal difficulty.",
      "Provided real-time support during live contests, promptly resolving participant issues to maintain a fair and competitive environment."
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Duplicate Files Handler",
    technologies: ["Golang", "System Calls", "CLI"],
    description: "Developed a CLI tool to detect and delete duplicate files, reducing manual effort by 90% and saving over 10 hours per week.",
    link: "https://github.com/anubhav100rao/",
  },
  {
    title: "Deep Fake Voice Detection",
    technologies: ["Python", "Neural Networks", "ML"],
    description: "Designed a deep learning model using convolutional neural networks for discerning between fake and authentic audio samples with over 98% accuracy.",
    link: "https://github.com/anubhav100rao/",
  },
  {
    title: "LiveConnect",
    technologies: ["Node.js", "Express", "MongoDB", "React", "WebSockets"],
    description: "Engineered a full-stack, real-time chat application for over 10,000 users with WebSockets, JWT, and MongoDB for horizontal scaling.",
    link: "https://github.com/anubhav100rao/",
  },
];

export const education: Education[] = [
    {
      institution: "Indian Institute of Information Technology Allahabad",
      degree: "B.Tech ECE",
      duration: "Nov 2020 - May 2024",
      score: "GPA: 8.65"
    },
    {
      institution: "Sri Aurobindo Public School",
      degree: "Class 12",
      duration: "Apr 2017 - Apr 2019",
      score: "Percentage: 96.2%"
    }
];

export const skills: SkillCategory[] = [
    {
        category: "Languages",
        technologies: ["C/C++", "Golang", "Python", "Java", "Kotlin", "JavaScript", "SQL", "Bash/Zsh"]
    },
    {
        category: "Frameworks & Libraries",
        technologies: ["React", "Node.js", "Express", "FastAPI", "Flask", "Spring Boot", "gRPC", "GraphQL", "WebSockets"]
    },
    {
        category: "Databases & Caching",
        technologies: ["MySQL", "MongoDB", "Redis"]
    },
    {
        category: "DevOps & Cloud",
        technologies: ["Docker", "Kubernetes", "GCP", "Azure", "AWS", "CI/CD", "Linux"]
    },
    {
        category: "Core CS",
        technologies: ["Data Structures", "Algorithms", "Operating Systems", "System Design", "Networking", "OOP"]
    }
];

export const achievements: string[] = [
    "Codeforces 1700+ rated, top ranks in multiple contests.",
    "Codechef 5-star (2077) rating, securing high global ranks.",
    "Leetcode Guardian (2404) rating, Top 0.37% worldwide.",
    "Leetcode rated contest tester and Problem setter."
];