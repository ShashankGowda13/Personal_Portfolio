# EmailJS Setup Guide

This guide will help you set up EmailJS so that contact form submissions are sent directly to your email: **shashankgowdashash1317@gmail.com**

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Click **Connect Account** and authorize EmailJS to access your email
5. Once connected, you'll see a **Service ID** (e.g., `service_xxxxxxx`)
   - **Copy this Service ID** - you'll need it later

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template settings:

   **Template Name:** Portfolio Contact Form
   
   **Subject:** `{{subject}}` or `Portfolio Contact: {{subject}}`
   
   **Content:**
   ```
   You have a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```

4. Click **Save**
5. You'll see a **Template ID** (e.g., `template_xxxxxxx`)
   - **Copy this Template ID** - you'll need it later

## Step 4: Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)
   - **Copy this Public Key** - you'll need it later

## Step 5: Configure in Your Portfolio

### Option A: Using Environment Variables (Recommended)

1. Create a file named `.env` in the root of your project (same level as `package.json`)
2. Add the following content:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the values with your actual IDs from Steps 2, 3, and 4
4. **Important:** Add `.env` to your `.gitignore` file to keep your keys private
5. Restart your development server (`npm run dev`)

### Option B: Direct Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here',
  publicKey: 'your_public_key_here',
  recipientEmail: 'shashankgowdashash1317@gmail.com',
}
```

## Step 6: Test the Contact Form

1. Make sure your development server is running
2. Fill out the contact form on your portfolio
3. Submit the form
4. Check your email inbox (shashankgowdashash1317@gmail.com)
5. You should receive the email!

## Troubleshooting

### Emails not being received?

1. **Check EmailJS Dashboard:**
   - Go to EmailJS dashboard → Logs
   - Check if there are any error messages

2. **Verify Configuration:**
   - Double-check that all IDs are correct in your `.env` file or `emailjs.js`
   - Make sure there are no extra spaces or quotes

3. **Check Spam Folder:**
   - Sometimes emails might go to spam initially

4. **Service Limits:**
   - Free EmailJS accounts have a limit of 200 emails/month
   - Check your usage in the EmailJS dashboard

### Still having issues?

- Check the browser console for any error messages
- Make sure you've restarted the development server after adding environment variables
- Verify that your email service is properly connected in EmailJS dashboard

## Security Note

⚠️ **Important:** Never commit your `.env` file or EmailJS keys to version control (GitHub, etc.). They should remain private.

The `.gitignore` file should already include `.env`, but double-check to make sure.

## Free Tier Limits

- **200 emails per month** (free tier)
- For more emails, you can upgrade to a paid plan on EmailJS

---

Once set up, all contact form submissions will be sent directly to **shashankgowdashash1317@gmail.com**! 🎉




