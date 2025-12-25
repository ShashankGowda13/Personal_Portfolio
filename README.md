# Shashank H N - Portfolio Website

A modern, professional portfolio website built with React, Three.js, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 🎭 **3D Elements** - Interactive 3D sphere using Three.js
- 📱 **Fully Responsive** - Works perfectly on all devices
- 📧 **Contact Form** - Email functionality (currently using mailto, can be upgraded to EmailJS)
- 📄 **Resume Download** - Download resume functionality
- 🎓 **Education Section** - Showcase your educational background
- 🏆 **Certificates Section** - Display your achievements and certifications
- 💼 **Skills Section** - Highlight your technical skills
- ✨ **Smooth Animations** - Powered by Framer Motion

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Name**: Update in `src/components/Navbar.jsx` and `src/components/Hero.jsx`
2. **Email**: Already set to `shashankgowdashash1317@gmail.com` in `src/components/Contact.jsx`
3. **Education**: Edit the `educationData` array in `src/components/Education.jsx`
4. **Certificates**: Edit the `certificates` array in `src/components/Certificates.jsx`
5. **Skills**: Edit the `skillCategories` array in `src/components/Skills.jsx`

### Add Email Functionality (EmailJS)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `src/components/Contact.jsx` with your:
   - Service ID
   - Template ID
   - Public Key
4. Uncomment the EmailJS code in the `handleSubmit` function

### Add Resume File

Replace the dummy resume download in `src/components/Hero.jsx` with an actual PDF file:

```javascript
const handleDownloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf' // Place your resume.pdf in the public folder
  link.download = 'Shashank_HN_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
```

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## License

This project is open source and available for personal use.

## Contact

Shashank H N
Email: shashankgowdashash1317@gmail.com




