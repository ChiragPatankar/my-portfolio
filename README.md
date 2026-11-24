# Chirag Patankar — Portfolio

React + TypeScript + Vite. No UI framework; all styles are in `src/index.css`.

## Editing content

Everything on the site comes from **`src/data/profile.ts`**: profile, projects, experience, education, achievements and skills. The shapes are typed in `src/data/types.ts`, so the compiler tells you if you miss a field.

Search the data file for `TODO` to find the details that still need confirming.

- Set `featured: true` on a project to show it as a large card; the others appear under "More projects".
- `metrics` are optional. Only add numbers you can explain in an interview.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then outputs to dist/
npm run preview  # serves the production build
```

## Deploying

The `dist/` folder is a static site. Vercel, Netlify and Cloudflare Pages all detect Vite automatically: import the repo and accept the defaults (build `npm run build`, output `dist`).
