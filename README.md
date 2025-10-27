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

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

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

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main portfolio component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## 🎨 Customization

### Update Personal Information

Edit `src/App.jsx` to update:

- Personal details (name, contact info)
- Skills and competencies
- Work experience
- Education
- Certifications

### Modify Colors

The project uses Tailwind's utility classes with a purple-indigo gradient theme. To change colors:

1. Find gradient classes like `from-indigo-600`, `via-purple-600`, `to-pink-500`
2. Replace with your preferred Tailwind color classes
3. Or extend the theme in `tailwind.config.js`

### Add Resume Download

Update the "Download Resume" button in `src/App.jsx`:

```jsx
<a href="/path/to/resume.pdf" download className="...">
  Download Resume
</a>
```

## 🌐 Deployment

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

### Deploy to GitHub Pages

This project is configured to deploy to: **https://akshaydhabale.github.io/portfolio/**

**Method 1: Manual Deployment with gh-pages**

```bash
# Install dependencies (if not already installed)
npm install

# Deploy to GitHub Pages
npm run deploy
```

**Method 2: Automatic Deployment (Recommended)**

The project includes a GitHub Actions workflow that automatically deploys on every push to main:

1. Push your code to GitHub
2. Go to your repository settings → Pages
3. Set Source to "GitHub Actions"
4. The site will automatically deploy on every push!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Akshay Dhabale**
- Role: Cloud Data & AI Architect
- Location: Canada
- Phone: +1 (514) 560-9036

---

Built with ❤️ using React and Tailwind CSS

