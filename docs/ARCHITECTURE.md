# Mimis-kreativstudio – Architecture Document

> Wedding Planner & Flower Bouquet Artist Website  
> Astro.js + TailwindCSS v4 | German Language | Elegant Wedding Vibe

---

## 1. Component Hierarchy

### 1.1 Overall Component Tree

```
src/
├── layouts/
│   ├── BaseLayout (root)
│   │   ├── Navigation
│   │   └── Footer
│   └── PageLayout
│       └── HeroSection (optional)
├── components/
│   ├── ui/
│   │   ├── ImageCard (reusable)
│   │   ├── Section
│   │   ├── Container
│   │   ├── Typography
│   │   └── Button
│   ├── sections/
│   │   ├── ServicesGrid
│   │   ├── AboutSection
│   │   ├── Hero
│   │   ├── CTA
│   │   └── Testimonials (future)
│   └── navigation/
│       ├── MainNav
│       └── FooterNav
├── pages/
│   ├── index.astro (homepage)
│   ├── about.astro
│   ├── services/
│   │   ├── index.astro (services overview)
│   │   ├── [service].astro (dynamic service pages)
│   └── contact.astro (optional)
└── content/ (future, for content collections)
```

### 1.2 Component Relationships

**BaseLayout** is the root layout that wraps all pages:
- Contains `<Navigation>` and `<Footer>`
- Includes base `<head>` metadata
- Applies global styles (fonts, colors)

**PageLayout** extends BaseLayout for internal pages:
- Adds `<HeroSection>` for page-specific headers
- Used for about, services overview, and individual service pages

**ServicesGrid** (homepage):
- Aggregates 6 ServiceCard components
- Each ServiceCard uses ImageCard internally

**ServiceCard** (not shown above, needs creation):
- Wraps ImageCard with service metadata
- Links to individual service page

**ImageCard** (core reusable component):
- Used by ServiceCard, ServicesGrid, section components
- Supports 4 corner positions for images
- Text overlay in opposite corner

### 1.3 Component Depth Summary

| Level | Components | Purpose |
|-------|------------|---------|
| Layouts | BaseLayout, PageLayout | Structural wrapper, metadata |
| Sections | Hero, ServicesGrid, AboutSection | Major page regions |
| Cards | ImageCard, ServiceCard | Reusable content blocks |
| UI | Button, Typography, Container | Primitive elements |
| Navigation | MainNav, FooterNav | Site navigation |

---

## 2. File Structure

```
mimis-kreativstudio/
├── astro.config.mjs          # Astro configuration
├── package.json
├── tsconfig.json
├── tailwind.config.mjs       # TailwindCSS v4 configuration
├── public/
│   ├── images/               # Static images
│   │   ├── hero/
│   │   ├── services/
│   │   │   ├── blumenkraenze/
│   │   │   ├── loops/
│   │   │   ├── bluemenstrausse/
│   │   │   ├── adventskraenze/
│   │   │   ├── frisuren/
│   │   │   └── workshops/
│   │   ├── about/
│   │   └── ui/
│   ├── fonts/                # Font files (if self-hosted)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── ImageCard.astro
│   │   │   ├── Section.astro
│   │   │   ├── Container.astro
│   │   │   ├── Button.astro
│   │   │   ├── Heading.astro
│   │   │   └── Text.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── AboutSection.astro
│   │   │   ├── CTASection.astro
│   │   │   └── ServiceGallery.astro
│   │   └── navigation/
│   │       ├── MainNav.astro
│   │       └── FooterNav.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro (optional)
│   │   └── services/
│   │       ├── index.astro
│   │       └── [service].astro
│   ├── styles/
│   │   └── global.css        # Global styles, font imports
│   └── content/
│       ├── services.json     # Service data
│       └── config.ts         # Content collections config
└── docs/
    ├── ARCHITECTURE.md        # This document
    └── CONTENT.md             # Service content (from project)
```

### 2.1 Directory Purposes

| Directory | Purpose | Files |
|-----------|---------|-------|
| `public/images/` | Static assets, optimized images | JPG, PNG, SVG |
| `src/components/ui/` | Primitive, reusable UI elements | Buttons, cards, typography |
| `src/components/sections/` | Page sections | Hero, grids, CTAs |
| `src/components/navigation/` | Navigation components | Nav, footer links |
| `src/layouts/` | Page wrapper layouts | Base, page layouts |
| `src/pages/` | Route components | .astro files per route |
| `src/styles/` | Global CSS | Font imports, base styles |
| `src/content/` | Content data | JSON, content collections |

### 2.2 Key File Relationships

```
index.astro
├── uses: PageLayout
│   └── uses: BaseLayout
│       └── uses: MainNav, FooterNav
├── includes: Hero
├── includes: ServicesGrid
└── includes: AboutSection

[services]/[service].astro
├── uses: PageLayout
├── includes: Hero (service-specific)
├── includes: ServiceGallery (large images)
└── loads: content/services/[slug].json
```

---

## 3. Page Routing (astro.config.mjs)

### 3.1 Route Structure

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  routes: [
    // Homepage
    { path: '/', component: 'src/pages/index.astro' },
    
    // About page
    { path: '/ueber-mich', component: 'src/pages/about.astro' },
    
    // Services overview
    { path: '/leistungen', component: 'src/pages/services/index.astro' },
    
    // Individual service pages (dynamic route)
    { path: '/leistungen/:service', component: 'src/pages/services/[service].astro' },
    
    // Optional contact page
    { path: '/kontakt', component: 'src/pages/contact.astro' },
    
    // Future: Blog/News (blog posts)
    { path: '/blog', component: 'src/pages/blog/index.astro' },
    { path: '/blog/:slug', component: 'src/pages/blog/[slug].astro' },
    
    // Future: Workshops booking
    { path: '/workshops', component: 'src/pages/workshops/index.astro' },
    { path: '/workshops/:id', component: 'src/pages/workshops/[id].astro' },
  ]
});
```

### 3.2 Route Summary

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.astro` | Homepage with hero, services grid, about |
| `/ueber-mich` | `pages/about.astro` | About Miriam page |
| `/leistungen` | `pages/services/index.astro` | All services overview |
| `/leistungen/blumenkraenze` | `pages/services/[service].astro` | Blumenkränze detail |
| `/leistungen/loops` | `pages/services/[service].astro` | Loops detail |
| `/leistungen/bluemenstrausse` | `pages/services/[service].astro` | Blumensträuße detail |
| `/leistungen/adventskraenze` | `pages/services/[service].astro` | Adventskränze detail |
| `/leistungen/frisuren` | `pages/services/[service].astro` | Frisuren detail |
| `/leistungen/workshops` | `pages/services/[service].astro` | Workshops detail |
| `/kontakt` | `pages/contact.astro` | Contact form (optional) |

### 3.3 Dynamic Route Parameters

For the `[service].astro` route, the `service` parameter maps to:

| Service | Parameter Value | Slug |
|---------|-----------------|------|
| Blumenkränze | `blumenkraenze` | `/leistungen/blumenkraenze` |
| Loops | `loops` | `/leistungen/loops` |
| Blumensträuße | `bluemenstrausse` | `/leistungen/bluemenstrausse` |
| Adventskränze | `adventskraenze` | `/leistungen/adventskraenze` |
| Frisuren | `frisuren` | `/leistungen/frisuren` |
| Workshops | `workshops` | `/leistungen/workshops` |

### 3.4 Route Priority

1. **Static routes** (`/`, `/ueber-mich`, `/leistungen`) are pre-rendered at build time
2. **Dynamic routes** use `getStaticPaths()` to generate all 6 service pages
3. **Future routes** can be added incrementally

---

## 4. Layout Components Needed

### 4.1 BaseLayout

**Purpose**: Root layout for all pages  
**Location**: `src/layouts/BaseLayout.astro`

```astro
---
// Props interface
interface Props {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}
---

<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{Astro.props.title} | Mimis-kreativstudio</title>
    <meta name="description" content={Astro.props.description} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&family=WindSong&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-white text-gray-900 font-body">
    <Navigation />
    <slot /> <!-- Page content -->
    <Footer />
  </body>
</html>
```

**Features**:
- Includes Google Fonts (WindSong, Source Serif 4)
- Sets base HTML structure
- Passes SEO props to pages
- Wraps all content with Navigation and Footer

### 4.2 PageLayout

**Purpose**: Extended layout for internal pages with hero section  
**Location**: `src/layouts/PageLayout.astro`

```astro
---
import BaseLayout from './BaseLayout.astro';

interface Props {
  title: string;
  description?: string;
  heroImage?: string;
  heroTitle: string;
  heroSubtitle?: string;
}
---

<BaseLayout title={Astro.props.title} description={Astro.props.description}>
  <Hero 
    title={Astro.props.heroTitle}
    subtitle={Astro.props.heroSubtitle}
    image={Astro.props.heroImage}
  />
  <slot /> <!-- Page-specific content -->
</BaseLayout>
```

**Features**:
- Extends BaseLayout
- Adds Hero component with title, subtitle, background image
- Used for about, services, and individual service pages

### 4.3 Navigation Component

**Purpose**: Main site navigation  
**Location**: `src/components/navigation/MainNav.astro`

```astro
<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
  <ul class="flex justify-center gap-8 py-4">
    <li><a href="/" class="nav-link">Start</a></li>
    <li><a href="/leistungen" class="nav-link">Leistungen</a></li>
    <li><a href="/ueber-mich" class="nav-link">Über mich</a></li>
    <li><a href="/kontakt" class="nav-link">Kontakt</a></li>
  </ul>
</nav>
```

**Style**: Minimal, centered, elegant gold accent on hover

### 4.4 Footer Component

**Purpose**: Site footer with contact info and links  
**Location**: `src/components/navigation/FooterNav.astro`

```astro
<footer class="bg-gold-50 py-12 mt-20">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <h4 class="font-heading text-xl text-gold-600">Mimis-kreativstudio</h4>
        <p class="mt-2 text-gray-600">Handgefertigte Blumenkreationen für Ihre besonderen Momente.</p>
      </div>
      <div>
        <h4 class="font-heading text-lg">Links</h4>
        <ul class="mt-2 space-y-1">
          <li><a href="/leistungen">Leistungen</a></li>
          <li><a href="/ueber-mich">Über mich</a></li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-heading text-lg">Kontakt</h4>
        <p class="mt-2 text-gray-600">Email, Telefon, Social links</p>
      </div>
    </div>
  </div>
</footer>
```

---

## 5. Props Interface for ImageCard

### 5.1 Component Purpose

The ImageCard is the core reusable component for displaying service images with text overlays. Images appear in corner positions, with text in the opposite corner.

### 5.2 TypeScript Interface

```typescript
// src/components/ui/ImageCard.astro.d.ts or inline

type ImagePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface Props {
  // Image props
  src: string;
  alt: string;
  imagePosition?: ImagePosition; // default: 'top-right'
  
  // Text content
  title: string;
  subtitle?: string;
  description?: string;
  
  // Text position (opposite corner from image)
  textPosition?: ImagePosition; // default: opposite of imagePosition
  
  // Link (optional, makes entire card clickable)
  href?: string;
  
  // Styling overrides
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  
  // Size variant
  variant?: 'small' | 'medium' | 'large' | 'full';
}

export type ImageCardProps = Props;
```

### 5.3 Usage Examples

**Basic usage (top-right image, bottom-left text)**:
```astro
<ImageCard
  src="/images/services/blumenkraenze/hero.jpg"
  alt="Handgefertigter Blumenkranz"
  title="Blumenkränze"
  subtitle="Zeitlose Eleganz"
  href="/leistungen/blumenkraenze"
/>
```

**With custom position**:
```astro
<ImageCard
  src="/images/services/workshops/team.jpg"
  alt="Blumen-Workshop Teilnehmer"
  title="Workshops"
  description="Lernen Sie die Kunst der Floristik"
  imagePosition="bottom-left"
  textPosition="top-right"
  variant="large"
/>
```

### 5.4 Implementation Concept

```
┌─────────────────────────────────────┐
│  ┌─────────┐                        │
│  │  IMAGE  │  ← top-right (default) │
│  │  (40%)  │                        │
├─────────────────────────────────────┤
│                        ┌───────────┐ │
│                        │   TEXT    │ │  ← bottom-left (default, opposite)
│                        │  Overlay  │ │
│                        │   (60%)   │ │
│                        └───────────┘ │
└─────────────────────────────────────┘

Positions:
- imagePosition: Where the image appears (40% of card)
- textPosition: Where the text overlay appears (60% of card)
- textPosition is automatically opposite of imagePosition (can be overridden)
```

### 5.5 CSS Grid Implementation Concept

```css
.image-card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  overflow: hidden;
}

.image-card__image {
  grid-area: 1 / 1 / 2 / 2;
  object-fit: cover;
}

.image-card__content {
  position: absolute;
  /* Position determined by textPosition prop */
}
```

---

## 6. Color System (Tailwind Custom Config)

### 6.1 Brand Colors

| Color | Hex | Tailwind Variable | Usage |
|-------|-----|-------------------|-------|
| Gold Primary | #D4AF37 | `gold-500` | Primary accent, headings |
| Gold Light | #F4E5A3 | `gold-300` | Hover states, subtle accents |
| Gold Dark | #B8960C | `gold-700` | Active states, borders |
| Rosé Primary | #F4C2C2 | `rose-500` | Secondary accent, flowers |
| Rosé Light | #FADADD | `rose-300` | Soft backgrounds, hover |
| Rosé Dark | #E8A5A5 | `rose-700` | Subtle borders, active |
| White | #FFFFFF | `white` | Background |
| Off-White | #FAFAFA | `gray-50` | Subtle backgrounds |
| Text Primary | #1F2937 | `gray-900` | Body text |
| Text Secondary | #4B5563 | `gray-600` | Subtitles, descriptions |

### 6.2 Tailwind Config

```javascript
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAFAF3',
          100: '#F4F2E0',
          200: '#E8E4C4',
          300: '#F4E5A3', // Light gold
          400: '#E8D66D',
          500: '#D4AF37', // Primary gold
          600: '#B8960C', // Dark gold
          700: '#8B7310',
          800: '#6B5A0E',
          900: '#4A3F0A',
        },
        rose: {
          50: '#FDF5F5',
          100: '#FAE8E8',
          200: '#F5D0D0',
          300: '#FADADD', // Light rosé
          400: '#F4B8B8',
          500: '#F4C2C2', // Primary rosé
          600: '#E8A5A5', // Dark rosé
          700: '#D48787',
          800: '#A85F5F',
          900: '#7D4646',
        },
      },
      fontFamily: {
        heading: ['WindSong', 'cursive'],
        body: ['Source Serif 4', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
```

### 6.3 Color Usage Guidelines

**Gold (#D4AF37)**:
- Navigation hover states
- Section headings
- CTA button borders
- Icon accents
- Decorative borders/dividers

**Rosé (#F4C2C2)**:
- Flower accents in images
- Background tints
- Secondary hover states
- Soft decorative elements
- Service card highlights

**White Background**:
- Main page backgrounds
- Card backgrounds
- Section alternation

### 6.4 Semantic Color Mapping

```css
/* Semantic utility classes (optional extensions) */
.bg-brand { @apply bg-white; }
.bg-accent { @apply bg-gold-50; }
.bg-secondary { @apply bg-rose-50; }

.text-brand { @apply text-gray-900; }
.text-accent { @apply text-gold-600; }
.text-secondary { @apply text-rose-600; }

.border-accent { @apply border-gold-500; }
.border-secondary { @apply border-rose-300; }
```

---

## 7. Navigation Structure

### 7.1 Primary Navigation

**Location**: Main navigation bar (sticky top)

| Link | Route | Description |
|------|-------|-------------|
| Start | `/` | Homepage |
| Leistungen | `/leistungen` | Services overview + links to all 6 |
| Über mich | `/ueber-mich` | About Miriam |
| Kontakt | `/kontakt` | Contact form (optional) |

**Style**: Horizontal, centered, elegant typography with gold hover effects

### 7.2 Services Sub-Navigation

**Location**: Services overview page (`/leistungen`) or footer

| Service | Route | Description |
|---------|-------|-------------|
| Blumenkränze | `/leistungen/blumenkraenze` | Flower wreaths |
| Loops | `/leistungen/loops` | Modern floral loops |
| Blumensträuße | `/leistungen/bluemenstrausse` | Custom bouquets |
| Adventskränze | `/leistungen/adventskraenze` | Advent wreaths |
| Frisuren | `/leistungen/frisuren` | Hair accessories |
| Workshops | `/leistungen/workshops` | Floristry workshops |

### 7.3 Footer Navigation

**Location**: Site footer

| Section | Links |
|---------|-------|
| **Leistungen** | All 6 service links |
| **Über mich** | Miriam's story, philosophy |
| **Kontakt** | Email, phone, social media |
| **Rechtliches** | Impressum, Privacy (add as needed) |

### 7.4 Navigation Flow Diagram

```
                    ┌─────────────────┐
                    │    Homepage     │
                    │       (/)       │
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
   │  Leistungen │   │ Über mich   │   │   Kontakt   │
   │ /leistungen │   │ /ueber-mich │   │  /kontakt   │
   └──────┬──────┘   └─────────────┘   └─────────────┘
          │
          ▼
   ┌───────────────────────────────────────────────┐
   │         Services Grid (6 items)               │
   └──────┬────────────────────────────────────────┘
          │
    ┌─────┴─────┬────────┬────────┬────────┬────────┬──────┐
    │           │        │        │        │        │      │
    ▼           ▼        ▼        ▼        ▼        ▼      ▼
┌───────┐  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│Kranz │  │ Loops │ │Strauß │ │Advent │ │Frisur │ │Workshop│
└───────┘  └───────┘ └───────┘ └───────┘ └───────┘ └───────┘
```

### 7.5 Responsive Behavior

| Breakpoint | Navigation |
|------------|------------|
| Mobile (< 768px) | Hamburger menu, drawer navigation |
| Tablet (768-1024px) | Horizontal scroll or wrapped |
| Desktop (> 1024px) | Full horizontal nav |

### 7.6 Key User Journeys

**Journey 1: Browse Services**
1. User visits `/`
2. Clicks "Leistungen" in nav or scrolls to ServicesGrid
3. Sees all 6 services with images and titles
4. Clicks specific service to view details

**Journey 2: Learn About Miriam**
1. User clicks "Über mich" in nav
2. Views about page with biography, philosophy
3. May link to services or contact

**Journey 3: Book a Service**
1. User finds service of interest
2. Reads detail page with descriptions
3. Catches CTA to "Kontakt" or "Workshop buchen"
4. Fills contact form or books directly

---

## Appendices

### A. Google Fonts Integration

```html
<!-- In BaseLayout head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&family=WindSong&display=swap" rel="stylesheet">
```

**Font weights**:
- WindSong: 400 (normal) for headings
- Source Serif 4: 300 (light), 400 (regular), 600 (semibold)

### B. Content Mapping

| Service | Content File | Images Location |
|---------|--------------|-----------------|
| Blumenkränze | `content/services/blumenkraenze.json` | `public/images/services/blumenkraenze/` |
| Loops | `content/services/loops.json` | `public/images/services/loops/` |
| Blumensträuße | `content/services/bluemenstrausse.json` | `public/images/services/bluemenstrausse/` |
| Adventskränze | `content/services/adventskraenze.json` | `public/images/services/adventskraenze/` |
| Frisuren | `content/services/frisuren.json` | `public/images/services/frisuren/` |
| Workshops | `content/services/workshops.json` | `public/images/services/workshops/` |

### C. Next Steps

1. **Create BaseLayout** (`src/layouts/BaseLayout.astro`)
2. **Create PageLayout** (`src/layouts/PageLayout.astro`)
3. **Create ImageCard component** (`src/components/ui/ImageCard.astro`)
4. **Create Navigation** (`src/components/navigation/MainNav.astro`, `FooterNav.astro`)
5. **Configure Tailwind** (`tailwind.config.mjs`)
6. **Create Homepage** (`src/pages/index.astro`)
7. **Create Service pages** (`src/pages/services/[service].astro`)
8. **Add About page** (`src/pages/about.astro`)

---

*Document version: 1.0*  
*Last updated: 2026-03-15*  
*Project: Mimis-kreativstudio Wedding Planner Website*