import React, { useState } from 'react';
import { projects } from '../data/projectsData';
import type { ProjectItem } from '../types';
import { ExternalLink, Github, Play, X, ArrowLeft, ChevronLeft, ChevronRight, Code, Palette } from 'lucide-react';
import ImageModal from './ImageModal';
import { useTheme } from '../context/ThemeContext';
import { paintingGallery, videoDirectionGallery, musicVideos } from '../data/galleryData';
import type { GalleryImage, YouTubeVideo } from '../types';

const Portfolio: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'software' | 'artistic' | null>(null);
  const [activeSubModal, setActiveSubModal] = useState<'music-videos' | 'painting' | 'video-direction' | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<{
    images: GalleryImage[];
    index: number;
    title: string;
  } | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{
    video: YouTubeVideo;
    index: number;
  } | null>(null);
  const { theme } = useTheme();
  
  const softwareProjects = projects.filter(project => project.type === 'software');
  const artisticProjects = projects.filter(project => project.type === 'art');

  const handleImageClick = (project: ProjectItem) => {
    if (project.type === 'art' && project.category) {
      if (project.category === 'Music Videos') {
        setActiveSubModal('music-videos');
      } else if (project.category === 'Painting') {
        setActiveSubModal('painting');
      } else if (project.category === 'Video Direction') {
        setActiveSubModal('video-direction');
      }
    }
  };

  const handleVideoClick = (video: YouTubeVideo, index: number) => {
    setSelectedVideo({ video, index });
  };

  const handleGalleryClick = (images: GalleryImage[], title: string, startIndex: number = 0) => {
    setSelectedGallery({ images, index: startIndex, title });
  };

  const handleNextVideo = () => {
    if (selectedVideo) {
      const nextIndex = (selectedVideo.index + 1) % musicVideos.length;
      setSelectedVideo({
        video: musicVideos[nextIndex],
        index: nextIndex
      });
    }
  };

  const handlePreviousVideo = () => {
    if (selectedVideo) {
      const prevIndex = (selectedVideo.index - 1 + musicVideos.length) % musicVideos.length;
      setSelectedVideo({
        video: musicVideos[prevIndex],
        index: prevIndex
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-center bg-cover blur-sm md:blur"
        style={{ backgroundImage: `url('/st.jpg')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="section-container relative z-10">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>My Portfolio</h2>
        
        {/* Two Main Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Software/IT Solutions Section */}
          <div 
            onClick={() => setActiveModal('software')}
            className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <div 
              className="relative h-80 bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: "url('/soft.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <Code size={64} className="relative z-10 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                IT Solutions
              </h3>
              <p className={`text-lg mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Full-stack applications, system analysis, and IT solutions built with modern technologies.
              </p>
              <div className="flex items-center text-teal-500 font-semibold group-hover:text-teal-400 transition-colors">
                <span>View Projects</span>
                <ArrowLeft size={20} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Artistic Work Section */}
          <div 
            onClick={() => setActiveModal('artistic')}
            className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <div 
              className="relative h-80 bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: "url('/DS.JPG')" }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <Play size={64} className="relative z-10 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Artistic Works
              </h3>
              <p className={`text-lg mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Music videos, painting, video Editing & directing and creative multimedia projects.
              </p>
              <div className="flex items-center text-teal-500 font-semibold group-hover:text-teal-400 transition-colors">
                <span>View Works</span>
                <ArrowLeft size={20} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedGallery && (
        <ImageModal
          isOpen={!!selectedGallery}
          onClose={() => setSelectedGallery(null)}
          images={selectedGallery.images}
          initialIndex={selectedGallery.index}
          title={selectedGallery.title}
        />
      )}

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          />
          <div className={`relative w-full max-w-4xl mx-4 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between p-4 border-b ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedVideo(null)}
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
                  {selectedVideo.video.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className={`p-2 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative aspect-video">
              <iframe
                src={selectedVideo.video.url.replace('watch?v=', 'embed/')}
                title={selectedVideo.video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Video Navigation Buttons */}
              <button
                onClick={handlePreviousVideo}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextVideo}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Video Info */}
            <div className={`p-4 border-t ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <p className={`mt-2 text-sm ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {selectedVideo.index + 1} of {musicVideos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Software/IT Projects Modal */}
      {activeModal === 'software' && (
        <div className="fixed inset-0 z-[50] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          />
          <div className={`relative w-full max-w-6xl mx-4 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between p-6 border-b ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-4">
                <Code size={32} className="text-blue-500" />
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  IT Solutions Projects
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className={`p-2 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {softwareProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                    theme={theme}
                    onImageClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Artistic Work Modal */}
      {activeModal === 'artistic' && !activeSubModal && (
        <div className="fixed inset-0 z-[50] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          />
          <div className={`relative w-full max-w-6xl mx-4 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between p-6 border-b ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-4">
                <Palette size={32} className="text-pink-500" />
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Artistic Works
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className={`p-2 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artisticProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleImageClick(project)}
                    className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-white">
                          <Play size={24} />
                          <span className="font-medium">View {project.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      } mb-2`}>{project.title}</h3>
                      <p className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      } text-sm`}>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Music Videos Sub-Modal */}
      {activeSubModal === 'music-videos' && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveSubModal(null)}
          />
          <div className={`relative w-full max-w-6xl mx-4 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between p-6 border-b ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveSubModal(null)}
                  className={`flex items-center gap-2 p-2 rounded-md hover:bg-opacity-10 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white hover:bg-white' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                  }`}
                >
                  <ArrowLeft size={20} />
                  <span>Back to Artistic Works</span>
                </button>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Music Videos
                </h3>
              </div>
              <button
                onClick={() => setActiveSubModal(null)}
                className={`p-2 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className={`grid gap-6 ${
                musicVideos.length === 1 
                  ? 'grid-cols-1 justify-items-center' 
                  : musicVideos.length === 2 
                    ? 'grid-cols-1 md:grid-cols-2 justify-items-center' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {musicVideos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => handleVideoClick(video, index)}
                    className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-white">
                          <Play size={32} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`text-lg font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Painting Sub-Modal */}
      {activeSubModal === 'painting' && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveSubModal(null)}
          />
          <div className={`relative w-full max-w-6xl mx-4 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between p-6 border-b ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveSubModal(null)}
                  className={`flex items-center gap-2 p-2 rounded-md hover:bg-opacity-10 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white hover:bg-white' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                  }`}
                >
                  <ArrowLeft size={20} />
                  <span>Back to Artistic Works</span>
                </button>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Painting Gallery
                </h3>
              </div>
              <button
                onClick={() => setActiveSubModal(null)}
                className={`p-2 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paintingGallery.map((image, idx) => (
                  <div
                    key={image.id}
                    onClick={() => handleGalleryClick(paintingGallery, 'Painting Gallery', idx)}
                    className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className={`text-lg font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{image.title}</h3>
                      {image.description && (
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>{image.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Direction Sub-Modal */}
      {activeSubModal === 'video-direction' && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveSubModal(null)}
          />
          <div className={`relative w-full max-w-6xl mx-4 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between p-6 border-b ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveSubModal(null)}
                  className={`flex items-center gap-2 p-2 rounded-md hover:bg-opacity-10 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white hover:bg-white' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                  }`}
                >
                  <ArrowLeft size={20} />
                  <span>Back to Artistic Works</span>
                </button>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  My Creative Works (Editing and Directing)
                </h3>
              </div>
              <button
                onClick={() => setActiveSubModal(null)}
                className={`p-2 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoDirectionGallery.map((video, idx) => (
                  <div
                    key={video.id}
                    onClick={() => handleGalleryClick(videoDirectionGallery, 'Video Direction Gallery', idx)}
                    className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.url} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-white">
                          <Play size={32} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`text-lg font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{video.title}</h3>
                      {video.description && (
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>{video.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  theme: 'light' | 'dark';
  onImageClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, theme, onImageClick }) => {
  return (
    <div 
      className={`card group hover:-translate-y-2 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animation: 'fadeIn 0.5s ease-out forwards'
      }}
    >
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {project.type === 'art' && project.category && (
          <div className={`absolute top-4 right-4 ${
            theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
          } backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-teal-400`}>
            {project.category}
          </div>
        )}

        {project.type === 'art' && project.category === 'Music Videos' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 text-white">
              <Play size={24} />
              <span className="font-medium">Watch Video</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        } mb-2`}>{project.title}</h3>
        <p className={`${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        } text-sm mb-4`}>{project.description}</p>
        
        {project.type === 'software' && project.technologies && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className={`text-xs px-2 py-1 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {project.type === 'software' && (
          <div className="flex space-x-3 mt-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            
            {project.codeUrl && (
  <a
    href={project.codeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
  >
    <Github size={14} />
    Code
  </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;