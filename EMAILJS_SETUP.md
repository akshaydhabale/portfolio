# EmailJS Setup Guide

## 📧 Setting Up EmailJS for Contact Form

Follow these steps to configure EmailJS for your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/sign-up)
2. Sign up with your email or Google account
3. Verify your email address

## Step 2: Add Email Service

1. In the dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended - easiest setup)
   - Outlook
   - Yahoo
   - Or other SMTP service
4. Click **"Connect Account"** for Gmail
5. Sign in with your **akshaydhabale@gmail.com** account
6. Allow EmailJS to send emails on your behalf
7. Copy your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Click **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template configuration:

### Template Content:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Body:**
```
You have received a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to the sender.
```

4. Click **"Save"**
5. Copy your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Click **"Account"** in the dashboard
2. Find **"Public Key"** section
3. Copy your **Public Key** (e.g., `abcdefGHIJKLMNO`)

## Step 5: Configure Your Portfolio

1. Open the `.env` file in your portfolio folder
2. Replace the placeholders with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefGHIJKLMNO
```

3. Save the file

## Step 6: Test Your Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email (akshaydhabale@gmail.com)
6. You should receive the test message!

## 🎯 Free Tier Limits

EmailJS Free Plan includes:
- ✅ **200 emails per month**
- ✅ Unlimited templates
- ✅ All email services
- ✅ No credit card required

## 🔒 Security Notes

- The `.env` file is already added to `.gitignore`
- Your credentials won't be committed to GitHub
- Public Key is safe to use in frontend (it's designed for that)
- All emails are sent through EmailJS servers

## 🐛 Troubleshooting

### "EmailJS credentials not configured" error
- Make sure `.env` file exists in root folder
- Check that variable names start with `VITE_`
- Restart dev server after changing `.env`

### Form submits but no email received
- Check EmailJS dashboard quota (200/month limit)
- Verify template ID matches exactly
- Check spam/junk folder
- Verify Gmail account is connected in EmailJS

### "Failed to send" error
- Check internet connection
- Verify all three credentials are correct
- Check browser console for detailed error
- Try the EmailJS dashboard "Test" button

## 📱 Email Template Variables

Available variables you can use in your template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_email}}` - Your email (akshaydhabale@gmail.com)

## 🚀 Going Live

When deploying to GitHub Pages:

1. **Using GitHub Secrets:**
   - Go to your repo: Settings → Secrets and variables → Actions
   - Add three secrets:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

2. **Or hardcode temporarily:**
   - For static sites, you can hardcode values directly in `Contact.jsx`
   - Public Key is safe to expose (it's meant for frontend)

## 📧 Example Email You'll Receive

```
Subject: New Portfolio Contact from John Doe

You have received a new message from your portfolio website!

Name: John Doe
Email: john@example.com

Message:
Hi Akshay, I'm interested in discussing a cloud architecture
project. Would you be available for a call next week?

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to the sender.
```

## 🔗 Useful Links

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)

---

**Need Help?** Check the EmailJS dashboard or their documentation for more assistance!

