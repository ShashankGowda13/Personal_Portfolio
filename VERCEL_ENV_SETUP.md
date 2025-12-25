# Vercel Environment Variable Setup

## ✅ Local Setup Complete
Your `.env` file has been updated with:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xwvegkwj
```

## 🚀 Vercel Deployment Setup

For the contact form to work after deployment, you need to add the environment variable in Vercel:

### Steps:

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Select your project (shashank-portfolio)

2. **Navigate to Settings**
   - Click on your project
   - Go to **Settings** tab
   - Click on **Environment Variables** in the left sidebar

3. **Add Environment Variable**
   - Click **Add New**
   - **Name**: `VITE_FORMSPREE_ENDPOINT`
   - **Value**: `https://formspree.io/f/xwvegkwj`
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**

4. **Redeploy**
   - After adding the variable, go to **Deployments** tab
   - Click the **⋯** (three dots) on your latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger automatic deployment

## ✅ Verify in Formspree

Make sure in your Formspree dashboard:
1. Go to https://formspree.io/forms
2. Click on your form (xwvegkwj)
3. Verify the email is set to: **shashankgowdashash1317@gmail.com**
4. If not, update it in the form settings

## 🧪 Test After Deployment

1. Visit your deployed portfolio
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email inbox at **shashankgowdashash1317@gmail.com**

You should receive the message within seconds!

## 📝 Important Notes

- Environment variables starting with `VITE_` are exposed to the client-side code
- This is safe for Formspree endpoints (they're meant to be public)
- Never commit `.env` file to git (it's already in `.gitignore`)
- Always add environment variables in Vercel dashboard for production

