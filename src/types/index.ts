export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'software' | 'art';
  category?: string;
  technologies?: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  description?: string;
  url: string;
  isYouTube?: boolean;
  youtubeUrl?: string;
}

export interface YouTubeVideo {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
}





export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'software' | 'art';
  technologies?: string[];
  demoUrl?: string;
  codeUrl?: string;
  category?: 'Music Videos' | 'Modeling' | 'Video Direction';
}



export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}







