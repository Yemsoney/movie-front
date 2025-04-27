import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../utils/mockData';
import { useLanguage } from '../context/LanguageContext';

const CategoryList: React.FC = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <motion.div 
        className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto hide-scrollbar pb-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to={`/category/${category.id}`}
              className="flex-none px-4 py-2 rounded-full bg-light-card dark:bg-dark-card hover:bg-accent-primary hover:text-white dark:hover:bg-accent-primary dark:hover:text-white transition-colors text-sm sm:text-base"
            >
              {category.name[language]}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryList;