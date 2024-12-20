export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const mySkills = [
  {
    title: 'Web Development',
    desc: 'Crafting modern, responsive, and user-focused web applications.',
    subdesc:
      'With expertise in TypeScript, React, HTML, CSS, and JavaScript, I specialize in building scalable, maintainable, and efficient web solutions. My focus is on delivering clean code, intuitive interfaces, and seamless performance to enhance user experience across devices.',
    texture: '/textures/skills/webdev.mov',
    logo: '/assets/webdev-logo.png',
    logoStyle: {
      backgroundColor: '#282C34',
      border: '0.2px solid #61DAFB',
      boxShadow: '0px 0px 60px 0px #61DAFB4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'TypeScript', path: '/assets/typescript.svg' },
      { id: 2, name: 'React', path: '/assets/react.svg' },
      { id: 3, name: 'HTML', path: '/assets/html.svg' },
      { id: 4, name: 'CSS', path: '/assets/css.svg' },
      { id: 5, name: 'JavaScript', path: '/assets/javascript.svg' },
    ],
  },
  {
    title: 'Golang Development',
    desc: 'Building efficient and reliable systems with Go.',
    subdesc:
      'With a growing proficiency in Golang, I focus on developing applications that prioritize performance and scalability. My experience includes working with concurrency patterns and microservices architecture, constantly improving with each project.',
    texture: '/textures/skills/golang.mov',
    logo: '/assets/golang-logo.png',
    logoStyle: {
      backgroundColor: '#00ADD8',
      border: '0.2px solid #005F73',
      boxShadow: '0px 0px 60px 0px #005F734D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Golang', path: '/assets/golang.svg' },
    ],
  },
  {
    title: 'Data and LLM Engineering',
    desc: 'Exploring the intersection of data and AI with emerging technologies.',
    subdesc:
      'As a beginner in data engineering and large language models, I am developing skills in Python, LangChain, and Hugging Face. I am passionate about learning how to build data pipelines and leverage AI models, seeing this field as pivotal for the future.',
    texture: '/textures/skills/python.mov',
    logo: '/assets/data-logo.png',
    logoStyle: {
      backgroundColor: '#FFD700',
      border: '0.2px solid #FFA500',
      boxShadow: '0px 0px 60px 0px #FFA5004D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 3, name: 'Hugging Face', path: '/assets/huggingface.svg' },
    ],
  },
  {
    title: 'Mobile Development',
    desc: 'Building reliable and user-friendly mobile applications.',
    subdesc:
      'With intermediate skills in React Native and Flutter, I create cross-platform mobile apps that prioritize performance and usability. I’m constantly refining my expertise in this dynamic field to deliver better mobile experiences.',
    texture: '/textures/skills/mobile.mov',
    logo: '/assets/mobile-logo.png',
    logoStyle: {
      backgroundColor: '#FF5722',
      border: '0.2px solid #E64A19',
      boxShadow: '0px 0px 60px 0px #E64A194D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React Native', path: '/assets/react-native.svg' },
      { id: 2, name: 'Flutter', path: '/assets/flutter.svg' },
    ],
  },
  {
    title: 'Game Development',
    desc: 'Merging passion and skills to craft engaging games.',
    subdesc:
      'As a gaming enthusiast, I explore game design and development through tools like Unreal Engine, Unity, and Godot. While primarily a hobby, this pursuit allows me to combine creativity with technical expertise, deepening my connection to the gaming world.',
    texture: '/textures/skills/gamedev.mov',
    logo: '/assets/game-logo.png',
    logoStyle: {
      backgroundColor: '#8E44AD',
      border: '0.2px solid #7D3C98',
      boxShadow: '0px 0px 60px 0px #7D3C984D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Unreal Engine', path: '/assets/unreal.svg' },
      { id: 2, name: 'Unity', path: '/assets/unity.svg' },
      { id: 3, name: 'Godot', path: '/assets/godot.svg' },
    ],
  },
];

export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [2.5, -7, 0] : isMobile ? [4, -6.5, 0] : isTablet ? [4, -8.5, 0] : [7, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [3, 3, 0] : isTablet ? [5, 4, 0] : [7, 3.5, 0],
    linuxLogoPosition: isSmall ? [-3, 3, 0] : isMobile ? [-3.5, 3.5, 0] : isTablet ? [-4, 2.5, 0] : [-6, 3, 0],
    JSLogoPosition: isSmall ? [-4, -10, -10] : isMobile ? [-5, -9, -5] : isTablet ? [-8, -7, -8] : [-12, -11, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'VODA.ai',
    pos: 'Lead Software Engineer',
    duration: '2022 - Present',
    title: "Led the development of multiple front ends and a robust back end with React, Node, and GoLang. Improved performance through multithreading and PostGIS integration. Created an AI-powered copilot feature using OpenAI APIs.",
    icon: '/assets/voda.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Softhouse.gr',
    pos: 'Full Stack Developer',
    duration: '2020 - 2022',
    title: "Designed and built web and mobile applications using Angular, Node, React Native, and Golang. Played a key role in architecture and ensured alignment with client requirements by collaborating with marketing and sales teams.",
    icon: '/assets/vsale.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Tradeline',
    pos: 'Full Stack Engineer',
    duration: '2019 - 2020',
    title: "Developed front and back-end systems with Angular, Node, and GRPC. Built reusable UI components in collaboration with the UI/UX team. Enhanced communication between front-end and back-end with HTTP and WebSockets.",
    icon: '/assets/tradeline.png',
    animation: 'salute',
  },
];
