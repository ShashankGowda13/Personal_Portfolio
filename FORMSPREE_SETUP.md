# Formspree Setup Guide (2 Minutes)

Formspree is a simple, free alternative to EmailJS that requires minimal setup.

## Quick Setup Steps:

1. **Sign up at Formspree**
   - Go to https://formspree.io/
   - Click "Sign Up" (free account)
   - Verify your email

2. **Create a New Form**
   - After logging in, click "New Form"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Set your email: `shashankgowdashash1317@gmail.com`
   - Copy your form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Add to Your Project**
   - Create a `.env` file in your project root (if it doesn't exist)
   - Add this line:
     ```
     VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
     ```
   - Replace `YOUR_FORM_ID` with your actual form ID from Formspree

4. **Restart Your Dev Server**
   - Stop your current dev server (Ctrl+C)
   - Run `npm run dev` again

5. **Test It**
   - Fill out the contact form
   - Submit it
   - Check your email inbox!

## That's it! 🎉

Formspree will automatically send all form submissions to your email address.

## Free Tier Limits:
- 50 submissions per month (free)
- Upgrade available if needed

## Advantages over EmailJS:
- ✅ Simpler setup (no service/template configuration)
- ✅ No API keys needed
- ✅ Works immediately after setup
- ✅ Free tier available

