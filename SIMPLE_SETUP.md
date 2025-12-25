# Simple Email Setup (2 Minutes) ✨

## Step 1: Sign Up (30 seconds)
1. Go to https://formspree.io/
2. Click "Sign Up" (it's free!)
3. Verify your email

## Step 2: Create Form (30 seconds)
1. After logging in, click "New Form"
2. Set your email: **shashankgowdashash1317@gmail.com**
3. Copy your form endpoint URL (looks like: `https://formspree.io/f/abc123xyz`)

## Step 3: Add to Project (1 minute)
1. Create a `.env` file in your project root folder
2. Add this line (replace with your actual endpoint):
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
3. Restart your dev server (`npm run dev`)

## Done! 🎉
Now your contact form will send emails directly to your inbox!

## Free Tier
- 50 submissions per month (free)
- Perfect for portfolios and small projects

That's it! Super simple and works immediately.

