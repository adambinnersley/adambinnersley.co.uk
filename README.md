# Adam Binnersley - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Particle Animation**: Interactive particle background in the hero section
- **Smooth Animations**: Page animations powered by Framer Motion
- **Skills Filtering**: Filter skills by category (Programming Languages, Frameworks, Testing, etc.)
- **Portfolio Filtering**: Filter projects by type (AI, Web, App, IOT, Product Development)
- **Company Logos**: Horizontal scrolling marquee of company logos
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Full metadata configuration for search engines
- **TypeScript**: Fully typed codebase
- **CI/CD Ready**: GitHub Actions workflow for automated deployments to Vercel

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Particles**: [@tsparticles/react](https://particles.js.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow for Vercel
├── public/
│   └── images/             # Static images
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and CSS variables
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Main page component
│   ├── components/
│   │   ├── sections/       # Page sections
│   │   │   ├── About.tsx
│   │   │   ├── Companies.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Skills.tsx
│   │   └── ui/             # Reusable UI components
│   │       ├── Navigation.tsx
│   │       └── ThemeToggle.tsx
│   ├── context/
│   │   └── ThemeContext.tsx # Theme provider
│   └── data/
│       ├── companies.ts    # Company logos data
│       ├── portfolio.ts    # Portfolio projects data
│       └── skills.ts       # Skills data
├── terraform/              # Terraform configuration for Vercel
└── package.json
```

## Customization

### Personal Information

Edit the following files to customize with your information:

- `src/components/sections/Hero.tsx` - Name, title, and social links
- `src/components/sections/About.tsx` - Bio and services
- `src/components/sections/Contact.tsx` - Contact information
- `src/data/skills.ts` - Your skills and proficiency levels
- `src/data/portfolio.ts` - Your portfolio projects
- `src/data/companies.ts` - Companies you've worked with
- `src/app/layout.tsx` - SEO metadata

### Theme Colors

Edit the CSS variables in `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #3b82f6;
  --secondary: #6366f1;
  --accent: #8b5cf6;
  /* ... */
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

### GitHub Actions

The project includes a GitHub Actions workflow that automatically deploys to Vercel on push.

Required secrets:
- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### Terraform

See `terraform/README.md` for infrastructure-as-code deployment using Terraform.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
