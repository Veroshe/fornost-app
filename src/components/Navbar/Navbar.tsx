import { Burger, Button, Container, Group, Menu } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import logoImage from '../../assets/logo-white.png';
import { BuyButton } from '../common/BuyButton';
import classes from './Navbar.module.css';

const links = [
  { link: '/gallery', label: 'Galeria' },
  { link: '/place', label: 'Na miejscu' },
  { link: '/organization', label: 'Organizacja' },
  { link: '/larp', label: 'LARP "Za Garść Mithrillu"', special: true },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const isScrolled = scroll.y > 50;

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${classes.link} ${link.special ? classes.specialLink : ''}`}
      onClick={() => {
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <div className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
      <Container size="xl" className={classes.inner}>
        <Group gap={5} visibleFrom="sm" component="a" href="/">
          <img
            src={logoImage}
            alt="Fornost - Konwent Larpowy"
            className={`${classes.logoImage} ${isScrolled ? classes.logoScrolled : ''}`}
          />
        </Group>

        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>

        <Group gap={5} visibleFrom="sm">
          <BuyButton />
        </Group>

        {/* Mobile */}
        <Group hiddenFrom="sm" style={{ flex: 1 }} justify="space-between">
          <img
            src={logoImage}
            alt="Fornost - Konwent Larpowy"
            className={`${classes.logoImage} ${isScrolled ? classes.logoScrolled : ''}`}
          />

          <Menu shadow="md" width={200} opened={opened} onChange={toggle}>
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} size="sm" color="white" />
            </Menu.Target>

            <Menu.Dropdown>
              {links.map((link) => (
                <Menu.Item key={link.label} component="a" href={link.link}>
                  {link.label}
                </Menu.Item>
              ))}
              <Menu.Divider />
              <Menu.Item>
                <Button variant="filled" color="etherealBlue" fullWidth size="sm">
                  Zapisz się
                </Button>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
