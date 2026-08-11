import { Project } from '../types';

export const projects: Project[] = [
  // Software Projects
  {
    id: 'project-1',
    title: 'Court Case Tracking System',
    description: 'A full-stack platform for tracking court cases with user authentication, case lists, appointment notifications, and real-time updates.',
    image: '/projects/court.jpg',
    type: 'software',
    technologies: ['React', 'C#', 'ASP.NET', 'MSSQL', 'Stripe'],
    demoUrl: 'https://your-demo-url.com',
    codeUrl: 'https://github.com/tiewodros/court-system',
  },
  {
    id: 'project-2',
    title: 'Student Dormitory System',
    description: 'Dormitory management system with room allocation, maintenance requests, and deadline notifications.',
    image: '/projects/dorm.jpg',
    type: 'software',
    technologies: ['Flutter', 'Dart', 'ASP.NET', 'MSSQL'],
    demoUrl: 'https://your-demo-url.com',
    codeUrl: 'https://github.com/tiewodros/dorm-system',
  },
  {
    id: 'project-3',
    title: 'Hotel Reservation System',
    description: 'Hotel booking platform allowing users to reserve rooms and process payments online.',
    image: '/projects/hotel.jpg',
    type: 'software',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    demoUrl: 'https://your-demo-url.com',
    codeUrl: 'https://github.com/tiewodros/hotel-system',
  },
  {
    id: 'project-4',
    title: 'Libe Multimedia Company Website',
    description: 'Multimedia platform showcasing web development, branding, digital design, and creative content solutions.',
    image: '/projects/libemultimedia.jpg',
    type: 'software',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'MySQL'],
    demoUrl: 'https://www.libemultimedia.com',
    codeUrl: 'https://github.com/tiewodros/libemultimedia',
  },

  // Artistic Projects
  {
    id: 'art-1',
    title: 'Music Videos',
    description: 'Visually striking music videos exploring the balance between structure and chaos with experimental cinematography.',
    image: '/art/music-video.jpg',
    type: 'art',
    category: 'Music Videos',
  },
  {
    id: 'art-2',
    title: 'Modeling Photo Series',
    description: 'Professional modeling photography series showcasing style and expression.',
    image: '/art/modeling.jpg',
    type: 'art',
    category: 'Modeling',
  },
  {
    id: 'art-3',
    title: 'Video Direction & Editing',
    description: 'Music videos, short documentary films, and social media content reflecting cultural values and creativity.',
    image: '/art/video-direction.jpg',
    type: 'art',
    category: 'Video Direction',
  },
];
