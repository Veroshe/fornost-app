import { Button, Container, Group, Stack, Text } from '@mantine/core';
import bannerImage from '../../assets/banner-poziomy-2026.jpg';
import napisImage from '../../assets/napis.png';
import { BuyButton } from '../common/BuyButton';
import classes from './Hero.module.css';

export function Hero() {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('gdzie-i-kiedy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <Container size="xl" className={classes.container} w="100%">
        <Stack gap="lg" className={classes.content} align="left" w="100%">
          <div className={classes.titleWrapper}>
            <img src={napisImage} alt="Fornost - Konwent Larpowy" className={classes.logoImage} />
          </div>

          <Text className={classes.tagline} size="lg">
            Tygodniowy konwent fantasy w Czatachowej (Jura Krakowsko-Chęstochowska). Larpy,
            warsztaty, konkursy i 2-dniowy LARP w świecie J.R.R. Tolkiena.
          </Text>

          <Group className={classes.controls}>
            <BuyButton />
            <Button
              size="xl"
              variant="outline"
              color="white"
              radius="md"
              component="a"
              href="#gdzie-i-kiedy"
              onClick={handleLearnMoreClick}
            >
              Dowiedz się więcej
            </Button>
          </Group>
        </Stack>
      </Container>
    </div>
  );
}
