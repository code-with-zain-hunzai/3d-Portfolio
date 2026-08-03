# Zain Ul Abbdin — 3D Portfolio

Personal portfolio site for **Zain Ul Abbdin**, a Full Stack Developer working across web and AI.
Built with React, TypeScript and Vite, with an animated 3D character scene driven by Three.js and
React Three Fiber, and scroll-based motion handled by GSAP.

> **Note:** add your own screenshot here once deployed.

## Contents

- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Editing Your Content](#editing-your-content)
- [How the Animations Fit Together](#how-the-animations-fit-together)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Sections

| Section | Component | What it shows |
| --- | --- | --- |
| Landing | `Landing.tsx` | Intro headline, headshot, and the 3D character |
| What I Do | `WhatIDo.tsx` | Backend & Data, Full Stack, and related capability cards |
| Career | `Career.tsx` | Roles and timeline |
| Work | `Work.tsx` | Project carousel — Zicy, Scentfine, Retrend.pk |
| Tech Stack | `TechStack.tsx` | Physics-driven floating tech spheres |
| Contact | `Contact.tsx` | Links, education, and resume |

## Tech Stack

**Core** — React 18, TypeScript, Vite

**3D & animation** — Three.js, `@react-three/fiber`, `@react-three/drei`,
`@react-three/postprocessing`, `@react-three/cannon`, `@react-three/rapier`, `three-stdlib`,
GSAP with `@gsap/react` (ScrollTrigger, ScrollSmoother, SplitText)

**Supporting** — `react-icons`, `react-fast-marquee`, `@vercel/analytics`

## Project Structure

```text
.
├── public/
│   ├── draco/                  # Draco decoder for compressed model geometry
│   ├── images/                 # Project shots, tech logos, headshot (me1.webp)
│   ├── models/                 # 3D assets
│   └── Zain_Ul_Abbdin_Resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Character/          # 3D scene: Scene.tsx + utils (lighting, mouse, animation)
│   │   ├── styles/             # One CSS file per section
│   │   ├── utils/              # initialFX.ts (intro), GsapScroll.ts (scroll timelines)
│   │   ├── About.tsx  Career.tsx  Contact.tsx  Landing.tsx
│   │   ├── Cursor.tsx  HoverLinks.tsx  Loading.tsx  Navbar.tsx
│   │   ├── MainContainer.tsx   # Page composition
│   │   ├── SocialIcons.tsx  TechStack.tsx  WhatIDo.tsx
│   │   └── Work.tsx  WorkImage.tsx
│   ├── context/                # LoadingProvider
│   ├── data/                   # profile.ts (links/details), boneData.ts
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

Requires **Node.js 18+** and npm 9+.

```bash
git clone https://github.com/code-with-zain-hunzai/3d-Portfolio.git
cd 3d-portfolio
npm install
npm run dev
```

The dev server runs with `--host`, so it also prints a LAN address for testing on a phone.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server, exposed on the local network |
| `npm run build` | Type-checks (`tsc -b`) then builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | ESLint across the project |

## Editing Your Content

**Personal details and links** live in one place — `src/data/profile.ts`. Changing a value there
updates the navbar, social rail and contact footer together:

```ts
export const profile = {
  firstName: "ZAIN",
  lastName: "UL ABBDIN",
  initials: "ZA",
  role: "Full Stack Developer",
  email: "...",
  resume: "/Zain_Ul_Abbdin_Resume.pdf",
};
```

**Projects** are the `projects` array at the top of `src/components/Work.tsx`. Order in the array is
the order on screen — the `01 / 02 / 03` labels and the dot indicators are both derived from the
array index, so reordering entries renumbers everything automatically. Add a matching image to
`public/images/`.

**Headshot** — `public/images/me1.webp`, rendered by `.landing-portrait` in `Landing.tsx`. Sizing and
the circular frame are in `src/components/styles/Landing.css` and scale across four breakpoints.

**Career and capabilities** — `Career.tsx` and `WhatIDo.tsx`.

**Colors** — global custom properties (`--accentColor`, `--backgroundColor`, …) in `src/index.css`.

## How the Animations Fit Together

Worth reading before editing markup, since several effects bind to CSS selectors rather than refs:

- `src/components/utils/initialFX.ts` runs the intro. It uses GSAP **SplitText** on specific
  selectors — `.landing-info h3`, `.landing-intro h2`, `.landing-intro h1` — splitting them into
  per-character spans. Renaming or restructuring those elements will break the intro animation.
- `src/components/utils/GsapScroll.ts` holds the ScrollTrigger timelines. The landing fade targets
  `.landing-container` as a whole, so anything nested inside it fades out with the hero for free.
- `src/components/Character/` owns the 3D scene, its lighting and its mouse tracking, independently
  of the DOM animations above.

Adding a new element inside an existing container is safe. Renaming the selectors above is not.

## Deployment

```bash
npm run build     # outputs dist/
npm run preview   # verify locally first
```

Deploy `dist/` to any static host — Vercel, Netlify or Cloudflare Pages. No environment variables are
required. The build emits a large chunk warning for the tech-stack bundle; that is expected given the
physics and 3D dependencies and does not indicate a failure.

## Troubleshooting

**Blank screen in dev** — check the browser console for module resolution errors and confirm
`npm install` completed.

**Slow 3D on low-end devices** — reduce post-processing and scene complexity in
`src/components/Character/utils/`.

**Type errors on build** — `npm run build` runs `tsc -b` first, so type failures stop the build.
Run `npx tsc --noEmit -p tsconfig.app.json` to see them on their own.

**Text animations not firing** — almost always a renamed class. Cross-check against the selectors
listed in [How the Animations Fit Together](#how-the-animations-fit-together).

## License

Released under the [MIT License](LICENSE).
