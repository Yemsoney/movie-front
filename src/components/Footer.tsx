import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const Footer: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const footerLinks = [
    {
      title: { en: 'About Us', km: 'អំពីយើង' },
      links: [
        { name: { en: 'Company', km: 'ក្រុមហ៊ុន' }, url: '/about/company' },
        { name: { en: 'Careers', km: 'ការងារ' }, url: '/about/careers' },
        { name: { en: 'Press', km: 'សារព័ត៌មាន' }, url: '/about/press' },
      ],
    },
    {
      title: { en: 'Support', km: 'ជំនួយ' },
      links: [
        { name: { en: 'Contact Us', km: 'ទំនាក់ទំនងមកយើង' }, url: '/support/contact' },
        { name: { en: 'FAQs', km: 'សំណួរ' }, url: '/support/faq' },
        { name: { en: 'Help Center', km: 'មជ្ឈមណ្ឌលជំនួយ' }, url: '/support/help' },
      ],
    },
    {
      title: { en: 'Legal', km: 'ផ្លូវច្បាប់' },
      links: [
        { name: { en: 'Terms of Service', km: 'លក្ខខណ្ឌសេវាកម្ម' }, url: '/legal/terms' },
        { name: { en: 'Privacy Policy', km: 'គោលការណ៍ឯកជនភាព' }, url: '/legal/privacy' },
        { name: { en: 'Cookie Policy', km: 'គោលការណ៍ខូឃី' }, url: '/legal/cookies' },
      ],
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.1 * i,
        duration: 0.4
      }
    })
  };

  const socialVariants = {
    hover: {
      scale: 1.1,
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="mt-12 bg-light-card dark:bg-dark-card pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold gradient-text">
                {getTranslation('appName', language)}
              </h2>
            </Link>
            <p className="mt-4 text-text-light-secondary dark:text-text-dark-secondary">
              {language === 'en' 
                ? 'Your premier destination for Khmer and international cinema.'
                : 'គោលដៅលំដាប់កំពូលរបស់អ្នកសម្រាប់ភាពយន្តខ្មែរ និងអន្តរជាតិ។'}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <motion.a 
                href="#" 
                className="hover-glow p-2 rounded-full bg-light-tertiary dark:bg-dark-tertiary"
                whileHover="hover"
                variants={socialVariants}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover-glow p-2 rounded-full bg-light-tertiary dark:bg-dark-tertiary"
                whileHover="hover"
                variants={socialVariants}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover-glow p-2 rounded-full bg-light-tertiary dark:bg-dark-tertiary"
                whileHover="hover"
                variants={socialVariants}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover-glow p-2 rounded-full bg-light-tertiary dark:bg-dark-tertiary"
                whileHover="hover"
                variants={socialVariants}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              variants={fadeInUpVariants}
            >
              <h3 className="text-lg font-semibold mb-4">
                {section.title[language]}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        to={link.url}
                        className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
                      >
                        {link.name[language]}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Line */}
        <motion.div 
          className="mt-12 pt-6 border-t border-light-tertiary dark:border-dark-tertiary flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-text-light-tertiary dark:text-text-dark-tertiary">
            &copy; 2025 CineSpectrum. {language === 'en' ? 'All rights reserved.' : 'រក្សាសិទ្ធិគ្រប់យ៉ាង។'}
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <select
              className="text-sm py-2 px-3 rounded-lg bg-light-tertiary dark:bg-dark-tertiary border-0 focus:ring-2 focus:ring-accent-primary"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value as 'en' | 'km');
              }}
            >
              <option value="en">English</option>
              <option value="km">ខ្មែរ</option>
            </select>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;