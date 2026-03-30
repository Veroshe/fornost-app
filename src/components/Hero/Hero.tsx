import { Button, Container, Group, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import bannerImageMobile from '../../assets/banner-pionowy-2026.jpg';
import bannerImageDesktop from '../../assets/banner-poziomy-2026.jpg';
import napisImage from '../../assets/napis.png';
import { BuyButton } from '../common/BuyButton';
import { Countdown } from '../Countdown';
import classes from './Hero.module.css';

export function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('gdzie-i-kiedy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div
        className={classes.hero}
        style={{
          backgroundImage: `url(${isMobile ? bannerImageMobile : bannerImageDesktop})`,
        }}
      >
        <Container size="xl" className={classes.container} w="100%">
          <Stack gap="lg" className={classes.content} align="left" w="100%">
            <div className={classes.titleWrapper}>
              <img src={napisImage} alt="Fornost - Konwent Larpowy" className={classes.logoImage} />
            </div>

            <Text className={classes.tagline}>
              Tygodniowy konwent fantasy w Czatachowej (Jura Krakowsko-Chęstochowska). Larpy,
              warsztaty, konkursy i 3-dniowy LARP w świecie J.R.R. Tolkiena.
            </Text>

            <Group className={classes.controls}>
              <BuyButton />
              <Button
                size="lg"
                color="etherealBlue"
                radius="md"
                component="a"
                href="/#/program"
                style={{
                  minWidth: 'clamp(160px, 40vw, 200px)',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  padding: 'clamp(0.625rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.375rem)',
                }}
              >
                Program konwentu
              </Button>
            </Group>
          </Stack>
          <Countdown />
        </Container>
      </div>
    </>
  );
}
