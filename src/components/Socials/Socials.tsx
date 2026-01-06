import { IconBrandDiscord, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import { Box, Card, Container, Grid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Socials.module.css';

const socialItems = [
  {
    icon: IconBrandFacebook,
    title: 'Facebook',
    description: 'Śledź wydarzenie na Facebooku, gdzie publikujemy najważniejsze informacje.',
    link: 'https://www.facebook.com/fornostlarp',
  },
  {
    icon: IconBrandDiscord,
    title: 'Discord',
    description:
      'Dołącz do naszego serwera na Discordzie - bądź na bieżąco z informacjami na temat obecnej i przyszłych edycji konwentu, a przy okazji zintegruj się z naszą społecznością.',
    link: 'https://discord.gg/uBxvT9rMGM',
  },
  {
    icon: IconBrandInstagram,
    title: 'Instagram',
    description: 'Na Instagramie znajdziesz między innymi zdjęcia z poprzednich edycji konwentu.',
    link: 'https://www.instagram.com/fornostlarp',
  },
];

export function Socials() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box component="section" py={{ base: 'sm', md: 80 }}>
      <Container size="xl">
        <Grid gutter="lg">
          {socialItems.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card
                className={classes.socialCard}
                component="a"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.iconWrapper}>
                  <item.icon size={isMobile ? 40 : 48} stroke={1.5} />
                </div>
                <Title order={1} className={classes.cardTitle} ta="center" mt="md">
                  {item.title}
                </Title>
                <Text size={isMobile ? 'sm' : 'lg'} c="etherealBlue.9" ta="center" mt="sm">
                  {item.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
