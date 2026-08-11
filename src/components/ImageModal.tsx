import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { GalleryImage } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex: number;
  title: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex,
  title
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`relative w-full max-w-5xl max-h-[90vh] mx-4 rounded-lg overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      } flex flex-col`}>
        {/* Header */}
        <div className={`relative flex items-center justify-between p-4 border-b flex-shrink-0 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className={`flex items-center gap-2 p-2 rounded-md hover:bg-opacity-10 ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-white hover:bg-white' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
              }`}
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </button>
            <h3 className={`text-xl font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-50 ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-white hover:bg-white/10' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Container */}
        <div className="relative aspect-video bg-black flex-shrink-0">
          {currentImage.isYouTube && currentImage.youtubeUrl ? (
            <iframe
              src={currentImage.youtubeUrl.replace('watch?v=', 'embed/')}
              title={currentImage.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="w-full h-full object-contain"
            />
          )}

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-40 ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-40 ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Image/Video Info */}
        <div className={`p-4 border-t flex-shrink-0 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <h4 className={`text-lg font-medium ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {currentImage.title}
          </h4>
          {currentImage.description && (
            <p className={`mt-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {currentImage.description}
            </p>
          )}
          <p className={`mt-2 text-sm ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {currentIndex + 1} of {images.length}
          </p>
        </div>

        {/* Thumbnails */}
        <div className={`p-4 border-t ${
          theme === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'
        } overflow-y-auto`}>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => {
              const extractYouTubeId = (url?: string) => {
                if (!url) return '';
                try {
                  const u = new URL(url);
                  if (u.hostname.includes('youtu.be')) return u.pathname.replace('/', '');
                  if (u.searchParams.get('v')) return u.searchParams.get('v') as string;
                  const paths = u.pathname.split('/');
                  const embedIndex = paths.indexOf('embed');
                  if (embedIndex >= 0 && paths[embedIndex + 1]) return paths[embedIndex + 1];
                } catch {}
                return '';
              };
              const ytId = image.isYouTube ? extractYouTubeId(image.youtubeUrl) : '';
              const thumbSrc = image.isYouTube && ytId
                ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
                : image.url;
              return (
                <button
                  key={image.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                    currentIndex === index
                      ? 'ring-2 ring-blue-500'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumbSrc}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;