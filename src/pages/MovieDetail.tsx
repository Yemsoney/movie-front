import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Plus, ThumbsUp, Share2, Star, Clock, Calendar, Download, Heart, BookmarkPlus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import { movies } from '../utils/mockData';
import MovieSection from '../components/MovieSection';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Find the movie by ID
  const movie = movies.find(m => m.id === Number(id));
  
  // Fallback if movie not found
  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-header">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Movie not found' : 'រកមិនឃើញភាពយន្ត'}
          </h2>
          <Link to="/" className="btn-primary">
            {language === 'en' ? 'Back to Home' : 'ត្រឡប់ទៅទំព័រដើម'}
          </Link>
        </motion.div>
      </div>
    );
  }
  
  // Similar movies (for recommendation)
  const similarMovies = movies
    .filter(m => m.id !== movie.id && m.genres.some(g => movie.genres.includes(g)))
    .slice(0, 8);
  
  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      } 
    })
  };
  
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-header"
    >
      {/* Movie Backdrop */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/70 to-transparent" />
        
        {/* Movie Info Overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 md:p-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
              {/* Poster */}
              <motion.div 
                className="w-48 md:w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-xl"
                variants={fadeInUpVariants}
                custom={0}
              >
                <img 
                  src={movie.poster} 
                  alt={movie.title[language]} 
                  className="w-full h-auto"
                />
              </motion.div>
              
              {/* Details */}
              <div className="flex-grow">
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight"
                  variants={fadeInUpVariants}
                  custom={1}
                >
                  {movie.title[language]}
                </motion.h1>
                
                <motion.div 
                  className="flex flex-wrap items-center gap-4 mb-4"
                  variants={fadeInUpVariants}
                  custom={2}
                >
                  <div className="flex items-center bg-accent-gold/20 px-3 py-1.5 rounded-md">
                    <Star className="w-4 h-4 text-accent-gold mr-1" fill="currentColor" />
                    <span className="text-accent-gold font-medium">{movie.rating}</span>
                  </div>
                  
                  <div className="flex items-center text-text-dark-secondary">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{movie.year}</span>
                  </div>
                  
                  <div className="flex items-center text-text-dark-secondary">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{movie.runtime} {getTranslation('minutes', language)}</span>
                  </div>
                  
                  {movie.isKhmer && (
                    <span className="px-3 py-1 rounded-md bg-accent-primary/20 text-accent-primary text-sm font-medium">
                      {language === 'en' ? 'Khmer Film' : 'ភាពយន្តខ្មែរ'}
                    </span>
                  )}
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={fadeInUpVariants}
                  custom={3}
                >
                  {movie.genres.map((genre, idx) => (
                    <span 
                      key={idx} 
                      className="text-sm bg-dark-card/40 backdrop-blur-sm text-text-dark-secondary px-3 py-1 rounded-full"
                    >
                      {getTranslation(genre, language)}
                    </span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={fadeInUpVariants}
                  custom={4}
                >
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
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5 mr-2" /> 
                    {getTranslation('trailer', language)}
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 rounded-full bg-dark-card/50 text-white hover:bg-dark-card/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BookmarkPlus className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 rounded-full bg-dark-card/50 text-white hover:bg-dark-card/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 rounded-full bg-dark-card/50 text-white hover:bg-dark-card/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Movie Details Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Synopsis */}
            <motion.section 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {getTranslation('synopsis', language)}
              </h2>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                {movie.synopsis[language]}
              </p>
            </motion.section>
            
            {/* Cast & Crew */}
            <motion.section 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {getTranslation('cast', language)} & {language === 'en' ? 'Crew' : 'ក្រុម'}
              </h2>
              
              <div className="mb-6">
                <h3 className="font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-2">
                  {getTranslation('director', language)}
                </h3>
                <div className="flex items-center bg-light-tertiary dark:bg-dark-tertiary p-3 rounded-lg">
                  <div className="w-10 h-10 bg-accent-primary/20 text-accent-primary rounded-full flex items-center justify-center mr-3 font-medium">
                    {movie.director.charAt(0)}
                  </div>
                  <span className="font-medium">{movie.director}</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-3">
                  {getTranslation('cast', language)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {movie.cast.map((actor, idx) => (
                    <div key={idx} className="flex items-center bg-light-tertiary dark:bg-dark-tertiary p-3 rounded-lg">
                      <div className="w-10 h-10 bg-accent-secondary/20 text-accent-secondary rounded-full flex items-center justify-center mr-3 font-medium">
                        {actor.charAt(0)}
                      </div>
                      <span className="font-medium">{actor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
            
            {/* Trailer section */}
            <motion.section 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {getTranslation('trailer', language)}
              </h2>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center shadow-neon-pink"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </motion.button>
                </div>
                <img 
                  src={movie.backdrop} 
                  alt={`${movie.title[language]} trailer`}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </motion.section>
          </div>
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Movie Facts */}
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl mb-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Movie Info' : 'ព័ត៌មានភាពយន្ត'}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-text-light-tertiary dark:text-text-dark-tertiary">
                    {getTranslation('releaseYear', language)}
                  </p>
                  <p className="font-medium">{movie.year}</p>
                </div>
                
                <div>
                  <p className="text-sm text-text-light-tertiary dark:text-text-dark-tertiary">
                    {getTranslation('duration', language)}
                  </p>
                  <p className="font-medium">{movie.runtime} {getTranslation('minutes', language)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-text-light-tertiary dark:text-text-dark-tertiary">
                    {getTranslation('genre', language)}
                  </p>
                  <p className="font-medium">{movie.genres.map(g => getTranslation(g, language)).join(', ')}</p>
                </div>
                
                <div>
                  <p className="text-sm text-text-light-tertiary dark:text-text-dark-tertiary">
                    {language === 'en' ? 'Language' : 'ភាសា'}
                  </p>
                  <p className="font-medium">
                    {movie.isKhmer 
                      ? (language === 'en' ? 'Khmer' : 'ខ្មែរ')
                      : (language === 'en' ? 'English' : 'អង់គ្លេស')}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-light-tertiary dark:border-dark-tertiary">
                <button className="w-full btn-ghost border border-accent-primary/20 text-accent-primary rounded-lg py-3 hover:bg-accent-primary/10">
                  <Download className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Download Info' : 'ទាញយកព័ត៌មាន'}
                </button>
              </div>
            </div>
            
            {/* Similar Movies Teaser */}
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'You May Also Like' : 'អ្នកក៏អាចចូលចិត្ត'}
              </h3>
              
              <div className="space-y-4">
                {similarMovies.slice(0, 3).map((movie) => (
                  <Link 
                    key={movie.id} 
                    to={`/movie/${movie.id}`} 
                    className="flex items-center space-x-3 hover:bg-light-tertiary dark:hover:bg-dark-tertiary p-2 rounded-lg transition-colors"
                  >
                    <div className="w-14 h-20 flex-shrink-0 rounded-md overflow-hidden">
                      <img 
                        src={movie.poster} 
                        alt={movie.title[language]} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-1">{movie.title[language]}</h4>
                      <div className="flex items-center text-sm text-text-light-tertiary dark:text-text-dark-tertiary space-x-2">
                        <span>{movie.year}</span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 text-accent-gold mr-0.5" fill="currentColor" />
                          {movie.rating}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
                
                <Link to="/similar" className="block text-accent-primary hover:text-accent-primary/80 transition-colors text-sm font-medium text-center mt-4">
                  {language === 'en' ? 'View All Similar Movies' : 'មើលភាពយន្តស្រដៀងគ្នាទាំងអស់'} →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Similar Movies Section */}
      {similarMovies.length > 0 && (
        <MovieSection 
          title={{ 
            en: "Similar Movies", 
            km: "ភាពយន្តស្រដៀងគ្នា" 
          }} 
          movies={similarMovies}
          viewAllLink="/similar" 
        />
      )}
    </motion.div>
  );
};

export default MovieDetail;