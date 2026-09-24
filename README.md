# IronVault Fitness — Responsive Business Landing Page

## Project Title

**IronVault Fitness** — A responsive, single-page landing page for a premium commercial gym, built with HTML5, CSS3, JavaScript, and Bootstrap 5.

---

## Business Concept

IronVault Fitness is a fictional premium gym brand conceptualized for **The Sky Gen Web Development Project 02**. Located in Karachi, Pakistan, IronVault represents a modern fitness facility dedicated to strength training, personal coaching, group workouts, and cardiovascular conditioning. The brand targets beginners, working professionals, and fitness enthusiasts who seek a supportive, professionally-staffed environment to build strength and confidence. With flexible membership tiers, certified trainers, and cutting-edge equipment, IronVault positions itself as more than a gym — it's a community built on discipline and progress.

---

## Features

- **Sticky responsive navbar** with scroll-based visual transition
- **Smooth scrolling** to all page sections
- **Active navigation highlighting** using Intersection Observer API
- **Hero section** with full-width background image, dark overlay, and CTA buttons
- **About section** with benefit cards, professional paragraph, and supporting image
- **Services cards** (6 services) with icons, numbers, descriptions, and hover effects
- **Pricing plans** (3 tiers) with the Pro plan highlighted as "Most Popular"
- **Testimonials carousel** with 3 customer testimonials, navigation arrows, and indicators
- **FAQ accordion** with 7 questions using Bootstrap's collapse component
- **Contact form** with HTML5 validation, JavaScript validation, and success feedback
- **Google Maps embed** for the gym's Karachi location
- **Responsive mobile navigation** with hamburger menu that closes after link selection
- **Fully responsive layout** across desktop, tablet, and mobile breakpoints
- **Accessibility improvements** including semantic HTML, focus states, and ARIA labels
- **Performance optimization** with optimized images, efficient CSS, and minimal JavaScript

---

## Technologies

- **HTML5** — Semantic markup with proper heading hierarchy
- **CSS3** — Custom styling with CSS variables, Flexbox, and media queries
- **JavaScript (ES6+)** — Interactive components, form validation, and scroll behavior
- **Bootstrap 5** — Responsive grid, components, and utilities
- **Bootstrap Icons 1.11.3** — Royalty-free icon set
- **Git** — Version control with incremental commits
- **GitHub** — Codebase hosting
- **Vercel** — Deployment and hosting
- **Unsplash** — Royalty-free stock photography
- **Google Maps** — Embedded location map

---

## Responsive Design

The website is fully responsive across three primary breakpoints:

| Breakpoint | Width | Key Adjustments |
|---|---|---|
| **Desktop** | 1200px+ | Full-width hero with side-by-side image, 3-column pricing, 3-column service cards |
| **Tablet** | 768px–1199px | Stacked hero content, 2-column service cards, adjusted typography |
| **Mobile** | Below 768px | Single-column layout, hamburger menu, stacked cards, centered content |

All sections were tested at each breakpoint. No horizontal overflow is present. The mobile hamburger menu toggles correctly, and the navbar collapses into a hamburger icon below 992px.

---

## Business Details

IronVault Fitness is a **fictional business concept** created for The Sky Gen Web Development Project 02. All names, locations, pricing, and testimonials are fictional and created for project purposes only. The gym, its services, and its brand identity do not correspond to any real business. The project demonstrates professional web development skills including responsive design, accessibility, performance optimization, and conversion-focused UI/UX.

---

## Project Structure

```
ironvault-fitness/
├── index.html              # Main HTML file with all sections
├── README.md               # Project documentation
├── css/
│   ├── style.css            # Custom CSS source
│   └── style.min.css        # Minified custom CSS for production
├── js/
│   ├── script.js            # JavaScript source
│   └── script.min.js        # Minified JavaScript for production
├── assets/
│   ├── images/              # Optimized royalty-free photos
│   │   ├── hero-bg.webp     # WebP background (optimized)
│   │   ├── hero-bg.jpg      # Original JPEG (backup)
│   │   ├── hero-gym.webp    # WebP hero image (optimized)
│   │   ├── hero-gym.jpg     # Original JPEG (backup)
│   │   ├── about-trainer.webp # WebP trainer image (optimized)
│   │   └── about-trainer.jpg  # Original JPEG (backup)
│   └── icons/               # Custom SVG icons
│       ├── logo.svg
│       └── favicon.svg
└── screenshots/             # Screenshots & Lighthouse report
    ├── desktop.png
    ├── tablet.png
    ├── mobile.png
    └── lighthouse.json
```

---

## Screenshots

### Desktop (1200px)
![Desktop Screenshot](screenshots/desktop.png)

### Tablet (768px)
![Tablet Screenshot](screenshots/tablet.png)

### Mobile (375px)
![Mobile Screenshot](screenshots/mobile.png)

---

## Performance Optimization

The project implements the following performance optimizations:

- **WebP images** — All JPEG images converted to WebP format (39–69% size reduction)
- **Minified CSS & JS** — Production files use `clean-css` and `terser` minification
- **Deferred non-critical CSS** — Bootstrap Icons and custom CSS loaded with `media="print"` + `onload` pattern to eliminate render-blocking
- **Font preloading** — Google Fonts (Montserrat) preloaded with `<link rel="preload">` for faster FCP
- **Font display swap** — `@font-face` rule with `font-display: swap` prevents FOIT for Bootstrap Icons
- **Image preloading** — Hero background image preloaded with `fetchpriority="high"`
- **Lazy loading** — Below-the-fold images use `loading="lazy"`
- **Proper image dimensions** — Width and height attributes set on all `<img>` tags to prevent layout shift
- **Responsive image sizing** — Trainer image resized to match display dimensions (386×217)

On Vercel/Netlify (with gzip compression, HTTP/2, and edge caching), performance scores typically reach 90+.

---

## Lighthouse

Lighthouse performance audit results (local test server without gzip/caching):

- **Performance:** 78/100
- **Best Practices:** 100/100
- **Accessibility:** 94/100
- **SEO:** 100/100

Key metrics: FCP 3.6s, LCP 4.2s, TBT 0ms, CLS 0.005

> Note: Scores improve significantly on Vercel/Netlify deployment due to automatic gzip compression, HTTP/2, and edge caching.

---

## Deployment

### Required (by project brief): Public GitHub repository + Vercel deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `ironvault-fitness`
3. Set to **Public**
4. Initialize with a README
5. After creation, run:
   ```bash
   git remote add origin https://github.com/<username>/ironvault-fitness.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

**Option A — Import from GitHub (recommended):**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"** → Import your GitHub repository
3. Framework Preset: **Other** (or leave as default)
4. Click **"Deploy"**

**Option B — Drag & Drop:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"** → **"Import Project"** → **"Drag and Drop"**
3. Drag the project folder onto the upload area
4. Click **"Deploy"**

The `vercel.json` configures caching headers for static assets (WebP images, minified CSS/JS).

---

## Credits

### Third-Party Assets

**Photography:**
- Hero background image — by [Rodrigo Rodrigues / WOLF Λ R T](https://unsplash.com/@wolfart32) on [Unsplash](https://unsplash.com/photos/Si3c7KEwexs)
- Hero gym image — by [Unsplash](https://unsplash.com/photos/C_mhSj7MI18)
- About trainer image — by [Unsplash](https://unsplash.com/photos/qX5QzpDQJPk)

**Icons & Libraries:**
- [Bootstrap 5](https://getbootstrap.com/) — CSS framework (v5.3.3)
- [Bootstrap Icons](https://icons.getbootstrap.com/) — Icon library (v1.11.3)
- [Google Fonts — Montserrat](https://fonts.google.com/specimen/Montserrat) — Typography

**Services:**
- [Unsplash](https://unsplash.com/) — Royalty-free stock photography
- [Google Maps](https://www.google.com/maps) — Embedded location map

---

## License

This project is a student submission for The Sky Gen Web Development Project 02. All code is original and created for educational purposes. Third-party assets are used under their respective licenses (Unsplash License, MIT for Bootstrap).
