# Ann Mary Varghese — Portfolio (React + Vite + Tailwind)

## Local Development
1) Install Node.js LTS from https://nodejs.org
2) In a terminal:
   ```bash
   npm install
   npm run dev
   ```
   Open the URL it prints (usually http://localhost:5173).

## Build
```bash
npm run build
```
The optimized site will be in the `dist/` folder.

## Deploy to GitHub Pages (recommended)
- This repo includes a GitHub Actions workflow that builds and publishes the site to Pages automatically on every push to `main`.
- Enable Pages in **Settings → Pages** with **Source: GitHub Actions**.

## Manual Upload (no Actions)
After `npm run build`, upload the contents of `dist/` to your `annmaryvarghese.github.io` repository.
