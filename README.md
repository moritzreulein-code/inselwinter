# Inselwinter

Reiseblog von Lena & Moritz – drei Monate mit dem Van auf den Kanaren (Winter 2026/27).

- `site/` – die komplette Webseite (statisch, kein CMS nötig)
  - `posts.js` – Reisedaten (Route) und alle Berichte
  - `geo.js` – Küstenlinien für die Karte (Natural Earth, Public Domain)
  - `img/` – Fotos
- Jeder Push auf `main` veröffentlicht `site/` automatisch über GitHub Pages unter https://kanaren.moritz-reulein.de (siehe `.github/workflows/deploy.yml`).
- DNS: Subdomain `kanaren` bei Strato als CNAME auf `moritzreulein-code.github.io`.
