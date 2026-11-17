# AI Tools Hub

A responsive React + Vite starter for an all-in-one AI tools workspace.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Current implementation

- Responsive dashboard with hybrid visual styling
- Search and category filters for tool cards
- Mobile navigation
- Preview notices for features that need backend/API connections

## Important: integration status

This repository currently contains the frontend starter only. Live AI generation, Firebase phone OTP, user accounts, subscriptions/auto-renew, payment processing, admin APIs, database persistence, and production security are **not connected yet**. These require provider configuration, server-side implementation, secrets stored in deployment environment variables, and end-to-end testing. Do not put API keys or private credentials in this repository.

## Deployment

Connect this repository to a static web host such as Render. Build command: `npm install && npm run build`. Publish directory: `dist`.

Project: AI Tools Hub