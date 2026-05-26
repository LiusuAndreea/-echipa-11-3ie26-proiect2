export const mockAlbums = [
  {
    id: 1,
    title: 'Thriller',
    description:
      'Cel mai bine vândut album din toate timpurile cu peste 66 de milioane de exemplare. Conține hiturile „Thriller", „Billie Jean" și „Beat It". Produs alături de Quincy Jones, albumul a redefinit muzica pop mondială și a stabilit recorduri ce rezistă și astăzi.',
    genre: 'Pop / R&B',
    releaseDate: '1982-11-30',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop&q=80',
    streamingUrl: 'https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ',
    tracks: 9,
    duration: '42 min',
  },
  {
    id: 2,
    title: 'Bad',
    description:
      'Al cincilea album solo, lansat în 1987. A produs cinci single-uri consecutive pe locul 1 în topurile americane — un record mondial. Turneul „Bad World Tour" a cuprins 123 de concerte în 15 țări, cu peste 4,4 milioane de spectatori.',
    genre: 'Pop / Funk / R&B',
    releaseDate: '1987-08-31',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&q=80',
    streamingUrl: 'https://open.spotify.com/album/5eCWjXFGFIAgT9p8yyMCvt',
    tracks: 11,
    duration: '48 min',
  },
  {
    id: 3,
    title: 'Off the Wall',
    description:
      'Prima colaborare majoră cu Quincy Jones. La 21 de ani, Michael se transformă în artist adult complet — o revoluție în muzica disco și funk. Patru single-uri în Top 10 din același album, un record la acea vreme.',
    genre: 'Disco / Funk / Soul',
    releaseDate: '1979-08-10',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&q=80',
    streamingUrl: 'https://open.spotify.com/album/2WT1pbYjLJciAR26yMebkH',
    tracks: 10,
    duration: '43 min',
  },
  {
    id: 4,
    title: 'Dangerous',
    description:
      'Primul album produs fără Quincy Jones. Îmbină new jack swing cu balada cinematică. Conține „Black or White", „In the Closet" și „Heal the World" — un apel universal pentru pace care a vândut peste 32 de milioane de copii.',
    genre: 'New Jack Swing / Pop',
    releaseDate: '1991-11-26',
    coverImage: 'https://images.unsplash.com/photo-1540039155730-8c0f08f99b10?w=400&h=400&fit=crop&q=80',
    streamingUrl: 'https://open.spotify.com/album/7J9EFDGXz2GZkdFYdGWOGl',
    tracks: 14,
    duration: '77 min',
  },
  {
    id: 5,
    title: 'HIStory: Past, Present and Future',
    description:
      'Dublu album cu hituri și material original. „You Are Not Alone" a debutat direct pe locul 1 în Billboard Hot 100 — un record mondial. Conține și „Earth Song", unul dintre cele mai puternice mesaje muzicale ale tuturor timpurilor.',
    genre: 'Pop / R&B / Rock',
    releaseDate: '1995-06-20',
    coverImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop&q=80',
    streamingUrl: 'https://open.spotify.com/album/7jxlHoVQRsLOvFpVeHELiA',
    tracks: 15,
    duration: '77 min',
  },
  {
    id: 6,
    title: 'Invincible',
    description:
      'Ultimul album de studio, lansat în 2001. Peste 13 milioane de copii vândute. Producții avansate și o varietate de genuri ce demonstrează maturitatea artistică deplină a celui care a rămas pentru totdeauna Regele Pop-ului.',
    genre: 'Pop / R&B / Soul',
    releaseDate: '2001-10-30',
    coverImage: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop&q=80',
    streamingUrl: 'https://open.spotify.com',
    tracks: 16,
    duration: '77 min',
  },
]

export const mockEvents = [
  {
    id: 1,
    title: 'Thriller Night — Tribut Michael Jackson',
    location: 'Sala Polivalentă, București',
    description:
      'Un concert-tribut spectaculos dedicat Regelui Pop-ului. Coregrafii iconice, dansatori profesioniști, costume originale și sunet surround de ultimă generație. O călătorie prin 40 de ani de muzică irepetabilă.',
    date: '2024-10-29',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=500&fit=crop&q=80',
    category: 'Concert Tribut',
    isFeatured: true,
    ticketsUrl: '#',
    price: '150 RON',
  },
  {
    id: 2,
    title: 'Bad World Tour: Aniversare 37 Ani',
    location: 'Arena Națională, București',
    description:
      'Eveniment aniversar ce recreează atmosfera turneului iconic din 1987–1989. Proiecții cu înregistrări de arhivă, orchestră live și performeri internaționali care readuc magia lui Michael Jackson.',
    date: '2024-11-14',
    image: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=800&h=500&fit=crop&q=80',
    category: 'Eveniment Aniversar',
    isFeatured: false,
    ticketsUrl: '#',
    price: '200 RON',
  },
  {
    id: 3,
    title: 'MJ Legacy — Festivalul Fanilor',
    location: 'UNTOLD Stage, Cluj-Napoca',
    description:
      'Cel mai mare gathering al fanilor Michael Jackson din România. Cover bands internaționale, expoziție de fotografii rare și proiecții de videoclipuri remasterizate.',
    date: '2024-08-03',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=500&fit=crop&q=80',
    category: 'Festival',
    isFeatured: false,
    ticketsUrl: '#',
    price: 'Festival Pass',
  },
  {
    id: 4,
    title: 'This Is It — Proiecție Specială 15 Ani',
    location: 'Cinema Floreasca, București',
    description:
      'Proiecție aniversară a documentarului „This Is It" (2009) — filmul care a capturat repetiția turneului care nu a mai avut loc niciodată. Urmat de o seară de muzică și amintiri.',
    date: '2024-10-25',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=500&fit=crop&q=80',
    category: 'Proiecție Specială',
    isFeatured: false,
    ticketsUrl: '#',
    price: '40 RON',
  },
]

export const mockBlogPosts = [
  {
    id: 1,
    title: 'Povestea albumului Thriller: cum a devenit cel mai vândut disc din toate timpurile',
    content:
      'Era 1982 când Michael Jackson și Quincy Jones s-au închis în studio cu un obiectiv: să creeze ceva ce lumea nu mai auzise niciodată. Rezultatul a depășit orice imaginație. Iată culisele unui record care rezistă de 40 de ani.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg',
    category: 'Culise',
    date: '2024-03-15',
    readTime: '8 min',
    author: 'Redacția MJ Archive',
  },
  {
    id: 2,
    title: 'Moonwalk: istoria celui mai iconic pas de dans din muzica pop',
    content:
      'Era 25 mai 1983 când, în fața a 47 de milioane de telespectatori, Michael Jackson a alunecat înapoi pentru prima dată pe scena Motown 25. Fred Astaire l-a sunat imediat: „Ești un dansator extraordinar."',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg',
    category: 'Artă',
    date: '2024-02-12',
    readTime: '6 min',
    author: 'Redacția MJ Archive',
  },
  {
    id: 3,
    title: 'Influența lui Michael Jackson asupra muzicienilor români',
    content:
      'De la artiști pop la dansatori de stradă din București, Timișoara sau Cluj, Michael Jackson a lăsat o urmă adâncă în cultura muzicală a României. Artiști autohtoni povestesc cum Regele Pop le-a schimbat viața.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Michaeljackson1.jpg',
    category: 'Vești',
    date: '2024-01-20',
    readTime: '5 min',
    author: 'Redacția MJ Archive',
  },
  {
    id: 4,
    title: 'This Is It: ultimul turneu care nu a mai avut loc',
    content:
      '50 de concerte la O2 Arena, Londra. Lumea nu a apucat să îl vadă. Documentarul „This Is It" a capturat repetiția unui spectacol ce ar fi schimbat din nou regulile show-business-ului mondial.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Michael_Jackson_%281988%29.jpg',
    category: 'Culise',
    date: '2023-12-10',
    readTime: '9 min',
    author: 'Redacția MJ Archive',
  },
]

export const mockTestimonials = [
  {
    id: 1,
    name: 'Quincy Jones',
    role: 'Producător muzical, colaborator',
    text: 'Michael este cel mai talentat artist cu care am lucrat vreodată în 60 de ani de carieră. Când intram în studio, simțeam că asistăm la nașterea muzicii. Nu exista imposibil — exista doar „nu am ajuns încă acolo".',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Beyoncé Knowles',
    role: 'Artist, admiratoare',
    text: 'Michael Jackson a schimbat tot ce credeam că știm despre muzică, dans și performance. Am crescut uitându-mă la videoclipurile lui și visând că voi putea urca pe scenă. El este motivul pentru care exist ca artist.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Paul McCartney',
    role: 'Muzician, colaborator',
    text: 'Am cântat împreună pe „Say Say Say" și „The Girl is Mine". Era pur și simplu genial — o minte muzicală unică, cu o bunătate care iradia din fiecare gest. Lumea e mai săracă fără el.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'Oprah Winfrey',
    role: 'Jurnalistă, prieten',
    text: 'Am realizat cel mai urmărit interviu din istoria televiziunii cu Michael. Dincolo de star, am descoperit un om profund sensibil, cu o dragoste genuină pentru umanitate. „Heal the World" nu era un cântec — era crezul său de viață.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    rating: 5,
  },
]

export const mockSongs = [
  { id: 1, title: 'Thriller', album: 'Thriller', duration: '5:57', streams: '1.1B' },
  { id: 2, title: 'Billie Jean', album: 'Thriller', duration: '4:54', streams: '980M' },
  { id: 3, title: 'Beat It', album: 'Thriller', duration: '4:18', streams: '850M' },
  { id: 4, title: 'Smooth Criminal', album: 'Bad', duration: '4:17', streams: '720M' },
  { id: 5, title: 'Man in the Mirror', album: 'Bad', duration: '5:19', streams: '650M' },
]

export const mockTimeline = [
  {
    year: '1964',
    title: 'Debutul cu Jackson 5',
    description:
      'La numai 6 ani, Michael debutează cu frații săi în trupa Jackson 5. Talentul său vocal și coregrafic iese imediat în evidență, atrăgând atenția caselor de discuri din întreaga Americă.',
  },
  {
    year: '1971',
    title: 'Debut solo — „Got to Be There"',
    description:
      'La 13 ani, Michael lansează primul album solo în paralel cu activitatea în Jackson 5. „Got to Be There" și „Ben" devin hituri și demonstrează că poate funcționa și independent.',
  },
  {
    year: '1979',
    title: 'Off the Wall — Renașterea',
    description:
      'Colaborarea cu Quincy Jones produce un album revoluționar. La 21 de ani, Michael se transformă în artist adult complet, cu patru single-uri în Top 10 din același album.',
  },
  {
    year: '1982',
    title: 'Thriller — Recordul suprem',
    description:
      'Lansat pe 30 noiembrie 1982, Thriller devine rapid cel mai bine vândut album din toate timpurile. Videoclipul de 14 minute revoluționează MTV și industria videoclipurilor.',
  },
  {
    year: '1983',
    title: 'Moonwalk — Momentul iconic',
    description:
      'Pe 25 mai 1983, în fața a 47 de milioane de telespectatori, Michael prezintă moonwalk-ul la Motown 25. Fred Astaire îl numește „un dansator extraordinar".',
  },
  {
    year: '1987',
    title: 'Bad World Tour — Cucerirea lumii',
    description:
      'Primul turneu solo mondial stabilește recorduri: 123 de concerte, 15 țări, 4,4 milioane de spectatori. „Bad" produce 5 single-uri consecutive pe locul 1 — record mondial.',
  },
  {
    year: '1993',
    title: 'Super Bowl Halftime — Cel mai urmărit spectacol TV',
    description:
      'Spectacolul de la pauza Super Bowl XXVII devine cel mai urmărit show TV din istoria americană cu 133 de milioane de telespectatori. Redefinește standardele pentru evenimentele live.',
  },
  {
    year: '2009',
    title: '„This Is It" — Plecarea unui rege',
    description:
      'Pe 25 iunie 2009, Michael Jackson se stinge din viață la Los Angeles. Lumea pierde cel mai mare entertainer din toate timpurile, în ajunul unui turneu de 50 de concerte la Londra.',
  },
]

export const mockAwards = [
  { title: '13 Premii Grammy', event: 'Recording Academy — USA', year: '1980–2010' },
  { title: 'Grammy Legend Award', event: 'Grammy Awards', year: '1993' },
  { title: '26 American Music Awards', event: 'AMA — Record Mondial', year: '1980–2010' },
  { title: 'Grammy Lifetime Achievement', event: 'Grammy Awards (postum)', year: '2010' },
]

export const mockSkills = [
  { name: 'Voce & Falsetto', level: 99, icon: '🎤' },
  { name: 'Dans & Coregrafie', level: 100, icon: '💃' },
  { name: 'Compoziție & Versuri', level: 95, icon: '✍️' },
  { name: 'Producție Muzicală', level: 92, icon: '🎛️' },
  { name: 'Beatbox', level: 90, icon: '🎵' },
  { name: 'Pian', level: 85, icon: '🎹' },
  { name: 'Chitară', level: 75, icon: '🎸' },
  { name: 'Performance de Scenă', level: 100, icon: '🌟' },
]
