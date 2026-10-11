# Souqi (سوقي) — Project Status

Last repository maintenance: 2026-10-11.

## Implemented on maintenance branch
- [x] Inspected existing routes, Firebase templates, demo data, business helpers, and project documentation.
- [x] Added Firebase client initialization that stays inactive when environment values are blank.
- [x] Connected login, registration, and password-reset forms to Firebase Auth.
- [x] New registrations create a customer profile; browser-submitted roles cannot grant admin privileges under the current rules.
- [x] Hardened Firestore ownership rules for users, stores, and products.
- [x] Restricted image uploads by owner path, MIME type, and file size.
- [x] Blocked direct client order writes and review creation until trusted server-side validation exists.
- [x] Disabled the misleading fake checkout UI until secure order creation is implemented.
- [x] Labeled seller/admin figures as demo-only instead of real metrics.
- [x] Strengthened business helper validation and added unit test cases.
- [x] Corrected the Vitest @ path alias configuration.
- [x] Added GitHub Actions for type-check, lint, unit tests, and production build.
- [x] Removed fake Firebase credentials from .env.example.
- [x] Corrected the seed script so it no longer claims to populate Firestore.

## Not yet verified
- [ ] CI workflow results and successful production build.
- [ ] Firebase rules syntax and authorization behavior in the Firebase Emulator Suite.
- [ ] Real Firebase Authentication configuration and email/password flows.
- [ ] Vercel production deployment and environment configuration.
- [ ] Mobile browser QA and accessibility review.
- [ ] Android project source and APK build.

## Required before real customers
1. Add and commit a package lockfile, then use deterministic installs in CI.
2. Configure Firebase Auth, Firestore, and Storage; deploy reviewed rules.
3. Add trusted backend functions for order creation, server-side price/stock checks, order status transitions, and verified-purchase reviews.
4. Add a secure admin provisioning process using Firebase Admin SDK custom claims.
5. Implement actual cart state, search/filter behavior, seller product management, and role-protected dashboards.
6. Add Firebase Emulator tests for owner isolation, admin moderation, order-write denial, and upload limits.
7. Build and test the Android app; document signing and release steps.
8. Configure Vercel and run end-to-end tests with real test accounts.

## Safety note
This is still a scaffold/demo until the items above are implemented and tests pass. Do not accept real payments or orders based on demo data.
