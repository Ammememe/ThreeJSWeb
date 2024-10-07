export const navLinks = [

  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Education',
    href: '#education',
  },
  {
    id: 3,
    name: 'Work',
    href: '#experience',
  },

  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  
  {
    title: 'Careylo',
    desc: 'A user-friendly mobile and web application designed to provide accessible medical treatment to people on the African continent.',
    subdesc:
      'I implemented the ICD-11 API to help doctors accurately diagnose patients, streamlining the diagnostic process. Additionally, I integrated Jitsi to enable seamless video consultations between doctors and patients. The application was built using React and Node.js, with Jitsi services developed in Java, following a microservices architecture.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/Careylo.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/java.png',
      },
    ],
  },
  {
    title: 'Amirkhatiby.com - Portfolio Website',
    desc: 'My personal portfolio website, designed to showcase my skills and projects. It features a clean, modern design with smooth animations and a user-friendly interface, providing visitors with an engaging experience.',
    subdesc:
      'Built with React and Vite, the website is optimized for performance and accessibility, with a focus on responsive design. It was created for me to learn how to use ThreeJS while I gained experience in React.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/portfolio.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Amirs Recipe Website',
    desc: 'Website created for my own personal use, through an recipe API I can search for recipes and get instructions on how to make the meal. The application uses a recipe API to fetch data and display it in a user-friendly manner, the API is being called from Spoonacular.',
    subdesc:
      ' The recipe application has been developed through React with simple use of CSS and HTML. The design is simple and user-friendly, with a focus on providing a seamless experience for users.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/recipe.mp4',
    logo: '/assets/food.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      
     
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Backend Developer',
    pos: 'TheEveryoneStore',
    duration: '2022 - Present',
    title: "At my internship with The Everyone Store, I developed our Java backend solutions and managed a cloud-based PostgreSQL database on Heroku, which we eventually migrated to AWS. I also set up and maintained a CI/CD pipeline to ensure efficient project workflows",
    icon: '/assets/eos.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Fullstack Developer',
    pos: 'Swedcon-18',
    duration: '2020 - 2022',
    title: " During my initial internship as a developer, I contributed to the development of scalable web applications, utilizing TypeScript, React, and Java Spring Boot. My role involved integrating databases such as MySQL and MongoDB, focusing on learning and applying best practices in data management and application functionality. I also worked with implementing Jitsi as a service to the project, my part was developing the backend which was done with the help of Jaas documentation",
    icon: '/assets/swedcon18.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Retail Sales Associate (Part-Time)',
    pos: 'Tele2',
    duration: '2021 - 2024',
    title: "Specialize in technical sales to both private and business customers, offering exceptional service and tailored Tele2 solutions.",
    icon: '/assets/tele2.png',
    animation: 'salute',
  },
];

export const education = [
  {
    id: 1,
    name: 'Cloud Development Azure',
    pos: 'IT-Högskolan',
    duration: '2024 - Present',
    title: "Expanding my knowledge in Azure cloud development, focusing on Azure functions and serverless architecture. Learning to build scalable secure cloud applications using CI/CD and Azure Kubernetes Services(AKS).",
    icon: '/assets/ithogskola.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Cloud Native Computing',
    pos: 'YH akademin',
    duration: '2024 - present',
    title: "Expanding my expertise in microservices architecture, Kubernetes, Docker, and CI/CD pipelines, with a focus on building scalable, secure cloud-native applications. Also gaining proficiency in developing applications with Python and Go.",
    icon: '/assets/yh.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Cloud Development AWS',
    pos: 'Jensens Yrkeshögskola',
    duration: '2022 - 2024',
    title: "Developed cloud applications using AWS and built APIs with Java Spring Boot. Gained a solid foundation in React.js and Node.js, while also working extensively with MySQL and PostgreSQL for database management.",
    icon: '/assets/jensens.png',
    animation: 'salute',
  },
];