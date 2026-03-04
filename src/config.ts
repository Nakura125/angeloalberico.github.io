export const siteConfig = {
  name: "Angelo Alberico",
  title: "Computer Science Student & Developer",
  description:
    "Portfolio website of Angelo Alberico - CS student at UNISA, passionate about web development and algorithms",
  accentColor: "#BD93F9", // Violet
  colors: {
    dark: {
      accent: "#BD93F9",
      gray: "#8B8D98",
      background: "#111111",
    },
    light: {
      accent: "#BD93F9",
      gray: "#8B8D98",
      background: "#FFFFFF",
    },
  },
  social: {
    email: "a.alberico521@gmail.com",
    linkedin: "https://linkedin.com/in/angelo-alberico-566244216/",
    github: "https://github.com/Nakura125",
  },
  aboutMe:
    "I am a passionate Computer Science student at the University of Salerno. My primary focus is on modern web development and solving complex algorithmic problems. I enjoy creating innovative solutions and collaborating with teams on exciting projects. Currently, I am collaborating with ISISLab on WRF4Salerno, a high-resolution weather forecasting system.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Astro",
    "Node.js",
    "Python",
    "Java",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
  ],
  projects: [
    {
      name: "GottaBattleEmAll",
      description:
        "An interactive web application for Pokémon battle gameplay. Integrates modern frontend with robust backend, implementing login systems, Pokémon management, and real-time battles with WebSocket technology.",
      link: "https://github.com/Nakura125/GottaBattleEmAll",
      skills: ["React", "Node.js", "MongoDB", "WebSocket"],
    },
    {
      name: "WRF4Salerno",
      description:
        "High-resolution weather forecasting system for the Campania region. Collaboration with ISISLab for meteorological data analysis and visualization using the WRF model.",
      link: "https://github.com/ISISLab",
      skills: ["Python", "Data Science", "Meteorology"],
    },
    {
      name: "Portfolio Website",
      description:
        "Personal portfolio built with Astro and Tailwind CSS v4. Modern, responsive, and performant design with GitHub API integration for real-time repository display.",
      link: "https://github.com/Nakura125/angeloalberico.github.io",
      skills: ["Astro", "Tailwind CSS", "TypeScript", "GitHub Pages"],
    },
  ],
  experience: [
    {
      company: "ISISLab - University of Salerno",
      position: "Research Collaborator",
      period: "2024 - Present",
      description:
        "Analyzing and processing meteorological data with Python. Developing visualizations for climate data. Integrating WRF models for high-resolution forecasting.",
    },
    {
      company: "University Project",
      position: "Full Stack Developer",
      period: "2024 - 2025",
      description:
        "Developed frontend with React and responsive design. Built backend with Node.js and Express. Designed MongoDB databases. Implemented authentication and WebSocket functionality.",
    },
  ],
  education: [
    {
      school: "University of Salerno (UNISA)",
      degree: "Bachelor's in Computer Science",
      field: "Software Engineering & Complex Systems",
      period: "In Progress - Expected 2026",
      description:
        "Specializing in Software Engineering with a focus on Complex Systems. Strong academic performance with excellent grades.",
    },
  ],
} as const;
