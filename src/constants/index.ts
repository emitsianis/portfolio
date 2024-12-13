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
    desc: 'Expertise in building modern, responsive web applications.',
    subdesc:
      'Proficient in creating scalable and maintainable web solutions using TypeScript, React, HTML, CSS, and JavaScript.',
    texture: '/textures/skills/webdev.mp4',
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
    desc: 'Skilled in developing high-performance backend systems.',
    subdesc:
      'Experience in building efficient server-side applications with Golang, focusing on concurrency and microservices.',
    texture: '/textures/skills/webdev.mp4',
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
    desc: 'Specialized in data engineering and large language models.',
    subdesc:
      'Proficient in Python, LangChain, and Hugging Face for building data pipelines and AI models.',
    texture: '/textures/skills/webdev.mp4',
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
    desc: 'Experienced in creating mobile applications.',
    subdesc:
      'Skilled in React Native and Flutter for cross-platform mobile app development.',
    texture: '/textures/skills/webdev.mp4',
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
    desc: 'Passionate about creating immersive gaming experiences.',
    subdesc:
      'Proficient in Unreal Engine, Unity, and Godot for game design and development.',
    texture: '/textures/skills/webdev.mp4',
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
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
