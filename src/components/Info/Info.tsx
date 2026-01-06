import { useEffect, useState } from 'react';
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  List,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import gandiMobileImg from '@/assets/gandi_mobile.jpg';
import gandiImg from '@/assets/gandi.jpg';
import marekMobileImg from '@/assets/marek_mobile.jpg';
import marekImg from '@/assets/marek.jpg';
import szarpMobileImg from '@/assets/szarp_mobile.jpg';
import szarpImg from '@/assets/szarp.jpg';
import classes from './Info.module.css';

const interactiveSections = [
  {
    title: 'Larp - Za Garść Mithrilu',
    image: szarpImg,
    imageMobile: szarpMobileImg,
    items: [
      'Trzydniowy LARP terenowy 30.07 - 1.08.2026',
      'Setting: Śródziemie J.R.R. Tolkiena',
      'LARP fabularny (z opcjonalną bitką)',
      'Przystępny dla nowych graczy',
    ],
  },
  {
    title: 'Larpy i inne atrakcje',
    image: marekImg,
    imageMobile: marekMobileImg,
    items: ['LARPY terenowe i chambery', 'Prelekcje i warsztaty', 'Turniej juggera'],
  },
  {
    title: 'Chillera w lesie',
    image: gandiImg,
    imageMobile: gandiMobileImg,
    items: [
      'Codzienne wieczorne ogniska pełne muzyki i dobrej zabawy',
      'Planszówki, sejse RPG, pogaduchy o najnowszych wydaniach Silmarillionu (i nie tylko!)',
      'Odpoczynek z dala od cywilizacji',
    ],
  },
];

export function Info() {
  const [activeSection, setActiveSection] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % interactiveSections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
  };

  return (
    <Box component="section" py={{ base: 'xl', md: 80 }} mt={{ base: 'lg', md: 40 }}>
      <Container size="xl">
        <Grid gutter="lg">
          {/* Co, gdzie i kiedy */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card className={classes.infoCard}>
              <Title order={2} className={classes.cardTitle}>
                Co, gdzie i kiedy
              </Title>
              <Anchor
                size="lg"
                fw={600}
                href="https://maps.app.goo.gl/hLHNpfuDEJDQAXvu7"
                target="_blank"
                rel="noreferrer"
                mb="sm"
                td="underline"
              >
                Czatachowa
              </Anchor>
              <Text size="lg" fw={500} c="forestGreen.9" mb="sm" mt="sm'">
                25.07 - 02.08.2026
              </Text>

              <Text size="lg" c="etherealBlue.9">
                Teren Fornostu (pole namiotowe) znajduje się na samym końcu jednej z dwóch dróg w
                miejscowości.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card className={classes.infoCard}>
              <Title order={2} className={classes.cardTitle}>
                Bilety
              </Title>
              <Flex justify="space-between" direction="column" gap="md" h="100%">
                <Text size="lg" mb="sm" c="etherealBlue.9">
                  bilet normalny - 450zł (I tura przedsprzedaży)
                </Text>
                ś
                <Button
                  size="lg"
                  color="forestGreen.8"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc1h-1yqZb2TOyma3NW8rXXfPE41o2EyPTT5mZ4xsKcKKMtNQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                  component="a"
                >
                  Kup bilet
                </Button>
              </Flex>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card className={classes.infoCard}>
              <Title order={2} className={classes.cardTitle}>
                Program
              </Title>
              <Flex justify="space-between" direction="column" gap="md" h="100%">
                <Text size="lg" mb="sm" c="etherealBlue.9">
                  Ogłoszenia programu w pierwszych miesiącach 2026 roku!
                </Text>
                <Button
                  size="lg"
                  color="forestGreen.8"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScmwMNDNLM030eFltJXix-dTNooU5f0IoRgMbMT-_PACKFK-g/viewform"
                  target="_blank"
                  rel="noreferrer"
                  component="a"
                >
                  Zgłoś punkt programu
                </Button>
              </Flex>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card className={classes.infoCard}>
              <Title order={2} className={classes.cardTitle}>
                Jedzenie
              </Title>
              <Text size="lg" c="etherealBlue.9">
                Catering od{' '}
                <Anchor
                  href="https://www.przystanlesniow.pl/resturacja/restauracja"
                  target="_blank"
                  rel="noreferrer"
                >
                  Przystani Leśniów
                </Anchor>
                , oferujący śniadania, dania z grilla i (zamawiane dzień wcześniej) zestawy
                obiadowe.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card className={classes.infoCard}>
              <Title order={2} className={classes.cardTitle}>
                Nocleg
              </Title>
              <Text size="lg" c="etherealBlue.9">
                Na polu namiotowym, w cenie biletu. Do dyspozycji uczestników są przenośne toalety i
                prysznice oraz punkty z prądem. Niektórzy uczestnicy korzystają z noclegów w
                pobliskich agroturystykach.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card className={classes.infoCard}>
              <Title order={2} className={classes.cardTitle}>
                Dojazd
              </Title>
              <Text size="lg" c="etherealBlue.9">
                Najbliższą miejscowością, do której dojeżdża pociąg oraz autobusy dalekobieżne jest
                Myszków.
              </Text>
              <Text size="lg" mt="sm" c="etherealBlue.9">
                Z Myszkowa można dojechać busami do Żarek, skąd na miejsce imprezy jest około 6
                kilometrów.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Przycisk dowiedz się więcej */}
        <Group justify="center" my="xl" py="xl">
          <Button size="lg" variant="white" color="forestGreen" className={classes.learnMoreButton}>
            Dowiedz się więcej
          </Button>
        </Group>

        {/* Sekcja interaktywna z obrazkami i kafelkami */}
        <Grid gutter="lg" mt="xxl">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                height: isMobile ? '300px' : '100%',
              }}
            >
              {interactiveSections.map((section, index) => (
                <Image
                  key={index}
                  src={isMobile ? section.imageMobile : section.image}
                  alt={section.title}
                  radius="md"
                  h="100%"
                  fit="cover"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: activeSection === index ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                  }}
                />
              ))}
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box>
              {interactiveSections.map((section, index) => (
                <Card
                  key={index}
                  className={classes.infoCard}
                  mb="md"
                  onClick={() => handleSectionClick(index)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor:
                      activeSection === index
                        ? 'rgba(114, 150, 131, 0.9)'
                        : 'rgba(220, 225, 230, 0.85)',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <Title
                    order={2}
                    className={classes.cardTitle}
                    style={{
                      color:
                        activeSection === index
                          ? 'var(--mantine-color-silverWhite-0)'
                          : 'var(--mantine-color-etherealBlue-8)',
                      borderBottomColor:
                        activeSection === index
                          ? 'var(--mantine-color-silverWhite-2)'
                          : 'var(--mantine-color-etherealBlue-4)',
                      transition: 'all 0.3s ease-in-out',
                      fontSize: isMobile ? '1.1rem' : '1.5rem',
                    }}
                  >
                    {section.title}
                  </Title>
                  <List
                    spacing="xs"
                    size={isMobile ? 'sm' : 'lg'}
                    c={activeSection === index ? 'silverWhite.0' : 'etherealBlue.9'}
                  >
                    {section.items.map((item, itemIndex) => (
                      <List.Item key={itemIndex}>{item}</List.Item>
                    ))}
                  </List>
                </Card>
              ))}
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
