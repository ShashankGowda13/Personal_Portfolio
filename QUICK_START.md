# Quick Start - Fix "Error sending message"

## The Problem
You're seeing "Error sending message" because the backend server is not running.

## Quick Fix (3 Steps)

### Step 1: Update .env file
Open the `.env` file in your project root and replace `your_16_character_app_password_here` with your actual Gmail App Password.

**To get Gmail App Password:**
1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification if needed
3. Generate App Password for "Mail"
4. Copy the 16-character password (remove spaces)
5. Paste it in `.env` file

### Step 2: Start the Backend Server
Open a **new terminal** and run:
```bash
npm run server
```

You should see:
```
🚀 Email server running on http://localhost:3001
📧 Ready to send emails to: shashankgowdashash1317@gmail.com
```

### Step 3: Keep Frontend Running
In another terminal (or keep your current one running):
```bash
npm run dev
```

## Alternative: Run Both Together
You can run both frontend and backend in one command:
```bash
npm run dev:all
```

## Test It
1. Go to your portfolio (usually http://localhost:5173)
2. Navigate to Contact section
3. Fill out and submit the form
4. Check your email inbox!

## Troubleshooting

**"Cannot connect to server"**
- Make sure `npm run server` is running
- Check that port 3001 is not being used by another app

**"Invalid login" or email sending fails**
- Double-check your Gmail App Password in `.env`
- Make sure 2-Step Verification is enabled
- Remove any spaces from the App Password

**Server won't start**
- Make sure all dependencies are installed: `npm install`
- Check that `.env` file exists in the root directory

