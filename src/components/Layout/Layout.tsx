import { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import classes from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <AppShell padding={0}>
      <AppShell.Header className={`${classes.header}`}>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main
        className={classes.main}
        style={{ scrollBehavior: 'smooth', marginTop: '-20px' }}
      >
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
