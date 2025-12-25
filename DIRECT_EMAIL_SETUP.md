# Direct Email Setup Guide (No Third-Party Services)

This setup allows you to send emails directly to your inbox using Gmail SMTP without any third-party services.

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- `express` - Backend server
- `nodemailer` - Email sending library
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `concurrently` - Run frontend and backend together

## Step 2: Create Gmail App Password

Since Gmail doesn't allow regular passwords for SMTP, you need to create an **App Password**:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Create App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter name: "Portfolio Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

## Step 3: Configure Environment Variables

1. Create a `.env` file in the root directory (copy from `.env.example`):

```env
PORT=3001
GMAIL_USER=shashankgowdashash1317@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
RECIPIENT_EMAIL=shashankgowdashash1317@gmail.com
VITE_API_URL=http://localhost:3001
```

2. Replace `your_16_character_app_password_here` with your actual Gmail App Password (remove spaces)

## Step 4: Run the Application

### Option 1: Run Both Frontend and Backend Together
```bash
npm run dev:all
```

### Option 2: Run Separately (in two terminals)

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Step 5: Test the Contact Form

1. Open your portfolio in the browser (usually http://localhost:5173)
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox - you should receive the message!

## How It Works

- When someone submits the contact form, it sends a POST request to your backend server
- The backend server uses Gmail SMTP to send the email directly to your inbox
- No third-party services involved - just your own backend code!

## Troubleshooting

### "Error sending message"
- Make sure the backend server is running (`npm run server`)
- Check that your `.env` file has the correct Gmail App Password
- Verify that 2-Step Verification is enabled on your Gmail account

### "Connection refused"
- Make sure the backend is running on port 3001
- Check that `VITE_API_URL` in `.env` matches your backend URL

### "Invalid login"
- Double-check your Gmail App Password (not your regular password)
- Make sure there are no spaces in the App Password in `.env`

## Production Deployment

For production, you'll need to:
1. Deploy the backend server (e.g., on Railway, Render, or Heroku)
2. Update `VITE_API_URL` in your frontend `.env` to point to your deployed backend
3. Set environment variables on your hosting platform

## Security Notes

- Never commit your `.env` file to git (it's already in `.gitignore`)
- Keep your Gmail App Password secure
- The backend server should only be accessible from your frontend domain

