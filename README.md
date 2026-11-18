# AI Tools Hub

A responsive React + Vite starter for an all-in-one AI tools workspace, with an Android packaging setup using Capacitor.

## Run locally

```bash
npm install
npm run dev
```

## Production website build

```bash
npm run build
npm run preview
```

## Android APK build

The repository includes `capacitor.config.json` and a GitHub Actions workflow at `.github/workflows/android-apk.yml`.

1. Open the repository on GitHub.
2. Select **Actions**.
3. Select **Build Android APK**.
4. Select **Run workflow** and confirm.
5. When the run finishes successfully, open the run and download the `AI-Tools-Hub-debug-APK` artifact.
6. Extract the ZIP on your Android phone and install `app-debug.apk`. Android may ask you to allow installation from that browser or file manager.

The workflow creates the Android project during the build, packages the Vite `dist` website with Capacitor, and uploads a debug APK. A debug APK is for testing, not Play Store release.

## Current implementation

- Responsive React dashboard with hybrid visual styling
- Search and category filters for tool cards
- Mobile navigation
- Web app manifest for installable-web-app metadata
- Capacitor Android app configuration
- GitHub Actions workflow to build a test APK

## Integration status

The repository currently contains the frontend starter only. Live AI generation, Firebase phone OTP, user accounts, subscriptions/auto-renew, payment processing, admin APIs, database persistence, and production security are **not connected yet**. These require provider configuration, server-side implementation, secrets stored in deployment environment variables, and end-to-end testing. Do not put API keys or private credentials in this repository.

## Render deployment

Connect this repository to a static web host such as Render. Build command: `npm install && npm run build`. Publish directory: `dist`.

Project: AI Tools Hub
