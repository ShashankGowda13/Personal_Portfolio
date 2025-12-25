# Resume Download Setup

## How to Add Your Resume PDF

1. **Prepare Your Resume:**
   - Create or update your resume as a PDF file
   - Name it `resume.pdf` (or rename your existing PDF to this name)

2. **Add to Project:**
   - Place the `resume.pdf` file in the `public/` folder
   - The file path should be: `public/resume.pdf`

3. **That's It!**
   - The "Download Resume" button on your portfolio will now download your actual PDF
   - Users can click the button and get your resume file

## File Structure

```
portfolio/
├── public/
│   └── resume.pdf  ← Place your resume here
├── src/
└── ...
```

## Testing

1. Make sure your development server is running (`npm run dev`)
2. Click the "Download Resume" button on the homepage
3. Your resume PDF should download automatically

## Notes

- The file must be named `resume.pdf` (case-sensitive)
- Supported format: PDF only
- Make sure the file is not too large (recommended: under 5MB for fast downloads)




