export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    description: "Component systems, responsive engineering, and state design.",
    icon: "code-2",
    skills: [
      { name: "React 19 & Next.js", level: "Primary", highlight: true },
      { name: "TypeScript & ESNext", level: "Core", highlight: true },
      { name: "Tailwind CSS v4", level: "Core", highlight: true },
      { name: "Three.js & 3D Web", level: "Creative", highlight: true },
      { name: "Vite & Modern Bundlers", level: "Core", highlight: false },
      { name: "Web Accessibility (WCAG)", level: "Standard", highlight: false },
    ],
  },
  {
    id: "backend",
    title: "Backend & System APIs",
    description: "Robust server logic, security controls, and relational data flows.",
    icon: "server",
    skills: [
      { name: "PHP 8.x & Laravel 12", level: "Primary", highlight: true },
      { name: "RESTful API Architecture", level: "Core", highlight: true },
      { name: "Node.js Runtimes", level: "Working", highlight: false },
      { name: "Authentication & CSRF", level: "Security", highlight: true },
      { name: "SSRF & Input Sanitization", level: "Security", highlight: true },
      { name: "Rate Limiting & Sessions", level: "Security", highlight: false },
    ],
  },
  {
    id: "database",
    title: "Databases & Storage",
    description: "Relational modeling, query optimization, and local storage caches.",
    icon: "database",
    skills: [
      { name: "MySQL & MariaDB", level: "Primary", highlight: true },
      { name: "PostgreSQL & Supabase", level: "Working", highlight: false },
      { name: "Schema & Migration Design", level: "Core", highlight: true },
      { name: "IndexedDB & Browser Storage", level: "Client", highlight: false },
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Developer Experience",
    description: "Editor extensions, Git versioning, and continuous deployment.",
    icon: "wrench",
    skills: [
      { name: "VS Code Extension API", level: "Specialist", highlight: true },
      { name: "Chrome Extensions (MV3)", level: "Specialist", highlight: true },
      { name: "Git & GitHub Workflows", level: "Core", highlight: true },
      { name: "Vercel & Cloud Hosting", level: "Deploy", highlight: false },
      { name: "Figma & UI Prototyping", level: "Design", highlight: false },
    ],
  },
];

