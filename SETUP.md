# Quick Start Guide

## Installation Steps

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Version 16 or higher recommended

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:5173`

## Customization Checklist

### ✅ Personal Information
- [ ] Update name in `src/components/Navbar.jsx` (line 20)
- [ ] Update name in `src/components/Hero.jsx` (line 38)
- [ ] Update name in `src/components/Footer.jsx` (line 18)

### ✅ Contact Information
- [ ] Email is already set to: `shashankgowdashash1317@gmail.com`
- [ ] Update phone number in `src/components/Contact.jsx` (line 48)
- [ ] Update location in `src/components/Contact.jsx` (line 53)
- [ ] Update social media links in `src/components/Footer.jsx` (lines 8-13)

### ✅ Education Details
- [ ] Edit `src/components/Education.jsx`
- [ ] Update the `educationData` array with your actual education details
- [ ] Replace dummy data with your real information

### ✅ Skills
- [ ] Edit `src/components/Skills.jsx`
- [ ] Update the `skillCategories` array with your actual skills
- [ ] Adjust skill levels (percentage) as needed

### ✅ Certificates
- [ ] Edit `src/components/Certificates.jsx`
- [ ] Update the `certificates` array with your actual certificates
- [ ] Add certificate images (optional) - place images in `public/` folder

### ✅ Resume Download
- [ ] Create your resume PDF
- [ ] Place it in the `public/` folder as `resume.pdf`
- [ ] See `RESUME_SETUP.md` for detailed instructions
- ✅ **Already configured!** Just add your PDF file.

### ✅ About Section
- [ ] Edit `src/components/About.jsx`
- [ ] Update the description with your personal information
- [ ] Modify tags/attributes as needed

## Email Setup (Required for Direct Email Delivery)

The contact form is configured to send emails directly to **shashankgowdashash1317@gmail.com**.

**Quick Setup:**
1. See `EMAILJS_SETUP.md` for complete step-by-step instructions
2. Create a free EmailJS account at https://www.emailjs.com/
3. Add your credentials to `.env` file (see `.env.example`)
4. Restart the development server

**Note:** Until EmailJS is configured, the form will use a mailto link as a fallback.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder. You can deploy this to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Need Help?

- Check the main `README.md` for more details
- All components are well-commented
- Edit the dummy data in each component file

