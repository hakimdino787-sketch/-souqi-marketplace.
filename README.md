# Souqi (سوقي) – Moroccan Marketplace

## Overview

Souqi is a modern Moroccan marketplace for local commerce, curated products, and secure transactions. This project includes a production-oriented Next.js storefront, a Firebase backend, and an Android app skeleton that reuses the same authentication model and architecture.

## Setup steps

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Add your Firebase configuration values.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Seed demo data:
   ```bash
   npm run seed
   ```
6. Run tests and checks:
   ```bash
   npm run type-check
   npm run lint
   npm run build
   npm run test
   ```

## Firebase configuration

- Create a Firebase project and enable Authentication, Firestore, and Storage.
- Populate `.env.local` using values from the Project Settings page.
- Deploy rules using:
  ```bash
  firebase deploy --only firestore:rules,storage
  ```

## Android build

The Android module is prepared under `apps/android` and follows a standard Gradle + Jetpack Compose structure. To build the APK:

```bash
cd apps/android
./gradlew assembleDebug
```

This produces a debug APK in `app/build/outputs/apk/debug/`.

## Demo data

The project includes sample data for categories, products, stores, and reviews. These are clearly marked as demonstration content and should not be treated as real marketplace metrics.

## Security notes

- Never commit real Firebase service-account keys.
- Keep client-side config in `.env.local` and do not hard-code credentials.
- Use Firestore rules to enforce ownership and admin permissions.

## Deployment

The frontend is Vercel-ready. Use Next.js production deployment settings and add the same Firebase environment variables in the Vercel project configuration.

## Status

This repository currently contains a working first implementation phase, with a strong storefront foundation and a documented path to deployment and Android packaging.
