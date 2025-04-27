import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, ThumbsUp, Share2, Star, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface MovieCardProps {
  movie: Movie;
  index?: number;
  featured?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index = 0, featured = false }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const detailsVariants = {
    hidden: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`movie-card relative group ${featured ? 'aspect-video' : 'aspect-[2/3]'} h-full rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-card-hover`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${movie.id}`} className="block h-full">
        <div className="relative h-full overflow-hidden">
          {/* Movie Poster */}
          <motion.img 
            src={featured ? movie.backdrop : movie.poster} 
            alt={movie.title[language]} 
            className="w-full h-full object-cover"
            variants={imageVariants}
            loading="lazy"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Content Overlay (visible on hover) */}
          <motion.div 
            className="absolute inset-0 p-3 md:p-4 flex flex-col justify-end"
            variants={detailsVariants}
          >
            {/* Title and Year */}
            <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{movie.title[language]}</h3>
            
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center bg-accent-gold/20 px-2 py-0.5 rounded">
                <Star className="w-3 h-3 text-accent-gold mr-0.5" fill="currentColor" />
                <span className="text-accent-gold text-xs font-medium">{movie.rating}</span>
              </div>
              <span className="text-xs text-text-dark-secondary">{movie.year}</span>
            </div>
            
            {/* Genres */}
            <div className="flex flex-wrap gap-1 mb-2">
              {movie.genres.slice(0, 2).map((genre, idx) => (
                <span key={idx} className="text-xs bg-dark-card/50 text-text-dark-secondary px-2 py-0.5 rounded-full">
                  {getTranslation(genre, language)}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Actions (visible on hover) */}
          <motion.div 
            className="absolute top-2 right-2 flex flex-col space-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button 
              className="p-1.5 bg-dark-card/80 backdrop-blur-sm rounded-full hover:bg-accent-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Plus className="w-4 h-4 text-white" />
            </motion.button>
            <motion.button 
              className="p-1.5 bg-dark-card/80 backdrop-blur-sm rounded-full hover:bg-accent-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ThumbsUp className="w-4 h-4 text-white" />
            </motion.button>
            <motion.button 
              className="p-1.5 bg-dark-card/80 backdrop-blur-sm rounded-full hover:bg-accent-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 className="w-4 h-4 text-white" />
            </motion.button>
          </motion.div>
          
          {/* Play Button (appears on hover) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button 
                  className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Khmer Label (if applicable) */}
          {movie.isKhmer && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-accent-gold text-xs font-semibold text-dark-primary rounded-md">
              {language === 'en' ? 'Khmer' : 'ខ្មែរ'}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

// Helper function to get translation for movie card genres
function getTranslation(genre: string, language: string): string {
  // Import the actual getTranslation function if it has genre translations
  // For now, just return the genre as is for english or add a simple Khmer mapping
  if (language === 'en') return genre;
  
  // Simple mapping for demo purposes
  const khmerGenreMap: Record<string, string> = {
    'action': 'សកម្មភាព',
    'drama': 'ដ្រាម៉ា',
    'horror': 'រន្ធត់',
    'comedy': 'កំប្លែង',
    'scifi': 'វិទ្យាសាស្ត្រ',
    'adventure': 'ផ្សងព្រេង',
    'thriller': 'រំភើប',
    'romance': 'ស្នេហា',
    'khmer': 'ខ្មែរ',
    'biography': 'ជីវប្រវត្តិ',
    'history': 'ប្រវត្តិសាស្ត្រ',
    'crime': 'ឧក្រិដ្ឋកម្ម'
  };
  
  return khmerGenreMap[genre.toLowerCase()] || genre;
}

export default MovieCard;