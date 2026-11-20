# MPC JUNIOR COLLEGE WEBSITE
## Premium Multi-Page Static Frontend Website for Intermediate MPC Stream

This is a complete, production-ready, multi-page static website for a generic Indian **MPC Junior College** (Intermediate Education — Mathematics, Physics, and Chemistry).

---

## 1. Technology Architecture

- **HTML5:** Semantic, accessible markup across 13 distinct pages with rich meta tags and Open Graph data.
- **CSS3:** Custom responsive stylesheet (`assets/css/style.css`) using CSS variables, flexbox, and grid layouts.
- **Vanilla JavaScript:** Clean client-side interactions (`assets/js/script.js`) for mobile navigation, dropdowns, accordions, tabs, scroll-to-top, and non-submitting form validation.
- **Zero External Dependencies:** No React, Next.js, Bootstrap, Tailwind, jQuery, PHP, or external npm modules.
- **Hostinger Ready:** 100% compatible with Hostinger static web hosting.

---

## 2. Directory Structure

```
mpc-junior-college/
├── index.html                   # Home Page
├── about.html                   # About College
├── academics.html               # Academic Programs & Matrix
├── subjects.html                # MPC Subjects Overview
├── mathematics.html             # Dedicated Mathematics Page
├── physics.html                 # Dedicated Physics Page
├── chemistry.html               # Dedicated Chemistry Page
├── laboratories.html            # Physics, Chemistry & Math Labs
├── faculty.html                 # Generic Faculty & Mentors
├── admissions.html              # Admissions, Documents & FAQs
├── campus-life.html             # Campus Life & Student Activities
├── career-guidance.html         # Career Opportunities & Pathways
├── contact.html                 # Contact Us & Enquiry Form
├── assets/
│   ├── css/
│   │   └── style.css            # Unified Design System Stylesheet
│   ├── js/
│   │   └── script.js            # Vanilla JavaScript Interactions
│   ├── icons/
│   │   └── academic-logo.svg    # Geometric Academic Emblem
│   └── images/
│       └── (Future .webp images will be added here)
├── IMAGE-GENERATION-GUIDE.md    # 60 Google Flow Prompts & Asset Catalog
└── README.md                    # Project Documentation & Hostinger Guide
```

---

## 3. Brand Identity & Dummy Information

To comply with the prompt requirements:
- **Institution Identity:** Uses only generic labels (`MPC JUNIOR COLLEGE`, `INTERMEDIATE EDUCATION`, `MPC STREAM`, `OUR COLLEGE`). No real or fictional college names are used.
- **Academic Logo:** Geometric academic SVG emblem combining pi (&pi;), orbital electron paths, and scientific symbolism without brand text.
- **Dummy Contact Info:**
  - Phone: `0000000000`
  - Alternative Phone: `0000000000`
  - Email: `demo@example.com`
  - Address: `Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000.`
  - Hours: `Monday–Saturday, 9:00 AM–5:00 PM`
- **Illustrative Demo Content:** All testimonials, faculty profiles, sample timetables, and laboratory facilities are clearly labeled as illustrative generic content.
- **Frontend-Only Forms:** Enquiry forms validate on the client side and display a clean success notification without transmitting data to any backend server.

---

## 4. How to Preview Locally

You can preview the website locally using any of the following methods:

### Option A: Direct Browser Preview
Double-click `index.html` or drag and drop any `.html` file directly into Chrome, Edge, Firefox, or Safari.

### Option B: Local Python HTTP Server
Open PowerShell or Terminal in the project root folder and execute:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option C: Node.js `npx serve`
```powershell
npx serve .
```

### Option D: VS Code Live Server
Right-click on `index.html` in VS Code and select **"Open with Live Server"**.

---

## 5. Hostinger Static Hosting Deployment Guide

This website is completely static and ready for direct upload to Hostinger:

1. **Log in to Hostinger hPanel:** Navigate to your hosting dashboard.
2. **Access File Manager:**
   - Under your domain, click **File Manager** (or connect via FTP like FileZilla).
   - Navigate to the `public_html/` root folder.
3. **Upload Files:**
   - Upload all 13 `.html` files directly into `public_html/`.
   - Upload the entire `assets/` directory (with its `css/`, `js/`, `icons/`, and `images/` subfolders).
   - Ensure `index.html` resides at the top level of `public_html/`.
4. **SSL / HTTPS:** Enable the free Hostinger SSL certificate in hPanel for secure HTTPS delivery.
5. **Test Your Live Site:** Visit your domain name. All navigation links, mobile menus, and forms will function immediately without needing database setup or server-side configuration.

---

## 6. Image Assets & Integration Status

All **60 photographic image assets** are generated and integrated across all 13 pages:
- **Files Location:** `images/` (and mirrored in `assets/images/`).
- **Aspect Ratios Maintained:** 16:9 for banners/classrooms/labs, 4:3 for pedagogy sections, and 1:1 for faculty portraits.
- **Image Performance:** `loading="lazy"` enabled on content images with CSS `object-fit: cover` and smooth hover micro-interactions.
- **Reference Catalog:** See [`IMAGE-GENERATION-GUIDE.md`](IMAGE-GENERATION-GUIDE.md) for the complete prompt inventory and specifications.

---

## 7. Quality Verification Checklist

- [x] All 13 HTML pages created and interconnected.
- [x] Generic branding strictly maintained (no fictional or real college names).
- [x] Clean academic color palette applied (#142B45, #2457A6, #3478D4, #F29B38, #F4F7FB).
- [x] Clean, uncluttered 4-item header navigation with organized dropdowns and mobile menu.
- [x] Vanilla JavaScript implementation with zero console errors.
- [x] Interactive FAQ accordions and tab navigation.
- [x] Frontend form validation with demo success messages.
- [x] All 60 photographic images integrated and verified with 0 broken links.
- [x] Hostinger static hosting compatibility confirmed.
