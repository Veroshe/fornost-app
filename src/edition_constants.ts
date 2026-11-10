import flamberg from './assets/Flamberg.png';
import blazej from './assets/org/blazej.png';
import eldarion from './assets/org/eldarion.jpeg';
import famos from './assets/org/famos.jpg';
import gosia from './assets/org/gosia.jpg';
import igriana from './assets/org/igriana.jpg';
import karolina from './assets/org/karolina.jpg';
import marek from './assets/org/marek.jpg';
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
import zofia from './assets/org/zofia.jpg';
import orkon from './assets/Orkon.png';
import rgfk from './assets/rgfk.png';

export const FACEBOOK_URL = 'https://www.facebook.com/events/741426278765069';
export const INSTAGRAM_URL = 'https://www.instagram.com/konwent_fornost/';
export const DISCORD_URL = 'https://discord.com/invite/BSypFsey2w';

export const TICKET_FORM_URL = 'https://forms.gle/KQCgwXc6iCkGs6xu7';
export const KARCZMA_URL = 'https://www.facebook.com/profile.php?id=61560263833757';
export const PROGRAM_SUBMISSION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSew0O-DnIOxvakHMdLCdR-nyR-SdcE51JbABSPhTJ6zBUtykw/viewform';
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

export type OrganizacjaGroup = 'orgowka' | 'gra-glowna' | 'helperzy';

export const ORGANIZACJA_GROUPS: { id: OrganizacjaGroup; label: string }[] = [
  { id: 'orgowka', label: 'Orgówka' },
  { id: 'gra-glowna', label: 'Gra Główna' },
  { id: 'helperzy', label: 'Helperzy' },
];

export interface OrganizacjaMember {
  name: string;
  role: string;
  color: string;
  /** Inicjały wyświetlane, gdy brak zdjęcia */
  initials?: string;
  group: OrganizacjaGroup;
  /** Zdjęcie – zostaw undefined, dopóki nie jest gotowe */
  image?: string;
}

export const ORGANIZACJA: OrganizacjaMember[] = [
  {
    name: "Weronika 'Wero' Kalinowska",
    role: 'Koordynacja i logistyka',
    color: 'etherealBlue',
    group: 'orgowka',
    image: wero,
  },
  {
    name: 'Małgorzata Brzoska',
    role: 'Program, oprawa muzyczna',
    color: 'forestGreen',
    group: 'orgowka',
    image: gosia,
  },
  {
    name: "Mateusz 'Orzech' Orzechowski",
    role: 'Logistyka, merch, współprace',
    color: 'etherealBlue',
    group: 'orgowka',
    image: orzech,
  },
  {
    name: "Michał 'Nowy' Bąk",
    role: 'Kontakty międzykonwentowe, budowlanki',
    color: 'etherealBlue',
    group: 'orgowka',
    image: nowy,
  },
  {
    name: "Tomasz 'Ozło' Baran",
    role: 'Kontakty międzykonwentowe, budowlanki',
    color: 'etherealBlue',
    group: 'orgowka',
    image: ozlo,
  },
  {
    name: "Przemysław 'Saverok' Sychta",
    role: 'Sponsorzy, wsparcie prawne',
    color: 'etherealBlue',
    group: 'orgowka',
    image: saverok,
  },
  {
    name: 'Igriana Bartoszek',
    role: 'Social media, grafiki',
    color: 'etherealBlue',
    group: 'orgowka',
    image: igriana,
  },
  {
    name: 'Aleksandra Nawrocka',
    role: 'Social media',
    color: 'etherealBlue',
    initials: 'AN',
    group: 'orgowka',
  },
  {
    name: "Filip 'Famos' Wróblewski",
    role: 'Koordynator Gry Głównej 2027',
    color: 'etherealBlue',
    group: 'gra-glowna',
    image: famos,
  },
  {
    name: "Julia 'Ponczo' Liszewska",
    role: 'MG Gry Głównej 2027',
    color: 'earthBrown',
    group: 'gra-glowna',
    image: ponczo,
  },
  {
    name: "Martyna 'Tyna' Królak",
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    group: 'gra-glowna',
    image: tyna,
  },
  {
    name: "Aleksandra 'Olca' Gąsiorowska",
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    group: 'gra-glowna',
    image: olca,
  },
  {
    name: "Krzysztof 'Sharp' Brzoska",
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    group: 'gra-glowna',
    image: sharp,
  },
  {
    name: 'Błażej Kardyś',
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    group: 'gra-glowna',
    image: blazej,
  },
  {
    name: "Michał 'Eldarion' Skerczyński",
    role: 'GG 2027 - questy dla najmłodszych',
    color: 'etherealBlue',
    group: 'gra-glowna',
    image: eldarion,
  },
  {
    name: 'Michał Poręcki',
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    group: 'gra-glowna',
    image: porecki,
  },
  {
    name: 'Marek Hückmann',
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    initials: 'MH',
    group: 'gra-glowna',
    image: marek,
  },
  {
    name: 'Karolina Kuflińska',
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    initials: 'KK',
    group: 'gra-glowna',
    image: karolina,
  },
  {
    name: 'Zofia Piotrowska',
    role: 'MG Gry Głównej 2027',
    color: 'etherealBlue',
    initials: 'ZP',
    group: 'gra-glowna',
    image: zofia,
  },
  {
    name: "Mikołaj 'Ojo' Para",
    role: 'Wsparcie ogólne, GG 2027 - questy dla najmłodszych',
    color: 'etherealBlue',
    group: 'helperzy',
    image: ojo,
  },
];
