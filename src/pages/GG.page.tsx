import {
  IconCalendar,
  IconCoin,
  IconExternalLink,
  IconFileDescription,
  IconMapPin,
  IconMountain,
  IconScript,
  IconSword,
  IconTent,
  IconTicket,
  IconToolsKitchen2,
  IconUsers,
} from '@tabler/icons-react';
import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import ggBackground from '@/assets/gg-tlo.jpg';
import classes from '@/components/Info/Info.module.css';
import { UBOJNIA_URL } from '@/edition_constants';

const quickInfoItems = [
  {
    icon: IconCalendar,
    label: 'Data',
    value: '30.07 - 1.08.2026',
    color: 'forestGreen',
  },
  {
    icon: IconMapPin,
    label: 'Miejsce',
    value: 'Czatachowa, w ramach konwentu Fornost',
    color: 'etherealBlue',
  },
  {
    icon: IconCoin,
    label: 'Składka',
    value: '450 zł',
    color: 'earthBrown',
  },
  {
    icon: IconUsers,
    label: 'Liczba graczy',
    value: '80-90',
    color: 'forestGreen',
  },
  {
    icon: IconToolsKitchen2,
    label: 'Wyżywienie',
    value: (
      <>
        W cenie, karczma in-game prowadzona przez{' '}
        <Anchor
          href={UBOJNIA_URL}
          target="_blank"
          rel="noopener noreferrer"
          c="etherealBlue.9"
          fw={600}
        >
          Ubojnię - Kuchnię Chaosu
        </Anchor>
      </>
    ),
    color: 'etherealBlue',
  },
  {
    icon: IconTent,
    label: 'Nocleg',
    value:
      'Własny namiot na polu namiotowym (off-game) lub okoliczna agroturystyka we własnym zakresie',
    color: 'earthBrown',
  },
];

const linksData = [
  {
    icon: IconTicket,
    label: 'Bilety na LARPa',
    href: 'https://forms.gle/QCCEwRkM7nwZQtcm8',
    color: 'forestGreen',
    available: true,
  },
  {
    icon: IconFileDescription,
    label: 'Design Doc',
    href: 'https://drive.google.com/file/d/1QU64QlryYZ02fDxLP22/view',
    color: 'etherealBlue',
    available: true,
  },
  {
    icon: IconScript,
    label: 'Mechanika gry',
    description: 'początek 2026',
    color: 'mistyGray',
    available: false,
  },
  {
    icon: IconUsers,
    label: 'Formularz zgłoszeniowy i wakaty',
    description: 'wiosna 2026',
    color: 'mistyGray',
    available: false,
  },
];

export function GGPage() {
  return (
    <Stack gap={0}>
      {/* Hero Section */}
      <Box
        component="section"
        py={{ base: 60, md: 100 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${ggBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid rgba(148, 180, 209, 0.2)',
        }}
      >
        <Container size="lg">
          <Stack align="center" gap="lg">
            <Badge
              size="lg"
              variant="filled"
              color="rgba(0, 0, 0, 0.5)"
              radius="md"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Gra Główna 2026
            </Badge>
            <Title
              order={3}
              ta="center"
              c="etherealBlue.0"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)',
              }}
            >
              Miasto, którego nie było
            </Title>
            <Title
              order={3}
              ta="center"
              c="etherealBlue.0"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)',
              }}
            >
              Akt I: Za Garść Mithrilu
            </Title>
            <Text
              size="xl"
              c="etherealBlue.1"
              ta="center"
              maw={600}
              fw={500}
              style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              Trylogia osadzona w świecie Władcy Pierścieni
            </Text>

            <Text
              size="lg"
              c="etherealBlue.1"
              ta="center"
              maw={700}
              lh={1.8}
              mt="md"
              style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              Serdecznie zapraszamy do wzięcia udziału w kolejnej odsłonie Gry Głównej w ramach
              konwentu Fornost — w trylogii (a przynajmniej wstępnie planujemy 3 odcinki) osadzonej
              w świecie Władcy Pierścieni o tytule{' '}
              <Text span fw={700}>
                „Miasto, którego nie było"
              </Text>
              .
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box component="section" py={{ base: 'xl', md: 80 }}>
        <Container size="xl">
          <Stack gap="xl">
            {/* Fabuła */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="etherealBlue" size="xl" radius="md">
                  <IconMountain size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Fabuła pierwszego odcinka
                </Title>
              </Group>
              <Title order={4} c="etherealBlue.8" mb="lg">
                „Za Garść Mithrilu"
              </Title>

              <Stack gap="md">
                <Text size="lg" c="etherealBlue.9" lh={1.8}>
                  Fabuła pierwszego odcinka przeniesie nas o 100 lat od wydarzeń „Przeprawy Królów".
                  Dla uczczenia 100 lat pokoju, możnowładcy tego świata zdecydowali się zaniechać
                  jakichkolwiek roszczeń terytorialnych do ziem leżących na terenie zajmowanym
                  niegdyś przez Nieprzyjaciela —{' '}
                  <Text span fw={600} fs="italic">
                    Nurn
                  </Text>
                  .
                </Text>

                <Text size="lg" c="etherealBlue.9" lh={1.8}>
                  Owa kraina stanowiła kiedyś zaplecze i spichlerz dla nieprzebranych armii Saurona.
                  <Text span fw={600}>
                    {' '}
                    Czas odzyskać te ziemie w imię wolnych ludów Śródziemia!
                  </Text>
                </Text>

                <Paper
                  p="lg"
                  radius="md"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(47, 82, 66, 0.1) 0%, rgba(45, 77, 102, 0.05) 100%)',
                    border: '1px solid rgba(47, 82, 66, 0.2)',
                  }}
                >
                  <Text size="lg" c="etherealBlue.9" lh={1.8} fs="italic">
                    Każdy, kto podejmie się ryzyka, jakie stanowi wyprawa na te dzikie rejony oraz
                    odnajdzie w sobie dość odwagi i pracowitości, by podjąć się ujarzmienia tej
                    krainy, liczyć może na{' '}
                    <Text span fw={600} c="forestGreen.8">
                      pełną amnestię
                    </Text>
                    , o ile przyłoży się do szczytnego zadania, jakie nałożono na osadników —
                    założenia pierwszego Wolnego Miasta. Teren ten wyłączony został spod jurysdykcji
                    trzech wielkich królestw, gdzie to osadnicy i wolni obywatele będą samostanowić.
                  </Text>
                </Paper>
              </Stack>
            </Card>

            {/* Klimat */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="forestGreen" size="xl" radius="md">
                  <IconSword size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Klimat gry
                </Title>
              </Group>

              <Stack gap="md">
                <Text size="lg" c="etherealBlue.9" lh={1.8}>
                  Najprostszym słowem określającym klimat LARPa jest{' '}
                  <Text span fw={700} c="earthBrown.7">
                    „western"
                  </Text>
                  , lecz to słowo nie oddaje pełni tego, co chcemy Wam zaoferować.
                </Text>

                <Paper
                  p="md"
                  radius="md"
                  style={{
                    background: 'rgba(148, 180, 209, 0.1)',
                    border: '1px solid rgba(148, 180, 209, 0.2)',
                  }}
                >
                  <Text size="md" c="etherealBlue.8" lh={1.7}>
                    Dla tych, którzy obawiają się, że słowo western gryzie się ze Śródziemiem,
                    spieszymy z wyjaśnieniem, że{' '}
                    <Text span fw={600}>
                      nie odchodzimy od ducha opowieści napisanych przez Profesora
                    </Text>{' '}
                    i zapewniamy Was, że fabuła wierna będzie jego twórczości.
                  </Text>
                </Paper>

                <Text size="lg" c="etherealBlue.9" lh={1.8}>
                  W tej grze będziecie mieli okazję doświadczyć problemów ludzi, którzy jako{' '}
                  <Text span fw={600}>
                    pionierzy
                  </Text>{' '}
                  rozpoczynają długą i żmudną pracę, która doprowadzić ma do postawienia pierwszego
                  w pełni wolnego miasta.
                </Text>
              </Stack>
            </Card>

            {/* Informacje w pigułce */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="lg" align="flex-start">
                <ThemeIcon variant="light" color="earthBrown" size="xl" radius="md">
                  <IconFileDescription size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Informacje w pigułce
                </Title>
              </Group>

              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
                {quickInfoItems.map((item) => (
                  <Paper
                    key={item.label}
                    p="md"
                    radius="md"
                    style={{
                      background: 'rgba(248, 249, 250, 0.6)',
                      border: '1px solid rgba(148, 180, 209, 0.15)',
                    }}
                  >
                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color={item.color} size="lg" radius="md" mt={2}>
                        <item.icon size={20} />
                      </ThemeIcon>
                      <Stack gap={4}>
                        <Text
                          size="sm"
                          fw={600}
                          c={`${item.color}.7`}
                          tt="uppercase"
                          style={{ letterSpacing: 0.5 }}
                        >
                          {item.label}
                        </Text>
                        <Text size="md" c="etherealBlue.9" lh={1.5}>
                          {item.value}
                        </Text>
                      </Stack>
                    </Group>
                  </Paper>
                ))}
              </SimpleGrid>
            </Card>

            {/* Linki i formularze */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                {linksData.map((link) => (
                  <Paper
                    key={link.label}
                    p="lg"
                    radius="md"
                    style={{
                      background: link.available
                        ? 'linear-gradient(135deg, rgba(47, 82, 66, 0.08) 0%, rgba(45, 77, 102, 0.05) 100%)'
                        : 'rgba(248, 249, 250, 0.6)',
                      border: `1px solid ${link.available ? 'rgba(47, 82, 66, 0.2)' : 'rgba(148, 180, 209, 0.25)'}`,
                      opacity: 1,
                    }}
                  >
                    <Group justify="space-between" align="flex-start">
                      <Group gap="md" align="flex-start">
                        <ThemeIcon
                          variant={link.available ? 'light' : 'light'}
                          color={link.color}
                          size="xl"
                          radius="md"
                        >
                          <link.icon size={24} />
                        </ThemeIcon>
                        <Stack gap={6}>
                          <Text size="lg" fw={600} c={link.available ? 'etherealBlue.9' : 'gray.8'}>
                            {link.label}
                          </Text>
                          {!link.available && link.description && (
                            <Badge
                              size="md"
                              variant="filled"
                              color="gray.7"
                              radius="sm"
                              fw={500}
                              c="white"
                            >
                              {link.description}
                            </Badge>
                          )}
                        </Stack>
                      </Group>
                      {link.available && link.href && (
                        <Button
                          component="a"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          variant="light"
                          color={link.color}
                          size="md"
                          radius="md"
                          rightSection={<IconExternalLink size={16} />}
                          fw={600}
                        >
                          Otwórz
                        </Button>
                      )}
                    </Group>
                  </Paper>
                ))}
              </SimpleGrid>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
