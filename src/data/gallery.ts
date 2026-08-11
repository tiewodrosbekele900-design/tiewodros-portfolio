import { GalleryImage, YouTubeVideo } from '../types';

export const modelingGallery: GalleryImage[] = [
  { id: 'model-1', url: '/gallery/model-1.jpg', title: 'Editorial Shoot 1' },
  { id: 'model-2', url: '/gallery/model-2.jpg', title: 'Fashion Shoot' },
  { id: 'model-3', url: '/gallery/model-3.jpg', title: 'Portrait Session' },
  { id: 'model-4', url: '/gallery/model-4.jpg', title: 'Editorial Shoot 2' },
];

export const videoDirectionGallery: GalleryImage[] = [
  {
    id: 'video-1',
    url: '/gallery/video-thumb-1.jpg',
    title: 'Music Video: Song Title 1',
    description: 'Music video direction and editing',
    isYouTube: true,
    youtubeUrl: 'https://youtube.com/watch?v=your-video-id',
  },
  {
    id: 'video-2',
    url: '/gallery/video-thumb-2.jpg',
    title: 'Music Video: Song Title 2',
    description: 'Video editing and color grading',
    isYouTube: true,
    youtubeUrl: 'https://youtube.com/watch?v=your-video-id-2',
  },
];

export const musicVideos: YouTubeVideo[] = [
  {
    id: 'music-1',
    title: 'My Latest Music Video',
    thumbnail: '/gallery/music-thumb-1.jpg',
    url: 'https://youtube.com/watch?v=your-music-video-id',
  },
  {
    id: 'music-2',
    title: 'Music Video Performance',
    thumbnail: '/gallery/music-thumb-2.jpg',
    url: 'https://youtube.com/watch?v=your-music-video-id-2',
  },
];