# Sainath Y - 3D Cybersecurity Portfolio

An advanced React, Vite, and TypeScript portfolio website for **Sainath Y**, a Cybersecurity and Digital Forensics student from India.

This portfolio is designed to feel like an interactive cybersecurity command center instead of a normal student portfolio. It includes a lightweight procedural 3D hero scene, SOC dashboard visuals, a digital forensics evidence board, project case studies, lab records, skill matrix, terminal-style about section, and resume/contact sections.

## About Sainath

**Name:** Sainath Y  
**Title:** Cybersecurity & Digital Forensics Student  
**Location:** India  
**Status:** Available for Internship / Fresher Opportunities

Focus areas:

- SOC Analysis
- SIEM
- Web Security
- Vulnerability Assessment
- Digital Forensics
- Network Security
- Secure Web Development
- Incident Response Basics

## What I Built

This project was built as a futuristic cyber-lab portfolio with:

- Cyber preloader
- 3D hero command center
- Procedural cyber shield, globe rings, nodes, particles, and grid floor
- Holographic identity card
- Terminal about section
- Skill matrix with progress indicators
- Tools arsenal section
- Project case study room
- Digital forensics evidence board
- SOC dashboard simulation
- Cyber lab practical records
- Learning journey timeline
- Resume scanner section
- Contact portal

## Tech Stack

- React
- Vite
- TypeScript
- React Compiler
- Three.js
- React Three Fiber
- Framer Motion
- Lenis smooth scroll
- Lucide React
- CSS

## Performance Work

The 3D experience is optimized to keep the site smooth and build output clean:

- Lazy-loaded 3D hero scene with `React.lazy` and `Suspense`
- Split heavy 3D scene parts into separate chunks
- Removed unused heavy 3D helper packages from the active build
- Procedural geometry instead of external 3D models
- Optimized particle count
- Lightweight CSS glow, vignette, and scanline overlays
- Mobile-friendly fallbacks and reduced-motion support
- Vite build passes without chunk-size warnings

## Projects Included

- PULSE-R24 News Intelligence Platform
- Mini SIEM / SOC Lab
- Voter Management Portal
- OWASP ZAP Practical
- Burp Suite Practical
- Wireshark Traffic Analysis
- Digital Forensics Practical Work

## How I Made This

I created this as a personal portfolio for cybersecurity internship and fresher opportunities. The goal was to make the website visually impressive while still professional and practical.

The portfolio data is centralized in:

```txt
src/data/portfolio.ts
```

Most page sections read from that file, so the name, links, focus areas, tools, projects, lab records, and contact placeholders can be updated from one place.

The 3D hero uses React Three Fiber with lightweight procedural objects:

```txt
src/components/three/
```

The main page sections live in:

```txt
src/components/sections/
```

The layout and shared UI helpers live in:

```txt
src/components/layout/
src/components/ui/
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Resume

The resume button points to:

```txt
public/resume.pdf
```

If the file is missing, the app still builds and runs. Add `resume.pdf` inside the `public` folder when ready.

## Contact Links

Email, GitHub, and LinkedIn links are placeholders in:

```txt
src/data/portfolio.ts
```

Update them with Sainath's real links before final deployment.

## Author

Built by **Sainath Y**.
