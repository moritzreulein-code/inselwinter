# Inselwinter

Reiseblog von Lena & Moritz – drei Monate mit dem Van auf den Kanaren (Winter 2026/27).

- `site/` – die komplette Webseite (statisch, kein CMS nötig)
  - `posts.js` – Reisedaten (Route) und alle Berichte
  - `geo.js` – Küstenlinien für die Karte (Natural Earth, Public Domain)
  - `img/` – Fotos
- Jeder Push auf `main` lädt `site/` automatisch per SFTP auf den Strato-Webspace (siehe `.github/workflows/deploy.yml`).

Benötigte Secrets: `STRATO_HOST`, `STRATO_USER`, `STRATO_PASSWORD`. Optional die Variable `STRATO_DIR` (Zielordner, Standard: `kanaren`).
