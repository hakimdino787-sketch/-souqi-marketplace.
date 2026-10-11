# Souqi Android wrapper

This module is a lightweight Android WebView wrapper around the deployed Souqi website at
`https://souqi-marketplace-scooltools7.vercel.app`.

- The wrapper requires an internet connection.
- It is a prototype shell, not a fully native marketplace implementation.
- Product catalog, authentication, cart persistence, checkout, and seller/admin workflows depend on the website and its backend.
- The debug APK is built by the **Souqi Android APK** GitHub Actions workflow and uploaded as an artifact.
- Debug APKs are for testing only. A signed release APK/AAB and store listing are still required before Play Store distribution.
