import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { Movie } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

interface MovieSectionProps {
  title: {
    en: string;
    km: string;
  };
  movies: Movie[];
  viewAllLink?: string;
  featured?: boolean;
}

const MovieSection: React.FC<MovieSectionProps> = ({ 
  title, 
  movies, 
  viewAllLink = '/',
  featured = false
}) => {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' 
        ? -current.offsetWidth * 0.75 
        : current.offsetWidth * 0.75;
      
      current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
      
      // Check scroll position after animation
      setTimeout(checkScrollPosition, 400);
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {title[language]}
          </motion.h2>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <motion.button 
                onClick={() => scroll('left')}
                className={`p-2 rounded-full bg-light-card dark:bg-dark-card hover:bg-light-tertiary dark:hover:bg-dark-tertiary transition-colors ${
                  !showLeftArrow ? 'opacity-50 cursor-not-allowed' : 'hover-glow'
                }`}
                aria-label="Scroll left"
                disabled={!showLeftArrow}
                whileHover={showLeftArrow ? { scale: 1.1 } : {}}
                whileTap={showLeftArrow ? { scale: 0.9 } : {}}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={() => scroll('right')}
                className={`p-2 rounded-full bg-light-card dark:bg-dark-card hover:bg-light-tertiary dark:hover:bg-dark-tertiary transition-colors ${
                  !showRightArrow ? 'opacity-50 cursor-not-allowed' : 'hover-glow'
                }`}
                aria-label="Scroll right"
                disabled={!showRightArrow}
                whileHover={showRightArrow ? { scale: 1.1 } : {}}
                whileTap={showRightArrow ? { scale: 0.9 } : {}}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            {viewAllLink && (
              <Link 
                to={viewAllLink}
                className="hidden sm:block text-accent-primary hover:text-accent-primary/80 transition-colors text-sm font-medium"
              >
                {language === 'en' ? 'View All' : 'មើលទាំងអស់'} →
              </Link>
            )}
          </div>
        </div>
        
        <motion.div 
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onScroll={checkScrollPosition}
        >
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className={`flex-none ${
                featured 
                  ? 'w-[85%] sm:w-[45%] md:w-[35%] lg:w-[30%] h-52 sm:h-64'
                  : 'w-[180px] sm:w-[200px] md:w-[220px]'
              }`}
            >
              <MovieCard movie={movie} index={index} featured={featured} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MovieSection;