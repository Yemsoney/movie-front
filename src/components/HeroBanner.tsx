import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Star, Info, Share2 } from 'lucide-react';
import { Movie } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  movie: Movie;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movie }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative w-full h-hero-sm md:h-hero-md lg:h-hero-lg overflow-hidden hero-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
        animate={{ 
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/60 to-transparent" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12 md:pb-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white leading-tight">
            {movie.title[language]}
          </h1>
          
          {/* Details */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <motion.div 
              className="flex items-center bg-accent-gold/20 px-3 py-1.5 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-accent-gold mr-1" fill="currentColor" />
              <span className="text-accent-gold font-medium">{movie.rating}</span>
            </motion.div>
            <span className="text-text-dark-secondary">{movie.year}</span>
            <span className="text-text-dark-secondary flex items-center">
              <span className="w-1.5 h-1.5 bg-text-dark-secondary rounded-full mr-2 opacity-50"></span>
              {movie.runtime} {getTranslation('minutes', language)}
            </span>
            {movie.isKhmer && (
              <span className="px-2 py-0.5 rounded bg-accent-primary/20 text-accent-primary text-sm font-medium">
                {language === 'en' ? 'Khmer' : 'ខ្មែរ'}
              </span>
            )}
          </div>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre, idx) => (
              <motion.span 
                key={idx} 
                className="text-sm bg-dark-card/40 backdrop-blur-sm text-text-dark-secondary px-3 py-1 rounded-full"
                whileHover={{ 
                  backgroundColor: 'rgba(255, 0, 102, 0.3)',
                  color: '#ffffff'
                }}
              >
                {getTranslation(genre, language)}
              </motion.span>
            ))}
          </div>
          
          {/* Synopsis */}
          <p className="text-text-dark-secondary mb-8 line-clamp-3 md:line-clamp-none text-base md:text-lg leading-relaxed">
            {movie.synopsis[language]}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.button 
              className="btn-primary py-3 px-6 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mr-2" fill="white" /> 
              {getTranslation('watchNow', language)}
            </motion.button>
            
            <motion.button 
              className="btn-ghost text-white py-3 px-6 rounded-full border border-white/20"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5 mr-2" /> 
              {getTranslation('addToList', language)}
            </motion.button>
            
            <Link to={`/movie/${movie.id}`} className="hidden sm:block">
              <motion.button 
                className="p-3 rounded-full bg-dark-card/40 backdrop-blur-sm text-white hover:bg-accent-primary/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Info className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <motion.button 
              className="p-3 rounded-full bg-dark-card/40 backdrop-blur-sm text-white hover:bg-accent-primary/20 hidden sm:block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Theatrical Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-40 pointer-events-none"></div>
      
      {/* Cinematic Bars (optional, for theatrical effect) */}
      <div className="absolute top-0 left-0 right-0 h-[5vh] bg-black opacity-80 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[5vh] bg-black opacity-80 hidden md:block"></div>
    </motion.div>
  );
};

export default HeroBanner;