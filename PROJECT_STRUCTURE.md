# Project Structure Documentation

## Overview

This portfolio is built with a component-based architecture for maximum maintainability and scalability. Each section is a separate, reusable component that imports data from a centralized data file.

## Directory Structure

```
Portfolio/
│
├── public/                          # Static assets (served directly by Vite)
│   ├── profile.jpg                 # Profile photo
│   └── Akshay_Dhabale_AI_CoE.pdf  # Resume PDF
│
├── src/                            # Source code
│   │
│   ├── components/                 # React Components
│   │   ├── Navigation.jsx         # Top navigation bar with mobile menu
│   │   ├── Hero.jsx              # Hero section with profile image & CTA
│   │   ├── About.jsx             # About me section
│   │   ├── Skills.jsx            # Interactive skills showcase
│   │   ├── Experience.jsx        # Professional experience timeline
│   │   ├── Education.jsx         # Educational background
│   │   ├── Certifications.jsx    # Professional certifications grid
│   │   └── Footer.jsx            # Footer with social media links
│   │
│   ├── data/                      # Data Layer
│   │   └── portfolioData.js      # Centralized data/content
│   │
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # React app entry point
│   └── index.css                  # Global styles & Tailwind directives
│
├── files/                          # Source files (not deployed)
│   ├── profile.jpg                # Original profile photo
│   └── Akshay_Dhabale_AI_CoE.pdf # Original resume
│
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deployment workflow
│
├── dist/                           # Build output (auto-generated)
├── node_modules/                   # Dependencies (auto-generated)
│
├── .gitignore                     # Git ignore rules
├── .eslintrc.cjs                  # ESLint configuration
├── index.html                     # HTML template
├── package.json                   # Project dependencies & scripts
├── package-lock.json              # Locked dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── vite.config.js                 # Vite build configuration
├── README.md                      # Project documentation
├── DEPLOYMENT.md                  # Deployment guide
└── PROJECT_STRUCTURE.md           # This file
```

## Component Architecture

### 1. **App.jsx** - Main Container
- Manages global state (menu open/close, active section)
- Handles smooth scroll navigation
- Orchestrates all child components
- Provides minimal business logic (keep it clean!)

### 2. **Navigation.jsx** - Header
- Fixed position navigation bar
- Responsive mobile hamburger menu
- Dynamic active section highlighting
- Props: `isMenuOpen`, `setIsMenuOpen`, `activeSection`, `scrollToSection`

### 3. **Hero.jsx** - Landing Section
- Profile photo display
- Name, title, location
- Contact information (phone, email)
- CTA buttons (Download Resume, View Work)
- Props: `scrollToSection`

### 4. **About.jsx** - Biography
- Professional summary
- Three-paragraph bio
- Displays content from `aboutMe` array

### 5. **Skills.jsx** - Technical Skills
- Interactive category selector (Cloud, Data, AI, Analytics)
- Dynamic skill display based on selection
- Uses local state for selected category
- Icon mapping for visual consistency

### 6. **Experience.jsx** - Work History
- Timeline-style layout
- Company, role, period display
- Bulleted highlights for each position
- Visual emphasis on current role

### 7. **Education.jsx** - Academic Background
- Educational credentials display
- Institution and degree information
- Visual distinction between Masters and Bachelors

### 8. **Certifications.jsx** - Professional Certifications
- Grid layout of certification cards
- Gradient backgrounds with icons
- Hover effects for interactivity

### 9. **Footer.jsx** - Social Links & Copyright
- Social media icons (LinkedIn, GitHub, Email)
- External link handling
- Copyright notice

## Data Layer

### portfolioData.js

All content is centralized in one file for easy updates:

```javascript
export const personalInfo = { /* contact & links */ };
export const aboutMe = [ /* bio paragraphs */ ];
export const skills = { /* categorized skills */ };
export const experiences = [ /* work history */ ];
export const education = [ /* degrees */ ];
export const certifications = [ /* cert list */ ];
```

**Benefits:**
- Single source of truth for all content
- Easy to update without touching components
- Reusable across multiple components
- Type-safe structure

## Styling Approach

### Tailwind CSS Utility-First
- All styling done with Tailwind utility classes
- No custom CSS files (except global styles in `index.css`)
- Consistent design system through Tailwind config
- Responsive breakpoints: `sm:`, `md:`, `lg:`

### Color Scheme
- Primary: Indigo (`indigo-600`, `indigo-500`)
- Secondary: Purple (`purple-600`, `purple-500`)
- Accent: Pink (`pink-500`)
- Gradients: `from-indigo-600 via-purple-600 to-pink-500`

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## Asset Management

### Images
- **Location:** `public/profile.jpg`
- **Reference:** `/portfolio/profile.jpg` (includes base path)
- **Optimization:** Handled by browser caching

### PDFs
- **Location:** `public/Akshay_Dhabale_AI_CoE.pdf`
- **Reference:** `/portfolio/Akshay_Dhabale_AI_CoE.pdf`
- **Download:** Configured with `download` attribute

## Build & Deployment

### Development
```bash
npm run dev          # Start dev server (port 3000)
```

### Production
```bash
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run deploy       # Deploy to GitHub Pages
```

### GitHub Pages Configuration
- **Base Path:** `/portfolio/` (configured in `vite.config.js`)
- **Branch:** `gh-pages` (created automatically by gh-pages package)
- **URL:** https://akshaydhabale.github.io/portfolio/

## Maintenance Guide

### To Update Content

1. Edit `src/data/portfolioData.js`
2. Build and deploy:
   ```bash
   npm run deploy
   ```

### To Add a New Section

1. Create component in `src/components/NewSection.jsx`
2. Add data to `src/data/portfolioData.js`
3. Import and use in `src/App.jsx`
4. Add to navigation array in `Navigation.jsx`
5. Add section ID to the component's root div

### To Modify Styling

1. Edit Tailwind classes directly in components
2. For global changes, modify `tailwind.config.js`
3. For new utility classes, extend Tailwind config

### To Update Assets

1. **Profile Photo:**
   - Replace `public/profile.jpg`
   - Keep filename or update path in `portfolioData.js`

2. **Resume:**
   - Replace `public/Akshay_Dhabale_AI_CoE.pdf`
   - Keep filename or update path in `portfolioData.js`

## Best Practices

### Component Guidelines
- Keep components small and focused
- Use props for data and callbacks
- Avoid inline styles (use Tailwind)
- Add proper accessibility attributes

### Data Management
- All content in `portfolioData.js`
- Use named exports for clarity
- Keep data structure consistent
- Add comments for complex structures

### Performance
- Lazy loading for images (built into React 18)
- Code splitting (handled by Vite)
- Optimized builds (Vite default)
- Minimal dependencies

### Accessibility
- Semantic HTML elements
- ARIA labels for icon buttons
- Alt text for images
- Keyboard navigation support

## Troubleshooting

### Images Not Loading
- Check path includes `/portfolio/` base
- Verify file is in `public/` folder
- Check file extension matches (case-sensitive)

### Build Errors
- Run `npm install` to ensure dependencies
- Check for typos in import statements
- Verify all components export default

### Deployment Issues
- Ensure `base: '/portfolio/'` in `vite.config.js`
- Verify GitHub Pages is enabled in repo settings
- Check branch is set to `gh-pages`

## Future Enhancements

Potential improvements to consider:

1. **Blog Section** - Add a blog component with markdown support
2. **Projects Gallery** - Showcase portfolio projects with images
3. **Dark Mode** - Toggle between light/dark themes
4. **Animations** - Add Framer Motion for smooth transitions
5. **Contact Form** - Direct contact form integration
6. **Analytics** - Add Google Analytics or similar
7. **SEO** - Add meta tags and Open Graph tags
8. **i18n** - Multi-language support

## Dependencies

### Core
- `react`: ^18.3.1
- `react-dom`: ^18.3.1

### UI
- `lucide-react`: ^0.263.1 (Icons)
- `tailwindcss`: ^3.4.3 (Styling)

### Build Tools
- `vite`: ^5.2.10 (Build tool)
- `@vitejs/plugin-react`: ^4.2.1 (React plugin)

### Deployment
- `gh-pages`: ^6.1.1 (GitHub Pages deployment)

---

**Last Updated:** January 2025
**Maintainer:** Akshay Dhabale

