# Quick Email Setup - 5 Minutes

Follow these steps to make your contact form send emails directly to **shashankgowdashash1317@gmail.com** without opening any app.

## Step 1: Sign Up (2 minutes)

1. Go to: https://www.emailjs.com/
2. Click **"Sign Up"** (top right)
3. Sign up with Google or Email (free account)
4. Verify your email if needed

## Step 2: Connect Your Email (1 minute)

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Click **"Connect Account"** and authorize
5. **Copy the Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Template (1 minute)

1. Click **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Set these values:

   **Subject:** `Portfolio Contact: {{subject}}`
   
   **Content:**
   ```
   New message from portfolio contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```

4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key (30 seconds)

1. Click **"Account"** → **"General"**
2. Find **"Public Key"**
3. **Copy the Public Key**

## Step 5: Add to Your Project (30 seconds)

1. Create a file named `.env` in your project root (same folder as `package.json`)
2. Add these lines (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

3. Save the file
4. **Restart your development server** (stop with Ctrl+C, then run `npm run dev` again)

## Done! ✅

Now when someone fills out your contact form:
1. They'll see a confirmation dialog
2. After confirming, the email goes **directly to shashankgowdashash1317@gmail.com**
3. No app will open - it's all automatic!

## Test It

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Confirm in the dialog
4. Check your email inbox!

## Troubleshooting

**Not receiving emails?**
- Check EmailJS dashboard → **"Logs"** for errors
- Make sure you restarted the server after adding `.env`
- Check spam folder
- Verify all IDs are correct (no extra spaces)

**Still having issues?**
- See `EMAILJS_SETUP.md` for detailed troubleshooting

---

**Free Tier:** 200 emails/month (perfect for a portfolio!)




