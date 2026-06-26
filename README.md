# Trusty

Trusty is an Indian seller verification platform built to prevent e-commerce fraud in COD (Cash on Delivery) transactions. It helps protect customers, marketplaces, and shipping partners by validating seller identity, GST/PAN credentials, and package authenticity before delivery.

## What Trusty Does

- Verifies sellers using GST and PAN documents.
- Enables shipping companies to confirm seller status before pickup.
- Lets customers scan a QR code on the package to check seller verification instantly.
- Uses a modern, professional Indian startup design and a clear Trusty brand feel.

## Key Features

- Verified Badge for trusted sellers.
- QR Code on package for instant scanning.
- Real-time GST verification for Indian sellers.
- Scam alert system to flag suspicious activity.
- COD-centric workflow built for India’s online marketplace.

## Pages Included

1. **Landing Page**
   - Hero section with key Trusty messaging.
   - How it works section in 3 steps.
   - Features and stats sections.
   - Strong CTA buttons for seller registration and shipping partnerships.

2. **Seller Registration Page**
   - Form fields for Business Name, GST, PAN, Phone, Email, Address, Website/Instagram URL, and document upload.
   - Submit button updates the status to "Verification Pending".

3. **Verify Seller Page**
   - Public QR scan result layout.
   - Displays seller name, verification status, verified since date, trust score, GST status, and a report button.

## Technology Stack

- React.js
- Tailwind CSS
- Vite
- React Router DOM

## Color & Branding

- Deep blue: `#1a237e`
- Green: `#2e7d32`
- White background for clean and professional layout.
- Trusty logo concept: shield with checkmark.
- Hindi/English mixed copy feel for a local Indian audience.

## Install and Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite in your browser.

## GitHub

This project is pushed to the repository:

`https://github.com/VaishnaviBardapure/Trusty-Seller-Verification-Platform`

## Deployment to Vercel

This project is ready for deployment on Vercel.

### Steps to deploy

1. Push your latest code to GitHub.
2. Go to `https://vercel.com` and log in.
3. Import the repository: `Trusty-Seller-Verification-Platform`.
4. Choose the root directory and use the default Vite build settings.
5. Set the framework preset to `Vite` if asked.
6. Deploy.

### Vercel settings

- Build Command: `npm run build`
- Output Directory: `dist`

## Notes

This is a UI-first platform prototype focused on the Trusty brand experience for seller verification and COD fraud prevention.
