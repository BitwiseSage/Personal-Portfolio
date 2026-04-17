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
    title: "SVD Image Compression Tool",
    description:
      "Interactive image compression tool using Singular Value Decomposition (SVD) for low-rank matrix approximation, enabling visualization of reconstruction quality versus compression trade-offs on grayscale image matrices.",
    stack: ["Python", "NumPy", "Matplotlib", "Linear Algebra"],
    repo: "public",
    github: "https://github.com/BitwiseSage/SVD-Image-Compression-Tool",
  },
  {
    title: "Secure Multi-Client Chat System",
    description:
      "CLI-based real-time chat application supporting multiple concurrent clients using TCP sockets with SSL/TLS encryption for secure communication, including private messaging and room-based chat functionality.",
    stack: ["Python", "TCP Sockets", "SSL/TLS", "Multithreading", "Cryptography"],
    repo: "public",
    github: "https://github.com/BitwiseSage/Secure-Chat-Room",
  },
  {
    title: "Personal Developer Portfolio",
    description:
      "Responsive developer portfolio built using React, TypeScript, Tailwind CSS and Framer Motion to showcase projects, technical skills and contact information with a modern animated UI.",
    stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
    repo: "public",
    github: "https://github.com/BitwiseSage/Personal-Portfolio",
    live: "https://arfanasgar.vercel.app",
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