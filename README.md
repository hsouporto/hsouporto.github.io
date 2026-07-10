# Hugo S. Oliveira — Academic Portfolio

Personal academic website for **Hugo S. Oliveira, PhD** — Lecturer at the University of Porto (FEUP) and Researcher at INESC TEC.

🌐 **Live site:** [https://hsouporto.github.io](https://hsouporto.github.io)

---

## About

This is a single-page GitHub Pages site built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no dependencies. Just push to `main` and it's live.

**Sections:**
- Hero with animated particle constellation
- About + stats
- Research interests
- Education timeline (5 degrees + 2nd PhD in progress)
- Affiliations (FEUP + INESC TEC)
- Selected publications
- Teaching courses
- GitHub projects
- Contact

---

## Stack

| Layer | Tech |
|---|---|
| Markup | Semantic HTML5 |
| Styling | CSS custom properties, CSS Grid, Flexbox |
| Animation | Canvas API (particles), IntersectionObserver (scroll reveal) |
| Fonts | Space Grotesk · Inter · JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages |

---

## How to deploy

### Option A — Direct push (simplest)

```bash
# Clone your repo
git clone https://github.com/hsouporto/hsouporto.github.io
cd hsouporto.github.io

# Copy the site files in
cp path/to/index.html .
cp path/to/404.html .

# Push
git add .
git commit -m "feat: launch academic portfolio site"
git push origin main
```

GitHub Pages will serve it at `https://hsouporto.github.io` within ~60 seconds.

### Option B — From this zip

```bash
git clone https://github.com/hsouporto/hsouporto.github.io
cd hsouporto.github.io

# Unzip and copy files here, then:
git add .
git commit -m "feat: launch academic portfolio site"
git push origin main
```

---

## GitHub Pages settings

In your repo → **Settings → Pages**:
- Source: `Deploy from a branch`
- Branch: `main` / `(root)`
- Save

---

## Customisation

All content lives in `index.html`. Key things to update:

| What | Where in index.html |
|---|---|
| Profile photo | Replace the `.about-initials` div with an `<img>` tag |
| Publications | `#publications` section — add/remove `.pub-card` divs |
| Stats (citations, h-index) | `.about-stats` `.stat-num` values |
| Email link | Add `<a href="mailto:...">` in `#contact` |
| CV/resume download | Add a `btn-primary` link pointing to a PDF in the repo |

---

## File structure

```
hsouporto.github.io/
├── index.html          ← entire site (single file)
├── 404.html            ← custom 404 page
├── README.md           ← this file
└── .nojekyll           ← tells GitHub Pages not to run Jekyll
```

---

## License

Content © Hugo S. Oliveira. Code template MIT.
