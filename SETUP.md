# Getting Started with the Portfolio

This guide will help you get your Angular 17 portfolio up and running locally.

## Installation

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Angular 17
- Tailwind CSS
- TypeScript
- PostCSS and Autoprefixer

### 2. Start Development Server
```bash
npm start
```

The application will be available at `http://localhost:4200`

## File Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── navbar/          # Navigation bar
│   │   │   ├── hero/            # Hero section
│   │   │   ├── about/           # About me section
│   │   │   ├── skills/          # Skills showcase
│   │   │   ├── experience/      # Work experience timeline
│   │   │   ├── projects/        # Featured projects
│   │   │   ├── achievements/    # Awards and certifications
│   │   │   ├── contact/         # Contact form section
│   │   │   └── footer/          # Footer section
│   │   ├── pages/               # Page components
│   │   │   └── home/            # Home page (integrates all sections)
│   │   ├── app.component.ts     # Root component
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Routing configuration
│   ├── environments/            # Environment configurations
│   │   ├── environment.ts       # Development environment
│   │   └── environment.prod.ts  # Production environment
│   ├── index.html              # Main HTML file
│   ├── main.ts                 # Application entry point
│   └── styles.css              # Global styles
├── angular.json                # Angular CLI configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TypeScript app configuration
├── package.json                # NPM package configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

## Customization Guide

### 1. Update Personal Information

**Hero Section** (`src/app/components/hero/hero.component.ts`)
```typescript
openLink(url: string) {
  // Update these URLs to your profiles
  // LinkedIn: https://www.linkedin.com/in/yourprofile
  // GitHub: https://github.com/yourprofile
}
```

**Contact Section** (`src/app/components/contact/contact.component.ts`)
```typescript
openEmail() {
  // Update to your actual email
  window.location.href = 'mailto:your.email@example.com';
}
```

### 2. Update Content Sections

**Edit Skills** (`src/app/components/skills/skills.component.ts`)
```typescript
skills: Skill[] = [
  { name: 'Your Skill', level: 90, category: 'Category' },
  // Add more skills...
];
```

**Edit Experience** (`src/app/components/experience/experience.component.ts`)
```typescript
experiences: Experience[] = [
  {
    position: 'Your Position',
    company: 'Your Company',
    duration: 'Date Range',
    description: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech1', 'Tech2']
  },
  // Add more experiences...
];
```

**Edit Projects** (`src/app/components/projects/projects.component.ts`)
```typescript
projects: Project[] = [
  {
    title: 'Project Title',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    image: '🔐',
    githubLink: 'https://github.com/...'
  },
  // Add more projects...
];
```

### 3. Customize Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#1e293b',      // Dark slate
      'secondary': '#334155',    // Medium slate
      'accent': '#06b6d4',       // Cyan
    },
  },
}
```

## Available Scripts

```bash
# Start development server with hot reload
npm start

# Build for production
npm run build

# Watch files for development
npm run watch
```

## Building for Deployment

### Production Build
```bash
npm run build
```

Output files will be in `dist/angular-portfolio/`

### Deployment Options

**Vercel** (Recommended for Angular)
```bash
npm install -g vercel
vercel
```

**Netlify**
1. Run `npm run build`
2. Drag the `dist/angular-portfolio/` folder to Netlify

**GitHub Pages**
1. Update `angular.json` with your repo name
2. Run `npm run build -- --base-href=/repo-name/`
3. Push `dist/` to GitHub

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Images are lazy-loaded
2. CSS is minified and purged
3. Code is tree-shaken and minified
4. Animations are GPU-accelerated

## Troubleshooting

**Port 4200 already in use?**
```bash
npm start -- --port 4201
```

**Module not found error?**
```bash
rm -rf node_modules
npm install
```

**Build errors?**
```bash
npm run build -- --configuration development
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start development: `npm start`
3. 📝 Update your personal information
4. 🎨 Customize colors and styling
5. 🚀 Build and deploy

Enjoy your professional portfolio! 🎉
