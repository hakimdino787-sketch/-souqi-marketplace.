# Souqi (سوقي) — Project Status

Last repository maintenance: 2026-10-11.

## Implemented on maintenance branch
- [x] Added Firebase client initialization that stays inactive when environment values are blank.
- [x] Connected login, registration, and password-reset forms to Firebase Auth.
- [x] New registrations create a customer profile; browser-submitted roles cannot grant admin privileges under the current rules.
- [x] Hardened Firestore ownership rules for users, stores, and products.
- [x] Restricted product/store image uploads by owner path, MIME type, and file size.
- [x] Blocked direct client order writes and review creation until trusted server-side validation exists.
- [x] Disabled the misleading fake checkout UI; removed hardcoded fake cart contents.
- [x] Clearly labeled demo product, store, stock, rating, and seller/admin data as examples.
- [x] Added input validation tests and corrected the Vitest alias configuration.
- [x] Added GitHub Actions for TypeScript, ESLint, unit tests, and production build.
- [x] Fixed invalid ESLint JSON configuration and internal navigation lint errors.
- [x] Corrected Next.js image host allow-list and moved `typedRoutes` to the current config location.
- [x] Localized the main navigation, footer, homepage, product listing, product detail, and sample catalog to Arabic.
- [x] Implemented working client-side product search, category filtering, and sorting for the demo catalog.
- [x] Added a basic Android WebView wrapper that opens the public Souqi website.
- [x] Added a GitHub Actions workflow to build and upload a debug APK.
- [x] Linked the GitHub repository to a Vercel project and completed a preview deployment.
- [x] Removed placeholder Firebase credentials and corrected the seed script's description.

## Validation status
- [x] A previous branch commit passed TypeScript, ESLint, unit tests, and the Next.js production build.
- [x] Vercel built the branch preview successfully.
- [ ] The latest config/Android commits must finish their own GitHub Actions runs before merge.
- [ ] Android debug APK build and artifact upload are still pending verification.
- [ ] Firebase rules have not yet been tested with the Firebase Emulator Suite.
- [ ] Real Firebase Authentication configuration and email/password flows are not verified.
- [ ] Production deployment should be verified after the maintenance PR is merged.
- [ ] Mobile browser/device QA and accessibility review remain pending.

## Required before real customers
1. Commit a package lockfile and switch CI to deterministic `npm ci` installs.
2. Configure Firebase Auth, Firestore, and Storage with the real project; deploy reviewed rules.
3. Add trusted backend functions for order creation, server-side price/stock checks, order status transitions, and verified-purchase reviews.
4. Add a secure admin provisioning process using Firebase Admin SDK custom claims.
5. Implement persistent cart state, real seller product management, real order data, and role-protected admin/seller routes.
6. Add Firebase Emulator tests for owner isolation, admin moderation, order-write denial, and upload limits.
7. Test the Android wrapper on a device; create a signed release APK/AAB and release signing process before Play Store distribution.
8. Run end-to-end tests with real test accounts and verify the production deployment.

## Safety note
Souqi is still a prototype/demo, not a production marketplace. Do not accept real orders or payments until the backend, Firebase rules, cart/checkout, role authorization, and release tests are complete.
