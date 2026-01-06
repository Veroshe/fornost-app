import { IconBrandFacebook, IconBrandInstagram, IconMail } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { ActionIcon, Anchor, Container, Group, Stack, Text } from '@mantine/core';
import logoImage from '@/assets/logo-white.png';
import { KAROLINA_TUL_URL, MACIEJ_MARGIELSKI_URL } from '@/edition_constants';
import classes from './Footer.module.css';

const socialLinks = [
  {
    icon: IconBrandFacebook,
    link: 'https://www.facebook.com/fornost.konwent',
    label: 'Facebook',
  },
  {
    icon: IconBrandInstagram,
    link: 'https://www.instagram.com/fornost_konwent/',
    label: 'Instagram',
  },
  {
    icon: IconMail,
    link: 'mailto:kontakt@fornost.pl',
    label: 'Email',
  },
];

const navLinks = [
  { link: '/about', label: 'O Konwencie' },
  { link: '/gallery', label: 'Galeria' },
  { link: '/place', label: 'Na miejscu' },
  { link: '/organization', label: 'Organizacja' },
  { link: '/larp', label: 'LARP' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.logoSection}>
          <img src={logoImage} alt="Fornost" className={classes.logo} />
          <Text size="sm" c="dimmed" className={classes.description}>
            Konwent Larpowy w Czatachowej
          </Text>
          <Text size="sm" c="dimmed">
            25.07 - 02.08.2026
          </Text>
        </div>

        <div className={classes.linksSection}>
          <Stack gap="xs">
            {navLinks.map((link) => (
              <Anchor
                key={link.label}
                component={Link}
                to={link.link}
                className={classes.link}
                size="sm"
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>
        </div>

        <div className={classes.socialSection}>
          <Group gap="md" mt="sm">
            {socialLinks.map((social) => (
              <ActionIcon
                key={social.label}
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="subtle"
                color="etherealBlue"
                className={classes.socialIcon}
              >
                <social.icon size={20} />
              </ActionIcon>
            ))}
          </Group>
          <Text size="sm" c="dimmed" mt="md">
            <Anchor href="mailto:kontakt@fornost.pl" c="dimmed" className={classes.emailLink}>
              kontakt@fornost.pl
            </Anchor>
          </Text>
        </div>
      </Container>

      <Container size="xl" className={classes.afterFooter}>
        <Stack gap="xs" align="center">
          <Text c="dimmed" size="sm">
            © {currentYear} Fornost - Konwent Larpowy. Wszelkie prawa zastrzeżone.
          </Text>
          <Text c="dimmed" size="sm">
            Zdjęcia:{' '}
            <Anchor
              href={MACIEJ_MARGIELSKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              c="dimmed"
              className={classes.emailLink}
            >
              Maciej Margielski
            </Anchor>
            {' i '}
            <Anchor
              href={KAROLINA_TUL_URL}
              target="_blank"
              rel="noopener noreferrer"
              c="dimmed"
              className={classes.emailLink}
            >
              Karolina Tul-Jerominek
            </Anchor>
          </Text>
        </Stack>
      </Container>
    </footer>
  );
}
