export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'TypeScript', category: 'Programming Languages' },
  { name: 'JavaScript', category: 'Programming Languages' },
  { name: 'PHP', category: 'Programming Languages' },
  { name: 'SQL', category: 'Programming Languages' },
  { name: 'HTML/CSS', category: 'Programming Languages' },
  { name: 'Sass', category: 'Programming Languages' },

  // Frameworks
  { name: 'React', category: 'Frameworks' },
  { name: 'React Native', category: 'Frameworks' },
  { name: 'Inertia.js', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'Laravel', category: 'Frameworks' },
  { name: 'Expo', category: 'Frameworks' },
  { name: 'Tailwind CSS', category: 'Frameworks' },
  { name: 'Bootstrap', category: 'Frameworks' },

  // Testing
  { name: 'Jest', category: 'Testing' },
  { name: 'PHPUnit', category: 'Testing' },

  // DevOps & Cloud
  { name: 'Plesk', category: 'DevOps & Cloud' },
  { name: 'Travis CI', category: 'DevOps & Cloud' },
  { name: 'GitHub Actions', category: 'DevOps & Cloud' },
  { name: 'CI/CD', category: 'DevOps & Cloud' },

  // Databases
  { name: 'MySQL', category: 'Databases' },
  { name: 'Redis', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },

  // Tools & Other
  { name: 'Git', category: 'Tools & Other' },
  { name: 'REST APIs', category: 'Tools & Other' },
  { name: 'GraphQL', category: 'Tools & Other' },
  { name: 'Agile/Scrum', category: 'Tools & Other' },
  { name: 'VS Code', category: 'Tools & Other' },
  { name: 'Photoshop', category: 'Tools & Other' },
  { name: 'Figma', category: 'Tools & Other' },
];

export const categories = [
  'All',
  'Programming Languages',
  'Frameworks',
  'Testing',
  'DevOps & Cloud',
  'Databases',
  'Tools & Other',
];
