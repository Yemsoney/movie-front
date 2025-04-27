export type Language = 'en' | 'km';

export type Theme = 'light' | 'dark';

export interface Translation {
  [key: string]: {
    en: string;
    km: string;
  };
}

export interface Movie {
  id: number;
  title: {
    en: string;
    km: string;
  };
  poster: string;
  backdrop: string;
  year: number;
  runtime: number;
  rating: number;
  genres: string[];
  synopsis: {
    en: string;
    km: string;
  };
  director: string;
  cast: string[];
  trailer: string;
  isKhmer: boolean;
}

export interface Category {
  id: string;
  name: {
    en: string;
    km: string;
  };
}