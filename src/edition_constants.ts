import flamberg from './assets/Flamberg.png';
import blazej from './assets/org/blazej.png';
import eldarion from './assets/org/eldarion.jpeg';
import famos from './assets/org/famos.jpg';
import gosia from './assets/org/gosia.jpg';
import igriana from './assets/org/igriana.jpg';
import nowy from './assets/org/nowy.jpg';
import ojo from './assets/org/ojo.jpg';
import olca from './assets/org/olca.jpg';
import orzech from './assets/org/orzech.jpg';
import ozlo from './assets/org/ozlo.jpg';
import ponczo from './assets/org/ponczo.jpg';
import porecki from './assets/org/porecki.png';
import saverok from './assets/org/saverok.jpg';
import sharp from './assets/org/sharp.jpg';
import tyna from './assets/org/tyna.jpg';
import wero from './assets/org/wero.jpg';
import orkon from './assets/Orkon.png';
import rgfk from './assets/rgfk.png';

export const FACEBOOK_URL = 'https://www.facebook.com/events/741426278765069';
export const INSTAGRAM_URL = 'https://www.instagram.com/konwent_fornost/';
export const DISCORD_URL = 'https://discord.com/invite/BSypFsey2w';

export const TICKET_FORM_URL = 'https://forms.gle/KQCgwXc6iCkGs6xu7';
export const KARCZMA_URL = 'https://www.facebook.com/profile.php?id=61560263833757';
export const PROGRAM_SUBMISSION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScmwMNDNLM030eFltJXix-dTNooU5f0IoRgMbMT-_PACKFK-g/viewform';
export const MACIEJ_MARGIELSKI_URL = 'https://www.instagram.com/mmargiel/';
export const KAROLINA_TUL_URL = 'https://www.instagram.com/tulfotografie/';
export const NEWSLETTER_URL =
  'https://c1f8922b.sibforms.com/serve/MUIFAEdcN0Kk0uNcgoA6lZrlcErakbe41Dy6Kt2beNcfH7ZzWFUE3MECYVH2jv9IAAtyfIbmzWsKRSdm7tXXsEgUR_OZY2zPGExbqo6nXGr1OCEymzTmeOtBwtfGAUGscD_LdtxKS3rODnQP-5TEPUnTOhhpSqy-cTKj3VaiOwqpkVr_k68q8A2MT0eQpJa4wciREHK4WMJCICRL';

export interface MediaPartner {
  name: string;
  /** URL do pliku logo – zostaw undefined dopóki logo nie jest gotowe */
  logo?: string;
  /** Opcjonalny link do strony partnera */
  url?: string;
  /** Czy zastosować filtr brightness(0) invert(1) – domyślnie true (dla ciemnych logo na przezroczystym tle) */
  invertLogo?: boolean;
}

export const MEDIA_PARTNERS: MediaPartner[] = [
  {
    name: 'Flamberg',
    logo: flamberg,
    url: 'https://www.facebook.com/profile.php?id=100064678691468',
  },
  { name: 'Orkon', logo: orkon, url: 'https://www.facebook.com/Orkon.org' },
];

export const PARTNERS: MediaPartner[] = [
  {
    name: 'RGFK',
    logo: rgfk,
    url: 'https://rgfk.pl/',
    invertLogo: false,
  },
];

export const ORGANIZACJA = [
  {
    name: "Weronika 'Wero' Kalinowska",
    role: 'Koordynacja i logistyka',
    color: 'etherealBlue',
    image: wero,
  },
  {
    name: 'Małgorzata Brzoska',
    role: 'Program, oprawa muzyczna, osoba bezpieczeństwa',
    color: 'forestGreen',
    initials: 'MJ',
    image: gosia,
  },
  {
    name: "Julia 'Ponczo' Liszewska",
    role: 'Social media, koordynator pola, MG Gry Głównej 2026',
    color: 'earthBrown',
    initials: 'JL',
    image: ponczo,
  },
  {
    name: "Mateusz 'Orzech' Orzechowski",
    role: 'Logistyka, merch, MG Gry Głównej 2026',
    color: 'etherealBlue',
    initials: 'MO',
    image: orzech,
  },
  {
    name: "Martyna 'Tyna' Królak",
    role: 'Grafika, oprawa wizualna, MG Gry Głównej 2026',
    color: 'etherealBlue',
    initials: 'MO',
    image: tyna,
  },
  {
    name: "Aleksandra 'Olca' Gąsiorowska",
    role: 'Social media, zachowanie ładu, MG Gry Głównej 2026',
    color: 'etherealBlue',
    initials: 'MO',
    image: olca,
  },
  {
    name: "Michał 'Nowy' Bąk",
    role: 'Kontakty międzykonwentowe',
    color: 'etherealBlue',
    initials: 'MO',
    image: nowy,
  },
  {
    name: "Mikołaj 'Ojo' Para",
    role: 'Budowlanki, wsparcie ogólne, GG 2026 - questy dla najmłodszych',
    color: 'etherealBlue',
    initials: 'MO',
    image: ojo,
  },
  {
    name: "Tomasz 'Ozło' Baran",
    role: 'Budowlanki, wsparcie ogólne',
    color: 'etherealBlue',
    initials: 'MO',
    image: ozlo,
  },
  {
    name: "Przemysław 'Saverok' Sychta",
    role: 'Sponsorzy, wsparcie prawne',
    color: 'etherealBlue',
    initials: 'MO',
    image: saverok,
  },
  {
    name: 'Igriana Bartoszek',
    role: 'Wsparcie organizacyjne, skryba',
    color: 'etherealBlue',
    initials: 'MO',
    image: igriana,
  },
  {
    name: "Filip 'Famos' Wróblewski",
    role: 'Główny MG Gry Głównej 2026',
    color: 'etherealBlue',
    initials: 'MO',
    image: famos,
  },
  {
    name: "Krzysztof 'Sharp' Brzoska",
    role: 'MG Gry Głównej 2026',
    color: 'etherealBlue',
    initials: 'MO',
    image: sharp,
  },
  {
    name: 'Błażej Kardyś',
    role: 'MG Gry Głównej 2026',
    color: 'etherealBlue',
    initials: 'MO',
    image: blazej,
  },
  {
    name: "Michał 'Eldarion' Skerczyński",
    role: 'GG 2026 - questy dla najmłodszych',
    color: 'etherealBlue',
    initials: 'MO',
    image: eldarion,
  },
  {
    name: 'Michał Poręcki',
    role: 'MG Gry Głównej 2026',
    color: 'etherealBlue',
    initials: 'MO',
    image: porecki,
  },
];
