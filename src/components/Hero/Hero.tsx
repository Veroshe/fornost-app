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
              warsztaty, konkursy i 2-dniowy LARP w świecie J.R.R. Tolkiena.
            </Text>

            <Group className={classes.controls}>
              <BuyButton />
            </Group>
          </Stack>
          <Countdown />
        </Container>
      </div>
    </>
  );
}
