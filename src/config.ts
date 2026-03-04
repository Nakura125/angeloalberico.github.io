export const siteConfig = {
  name: "Angelo Alberico",
  title: "Computer Science Student & Developer",
  description:
    "Portfolio website of Angelo Alberico - CS student at UNISA, passionate about web development and algorithms",
  accentColor: "#2563eb", // Blue
  social: {
    email: "a.alberico@studenti.unisa.it",
    linkedin: "https://linkedin.com/in/angelo-alberico-566244216/",
    github: "https://github.com/Nakura125",
  },
  aboutMe:
    "Sono uno studente appassionato di Informatica presso l'Università di Salerno. Il mio focus principale è lo sviluppo web moderno e la risoluzione di problemi algoritmici complessi. Mi piace creare soluzioni innovative e collaborare con team su progetti stimolanti. Attualmente collaboro con ISISLab su WRF4Salerno, un sistema di previsione meteorologica ad alta risoluzione.",
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
        "Un'applicazione web interattiva per il gioco di battaglia Pokémon. Integra frontend moderno con backend robusto, implementando sistemi di login, gestione dei pokémon, e battaglie in tempo reale con WebSocket.",
      link: "https://github.com/Nakura125/GottaBattleEmAll",
      skills: ["React", "Node.js", "MongoDB", "WebSocket"],
    },
    {
      name: "WRF4Salerno",
      description:
        "Sistema di previsione meteorologica ad alta risoluzione per il territorio campano. Collaborazione con ISISLab per l'analisi e la visualizzazione di dati meteorologici usando il modello WRF.",
      link: "https://github.com/ISISLab",
      skills: ["Python", "Data Science", "Meteorologia"],
    },
    {
      name: "Portfolio Website",
      description:
        "Portfolio personale realizzato con Astro e Tailwind CSS v4. Design moderno, responsivo e performante con integrazione GitHub API per mostrare i repository in tempo reale.",
      link: "https://github.com/Nakura125/angeloalberico.github.io",
      skills: ["Astro", "Tailwind CSS", "TypeScript", "GitHub Pages"],
    },
  ],
  experience: [
    {
      company: "ISISLab - Università di Salerno",
      title: "Collaboratore Ricerca",
      dateRange: "2024 - Presente",
      bullets: [
        "Analisi e elaborazione dati meteorologici con Python",
        "Sviluppo di visualizzazioni per dati climatici",
        "Integrazione modelli WRF per previsioni ad alta risoluzione",
      ],
    },
    {
      company: "Progetto Universitario",
      title: "Full Stack Developer",
      dateRange: "2024 - 2025",
      bullets: [
        "Sviluppo frontend con React e design responsive",
        "Backend con Node.js e Express",
        "Database design con MongoDB",
        "Implementazione autenticazione e WebSocket",
      ],
    },
  ],
  education: [
    {
      school: "Università di Salerno (UNISA)",
      degree: "Laurea in Informatica",
      dateRange: "In corso - Previsto 2026",
      achievements: [
        "Specializzazione in Ingegneria del Software",
        "Focus su Sistemi Complessi",
        "GPA: Eccellente",
      ],
    },
  ],
} as const;
