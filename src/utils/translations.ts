import { Translation } from '../types';

export const translations: Translation = {
  appName: {
    en: 'CineSpectrum',
    km: 'សុីណេស្ពិចត្រឹម',
  },
  home: {
    en: 'Home',
    km: 'ទំព័រដើម',
  },
  khmerMovies: {
    en: 'Khmer Movies',
    km: 'ខ្សែភាពយន្តខ្មែរ',
  },
  international: {
    en: 'International',
    km: 'អន្តរជាតិ',
  },
  series: {
    en: 'Series',
    km: 'ស៊េរី',
  },
  upcoming: {
    en: 'Upcoming',
    km: 'ដែលនឹងមកដល់',
  },
  myList: {
    en: 'My List',
    km: 'បញ្ជីរបស់ខ្ញុំ',
  },
  search: {
    en: 'Search',
    km: 'ស្វែងរក',
  },
  watchNow: {
    en: 'Watch Now',
    km: 'មើលឥឡូវនេះ',
  },
  addToList: {
    en: 'Add to My List',
    km: 'បន្ថែមទៅបញ្ជីរបស់ខ្ញុំ',
  },
  play: {
    en: 'Play',
    km: 'លេង',
  },
  trailer: {
    en: 'Trailer',
    km: 'រឿងសង្ខេប',
  },
  rating: {
    en: 'Rating',
    km: 'ការវាយតម្លៃ',
  },
  director: {
    en: 'Director',
    km: 'ការដឹកនាំ',
  },
  cast: {
    en: 'Cast',
    km: 'តួសម្តែង',
  },
  genre: {
    en: 'Genre',
    km: 'ប្រភេទ',
  },
  duration: {
    en: 'Duration',
    km: 'រយៈពេល',
  },
  releaseYear: {
    en: 'Release Year',
    km: 'ឆ្នាំចេញផ្សាយ',
  },
  synopsis: {
    en: 'Synopsis',
    km: 'រឿងសង្ខេប',
  },
  topRated: {
    en: 'Top Rated',
    km: 'វាយតម្លៃខ្ពស់បំផុត',
  },
  popular: {
    en: 'Popular',
    km: 'ពេញនិយម',
  },
  trending: {
    en: 'Trending',
    km: 'កំពុងនិយម',
  },
  minutes: {
    en: 'min',
    km: 'នាទី',
  },
  login: {
    en: 'Login',
    km: 'ចូល',
  },
  signup: {
    en: 'Sign Up',
    km: 'ចុះឈ្មោះ',
  },
  action: {
    en: 'Action',
    km: 'សកម្មភាព',
  },
  comedy: {
    en: 'Comedy',
    km: 'កំប្លែង',
  },
  drama: {
    en: 'Drama',
    km: 'ដ្រាម៉ា',
  },
  horror: {
    en: 'Horror',
    km: 'រន្ធត់',
  },
  scifi: {
    en: 'Sci-Fi',
    km: 'វិទ្យាសាស្ត្រ',
  },
  darkMode: {
    en: 'Dark Mode',
    km: 'ទម្រង់ងងឹត',
  },
  lightMode: {
    en: 'Light Mode',
    km: 'ទម្រង់ភ្លឺ',
  },
};

export const getTranslation = (key: string, language: string): string => {
  if (!translations[key]) return key;
  return translations[key][language as 'en' | 'km'] || key;
};