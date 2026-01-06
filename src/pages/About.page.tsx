import {
  IconBus,
  IconCalendar,
  IconClipboardList,
  IconCrown,
  IconFirstAidKit,
  IconFlame,
  IconMapPin,
  IconSword,
  IconTent,
  IconTicket,
  IconToolsKitchen2,
  IconTree,
  IconUsers,
  IconUserShield,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import pijacysmok from '@/assets/piknik/pijacy-smok.jpg';
import image3 from '@/assets/piknik/TYR5192.jpg';
import image6 from '@/assets/piknik/TYR5279.jpg';
import image4 from '@/assets/piknik/TYR5459.jpg';
import przepr1 from '@/assets/przepr/przepr1.jpg';
import przepr3 from '@/assets/przepr/przepr3.jpg';
import przepr4 from '@/assets/przepr/przepr4.jpg';
import { BuyButton } from '@/components/common/BuyButton';
import classes from '@/components/Info/Info.module.css';
import { PROGRAM_SUBMISSION_URL, UBOJNIA_URL } from '@/edition_constants';

export function AboutPage() {
  return (
    <Stack gap={0}>
      <Box component="section" py={{ base: 'xl', md: 80 }}>
        <Container size="xl">
          <Stack gap="xl">
            {/* Gdzie i kiedy */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }} id="gdzie-i-kiedy">
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="etherealBlue" size="xl" radius="md">
                  <IconMapPin size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Gdzie i kiedy
                </Title>
              </Group>

              <Grid gutter="xl" align="flex-start" mb="xl">
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Text size="lg" c="etherealBlue.9" lh={1.7} mb="lg">
                    Fornost to tygodniowy, terenowy konwent dla miłośników fantasy. Odbywa się w
                    miejscowości Czatachowa położnej na Jurze Krakowsko-Częstochowskiej. Program
                    imprezy pełny jest larpów, warsztatów i konkursów. Główną atrakcję stanowi
                    2-dniowy LARP osadzony w świecie J.R.R. Tolkiena.
                  </Text>

                  <Stack gap="sm">
                    <Group gap="sm" align="center" wrap="nowrap">
                      <ThemeIcon
                        variant="light"
                        color="earthBrown"
                        size="md"
                        radius="md"
                        style={{ flexShrink: 0 }}
                      >
                        <IconCalendar size={16} />
                      </ThemeIcon>
                      <Text size="lg" fw={600} c="forestGreen.9" style={{ lineHeight: 1.2 }}>
                        25.07 - 02.08.2026
                      </Text>
                    </Group>

                    <Group gap="sm" align="center" wrap="nowrap">
                      <ThemeIcon
                        variant="light"
                        color="earthBrown"
                        size="md"
                        radius="md"
                        style={{ flexShrink: 0 }}
                      >
                        <IconMapPin size={16} />
                      </ThemeIcon>
                      <Anchor
                        href="https://maps.app.goo.gl/hLHNpfuDEJDQAXvu7"
                        target="_blank"
                        rel="noreferrer"
                        size="lg"
                        fw={500}
                        td="underline"
                        style={{ lineHeight: 1.2 }}
                      >
                        Czatachowa, Jura Krakowsko-Częstochowska
                      </Anchor>
                    </Group>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Box>
                    <iframe
                      src="https://maps.google.com/maps?q=50.66319,19.400187&hl=pl&z=14&output=embed"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa lokalizacji Fornostu - Czatachowa"
                    />
                  </Box>
                </Grid.Col>
              </Grid>
              <Grid gutter="xl" align="flex-start">
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Image
                    src={przepr1}
                    alt="Fornost - konwent fantasy"
                    radius="md"
                    style={{
                      boxShadow: '0 8px 24px rgba(45, 77, 102, 0.2)',
                    }}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Image
                    src={image6}
                    alt="Fornost - konwent fantasy"
                    radius="md"
                    style={{
                      boxShadow: '0 8px 24px rgba(45, 77, 102, 0.2)',
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Image
                    src={przepr3}
                    alt="Fornost - konwent fantasy"
                    radius="md"
                    style={{
                      boxShadow: '0 8px 24px rgba(45, 77, 102, 0.2)',
                    }}
                  />
                </Grid.Col>
              </Grid>
            </Card>

            {/* Nocleg, wyżywienie, dojazd */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="etherealBlue" size="xl" radius="md">
                  <IconTent size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Nocleg, jedzenie, dojazd
                </Title>
              </Group>

              <Grid gutter="xl" align="flex-start">
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Stack gap="lg">
                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconTent size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        <Text span fw={600}>
                          Nocleg
                        </Text>{' '}
                        - na polu namiotowym (w cenie biletu) z dostępem do przenośnych toalet i
                        pryszniców oraz możliwością korzystania z prądu. Podczas wszystkich larpów i
                        innych punktów programu dostępna jest woda pitna w baniakach. Przez całą
                        dobę na terenie pola namiotowego dostępny jest warnik z gorącą, przegotowaną
                        wodą.
                      </Text>
                    </Group>

                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconTree size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        <Text span fw={600}>
                          Okoliczna agroturystyka
                        </Text>{' '}
                        - we własnym zakresie. Noclegów w agroturystyce polecamy szukać w Żarkach
                        (około 5km od lokalizacji konwentu) lub w innych pobliskich miejscowościach.
                      </Text>
                    </Group>

                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconToolsKitchen2 size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        Do dyspozycji wszystkich uczestników będzie catering od{' '}
                        <Anchor
                          href="https://www.przystanlesniow.pl/resturacja/restauracja"
                          target="_blank"
                          rel="noreferrer"
                          td="underline"
                        >
                          Przystani Leśniów
                        </Anchor>{' '}
                        oferujący śniadania, dania z grilla i (zamawiane dzień wcześniej) zestawy
                        obiadowe. Oprócz posiłków, Przystań Leśniów będzie mieć w swoim asortymencie
                        ciepłe i zimne napoje (zarówno alkoholowe, jak i bezalkoholowe) oraz
                        przekąski. <br /> W czasie LARPA 'Za Garść Mithrilu' uczestników żywić
                        będzie karczma in-game prowadzona przez{' '}
                        <Anchor href={UBOJNIA_URL} target="_blank" rel="noreferrer" td="underline">
                          Ubojnię - Kuchnię Chaosu
                        </Anchor>
                      </Text>
                    </Group>

                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconBus size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        Najbliższą miejscowością, do której dojeżdża pociąg oraz autobusy
                        dalekobieżne jest Myszków. Jeśli nie masz możliwości dojazdu z Myszkowa lub
                        innej pobliskiej miejscowości - dołącz do naszego{' '}
                        <Anchor
                          href="https://discord.gg/uBxvT9rMGM"
                          target="_blank"
                          rel="noreferrer"
                          td="underline"
                        >
                          serwera na Discordzie
                        </Anchor>{' '}
                        i zapytaj o możliwości podwózki. Co rok wiele osób organizuje się na wspólny
                        dojazd, na pewno znajdzie się ktoś kto będzie mógł Ci pomóc.
                      </Text>
                    </Group>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Image
                    src={przepr4}
                    alt="Teren Fornostu"
                    radius="md"
                    mb="xl"
                    style={{
                      boxShadow: '0 8px 24px rgba(45, 77, 102, 0.2)',
                    }}
                  />
                  <Image
                    src={pijacysmok}
                    alt="Teren Fornostu"
                    radius="md"
                    style={{
                      boxShadow: '0 8px 24px rgba(45, 77, 102, 0.2)',
                    }}
                  />
                </Grid.Col>
              </Grid>
            </Card>

            {/* Bilety */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="etherealBlue" size="xl" radius="md">
                  <IconTicket size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Bilety
                </Title>
              </Group>

              <Group align="flex-start" gap="sm" wrap="nowrap" mb="lg">
                <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                  <IconTicket size={20} />
                </ThemeIcon>
                <Text size="lg" c="etherealBlue.9" lh={1.7}>
                  Zakup biletu uprawnia do udziału w programie konwentu(Gra Główna - "Za Garść
                  Mithrilu", Warsztaty, Konkursy, Turnieje) oraz do korzystania z pola namiotowego.
                  Szczegóły dotyczące cen i opcji biletów znajdziesz w formularzu do którego link
                  widnieje poniżej.
                </Text>
              </Group>

              <Group justify="center" mt="xl">
                <BuyButton />
              </Group>
            </Card>

            {/* Atrakcje */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="etherealBlue" size="xl" radius="md">
                  <IconFlame size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Atrakcje
                </Title>
              </Group>

              <Grid gutter="xl" align="flex-start">
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Stack gap="lg">
                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconSword size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        LARPy, konkursy i turnieje odbywające się z dala od cywilizacji, na
                        obszernych terenach leśnych w pobliżu pola obozowego.
                      </Text>
                    </Group>

                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconFlame size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        Co wieczorne ognisko z śpiewem i dobrą zabawą.
                      </Text>
                    </Group>

                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconCrown size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        Największym punktem w programie Fornostu jest Gra Główna – dwudniowy larp w
                        tolkienowskim świecie Śródziemia. Więcej informacji o Gra Głównej wkrótce!
                        Wszelkie pytania możesz również kierować do nas na{' '}
                        <Anchor
                          href="https://discord.gg/uBxvT9rMGM"
                          target="_blank"
                          rel="noreferrer"
                          td="underline"
                        >
                          Discordzie
                        </Anchor>
                        .
                      </Text>
                    </Group>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Image
                    src={image3}
                    alt="Atrakcje na Fornoście"
                    radius="md"
                    style={{
                      boxShadow: '0 8px 24px rgba(45, 77, 102, 0.2)',
                    }}
                  />
                </Grid.Col>
              </Grid>
              <Box
                p="lg"
                mt="lg"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(114, 150, 131, 0.12) 0%, rgba(81, 127, 168, 0.08) 100%)',
                  border: '2px solid rgba(114, 150, 131, 0.3)',
                  borderRadius: 'var(--mantine-radius-md)',
                }}
              >
                <Group gap="md" mb="sm" wrap="nowrap">
                  <ThemeIcon variant="light" color="forestGreen" size="xl" radius="md">
                    <IconClipboardList size={24} />
                  </ThemeIcon>
                  <Stack gap={4}>
                    <Text size="lg" fw={600} c="forestGreen.8">
                      Zgłoszenia punktów programu
                    </Text>
                    <Text size="sm" c="etherealBlue.8">
                      Termin: do{' '}
                      <Text span fw={700}>
                        14 lutego 2026
                      </Text>
                    </Text>
                  </Stack>
                </Group>
                <Text size="md" c="etherealBlue.9" lh={1.6} mb="md">
                  Masz pomysł na punkt programu? Chcesz poprowadzić larpa, konkurs lub inną
                  atrakcję? Zgłoś się do nas!
                </Text>
                <Button
                  component="a"
                  href={PROGRAM_SUBMISSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="filled"
                  color="forestGreen"
                  size="md"
                  leftSection={<IconClipboardList size={18} />}
                >
                  Zgłoś punkt programu
                </Button>
              </Box>
            </Card>

            {/* Bezpieczeństwo */}
            <Card className={classes.infoCard} p={{ base: 'md', md: 'xl' }}>
              <Group gap="md" mb="md" align="flex-start">
                <ThemeIcon variant="light" color="etherealBlue" size="xl" radius="md">
                  <IconUserShield size={28} />
                </ThemeIcon>
                <Title order={3} c="etherealBlue.9" className={classes.cardTitle}>
                  Bezpieczeństwo
                </Title>
              </Group>

              <Grid gutter="xl" align="flex-start">
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Stack gap="lg">
                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconFirstAidKit size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        Na Fornoście zawsze przebywa osoba dyżurująca, zmotoryzowana, gotowa
                        odpowiednio zareagować na wypadki i inne niefortunne zdarzenia. W ekipie
                        organizatorskiej znajduje się również osoba po kursie pierwszej pomocy,
                        mogąca udzielić pomocy w razie potrzeby.
                      </Text>
                    </Group>

                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconUserShield size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        <Text span fw={500}>
                          Osoby bezpieczeństwa
                        </Text>{' '}
                        - w razie sytuacji kryzysowej, w której czujesz się zagrożony lub
                        niekomfortowo, zgłoś się do jednej z tych osób.
                      </Text>
                    </Group>

                    <Group align="flex-start" gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" color="earthBrown" size="lg" radius="md" mt={4}>
                        <IconUsers size={20} />
                      </ThemeIcon>
                      <Text size="lg" c="etherealBlue.9" lh={1.7}>
                        Ze względów bezpieczeństwa, osoby w wieku poniżej 15 lat nie mogą wziąć
                        udziału w Fornoście inaczej niż pod opieką pełnoletniego opiekuna,
                        wskazanego na piśmie przez opiekunów prawnych. Osoby niepełnoletnie, które
                        skończyły 15 lat, podczas akredytacji muszą przedłożyć zgodę rodziców (lub
                        opiekunów prawnych) na udział dziecka w Fornoście. Formularz zgody można
                        pobrać z{' '}
                        <Anchor
                          href="https://docs.google.com/document/d/1NnXKQTZZWfd5dkI4q_PUUHAEWNpYEH1q3Ew4i6FfF4c/edit?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                          td="underline"
                        >
                          tego adresu
                        </Anchor>
                        .
                      </Text>
                    </Group>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Image
                    src={image4}
                    alt="Bezpieczeństwo na Fornoście"
                    radius="md"
                    style={{
                      boxShadow: '0 8px 24px rgba(45, 77, 102, 0.2)',
                    }}
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
