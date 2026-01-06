import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Notification,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

export function ThemeShowcase() {
  return (
    <Box py={{ base: 'xl', md: 60 }} mt={{ base: 'lg', md: 40 }}>
      <Container size="xl">
        <Stack gap="xl">
          {/* Hero Section */}
          <Paper
            p="xl"
            radius="lg"
            style={{
              background:
                'linear-gradient(135deg, rgba(148, 180, 209, 0.15) 0%, rgba(114, 150, 131, 0.15) 100%)',
              border: '1px solid rgba(148, 180, 209, 0.2)',
            }}
          >
            <Stack gap="md" align="center">
              <Title order={1} ta="center" c="etherealBlue.7">
                Witaj w Śródziemiu
              </Title>
              <Text size="lg" c="mistyGray.7" ta="center" maw={600}>
                Odkryj magię nowoczesnego designu inspirowanego legendami Władcy Pierścieni. Gdzie
                funkcjonalność spotyka się z fantastyką.
              </Text>
              <Group>
                <Badge size="lg" variant="light" color="etherealBlue">
                  Mglista Elegancja
                </Badge>
                <Badge size="lg" variant="light" color="forestGreen">
                  Leśna Magia
                </Badge>
                <Badge size="lg" variant="light" color="earthBrown">
                  Naturalna Harmonia
                </Badge>
              </Group>
            </Stack>
          </Paper>

          {/* Color Palette */}
          <Stack gap="md">
            <Title order={2} c="etherealBlue.6">
              Paleta Kolorów
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
              <Card shadow="md" padding="lg" radius="md">
                <Stack gap="sm">
                  <Title order={4} c="etherealBlue.6">
                    Eteryczna Błękit
                  </Title>
                  <Text size="sm" c="dimmed">
                    Inspirowana szatami elfów i mglistymi widokami Rivendell
                  </Text>
                  <Group gap="xs">
                    {[0, 2, 4, 6, 8].map((shade) => (
                      <div
                        key={shade}
                        style={{
                          width: rem(40),
                          height: rem(40),
                          backgroundColor: `var(--mantine-color-etherealBlue-${shade})`,
                          borderRadius: '8px',
                          border: '1px solid rgba(0,0,0,0.1)',
                        }}
                      />
                    ))}
                  </Group>
                </Stack>
              </Card>

              <Card shadow="md" padding="lg" radius="md">
                <Stack gap="sm">
                  <Title order={4} c="forestGreen.6">
                    Leśna Zieleń
                  </Title>
                  <Text size="sm" c="dimmed">
                    Odcienie pradawnych lasów i tajemniczych dolin
                  </Text>
                  <Group gap="xs">
                    {[0, 2, 4, 6, 8].map((shade) => (
                      <div
                        key={shade}
                        style={{
                          width: rem(40),
                          height: rem(40),
                          backgroundColor: `var(--mantine-color-forestGreen-${shade})`,
                          borderRadius: '8px',
                          border: '1px solid rgba(0,0,0,0.1)',
                        }}
                      />
                    ))}
                  </Group>
                </Stack>
              </Card>

              <Card shadow="md" padding="lg" radius="md">
                <Stack gap="sm">
                  <Title order={4} c="earthBrown.6">
                    Ziemisty Brąz
                  </Title>
                  <Text size="sm" c="dimmed">
                    Naturalność ścieżek i ciepło drewnianych chat
                  </Text>
                  <Group gap="xs">
                    {[0, 2, 4, 6, 8].map((shade) => (
                      <div
                        key={shade}
                        style={{
                          width: rem(40),
                          height: rem(40),
                          backgroundColor: `var(--mantine-color-earthBrown-${shade})`,
                          borderRadius: '8px',
                          border: '1px solid rgba(0,0,0,0.1)',
                        }}
                      />
                    ))}
                  </Group>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>

          {/* Interactive Components */}
          <Stack gap="md">
            <Title order={2} c="etherealBlue.6">
              Komponenty Interaktywne
            </Title>

            <Card shadow="md" padding="lg" radius="md">
              <Stack gap="md">
                <Title order={4}>Przyciski</Title>
                <Group>
                  <Button color="etherealBlue">Główny Przycisk</Button>
                  <Button color="forestGreen" variant="light">
                    Wariant Light
                  </Button>
                  <Button color="earthBrown" variant="outline">
                    Wariant Outline
                  </Button>
                  <Button color="mistyGray" variant="subtle">
                    Wariant Subtle
                  </Button>
                </Group>
              </Stack>
            </Card>

            <Card shadow="md" padding="lg" radius="md">
              <Stack gap="md">
                <Title order={4}>Formularze</Title>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput
                    label="Imię podróżnika"
                    placeholder="Aragorn..."
                    description="Podaj swoje imię"
                  />
                  <TextInput
                    label="Miejsce pochodzenia"
                    placeholder="Gondor..."
                    description="Skąd pochodzisz?"
                  />
                </SimpleGrid>
                <Textarea
                  label="Twoja historia"
                  placeholder="Opowiedz nam o swojej przygodzie..."
                  minRows={3}
                  description="Podziel się swoją legendą"
                />
              </Stack>
            </Card>
          </Stack>

          {/* Notifications */}
          <Stack gap="md">
            <Title order={2} c="etherealBlue.6">
              Powiadomienia
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <Notification
                color="etherealBlue"
                title="Wiadomość z Rivendell"
                withCloseButton={false}
              >
                Rada została zwołana. Twoja obecność jest wymagana.
              </Notification>
              <Notification color="forestGreen" title="Wieści z lasu" withCloseButton={false}>
                Enty się przebudziły. Las znów żyje.
              </Notification>
            </SimpleGrid>
          </Stack>

          {/* Feature Cards */}
          <Stack gap="md">
            <Title order={2} c="etherealBlue.6">
              Cechy Motywu
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
              <Card shadow="md" padding="lg" radius="md">
                <Stack gap="sm">
                  <Text fw={600} size="lg" c="etherealBlue.6">
                    🌫️ Efekty Mgły
                  </Text>
                  <Text size="sm" c="dimmed">
                    Delikatne rozmycia i transparencje tworzą magiczną atmosferę
                  </Text>
                </Stack>
              </Card>

              <Card shadow="md" padding="lg" radius="md">
                <Stack gap="sm">
                  <Text fw={600} size="lg" c="forestGreen.6">
                    🍃 Organiczne Kształty
                  </Text>
                  <Text size="sm" c="dimmed">
                    Zaokrąglone rogi i naturalne przejścia między elementami
                  </Text>
                </Stack>
              </Card>

              <Card shadow="md" padding="lg" radius="md">
                <Stack gap="sm">
                  <Text fw={600} size="lg" c="earthBrown.6">
                    ✨ Płynne Animacje
                  </Text>
                  <Text size="sm" c="dimmed">
                    Subtelne transformacje dodają życia interfejsowi
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>

          {/* Footer */}
          <Paper
            p="md"
            radius="md"
            ta="center"
            style={{
              backgroundColor: 'rgba(148, 180, 209, 0.08)',
            }}
          >
            <Text size="sm" c="dimmed">
              Stworzony z pasją • Inspirowany legendą • Gotowy do przygody
            </Text>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
