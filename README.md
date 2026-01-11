## Overview

High-converting interlock + hardscaping business website built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

- **Fast + SEO optimized**: Metadata API, canonical URLs, OpenGraph/Twitter, JSON-LD, robots + sitemap
- **Lead generation**: Quote form with EmailJS + spam protection + optional photo upload
- **Deploy-ready for Firebase Hosting** via static export (`out/`)

## Tech stack

- Next.js App Router + TypeScript
- Tailwind CSS (v4)
- `next/image` everywhere
- Framer Motion for subtle animations
- EmailJS (client-side)
- Firebase Storage (optional) for photo uploads

## Setup

### Install

```bash
npm install
```

### Environment variables

This repo includes `env.example`. Copy it to `.env.local` and fill in values:

```bash
cp env.example .env.local
```

#### EmailJS vars (required for form)

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

#### Firebase vars (optional for photo uploads)

Option A (recommended):

- `NEXT_PUBLIC_FIREBASE_CONFIG` (JSON string)

Option B (split vars):

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## EmailJS template variables expected

The quote form sends these template params:

- Core:
  - `fullName`, `phone`, `email`, `postalCode`, `city`, `address`
  - `preferredContactMethod`, `serviceSelected`, `message`
- Conditional (may be empty):
  - `approxSqFt`, `stylePreference`, `timeline`, `budgetRange`
  - `issueType`, `approxArea`, `urgency`
  - `lastServiceDate`, `weedIssue`
  - `petFriendly`, `drainageIssues`
- Photos:
  - `photoUrls` (newline-separated)
  - `photoCount`

## Firebase Hosting deployment

This project is configured for **static export**:

- `next.config.ts` uses `output: "export"` and emits `out/`
- Firebase Hosting is configured in `firebase.json` to serve from `out/`

### Build

```bash
npm run build
```

### Deploy

1) Set your Firebase project ID in `.firebaserc`
2) Install Firebase CLI (once): `npm i -g firebase-tools`
3) Login: `firebase login`
4) Deploy:

```bash
firebase deploy
```

## Updating business info

Edit `config/business.ts`:

- Name, phone, email, address, primary city, service areas, social links, site URL

## Adding a new service

1) Add it to `data/services.ts`:
   - slug, name, SEO, sections, FAQs, gallery placeholders, and `formRules`
2) It will automatically appear in:
   - `/services`
   - `/services/[slug]`
   - `sitemap.xml`

## Adding a new location (city)

1) Add the city name to `serviceAreas` in `config/business.ts`
2) It will automatically appear in:
   - `/locations`
   - `/locations/[city]`
   - `sitemap.xml`

## Replacing placeholder images

Placeholder SVGs live in `public/placeholders/`.

To replace:

- Add your real images to `public/` (or a subfolder)
- Update references in:
  - `data/services.ts` (service galleries)
  - `data/gallery.ts` (gallery page)

