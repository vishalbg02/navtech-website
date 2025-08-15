# Gmail SMTP Setup for Contact Form

This project uses Gmail SMTP to send emails from the contact form. Follow these steps to configure the email service:

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to Security
3. Turn on 2-Step Verification if not already enabled

## Step 2: Generate App Password

1. In your Google Account settings, go to Security
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" as the app and "Other (custom name)" as the device
4. Enter "NavTech Website Contact Form" as the name
5. Google will generate a 16-character app password
6. Copy this password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Update the following variables:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
GMAIL_TO_EMAIL=info@navtechno.in
```

Replace:
- `your-email@gmail.com` with the Gmail address you want to send emails from
- `your-16-character-app-password` with the app password from Step 2
- `info@navtechno.in` with the email address where contact form submissions should be received

## Step 4: Test the Configuration

1. Start the development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check the recipient email address for the contact form submission

## Security Notes

- Never commit `.env.local` to version control
- Use app passwords instead of your regular Gmail password
- The app password should be treated as sensitive information
- Only authorized personnel should have access to these credentials

## Troubleshooting

### "Authentication failed" error
- Verify the Gmail credentials are correct
- Ensure 2-factor authentication is enabled
- Check that the app password is correctly formatted (remove spaces)

### "Network error" or timeout
- Check your internet connection
- Verify Gmail SMTP is not blocked by your firewall
- Try using port 465 with secure: true if port 587 doesn't work

### Email not received
- Check spam/junk folder
- Verify the GMAIL_TO_EMAIL address is correct
- Check Gmail's sent folder to confirm the email was sent