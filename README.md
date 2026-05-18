# Software Engineer Portfolio - Angular 17

A modern, responsive portfolio website built with Angular 17, Tailwind CSS, and TypeScript. Features a clean dark theme with smooth animations and comprehensive sections showcasing professional experience, skills, and projects.

## 🌟 Features

- **Clean Modern UI** - Dark theme with cyan/blue accent colors
- **Fully Responsive** - Mobile-first design, optimized for all devices
- **Smooth Scrolling** - Smooth scroll navigation between sections
- **Standalone Components** - Modern Angular 17 standalone component architecture
- **Tailwind CSS Styling** - Utility-first CSS framework for rapid development
- **Form Validation** - Contact form with reactive validation
- **High Performance** - Optimized animations and transitions

## 📋 Sections Included

1. **Hero Section** - Name, title, summary, and social media buttons
2. **About Me** - Professional bio and key statistics
3. **Skills** - Technical skills with progress bars organized by category
4. **Work Experience** - Career timeline with company details and achievements
5. **Projects** - Featured projects with descriptions and technologies
6. **Achievements** - Awards and certifications
7. **Contact** - Email form and contact information
8. **Footer** - Quick links and tech stack

## 🛠️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   ├── achievements/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── pages/
│   │   │   └── home/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:4200`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/app/components/hero/hero.component.ts`
   - Update LinkedIn and GitHub URLs
   - Modify greeting text and summary

2. **About Section** - Edit `src/app/components/about/about.component.html`
   - Update bio and statistics

3. **Skills** - Edit `src/app/components/skills/skills.component.ts`
   - Add/remove skills
   - Update skill levels

4. **Experience** - Edit `src/app/components/experience/experience.component.ts`
   - Add work experience entries
   - Update company and descriptions

5. **Projects** - Edit `src/app/components/projects/projects.component.ts`
   - Add your projects
   - Update links and descriptions

6. **Contact** - Edit `src/app/components/contact/contact.component.ts`
   - Update email address
   - Add backend endpoint for form submission

### Color Customization

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#1e293b',
      'secondary': '#334155',
      'accent': '#06b6d4',
    },
  },
}
```

## 🎯 Key Technologies

- **Angular 17** - Modern web framework with standalone components
- **TypeScript 5.2** - Strongly typed JavaScript
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **RxJS** - Reactive programming library
- **Angular Forms** - Reactive form handling and validation

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - Tailored layouts for tablets and desktops
- **Touch Friendly** - Large touch targets and smooth interactions

## ✨ Features in Detail

### Navigation
- Fixed sticky navbar with smooth scroll links
- Mobile hamburger menu
- Responsive design with breakpoints

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions throughout

### Forms
- Real-time validation feedback
- Error messages for each field
- Success message after submission

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### GitHub Pages
1. Update `angular.json` with your repository name
2. Run `npm run build -- --base-href=/repo-name/`
3. Deploy the `dist` folder

## 📝 Notes

- Replace all placeholder URLs (LinkedIn, GitHub, email) with your actual links
- Add your own project descriptions and links
- Customize colors and fonts to match your brand
- Consider adding your actual profile image

## 📄 License

Free to use and modify for your personal portfolio

## 🤝 Support

For issues or questions, refer to [Angular Documentation](https://angular.io/docs)

---

**Made with ♥ using Angular 17 & Tailwind CSS**
