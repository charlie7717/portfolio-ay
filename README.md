# Ashwani Yadav - Portfolio Website

A modern, responsive React.js portfolio website converted from HTML, showcasing professional experience, skills, and achievements.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **Interactive Navigation**: Single-page application with smooth section transitions
- **Component-Based Architecture**: Modular React components for easy maintenance and extension
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Accessibility**: Semantic HTML and proper ARIA attributes for screen readers

## 📁 Project Structure

```
ashwani-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Profile header with contact info
│   │   ├── Navigation.jsx # Navigation menu
│   │   └── sections/      # Individual page sections
│   │       ├── About.jsx
│   │       ├── Experience.jsx
│   │       ├── Skills.jsx
│   │       ├── Certifications.jsx
│   │       ├── Education.jsx
│   │       └── Contact.jsx
│   ├── App.jsx           # Main application component
│   ├── App.css          # Global styles with Tailwind CSS
│   ├── index.css        # Base styles
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable icons
- **ESLint**: Code linting for consistent code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or pnpm package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd ashwani-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Building for Production

```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted grid layouts and spacing
- **Mobile**: Single-column layout with touch-friendly navigation

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to the navigation in `src/components/Navigation.jsx`
3. Add the section to the switch statement in `src/App.jsx`

### Modifying Styles

- Global styles are in `src/App.css`
- Component-specific styles use Tailwind CSS classes
- Custom colors and gradients can be modified in the CSS variables

### Updating Content

Each section component contains the data directly. To update:
1. Open the relevant component file
2. Modify the data arrays or content
3. Save and the changes will be reflected immediately in development mode

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📦 Deployment

The built application is a static website that can be deployed to:
- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Upload the `dist/` contents to your repository
- **Any static hosting service**: Upload the `dist/` folder contents

## 🤝 Contributing

This is a personal portfolio website, but if you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions about this project:
- **Email**: ashwanii.office@gmail.com
- **LinkedIn**: [linkedin.com/in/ashwaniiyadavv](https://linkedin.com/in/ashwaniiyadavv)
- **Phone**: +91-9554911115

---

**Built with ❤️ using React and Tailwind CSS**

