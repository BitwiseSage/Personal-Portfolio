export const profile = {
  name: "Arfan Asgar",
  title: "CSE-AIML Student",
  focus: "Machine Learning, Backend Development, and Building Real-World Applications",
  bio: "Second-year Computer Science student specializing in Artificial Intelligence and Machine Learning at PES University. Interested in building practical software projects and exploring machine learning applications using Python, C/C++, and modern web technologies.",
  email: "md17arfan@gmail.com",
  github: "https://github.com/BitwiseSage",
  linkedin: "https://www.linkedin.com/in/mohammed-arfan-a39577340/",
  available: true,
  availableFor: "Internship Opportunities",
};

export interface Project {
  title: string;
  description: string;
  stack: string[];
  deploy?: string;
  repo: "public" | "private";
  github?: string;
  live?: string;
  stars?: number;
}

export const projects: Project[] = [
  {
    title: "Library Management System with Hash Tables and Waitlist Queue",
    description:
      "Modular library management system implemented in C using core data structures such as hash tables for efficient book lookup and a queue-based waitlist when all copies are issued. Supports operations like adding, issuing, returning and filtering books while maintaining persistent storage using binary files.",
    stack: ["C", "Data Structures", "Hash Tables", "Queues", "File Handling"],
    repo: "public",
    github: "https://github.com/BitwiseSage/Library-Management-System---DSA",
  },
  {
    title: "Secure Multi-Client Chat System",
    description:
      "CLI-based real-time chat application supporting multiple concurrent clients using TCP sockets. Implements SSL/TLS encryption for secure communication along with private messaging, room-based chats and file transfer between users.",
    stack: ["Python", "TCP Sockets", "SSL/TLS", "Multithreading", "Cryptography"],
    repo: "public",
    github: "https://github.com/BitwiseSage/Secure-Chat-Room",
  },
  {
    title: "Personal Developer Portfolio",
    description:
      "Responsive portfolio website built using React and TailwindCSS to showcase development projects, technical skills and contact information in a clean and modern interface.",
    stack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    repo: "public",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [];

export const education = {
  degree: "B.Tech Computer Science (AI & ML)",
  school: "PES University",
  period: "2024 — 2028",
  coursework: ["Data Structures", "Algorithms", "Machine Learning", "Database Systems"],
};

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { category: "Languages", skills: ["Python", "C", "C++", "JavaScript"] },
  { category: "Web Development", skills: ["HTML", "React", "Node.js", "Express.js", "MongoDB"] },
  { category: "Technologies", skills: ["Git", "Machine Learning Basics"] },
  { category: "Soft Skills", skills: ["Leadership", "Communication", "Team Collaboration"] },
];

