import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  // PROJECT 1: Ethio Farmer Trader Linkage System
  {
    id: 1,
    title: 'Ethio Farmer Trader Linkage System',
    description: 'A digital marketplace platform eliminating intermediaries between Ethiopian farmers and consumers. Features real-time market pricing, disease diagnosis consultation, transport logistics, and admin oversight. Built to reduce exploitation and ensure fair pricing.',
    image: '/projects/farmer-linkage.jpg', // Add image later
    type: 'software',
    technologies: ['Flutter', 'Dart', 'PHP', 'MySQL', 'WebSocket', 'REST API', '2FA'],
    demoUrl: '#', // Add your live demo URL
    codeUrl: '#', // Add your GitHub URL
  },
  // PROJECT 2: Personal Portfolio Website
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio showcasing IT expertise and multidisciplinary artistic work. Features dynamic gradient animations, dark/light theme, interactive galleries, CV download, and EmailJS contact form integration.',
    image: '/projects/portfolio.jpg', // Add image later
    type: 'software',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'EmailJS'],
    demoUrl: 'https://your-portfolio-url.com', // Replace with your URL
    codeUrl: 'https://github.com/yourusername/portfolio', // Replace with your GitHub URL
  },
];