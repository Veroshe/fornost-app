import { useState } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';
import { Box, Burger, Container, Group, Menu } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import logoImage from '../../assets/logo-white.png';
import { BuyButton } from '../common/BuyButton';
import classes from './Navbar.module.css';

interface NavLink {
  link: string;
  label: string;
  special?: boolean;
}

interface NavGroup {
  label: string;
  links: NavLink[];
}

type NavItem = NavLink | NavGroup;

const isGroup = (item: NavItem): item is NavGroup => 'links' in item;

const navItems: NavItem[] = [
  { link: '/place', label: 'Na miejscu' },
  { link: '/program', label: 'Program' },
  { link: '/gallery', label: 'Galeria' },
  {
    label: 'O nas',
    links: [
      { link: '/organization', label: 'Organizacja' },
      { link: '/regulamin', label: 'Regulamin' },
    ],
  },
  { link: '/quiz', label: 'Quiz' },
  { link: '/larp', label: 'LARP "Za Garść Mithrillu"', special: true },
];

export function Navbar() {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] = useDisclosure(false);
  const [aboutOpened, setAboutOpened] = useState(false);
  const [scroll] = useWindowScroll();
  const isScrolled = scroll.y > 50;

  const matchOrganization = useMatch('/organization');
  const matchRegulamin = useMatch('/regulamin');
  const isAboutActive = matchOrganization !== null || matchRegulamin !== null;

  const desktopItems = navItems.map((item) => {
    if (isGroup(item)) {
      return (
        <Menu
          key={item.label}
          shadow="md"
          width={180}
          opened={aboutOpened}
          onChange={setAboutOpened}
          trigger="hover"
          openDelay={50}
          closeDelay={150}
          transitionProps={{ transition: 'fade-down', duration: 180, timingFunction: 'ease-out' }}
        >
          <Menu.Target>
            <span
              className={`${classes.link} ${isAboutActive ? classes.linkActive : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </span>
          </Menu.Target>
          <Menu.Dropdown>
            {item.links.map((subLink) => (
              <Menu.Item key={subLink.label} component={Link} to={subLink.link}>
                {subLink.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <NavLink
        key={item.label}
        to={item.link}
        className={({ isActive }) =>
          [
            classes.link,
            item.special ? classes.specialLink : '',
            isActive ? classes.linkActive : '',
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        {item.label}
      </NavLink>
    );
  });

  return (
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
        {desktopItems}
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

        <Menu shadow="md" width={200} opened={mobileOpened} onChange={toggleMobile}>
          <Menu.Target>
            <Burger opened={mobileOpened} onClick={toggleMobile} size="sm" color="white" />
          </Menu.Target>

          <Menu.Dropdown>
            {navItems.map((item) => {
              if (isGroup(item)) {
                return [
                  <Menu.Label key={`${item.label}-label`}>{item.label}</Menu.Label>,
                  ...item.links.map((subLink) => (
                    <Menu.Item
                      key={subLink.label}
                      component={Link}
                      to={subLink.link}
                      onClick={closeMobile}
                      pl="lg"
                    >
                      {subLink.label}
                    </Menu.Item>
                  )),
                ];
              }
              return (
                <Menu.Item key={item.label} component={Link} to={item.link} onClick={closeMobile}>
                  {item.label}
                </Menu.Item>
              );
            })}
            <Menu.Divider />

            <Menu.Item>
              <BuyButton />
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Container>
  );
}
