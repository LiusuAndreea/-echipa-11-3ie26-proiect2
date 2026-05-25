# -echipa-11-3ie26-proiect2
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

## Link-uri Proiect

| Resursă | Link |
|---------|------|
| GitHub Repository | `https://github.com/[USERNAME]/echipa-11-3ie26-proiect2` |
| Netlify (site live) | `https://[NUME-PROIECT].netlify.app` |
| Strapi Cloud | `https://[NUME-PROIECT].strapiapp.com` |
| Temă tweakcn.com | `https://tweakcn.com/editor/theme?theme=[ID-TEMA]` |

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

## Cerințe Tehnice Bifate

### Structură & Tehnologii
- [x] React + TailwindCSS (fără alte framework-uri UI)
- [x] React Router DOM cu 5 rute distincte
- [x] Axios pentru apeluri API către Strapi
- [x] Strapi Headless CMS cu 5 collection types
- [x] Deploy config Netlify (`netlify.toml`)
- [x] GitHub `.gitignore` configurat

### UI/UX
- [x] Meniu desktop sticky (rămâne fix la scroll cu blur effect)
- [x] Meniu mobil hamburger + offcanvas (slide din dreapta, overlay cu blur)
- [x] Dark/Light Mode toggle cu persistență `localStorage`
- [x] Design responsive (mobile, tablet, desktop, ultra-wide)
- [x] 3 fonturi web: **Poppins** (sans), **Playfair Display** (heading), **JetBrains Mono** (mono)
- [x] Animații CSS (fade-in, slide-up, blob, float) via Tailwind keyframes

### Componente (16 componente)
- [x] Navbar + MobileMenu (hamburger offcanvas)
- [x] ThemeToggle (dark/light)
- [x] HeroSection (parallax blobs, animații CSS)
- [x] Footer cu logo, navigare, copyright
- [x] AlbumCard (hover lift, overlay play)
- [x] EventCard (imagine cu overlay, badge preț)
- [x] ContactForm (validare câmpuri, integrare Strapi)
- [x] SectionTitle (decorator lines, animat)
- [x] Button (variante primary/outline)
- [x] Loader + SkeletonCard + PageLoader
- [x] ErrorMessage
- [x] SocialLinks (5 platforme)
- [x] TestimonialCard (rating stele, avatar)
- [x] Timeline (linie verticală gradient)
- [x] MusicPlayerUI (player real iTunes 30s, playlist)
- [x] ScrollProgress (bara progress scroll)

### Elemente Tipice de Site
- [x] Logo (simbol ♛ + text "Michael Jackson")
- [x] Navigare completă în header și footer
- [x] Copyright în footer
- [x] Social links (Spotify, YouTube, Instagram, TikTok, Apple Music)
- [x] Meta tags SEO în `index.html`
- [x] Custom cursor subtil
- [x] Scroll progress indicator

### Backend Strapi
- [x] Schema: **Albums** (Collection Type)
- [x] Schema: **Events** (Collection Type)
- [x] Schema: **Blog Posts** (Collection Type)
- [x] Schema: **Contact Messages** (Collection Type)
- [x] Schema: **About Artist** (Single Type)
- [x] Fallback la mock data când Strapi nu rulează

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

## Configurare Strapi — Collections

### Albums (Collection Type)
| Câmp | Tip | Obligatoriu |
|------|-----|-------------|
| title | String | ✅ |
| description | Text | — |
| coverImage | Media (image) | — |
| genre | String | — |
| releaseDate | Date | — |
| streamingUrl | String | — |
| tracks | Integer | — |
| duration | String | — |

### Events (Collection Type)
| Câmp | Tip | Obligatoriu |
|------|-----|-------------|
| title | String | ✅ |
| location | String | ✅ |
| description | Text | — |
| date | DateTime | ✅ |
| image | Media (image) | — |
| category | String | — |
| price | String | — |
| ticketsUrl | String | — |
| isFeatured | Boolean | — |

### Blog Posts (Collection Type)
| Câmp | Tip | Obligatoriu |
|------|-----|-------------|
| title | String | ✅ |
| content | Rich Text | ✅ |
| image | Media (image) | — |
| category | Enumeration | — |
| date | Date | — |
| readTime | String | — |
| author | String | — |

### Contact Messages (Collection Type)
| Câmp | Tip | Obligatoriu |
|------|-----|-------------|
| name | String | ✅ |
| email | Email | ✅ |
| message | Text | ✅ |

### About Artist (Single Type)
| Câmp | Tip |
|------|-----|
| biography | Rich Text |
| skills | JSON |
| instruments | JSON |
| achievements | JSON |
| artistPhoto | Media |
| shortBio | Text |

---

## Permisiuni Strapi (Public API)

Strapi Admin → **Settings → Roles → Public**:

- **Albums**: `find`, `findOne` ✅
- **Events**: `find`, `findOne` ✅
- **Blog Posts**: `find`, `findOne` ✅
- **Contact Messages**: `create` ✅
- **About Artist**: `find` ✅

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

## Design System

### Fonturi (setate în Tailwind + Google Fonts)
| Font | Utilizare |
|------|-----------|
| **Poppins** | Text general, UI, butoane |
| **Playfair Display** | Titluri, headings (font-heading) |
| **JetBrains Mono** | Etichete, numere, cod (font-mono) |

### Paletă de culori
| Rol | Culoare | Hex |
|-----|---------|-----|
| Primary | Purple | `#9333ea` |
| Accent 1 | Pink | `#ec4899` |
| Accent 2 | Cyan | `#22d3ee` |
| Background dark | Zinc 950 | `#09090b` |
| Glass | White 4% | `rgba(255,255,255,0.04)` |

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

## Colaborare Git

Fiecare membru al echipei:
1. A clonat repository-ul: `git clone https://github.com/[USERNAME]/echipa-11-3ie26-proiect2.git`
2. A lucrat pe branch-ul propriu și a creat Pull Requests
3. Liderul de echipă (Liusu Andreea) a adăugat colegii ca Collaborators în Settings > Collaborators

---

*Proiect realizat în cadrul cursului de Web Design · Facultatea de Electronică și Telecomunicații · 2025–2026*
