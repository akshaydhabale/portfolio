# Portfolio - Akshay Dhabale

A modern, responsive portfolio website showcasing professional experience, skills, and certifications in Cloud Data & AI Architecture.

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Beautiful gradient backgrounds, smooth animations, and hover effects
- **Interactive Skills Section** - Dynamic skill category selector with detailed information
- **Professional Experience Timeline** - Comprehensive work history with key highlights
- **Certifications Showcase** - Display of professional certifications
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Enhanced user experience with smooth page navigation
- **Component-Based Architecture** - Well-organized, maintainable code structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

## 📁 Project Structure

```
Portfolio/
├── public/                      # Static assets served as-is
│   ├── profile.jpg             # Profile photo
│   └── Akshay_Dhabale_AI_CoE.pdf  # Resume PDF
├── src/
│   ├── components/             # React components
│   │   ├── Navigation.jsx      # Top navigation bar
│   │   ├── Hero.jsx           # Hero section with profile
│   │   ├── About.jsx          # About me section
│   │   ├── Skills.jsx         # Skills showcase
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Education.jsx      # Educational background
│   │   ├── Certifications.jsx # Professional certifications
│   │   └── Footer.jsx         # Footer with social links
│   ├── data/
│   │   └── portfolioData.js   # All content/data in one place
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles and Tailwind imports
├── files/                      # Source files (not deployed)
│   ├── profile.jpg            # Original profile photo
│   └── Akshay_Dhabale_AI_CoE.pdf  # Original resume
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## 📋 Prerequisites

Make sure you have the following installed on your system:

- Node.js (version 16 or higher)
- npm or yarn

## 🔧 Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎯 Available Scripts

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Deploy to GitHub Pages

Deploy your portfolio to GitHub Pages:

```bash
npm run deploy
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:

- **personalInfo** - Name, title, contact details, social links
- **aboutMe** - Professional summary and bio
- **skills** - Technical skills organized by category
- **experiences** - Work history and achievements
- **education** - Academic background
- **certifications** - Professional certifications

### Replace Profile Photo

1. Add your photo to the `public/` folder
2. Update the path in `src/data/portfolioData.js`:
   ```javascript
   profileImage: '/portfolio/your-photo.jpg'
   ```

### Update Resume

1. Add your resume PDF to the `public/` folder
2. Update the path in `src/data/portfolioData.js`:
   ```javascript
   resumePDF: '/portfolio/your-resume.pdf'
   ```

### Modify Colors

The project uses Tailwind's utility classes with a purple-indigo gradient theme. To change colors:

1. Find gradient classes like `from-indigo-600`, `via-purple-600`, `to-pink-500`
2. Replace with your preferred Tailwind color classes
3. Or extend the theme in `tailwind.config.js`

## 🌐 Deployment

### Deploy to GitHub Pages (Current Setup)

```bash
npm run deploy
```

Your site will be live at: **https://akshaydhabale.github.io/portfolio/**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🏗️ Component Structure

Each component is self-contained and imports data from `portfolioData.js`:

- **Navigation** - Fixed header with smooth scroll navigation
- **Hero** - Profile photo, title, contact info, and CTA buttons
- **About** - Professional summary and introduction
- **Skills** - Interactive skill categories with detailed lists
- **Experience** - Timeline of professional experience
- **Education** - Academic credentials
- **Certifications** - Professional certifications display
- **Footer** - Social media links and copyright

## 📝 Maintenance Tips

1. **Update Content**: All content lives in `src/data/portfolioData.js` - update once, reflected everywhere
2. **Add Components**: Create new components in `src/components/` and import them in `App.jsx`
3. **Styling**: Use Tailwind utility classes for consistency
4. **Icons**: Import from `lucide-react` for consistency

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Akshay Dhabale**
- Role: Cloud Data & AI Architect
- Location: Toronto, Canada
- Email: akshaydhabale@gmail.com
- Phone: +1 (514) 560-9036
- LinkedIn: [akshay-dhabale-931bb59b](https://www.linkedin.com/in/akshay-dhabale-931bb59b/)
- GitHub: [akshaydhabale](https://github.com/akshaydhabale)

---

Built with ❤️ using React and Tailwind CSS
