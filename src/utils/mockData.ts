import { Movie, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'action',
    name: {
      en: 'Action',
      km: 'សកម្មភាព',
    },
  },
  {
    id: 'drama',
    name: {
      en: 'Drama',
      km: 'ដ្រាម៉ា',
    },
  },
  {
    id: 'comedy',
    name: {
      en: 'Comedy',
      km: 'កំប្លែង',
    },
  },
  {
    id: 'horror',
    name: {
      en: 'Horror',
      km: 'រន្ធត់',
    },
  },
  {
    id: 'scifi',
    name: {
      en: 'Sci-Fi',
      km: 'វិទ្យាសាស្ត្រ',
    },
  },
  {
    id: 'khmer',
    name: {
      en: 'Khmer Films',
      km: 'ខ្សែភាពយន្តខ្មែរ',
    },
  },
];

export const movies: Movie[] = [
  {
    id: 1,
    title: {
      en: 'Dune: Part Two',
      km: 'ឌូន: ផ្នែកទីពីរ',
    },
    poster: 'https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    runtime: 166,
    rating: 8.6,
    genres: ['action', 'drama', 'scifi'],
    synopsis: {
      en: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      km: "ផល អាត្រេដេស រួបរួមជាមួយ ចានី និងក្រុមហ្វ្រីមេន ខណៈពេលស្វែងរកការសងសឹកប្រឆាំងនឹងក្រុមរួមគំនិតដែលបានបំផ្លាញគ្រួសាររបស់គាត់។ ប្រឈមមុខនឹងជម្រើសរវាងស្នេហារបស់គាត់ និងវាសនានៃសកលលោក គាត់ត្រូវតែការពារអនាគតដ៏គួរឱ្យខ្លាចដែលមានតែគាត់អាចមើលឃើញ។",
    },
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    trailer: 'https://www.youtube.com/watch?v=kIcmxDQyocA',
    isKhmer: false,
  },
  {
    id: 2,
    title: {
      en: 'Turning Point',
      km: 'ការផ្លាស់ប្តូរ',
    },
    poster: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    runtime: 125,
    rating: 7.8,
    genres: ['drama', 'khmer'],
    synopsis: {
      en: "A young Cambodian woman returns to her homeland after years abroad, confronting her past and finding her identity in a rapidly changing Phnom Penh.",
      km: "ស្ត្រីខ្មែរវ័យក្មេងម្នាក់វិលត្រឡប់មកមាតុភូមិរបស់នាងវិញ បន្ទាប់ពីរស់នៅបរទេសជាច្រើនឆ្នាំ ប្រឈមមុខនឹងអតីតកាលរបស់នាង និងស្វែងរកអត្តសញ្ញាណរបស់នាងនៅក្នុងរាជធានីភ្នំពេញដែលកំពុងផ្លាស់ប្តូរយ៉ាងលឿន។",
    },
    director: 'Rithy Panh',
    cast: ['Chea Sokkea', 'Dy Sonita', 'Touch Sunnix'],
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isKhmer: true,
  },
  {
    id: 3,
    title: {
      en: 'Oppenheimer',
      km: 'អុបផេនហៃមឺ',
    },
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    runtime: 180,
    rating: 8.5,
    genres: ['drama', 'biography', 'history'],
    synopsis: {
      en: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      km: "រឿងរ៉ាវអំពីអ្នកវិទ្យាសាស្ត្រអាមេរិកជេ រ៉ូបឺត អុបផេនហៃមឺ និងតួនាទីរបស់គាត់ក្នុងការអភិវឌ្ឍគ្រាប់បែកបរមាណូ។",
    },
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
    trailer: 'https://www.youtube.com/watch?v=uYPbbksJxIg',
    isKhmer: false,
  },
  {
    id: 4,
    title: {
      en: 'Joker: Folie à Deux',
      km: 'ចកឺ: ហ្វូលី អា ឌឺ',
    },
    poster: 'https://images.pexels.com/photos/7234303/pexels-photo-7234303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    runtime: 138,
    rating: 7.9,
    genres: ['crime', 'drama', 'thriller'],
    synopsis: {
      en: "Arthur Fleck, now institutionalized at Arkham, finds an unusual connection with another inmate as his criminal alter ego Joker faces legal proceedings.",
      km: "អាថឺ ហ្វ្លេក ដែលឥឡូវនេះស្ថិតនៅក្នុងមន្ទីរពេទ្យអាកាម បានរកឃើញការតភ្ជាប់ខុសប្រក្រតីជាមួយអ្នកទោសម្នាក់ទៀត ខណៈពេលដែលតួអង្គឧក្រិដ្ឋរបស់គាត់ ចកឺ កំពុងប្រឈមមុខនឹងនីតិវិធីផ្លូវច្បាប់។",
    },
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Lady Gaga', 'Zazie Beetz'],
    trailer: 'https://www.youtube.com/watch?v=03ymBj144ng',
    isKhmer: false,
  },
  {
    id: 5,
    title: {
      en: 'Lost Shadows',
      km: 'ស្រមោលបាត់បង់',
    },
    poster: 'https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/6447231/pexels-photo-6447231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    runtime: 112,
    rating: 7.2,
    genres: ['horror', 'drama', 'khmer'],
    synopsis: {
      en: "In rural Cambodia, a family is haunted by spirits of the past, forcing them to confront dark secrets from the Khmer Rouge era.",
      km: "នៅតាមជនបទនៃប្រទេសកម្ពុជា គ្រួសារមួយត្រូវបានខ្មោចអតីតកាលដេញតាម បង្ខំឱ្យពួកគេប្រឈមមុខនឹងអាថ៌កំបាំងងងឹតពីសម័យខ្មែរក្រហម។",
    },
    director: 'Kulikar Sotho',
    cast: ['Chhun Kimhak', 'Svay Limhong', 'Nhem Soviet'],
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isKhmer: true,
  },
  {
    id: 6,
    title: {
      en: 'Deadpool & Wolverine',
      km: 'ដេដផូល និង វូលវឺរីន',
    },
    poster: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/7234322/pexels-photo-7234322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    runtime: 127,
    rating: 8.7,
    genres: ['action', 'comedy', 'adventure'],
    synopsis: {
      en: "Wade Wilson teams up with a reluctant Wolverine for an adventure that will change the Marvel Cinematic Universe forever.",
      km: "វេដ វីលសុន រួមក្រុមជាមួយ វូលវឺរីន ដែលមិនសូវចង់ សម្រាប់ការផ្សងព្រេងដែលនឹងផ្លាស់ប្តូរសកលភាពយន្ត Marvel ជារៀងរហូត។",
    },
    director: 'Shawn Levy',
    cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin'],
    trailer: 'https://www.youtube.com/watch?v=4gpW9R7WX7Y',
    isKhmer: false,
  },
  {
    id: 7,
    title: {
      en: 'River Pride',
      km: 'មោទនភាពទន្លេ',
    },
    poster: 'https://images.pexels.com/photos/5480827/pexels-photo-5480827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    runtime: 98,
    rating: 7.4,
    genres: ['drama', 'romance', 'khmer'],
    synopsis: {
      en: "A modern love story set along the Mekong River, where tradition and progress clash in a changing Cambodia.",
      km: "រឿងស្នេហាទំនើបដែលកើតឡើងនៅតាមបណ្តោយទន្លេមេគង្គ ដែលប្រពៃណីនិងការរីកចម្រើនប៉ះទង្គិចគ្នានៅក្នុងប្រទេសកម្ពុជាដែលកំពុងផ្លាស់ប្តូរ។",
    },
    director: 'Davy Chou',
    cast: ['Chhum Vannak', 'Mean Sonita', 'Ros Mony'],
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isKhmer: true,
  },
  {
    id: 8,
    title: {
      en: 'Furiosa: A Mad Max Saga',
      km: 'ហ្វូរីយ៉ូសា: រឿងម៉ាដម៉ាក់សាហ្គា',
    },
    poster: 'https://images.pexels.com/photos/7234342/pexels-photo-7234342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    backdrop: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    runtime: 150,
    rating: 8.3,
    genres: ['action', 'adventure', 'scifi'],
    synopsis: {
      en: "The origin story of renegade warrior Furiosa before she teamed up with Mad Max in 'Fury Road'.",
      km: "រឿងដើមកំណើតនៃអ្នកចម្បាំងបះបោរ ហ្វូរីយ៉ូសា មុនពេលនាងចូលរួមក្រុមជាមួយ ម៉ាដម៉ាក់ ក្នុងភាពយន្ត 'Fury Road'។",
    },
    director: 'George Miller',
    cast: ['Anya Taylor-Joy', 'Chris Hemsworth', 'Tom Burke'],
    trailer: 'https://www.youtube.com/watch?v=XdKzL0_X__c',
    isKhmer: false,
  },
];

export const featuredMovie = movies[0]; // Dune: Part Two as featured hero movie