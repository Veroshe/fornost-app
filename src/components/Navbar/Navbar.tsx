import { Link } from 'react-router-dom';
import { Box, Burger, Button, Container, Group, Menu } from '@mantine/core';
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
    <Link
      key={link.label}
      to={link.link}
      className={`${classes.link} ${link.special ? classes.specialLink : ''}`}
      onClick={() => {
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
      <Container size="xl" className={classes.inner}>
        <Box visibleFrom="sm">
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logoImage}
              alt="Fornost - Konwent Larpowy"
              className={`${classes.logoImage} ${isScrolled ? classes.logoScrolled : ''}`}
              style={{ display: 'block' }}
            />
          </Link>
        </Box>

        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>

        <Group gap={5} visibleFrom="sm">
          <BuyButton />
        </Group>

        {/* Mobile */}
        <Group hiddenFrom="sm" style={{ flex: 1 }} justify="space-between">
          <Link to="/">
            <img
              src={logoImage}
              alt="Fornost - Konwent Larpowy"
              className={`${classes.logoImage} ${isScrolled ? classes.logoScrolled : ''}`}
            />
          </Link>

          <Menu shadow="md" width={200} opened={opened} onChange={toggle}>
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} size="sm" color="white" />
            </Menu.Target>

            <Menu.Dropdown>
              {links.map((link) => (
                <Menu.Item key={link.label} component={Link} to={link.link}>
                  {link.label}
                </Menu.Item>
              ))}
              <Menu.Divider />
              <Menu.Item>
                <BuyButton />
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
