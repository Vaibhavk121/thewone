# Wone (thewone)

> Recruiting system that helps you hire better talent faster — source, evaluate and track candidates with AI-assisted workflows.

Live demo: https://thewone.vercel.app. 

---

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started (local)](#getting-started-local)


---

## About

Wone is a recruitment product that automates sourcing, evaluation and candidate tracking — letting teams find high-quality hires faster while preserving human judgment. The public deploy and repo indicate this is a Next.js application using the `app/` directory and TypeScript. :contentReference[oaicite:2]{index=2}

---

## Features

*(Taken from the deployed site content)*

- AI-assisted sourcing that finds candidates beyond boolean/keyword search.  
- Deep candidate evaluation and structured scoring/explanations.  
- Candidate tracking / simple ATS-style workflow management.  
- Automated, personalized outreach and scheduling.  
- Fast, scalable UI built with Next.js (app router).

See the live demo for product details: https://thewone.vercel.app. :contentReference[oaicite:3]{index=3}

---

## Tech stack

- **Next.js** (app router) + **TypeScript**. :contentReference[oaicite:4]{index=4}  
- Deployed on **Vercel** (project contains `vercel.json` and a vercel deploy URL).  
- Standard front-end tooling (PostCSS, ESLint) — see config files present in the repo (`postcss.config.mjs`, `eslint.config.mjs`). :contentReference[oaicite:5]{index=5}

> **Tip:** Consult `package.json` for the exact dev/build scripts and dependency versions.

---

## Getting started (local)

### Prerequisites

- Node.js (recommend 18+)
- npm / pnpm / yarn

### Quick start

```bash
# 1. clone
git clone https://github.com/Vaibhavk121/thewone.git
cd thewone

# 2. install deps (npm shown; you can use pnpm/yarn)
npm install

# 3. development
npm run dev
# open http://localhost:3000

# 4. build for production
npm run build
npm start
