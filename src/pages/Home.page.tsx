import { Stack } from '@mantine/core';
import { Hero } from '../components/Hero';
import { Info } from '../components/Info';
import { Socials } from '../components/Socials';
import { AboutPage } from './About.page';

export function HomePage() {
  return (
    <Stack gap={0}>
      <Hero />
      <AboutPage />
      <Socials />
      {/* <ThemeShowcase /> */}
    </Stack>
  );
}
