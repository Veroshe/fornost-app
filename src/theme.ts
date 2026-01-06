import { createTheme, MantineColorsTuple } from '@mantine/core';

// Kolory inspirowane obrazkiem - mglista estetyka Rivendell/Lothlórien
const etherealBlue: MantineColorsTuple = [
  '#f0f4f8', // najjaśniejszy - mglisty świt
  '#d9e5ee', // jasny niebieski z obrazka
  '#b8cfe0', // roby elfów
  '#94b4d1', // główny kolor niebieskich szat
  '#7099bd', // średni ton
  '#517fa8', // bazowy
  '#3d6586', // głębszy
  '#2d4d66', // ciemniejszy
  '#1f3547', // prawie nocny
  '#12212e', // najciemniejszy
];

const forestGreen: MantineColorsTuple = [
  '#f2f5f3',
  '#e3ebe6',
  '#c7d6cc',
  '#a8bfb0',
  '#8baa96',
  '#729683',
  '#5f8876',
  '#4d7462',
  '#3f6352',
  '#2f5242',
];

const mistyGray: MantineColorsTuple = [
  '#f8f9fa',
  '#eef0f2',
  '#dde1e5',
  '#c8ced4',
  '#b2bac3',
  '#9ba5b0',
  '#869099',
  '#6f7a85',
  '#5a6470',
  '#454f5a',
];

const earthBrown: MantineColorsTuple = [
  '#f7f5f3',
  '#ebe6e1',
  '#d6ccc1',
  '#bfb0a0',
  '#aa9682',
  '#97816d',
  '#87725f',
  '#71604d',
  '#5f5140',
  '#4d4133',
];

const silverWhite: MantineColorsTuple = [
  '#ffffff',
  '#f8f9fa',
  '#f1f3f5',
  '#e9ecef',
  '#dee2e6',
  '#ced4da',
  '#adb5bd',
  '#868e96',
  '#495057',
  '#343a40',
];

export const theme = createTheme({
  // Paleta kolorów
  colors: {
    etherealBlue,
    forestGreen,
    mistyGray,
    earthBrown,
    silverWhite,
  },

  primaryColor: 'etherealBlue',

  // Nowoczesne, ale organiczne zaokrąglenia
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },

  // Fonty - eleganckie i czytelne
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
  fontFamilyMonospace: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, monospace',
  headings: {
    fontFamily: 'Aniron, "Palatino Linotype", Palatino, Georgia, serif',
    fontWeight: '400',
    sizes: {
      h1: { fontSize: '1.5rem', lineHeight: '1.3', fontWeight: '400' },
      h2: { fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '400' },
      h3: { fontSize: '2rem', lineHeight: '1.4', fontWeight: '500' },
      h4: { fontSize: '1.25rem', lineHeight: '1.45', fontWeight: '500' },
      h5: { fontSize: '1.125rem', lineHeight: '1.5', fontWeight: '600' },
      h6: { fontSize: '1rem', lineHeight: '1.5', fontWeight: '600' },
    },
  },

  // Cienie - delikatne, mgliste
  shadows: {
    xs: '0 1px 3px rgba(45, 77, 102, 0.08), 0 1px 2px rgba(45, 77, 102, 0.06)',
    sm: '0 1px 3px rgba(45, 77, 102, 0.1), 0 1px 2px rgba(45, 77, 102, 0.08)',
    md: '0 4px 6px rgba(45, 77, 102, 0.1), 0 2px 4px rgba(45, 77, 102, 0.08)',
    lg: '0 10px 15px rgba(45, 77, 102, 0.12), 0 4px 6px rgba(45, 77, 102, 0.08)',
    xl: '0 20px 25px rgba(45, 77, 102, 0.15), 0 10px 10px rgba(45, 77, 102, 0.06)',
  },

  // Odstępy
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  // Inne ustawienia
  defaultRadius: 'md',
  cursorType: 'pointer',

  // Komponenty - dostosowanie do estetyki fantasy
  components: {
    Title: {
      styles: (_theme: unknown, params: { order?: number }) => ({
        root: {
          fontFamily:
            params.order && params.order > 1
              ? 'Cinzel, "Palatino Linotype", Palatino, Georgia, serif'
              : 'Aniron, "Palatino Linotype", Palatino, Georgia, serif',
        },
      }),
    },
    Container: {
      defaultProps: {
        size: 'xl',
      },
      styles: {
        root: {
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
          '@media (min-width: 768px)': {
            paddingLeft: 'var(--mantine-spacing-lg)',
            paddingRight: 'var(--mantine-spacing-lg)',
          },
          '@media (min-width: 1024px)': {
            paddingLeft: 'var(--mantine-spacing-xl)',
            paddingRight: 'var(--mantine-spacing-xl)',
          },
        },
      },
    },
    Paper: {
      defaultProps: {
        shadow: 'sm',
        radius: 'md',
      },
      styles: {
        root: {
          backgroundColor: 'rgba(248, 249, 250, 0.85)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(148, 180, 209, 0.15)',
        },
      },
    },
    Card: {
      defaultProps: {
        shadow: 'md',
        radius: 'md',
        withBorder: true,
      },
      styles: {
        root: {
          borderColor: 'rgba(148, 180, 209, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 20px rgba(45, 77, 102, 0.15)',
          },
        },
      },
    },
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
          letterSpacing: '0.5px',
          transition: 'all 0.2s ease',
          border: '1px solid transparent',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          '&[data-disabled]': {
            pointerEvents: 'none',
          },
          '&[data-loading]': {
            pointerEvents: 'none',
          },
        },
      },
    },
    Input: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        input: {
          borderColor: 'rgba(148, 180, 209, 0.3)',
          backgroundColor: 'rgba(248, 249, 250, 0.6)',
          transition: 'all 0.2s ease',
          '&:focus': {
            borderColor: 'rgba(81, 127, 168, 0.6)',
            backgroundColor: '#ffffff',
          },
        },
      },
    },
    Modal: {
      defaultProps: {
        radius: 'md',
        shadow: 'xl',
      },
      styles: {
        content: {
          backgroundColor: 'rgba(248, 249, 250, 0.98)',
          backdropFilter: 'blur(20px)',
        },
        overlay: {
          backgroundColor: 'rgba(45, 77, 102, 0.4)',
          backdropFilter: 'blur(4px)',
        },
      },
    },
    Notification: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          backgroundColor: 'rgba(248, 249, 250, 0.85)',
          backdropFilter: 'blur(10px)',
          borderLeft: '4px solid',
        },
      },
    },
  },
});
