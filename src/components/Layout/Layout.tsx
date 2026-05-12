import { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Footer } from '../Footer';
import { MerchModal } from '../MerchModal';
import { Navbar } from '../Navbar';
import classes from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [merchOpened, { open: openMerch, close: closeMerch }] = useDisclosure(true);

  return (
    <AppShell padding={0}>
      <AppShell.Header className={`${classes.header}`}>
        <Navbar onOpenMerch={openMerch} />
      </AppShell.Header>
      <AppShell.Main
        className={classes.main}
        style={{ scrollBehavior: 'smooth', marginTop: '-20px' }}
      >
        {children}
        <Footer />
      </AppShell.Main>
      <MerchModal opened={merchOpened} onClose={closeMerch} />
    </AppShell>
  );
}
