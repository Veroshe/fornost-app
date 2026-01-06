import { IconChecklist, IconClipboardList, IconInfoCircle } from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Card,
  Container,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import bannerImage from '@/assets/banner-poziomy-2026.jpg';
import classes from '@/components/Info/Info.module.css';

export function PlacePage() {
  return (
    <Stack gap={0}>
      {/* Hero Section */}
      <Box
        component="section"
        py={{ base: 40, md: 40 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid rgba(148, 180, 209, 0.2)',
        }}
      >
        <Container size="lg">
          <Stack align="center" gap="md">
            <Title
              order={1}
              ta="center"
              c="white"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)',
              }}
            >
              Na konwencie
            </Title>
          </Stack>
        </Container>
      </Box>

      <Box component="section" py={{ base: 'xl', md: 80 }}>
        <Container size="xl">
          <Stack gap="xl">
            {/* Co zabrać */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="earthBrown" size="xl" radius="md">
                  <IconChecklist size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Co zabrać?
                </Title>
              </Group>
              <Text size="lg" c="etherealBlue.9" lh={1.8} mb="md">
                Zobacz przygotowaną przez nas{' '}
                <Anchor
                  href="#"
                  c="forestGreen.7"
                  fw={600}
                  td="underline"
                  style={{ textUnderlineOffset: '2px' }}
                >
                  listę
                </Anchor>
                , dzięki której o niczym nie zapomnisz. Plik możesz skopiować na swój dysk i np.
                wydrukować.
              </Text>
            </Card>

            {/* Pierwszy raz */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="earthBrown" size="xl" radius="md">
                  <IconInfoCircle size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Pierwszy raz?
                </Title>
              </Group>
              <Text size="lg" c="etherealBlue.9" lh={1.8}>
                Po dotarciu na miejscu konwentu znajdź osobę z ekipy Organizacji, poznasz ich po{' '}
                <Text span fw={700} c="red.7">
                  czerwonej bandanie
                </Text>
                . Każdy członek zespołu organizacyjnego z chęcią odpowie na wszelkie pytania i
                pomoże Ci odnaleźć się na konwencie.
              </Text>
            </Card>

            {/* Akredytacja */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="earthBrown" size="xl" radius="md">
                  <IconClipboardList size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Akredytacja
                </Title>
              </Group>
              <Stack gap="md">
                <Text size="lg" c="etherealBlue.9" lh={1.8}>
                  Akredytacja będzie prowadzona w białym namiocie na głównym polu w godzinach:
                </Text>
                <List
                  spacing="sm"
                  size="lg"
                  c="etherealBlue.9"
                  icon={
                    <ThemeIcon color="forestGreen.4" size={24} radius="xl">
                      <Text size="sm" fw={700}>
                        -
                      </Text>
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text span fw={600}>
                      15-16
                    </Text>{' '}
                    każdego dnia
                  </List.Item>
                  <List.Item>
                    <Text span fw={600}>
                      19-20
                    </Text>{' '}
                    w sobotę, niedzielę i środę
                  </List.Item>
                </List>
                <Text size="lg" c="etherealBlue.9" lh={1.8}>
                  Przy akredytacji możecie również kupić i/lub odebrać gadżety konwentowe.
                </Text>
                <Text size="lg" c="etherealBlue.9" lh={1.8} fw={700}>
                  Akredytacja jest obowiązkowa dla każdego uczestnika.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
