import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import CategoryList from '../components/CategoryList';
import MovieSection from '../components/MovieSection';
import { featuredMovie, movies } from '../utils/mockData';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, -60]);
  const { theme } = useTheme();
  
  // Filter movies by category
  const khmerMovies = movies.filter(movie => movie.isKhmer);
  const actionMovies = movies.filter(movie => movie.genres.includes('action'));
  const dramaMovies = movies.filter(movie => movie.genres.includes('drama'));
  const horrorMovies = movies.filter(movie => movie.genres.includes('horror'));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-header"
    >
      {/* Hero Banner */}
      <HeroBanner movie={featuredMovie} />
      
      {/* Floating scroll indicator (visible in the hero section) */}
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        style={{ opacity, y }}
      >
        <motion.div 
          className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-dark-card/50' : 'bg-light-card/50'} backdrop-blur-md flex items-center text-sm`}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>Scroll down</span>
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
      
      {/* Categories */}
      <div className="mt-8 mb-4">
        <CategoryList />
      </div>
      
      {/* Featured Horizontal Movie Cards */}
      <MovieSection 
        title={{ 
          en: "Featured & Recommended", 
          km: "បង្ហាញ និងណែនាំ" 
        }} 
        movies={movies.slice(0, 5)} 
        viewAllLink="/featured"
        featured={true}
      />
      
      {/* Movie Sections */}
      <MovieSection 
        title={{ 
          en: "Trending Now", 
          km: "កំពុងនិយម" 
        }} 
        movies={movies} 
        viewAllLink="/trending"
      />
      
      <MovieSection 
        title={{ 
          en: "Khmer Cinema", 
          km: "ភាពយន្តខ្មែរ" 
        }} 
        movies={khmerMovies} 
        viewAllLink="/khmer-movies"
      />
      
      <MovieSection 
        title={{ 
          en: "Action & Adventure", 
          km: "សកម្មភាព និងការផ្សងព្រេង" 
        }} 
        movies={actionMovies} 
        viewAllLink="/category/action"
      />
      
      <MovieSection 
        title={{ 
          en: "Drama", 
          km: "ដ្រាម៉ា" 
        }} 
        movies={dramaMovies} 
        viewAllLink="/category/drama"
      />
      
      <MovieSection 
        title={{ 
          en: "Horror & Thriller", 
          km: "រន្ធត់ និងរំភើប" 
        }} 
        movies={horrorMovies} 
        viewAllLink="/category/horror"
      />
    </motion.div>
  );
};

export default Home;