# Michael Jackson — Music Artist Portfolio

> Proiect 2 · Echipa 11 · Grupa 3IE26  
> Stack: React · TailwindCSS · Strapi CMS · Netlify

---

## Membrii Echipei

| Nume | Contribuție |
|------|-------------|
| **Liusu Andreea** | Setup GitHub & Netlify, pagina Home (Hero Banner, Secțiunea Artist Spotlight, Statistici, Top Melodii), integrare Strapi API, dark/light mode |
| **Lal Andrada** | Pagina Albume (grid, filtre, sortare, Featured Album Showcase), componente AlbumCard, player muzical, design responsive |
| **Iurescu Cezara** | Pagina Despre (biografie, timeline, skills, premii, galerie, citate), pagina Evenimente & Blog (sidebar, newsletter), pagina Contact (formular, hartă, FAQ) |

---

## Descriere Proiect

**Michael Jackson Tribute** este un site web de prezentare dedicat celui mai mare entertainer din toate timpurile — o platformă cu design dark glassmorphism, animații CSS fluide și integrare completă cu Strapi Headless CMS.

---

## Tehnologii Folosite

| Categorie | Tehnologie | Versiune |
|-----------|-----------|---------|
| Frontend | React | ^18.2 |
| Bundler | Vite | ^5.1 |
| Styling | TailwindCSS | ^3.4 |
| Routing | React Router DOM | ^6.22 |
| HTTP | Axios | ^1.6 |
| Backend | Strapi CMS | v4 |
| Deploy | Netlify | — |

---

## Pagini Implementate

| Pagină | Rută | Layout | Descriere |
|--------|------|--------|-----------|
| Home | `/` | Full-width cu Hero | Hero cinematic, spotlight artist, albume, statistici animate, top melodii, testimoniale, social links |
| Despre | `/despre` | Asimetric 2/5 + 3/5 | Biografie, timeline, skill bars, premii, galerie foto, citate |
| Albume | `/albume` | Grid cu filtru sticky | Grid albume cu filtre genre, sortare, showcase album principal |
| Evenimente | `/evenimente` | 2 coloane + sidebar | Featured event banner, concerte tribut, blog cu categorii, newsletter |
| Contact | `/contact` | Split 3/5 + 2/5 | Formular cu validare, info contact, hartă Google Maps, FAQ accordion |

---

## Structura Proiectului

```
echipa-11-3ie26-proiect2/
├── frontend/                    # Aplicația React
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/          # Componente reutilizabile
│   │   ├── context/             # ThemeContext (dark/light)
│   │   ├── data/                # mockData.js (fallback date)
│   │   ├── hooks/               # useAlbums, useEvents, useBlogPosts
│   │   ├── layouts/             # MainLayout.jsx
│   │   ├── pages/               # Home, About, Albums, Events, Contact
│   │   ├── routes/              # AppRoutes.jsx
│   │   ├── services/            # api.js (Axios + servicii)
│   │   ├── styles/              # index.css (Tailwind + custom)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── backend/                     # Strapi CMS (scheme content types)
│   └── src/api/
│       ├── album/
│       ├── event/
│       ├── blog-post/
│       ├── contact-message/
│       └── about-artist/
│
├── netlify.toml
├── .gitignore
└── README.md
```

---

## Instalare & Rulare

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Editează .env: VITE_STRAPI_URL=http://localhost:1337
npm run dev
```

> Aplicația rulează la: **http://localhost:3000**  
> Dacă Strapi nu rulează, site-ul folosește automat datele mock din `src/data/mockData.js`.

### Backend (Strapi)

```bash
cd backend
npx create-strapi-app@latest . --quickstart
# sau, dacă e deja configurat:
npm run develop
```

> Panoul Strapi Admin: **http://localhost:1337/admin**

---

## Deploy Netlify

### Pas 1 — Build local (test)
```bash
cd frontend
npm run build
```

### Pas 2 — GitHub
```bash
git init
git add .
git commit -m "feat: initial commit - echipa 11 proiect 2"
git branch -M main
git remote add origin https://github.com/[USERNAME]/echipa-11-3ie26-proiect2.git
git push -u origin main
```

### Pas 3 — Netlify
1. [netlify.com](https://netlify.com) → **New site from Git** → selectează repo
2. Setările sunt preconfigurate în `netlify.toml`:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Variabile de mediu în Netlify:
   - `VITE_STRAPI_URL` = URL-ul Strapi Cloud
   - `VITE_STRAPI_API_TOKEN` = token din Strapi Admin

---

## Environment Variables

### Frontend (`frontend/.env`)
```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=your_api_token_here
```

### Backend (`backend/.env`)
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2
API_TOKEN_SALT=salt
ADMIN_JWT_SECRET=secret
JWT_SECRET=secret
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

---


---

## Surse de Inspirație și Bibliografie

### Design & UI
- [Spotify Design](https://spotify.design) — sistem vizual muzical
- [Apple Music](https://music.apple.com) — dark premium interface
- [tweakcn.com](https://tweakcn.com) — personalizare temă Tailwind
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — animații, keyframes, utilitare

### Tehnic
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Strapi v4 Documentation](https://docs.strapi.io)
- [Vite Documentation](https://vitejs.dev)
- [React Router DOM v6](https://reactrouter.com)
- [Axios Docs](https://axios-http.com)
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/) — previzualizări muzică 30s

### Inspirație vizuală
- Behance — Music Portfolio Projects
- Dribbble — Dark UI / Glassmorphism
- Awwwards — Award winning websites

### Imagini
- Wikimedia Commons (fotografii Michael Jackson — domeniu public)

---
*Proiect realizat în cadrul cursului de Web Design · Facultatea de Electronică și Telecomunicații · 2025–2026*
