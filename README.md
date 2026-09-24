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
├── index.html          # Main HTML file with all sections
├── README.md           # Project documentation
├── css/
│   └── style.css       # Custom CSS with premium gym aesthetic
├── js/
│   └── script.js       # JavaScript for interactivity
├── assets/
│   ├── images/         # Optimized Unsplash photos
│   │   ├── hero-bg.jpg
│   │   ├── hero-gym.jpg
│   │   └── about-trainer.jpg
│   └── icons/          # Custom SVG icons
│       ├── logo.svg
│       └── favicon.svg
└── screenshots/        # Responsive design screenshots
    ├── desktop.png
    ├── tablet.png
    └── mobile.png
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

## Lighthouse

Lighthouse performance audit conducted on the deployed site. The project targets a performance score above 80 with optimized images, efficient CSS, and minimal JavaScript.

![Lighthouse Report](screenshots/lighthouse.png)

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
