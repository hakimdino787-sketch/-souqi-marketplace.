# Souqi (سوقي) — Project Status

Last repository maintenance: 2026-10-11.

## Implemented
- [x] Firebase client initialization stays inactive when environment values are blank.
- [x] Login, registration, and password-reset forms connect to Firebase Auth when configured.
- [x] New registrations create customer profiles; browser-submitted roles cannot grant admin privileges under the current rules.
- [x] Hardened Firestore ownership rules for users, stores, and products.
- [x] Restricted product/store image uploads by owner path, MIME type, and file size.
- [x] Blocked client-side order writes and review creation until trusted server-side verification exists.
- [x] Disabled fake checkout and removed hardcoded fake cart contents.
- [x] Clearly labeled demo product, store, stock, rating, review, and seller/admin data as examples.
- [x] Added input validation tests and corrected the Vitest alias configuration.
- [x] Added GitHub Actions for TypeScript, ESLint, unit tests, and production build.
- [x] Fixed invalid ESLint configuration and internal navigation lint errors.
- [x] Restricted remote image loading to images.unsplash.com and corrected the current Next.js config.
- [x] Localized the main navigation, footer, homepage, product listing, product detail, and sample catalog to Arabic.
- [x] Implemented client-side product search, category filtering, and sorting for the demo catalog.
- [x] Added a lightweight Android WebView wrapper that opens the deployed Souqi site.
- [x] Added a GitHub Actions workflow that successfully built and uploaded a debug APK artifact.
- [x] Linked the repository to Vercel and verified a successful production build/deployment.
- [x] Removed placeholder Firebase credentials and corrected the seed script documentation.
- [x] Merged the maintenance pull request into main.

## Validation status
- [x] TypeScript check, ESLint, and unit tests passed on the final maintenance source before the latest documentation-only commit.
- [x] Vercel production build completed successfully and the public project domain is configured.
- [x] Android debug APK build and artifact upload succeeded on main.
- [ ] The latest documentation-only commit's GitHub Actions run is still pending.
- [ ] Firebase rules have not yet been tested with the Firebase Emulator Suite.
- [ ] Real Firebase Authentication configuration and email/password flows are not verified.
- [ ] Device testing, accessibility review, and end-to-end testing with real test accounts remain pending.

## Required before real customers
1. Commit a package lockfile and switch CI to deterministic `npm ci` installs.
2. Configure Firebase Auth, Firestore, and Storage with the real project; deploy reviewed rules.
3. Add trusted backend functions for order creation, server-side price/stock checks, order status transitions, and verified-purchase reviews.
4. Add a secure admin provisioning process using Firebase Admin SDK custom claims.
5. Implement persistent cart state, real seller product management, real order data, and role-protected admin/seller routes.
6. Add Firebase Emulator tests for owner isolation, admin moderation, order-write denial, and upload limits.
7. Test the Android wrapper on a device; create a signed release APK/AAB and release signing process before Play Store distribution.
8. Run end-to-end tests with real test accounts.

## Live demo
- Website: https://souqi-marketplace.vercel.app
- Alternative Vercel domain: https://souqi-marketplace-scooltools7.vercel.app
- Android debug APK: available from the GitHub Actions artifact linked in the project maintenance notes.

## Safety note
Souqi is a prototype/demo, not a production marketplace. Do not accept real orders or payments until the backend, Firebase rules, cart/checkout, role authorization, and release tests are complete.
