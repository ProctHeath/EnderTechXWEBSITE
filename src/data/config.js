const config = {
  name: 'EnderTechX',
  tagline: 'The Developer For The Web',
  description: "Création d'applications web, mobiles et IoT avec les technologies modernes.",
  heroSubtitle: 'Fullstack & Mobile Developer',
  heroCommand: 'git clone https://github.com/EnderTechX/portfolio.git',
  email: 'contact@endertechx.dev',
  location: 'France',
  resumeUrl: '#',

  social: {
    github: 'https://github.com/ProctHeath',
    linkedin: 'https://www.linkedin.com/in/sa%C3%AFd-dilmi-aribi-9a7a663b6',
    twitter: 'https://twitter.com/EnderTechX',
  },

  about: {
    title: 'À Propos de Moi',
    paragraphs: [
      "Je suis un développeur passionné par la création d'expériences numériques modernes, que ce soit sur le web, le mobile ou l'IoT. Je conçois des interfaces futuristes, responsives et performantes.",
      "Mon expertise couvre le développement web (React, Node.js), mobile (Flutter, SwiftUI) et les projets hardware/IoT. Je suis fasciné par les interfaces neon, le glassmorphism et les designs qui sortent de l'ordinaire.",
      "Quand je ne code pas, j'explore les nouvelles technologies, je contribue à des projets open-source ou je développe des prototypes hardware.",
    ],
  },

  skills: [
    { name: 'HTML5', level: 95, icon: 'fa-brands fa-html5', color: '#e34f26' },
    { name: 'CSS3', level: 90, icon: 'fa-brands fa-css3', color: '#1572b6' },
    { name: 'JavaScript', level: 85, icon: 'fa-brands fa-js', color: '#f7df1e' },
    { name: 'Node.js', level: 80, icon: 'fa-brands fa-node', color: '#339933' },
    { name: 'React', level: 85, icon: 'fa-brands fa-react', color: '#61dafb' },
    { name: 'Python', level: 85, icon: 'fa-brands fa-python', color: '#3776ab' },
    { name: 'Flutter', level: 82, icon: 'fa-brands fa-flutter', color: '#02569b' },
    { name: 'Dart', level: 80, icon: 'fa-brands fa-dart-lang', color: '#0175c2' },
    { name: 'Swift', level: 75, icon: 'fa-brands fa-swift', color: '#f05138' },
  ],

  features: [
    {
      icon: 'fa-solid fa-paintbrush',
      title: 'Design UI Moderne',
      desc: "Création d'interfaces responsives et esthétiques qui s'adaptent à tous les écrans.",
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Code Propre',
      desc: 'Code maintenable et efficace suivant les meilleures pratiques et standards modernes.',
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Performance',
      desc: "Temps de chargement rapides et expériences fluides grâce à un code optimisé.",
    },
    {
      icon: 'fa-solid fa-mobile-alt',
      title: 'Responsive Design',
      desc: 'Sites qui fonctionnent parfaitement sur tous les appareils, du mobile au desktop.',
    },
  ],

  projects: [
    {
      title: 'FitPlan Studio',
      desc: "Application complète de suivi fitness avec programmes d'entraînement, nutrition, statistiques et minuteur intégré. Interface neon/glassmorphism.",
      tags: ['Flutter', 'SwiftUI', 'Dart', 'Fitness'],
      image: 'https://picsum.photos/seed/fitplanstudio/600/400',
      youtube: '#',
      github: 'https://github.com/ProctHeath/fitplan_studio',
    },
    {
      title: 'Portfolio Neon',
      desc: 'Portfolio développeur avec design néon interactif, mode sombre/clair et animations fluides.',
      tags: ['React', 'Vite', 'CSS', 'JavaScript'],
      image: 'https://picsum.photos/seed/portfolioneon/600/400',
      youtube: '#',
      github: 'https://github.com/ProctHeath/portfolio',
    },
    {
      title: 'Snake Game',
      desc: 'Jeu Snake classique avec interface moderne, score tracking et difficulté progressive.',
      tags: ['Python', 'Pygame'],
      image: 'https://picsum.photos/seed/snakegame/600/400',
      youtube: '#',
      github: 'https://github.com/ProctHeath/snake-game',
    },
    {
      title: 'Admin Dashboard',
      desc: "Application de tableau de bord d'entreprise cross-platform avec graphiques, Analytics et gestion des données.",
      tags: ['Flutter', 'Dart', 'iOS', 'Android'],
      image: 'https://picsum.photos/seed/admindashboard/600/400',
      youtube: '#',
      github: '#',
    },
  ],
};

export default config;
