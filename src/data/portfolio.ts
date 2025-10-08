export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'LDC Driving School',
    description: '',
    image: '/images/portfolio/ldc-driving-school.svg',
    category: 'Web',
    technologies: ['PHP', 'JavaScript', 'MySQL'],
    link: 'https://www.learnerdriving.com',
  },
  {
    id: 2,
    title: 'Theory Test Online',
    description: '',
    image: '/images/portfolio/theory-test-online.svg',
    category: 'Web',
    technologies: ['Laravel', 'Inertia.js', 'React', 'MySQL'],
    link: 'https://www.theory-test-online.co.uk',
  },
  {
    id: 3,
    title: 'Max Abraham Roofing',
    description: '',
    image: '/images/portfolio/max-abraham-roofing.svg',
    category: 'App',
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    link: '#',
  },
  {
    id: 4,
    title: 'LDC Theory Test App',
    description: '',
    image: '/images/portfolio/ldc-theory-test-app.svg',
    category: 'App',
    technologies: ['Expo', 'React Native', 'SQLite', 'Redux', 'API'],
    link: '#',
  },
  {
    id: 5,
    title: 'NHS Mentor Update',
    description: '',
    image: '/images/portfolio/nhs-mentor-update.svg',
    category: 'Web',
    technologies: ['Laravel', 'Blade'],
    link: '#',
  },
  {
    id: 6,
    title: 'NHS Mentor Update',
    description: '',
    image: '/images/portfolio/nhs-mentor-update.svg',
    category: 'Web',
    technologies: ['Laravel', 'Blade', 'HTML', 'CSS', 'MySQL'],
    link: '#',
  },
  {
    id: 7,
    title: 'MOD Matrix Test',
    description: '',
    image: '/images/portfolio/mod-matrix-test.svg',
    category: 'Web',
    technologies: ['PHP', 'JQuery', 'HTML', 'CSS', 'MySQL'],
    link: '#',
  },
  {
    id: 8,
    title: 'Celstone Roofing products',
    description: '',
    image: '/images/portfolio/celstone-roofing-products.svg',
    category: 'Product Development',
    technologies: ['Photoshop', 'Laravel', 'Blade', 'Bootstrap', 'MySQL'],
    link: '#',
  }
];

export const portfolioCategories = [
  'All',
  'Product Development',
  'App',
  'Web',
];
