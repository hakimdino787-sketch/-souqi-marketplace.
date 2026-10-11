# Souqi (سوقي) — Moroccan Marketplace

Souqi is an Arabic-first marketplace prototype built with Next.js, TypeScript, Tailwind CSS, and Firebase client SDK. The current repository is a demo/scaffold, not yet a production marketplace.

## Requirements
- Node.js 20 or newer
- A Firebase project for real authentication and database features
- npm

## Run locally
1. Install dependencies: npm install
2. Copy .env.example to .env.local.
3. Fill in the real Firebase web app configuration values from Firebase Console.
4. In Firebase Console, enable Email/Password under Authentication.
5. Run npm run dev.
6. Open the local URL printed by Next.js.

Do not commit .env.local, service-account files, private keys, or other credentials. Firebase web config is intended for client apps, but it must still be protected with correct Security Rules and API restrictions.

## Quality checks
Run these commands:
- npm run type-check
- npm run lint
- npm test
- npm run build

GitHub Actions runs these checks on pushes to the maintenance branch and pull requests to main. The repository currently has no committed lockfile, so CI uses npm install; adding and maintaining a package lock is recommended for reproducible builds.

## Firebase rules
The rules in firebase/firestore.rules and firebase/storage.rules have been tightened as a safe baseline. They have not yet been deployed to a live Firebase project or verified with the Firebase Emulator Suite.

- User documents are owner-scoped; a browser cannot grant itself an admin role.
- Store/product creation is owner-scoped and new content is pending moderation.
- Image uploads are limited by owner path, image MIME type, and file size.
- Direct client order writes and review creation are intentionally blocked until trusted server code can validate orders and completed purchases.
- Admin access depends on a custom claim set by trusted Firebase Admin SDK code. No admin-claim provisioning script is included yet.

## Current functionality and limitations
- The storefront and product detail pages use local demo data in lib/demo-data.ts.
- Login, registration, and password reset use Firebase Auth when real environment values are configured.
- Cart and seller/admin pages still contain demo-only or incomplete flows.
- Checkout is intentionally disabled until server-side order creation validates current prices, stock, ownership, and totals.
- The npm run seed command only explains where demo data lives; it does not write to Firestore.
- An Android source module/APK workflow has not yet been verified in this repository.

## Deploying rules
After reviewing the rules and setting up a Firebase project, install Firebase CLI and deploy with a properly configured firebase.json:
firebase deploy --only firestore:rules,storage

Do not deploy unreviewed rules to a production database.

## Deployment
The web app is structured for Vercel, but a live deployment, environment variables, and end-to-end browser tests still need to be configured and verified. Do not advertise demo products, ratings, stores, or metrics as real activity.
