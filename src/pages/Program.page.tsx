import { useEffect, useRef, useState } from 'react';
import {
  IconChevronRight,
  IconFlame,
  IconSchool,
  IconScript,
  IconSword,
  IconTrophy,
  IconUsers,
} from '@tabler/icons-react';
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core';
import bannerImage from '@/assets/banner-poziomy-2026.jpg';
import eventDetailsData from '@/data/eventDetails.json';
import classes from './Program.module.css';

type EventType = 'ognisko' | 'larp' | 'warsztat' | 'konkurs' | '';

interface EventDetails {
  title: string;
  description: string | null;
  location?: string | null;
  organizer?: string | null;
  maxParticipants?: number | string | null;
  detailsLink?: string | null;
  signupLink?: string | null;
  type?: string | null;
  zapisy?: string | null;
}

type EventDetailsMap = Record<string, EventDetails>;

const getEventType = (eventName: string): EventType => {
  const name = eventName.toLowerCase();
  const firstLine = name.split('\n')[0];

  if (
    firstLine.includes('ognisko') ||
    firstLine.includes('otwarcie') ||
    firstLine.includes('zakończenie')
  ) {
    return 'ognisko';
  }

  // Sprawdź warsztaty PRZED larpami (żeby "jugger" nie było rozpoznane jako "gg")
  if (
    firstLine.includes('warsztaty') ||
    firstLine.includes('szykowanie') ||
    firstLine.includes('dawne') ||
    firstLine.includes('podstawy') ||
    firstLine.includes('mechaniczne') ||
    firstLine.includes('piekarniczy') ||
    firstLine.includes('disco') ||
    firstLine.includes('krafterski')
  ) {
    return 'warsztat';
  }

  if (
    firstLine.includes('larp') ||
    firstLine.includes('gra ') ||
    firstLine.includes('wampirze') ||
    firstLine.includes('outlander') ||
    firstLine.includes('chlarp') ||
    firstLine.includes('polowanie') ||
    firstLine.includes('avatar') ||
    firstLine.includes('piwnice') ||
    firstLine.includes('elegia') ||
    firstLine.includes('sprzątanie') ||
    firstLine.includes('aniołowie')
  ) {
    return 'larp';
  }

  if (
    firstLine.includes('konkurs') ||
    firstLine.includes('tolkienist') ||
    firstLine.includes('prelekcja') ||
    firstLine.includes('wiedzówka') ||
    firstLine.includes('czy') ||
    firstLine.includes('awantura') ||
    firstLine.includes('fornowizja') ||
    firstLine.includes('turniej')
  ) {
    return 'konkurs';
  }
  return '';
};

// Dni mają różną liczbę kolumn (1, 2 lub 3) w zależności od liczby równoległych wydarzeń
const rawScheduleData = [
  {
    time: '10-11',
    days: [
      ['', ''],
      ['LARP Czy Aniołowie piją whisky?', ''],
      ['LARP W drodze do Craigh na Dun', '', 'Krąg krafterski'],
      ['LARP Piwnice i Jaszczurki', 'Dawne Pieśni'],
      ['LARP Elegia nocy letniej', 'Szykowanie lokacji pod GG'],
      ['Podstawy gry aktorskiej', ''],
      ['', ''],
      ['', ''],
    ],
  },
  {
    time: '11-12',
    days: [
      ['', ''],
      ['LARP Czy Aniołowie piją whisky?', 'Warsztaty Juggera'],
      ['LARP W drodze do Craigh na Dun', 'Warsztaty Juggera', 'Krąg krafterski'],
      ['LARP Piwnice i Jaszczurki', 'Dawne Pieśni'],
      ['LARP Elegia nocy letniej', 'Szykowanie lokacji pod GG'],
      ['Podstawy gry aktorskiej', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
    ],
  },
  {
    time: '12-13',
    days: [
      ['', ''],
      ['LARP Czy Aniołowie piją whisky?', 'Warsztaty Juggera'],
      ['LARP W drodze do Craigh na Dun', 'Warsztaty Juggera', 'Krąg krafterski'],
      ['LARP Piwnice i Jaszczurki', 'Dawne Pieśni'],
      ['LARP Elegia nocy letniej', 'Szykowanie lokacji pod GG'],
      ['Warsztaty mechaniczne GG', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
    ],
  },
  {
    time: '13-14',
    days: [
      ['', ''],
      ['Awantura o złoto', ''],
      ['', '', 'Krąg krafterski'],
      ['LARP Piwnice i Jaszczurki', 'Dawne Pieśni'],
      ['LARP Elegia nocy letniej', 'Szykowanie lokacji pod GG'],
      ['Warsztaty mechaniczne GG', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
    ],
  },
  {
    time: '14-15',
    days: [
      ['', ''],
      ['Awantura o złoto', ''],
      ['', '', ''],
      ['', ''],
      ['', ''],
      ['Warsztaty mechaniczne GG', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
    ],
  },
  {
    time: '15-16',
    days: [
      ['', ''],
      ['', ''],
      ["LARP Polowanie na Gregora Clegane'a", '', ''],
      ['Avatar: Rozdroża', 'Od mąki do chleba – warsztat piekarniczy'],
      ['', ''],
      ['', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
    ],
  },
  {
    time: '16-17',
    days: [
      ['', ''],
      ['LARP A gdy w chochliku wampir się zakocha...', 'Prelekcja i konkurs Tolkienowski'],
      ["LARP Polowanie na Gregora Clegane'a", '', ''],
      ['Avatar: Rozdroża', 'Od mąki do chleba – warsztat piekarniczy'],
      ['', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Sprzątanie lokacji GG', ''],
    ],
  },
  {
    time: '17-18',
    days: [
      ['', ''],
      ['LARP A gdy w chochliku wampir się zakocha...', 'Prelekcja i konkurs Tolkienowski'],
      ["LARP Polowanie na Gregora Clegane'a", '', ''],
      ['Avatar: Rozdroża', 'Od mąki do chleba – warsztat piekarniczy'],
      ['Turniej Juggera', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Sprzątanie lokacji GG', ''],
    ],
  },
  {
    time: '18-19',
    days: [
      ['', ''],
      ['LARP A gdy w chochliku wampir się zakocha...', 'Prelekcja i konkurs Tolkienowski'],
      ["LARP Polowanie na Gregora Clegane'a", '', ''],
      ['Avatar: Rozdroża', 'Konkurs wieśmakowy'],
      ['Turniej Juggera', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Sprzątanie lokacji GG', ''],
    ],
  },
  {
    time: '19-20',
    days: [
      ['Ognisko - Otwarcie konwentu', ''],
      ['', 'Prelekcja i konkurs Tolkienowski'],
      ["LARP Polowanie na Gregora Clegane'a", '', ''],
      ['Avatar: Rozdroża', 'Konkurs wieśmakowy'],
      ['Turniej Juggera', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', 'Turniej Fajkowy - w ramach GG'],
      ['Sprzątanie lokacji GG', ''],
    ],
  },
  {
    time: '20-21',
    days: [
      ['Ognisko - Otwarcie konwentu', ''],
      ['Ognisko', 'Chlarp'],
      ["LARP Polowanie na Gregora Clegane'a", '', ''],
      ['Avatar: Rozdroża', ''],
      ['', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', 'Turniej Fajkowy - w ramach GG'],
      ['Ognisko i zakończenie konwentu', ''],
    ],
  },
  {
    time: '21-22',
    days: [
      ['Ognisko - Otwarcie konwentu', ''],
      ['Ognisko', 'Chlarp'],
      ['Ognisko', 'Wiedzówka z G.R.R. Martina', ''],
      ['Ognisko', ''],
      ['Ognisko', 'Fornowizja'],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Gra Główna - Za Garść Mithrilu', ''],
      ['Ognisko i zakończenie konwentu', ''],
    ],
  },
  {
    time: '22-23',
    days: [
      ['Ognisko - Otwarcie konwentu', ''],
      ['Ognisko', 'Chlarp'],
      ['Ognisko', 'Wiedzówka z G.R.R. Martina', ''],
      ['Ognisko', ''],
      ['Ognisko', 'Fornowizja'],
      ['Ognisko', 'Disco Platinium'],
      ['Ognisko', ''],
      ['Ognisko i zakończenie konwentu', ''],
    ],
  },
  {
    time: '23-00',
    days: [
      ['Ognisko - Otwarcie konwentu', ''],
      ['Ognisko', ''],
      ['Ognisko', '', ''],
      ['Ognisko', ''],
      ['Ognisko', 'Fornowizja'],
      ['Ognisko', 'Disco Platinium'],
      ['Ognisko', ''],
      ['Ognisko i zakończenie konwentu', ''],
    ],
  },
  {
    time: '00-1',
    days: [
      ['Ognisko - Otwarcie konwentu', ''],
      ['Ognisko', ''],
      ['Ognisko', '', ''],
      ['Ognisko', ''],
      ['Ognisko'],
      ['Ognisko', 'Disco Platinium'],
      ['Ognisko', ''],
      ['Ognisko i zakończenie konwentu', ''],
    ],
  },
];

// Dni z tylko jednym torem (bez równoległych wydarzeń)
const singleTrackDays = [0, 7]; // Sobota 25.07, Piątek 31.07, Sobota 1.08
// Dni z trzema torami
const threeTrackDays = [2]; // Poniedziałek 27.07

// Funkcja zwracająca liczbę kolumn dla danego dnia
const getColumnsForDay = (dayIndex: number): number => {
  if (singleTrackDays.includes(dayIndex)) {
    return 1;
  }
  if (threeTrackDays.includes(dayIndex)) {
    return 3;
  }
  return 2;
};

// Funkcja obliczająca rowSpan dla każdej komórki (z różną liczbą kolumn na dzień)
const calculateRowSpans = () => {
  const rowSpans: (number | null)[][][] = Array(rawScheduleData.length)
    .fill(null)
    .map(() =>
      Array(8)
        .fill(null)
        .map((_, dayIndex) => Array(getColumnsForDay(dayIndex)).fill(null))
    );

  for (let dayIndex = 0; dayIndex < 8; dayIndex++) {
    const numCols = getColumnsForDay(dayIndex);
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      let rowIndex = 0;
      while (rowIndex < rawScheduleData.length) {
        const currentEvent = rawScheduleData[rowIndex].days[dayIndex][colIndex];

        if (currentEvent) {
          let span = 1;
          let nextRow = rowIndex + 1;

          while (
            nextRow < rawScheduleData.length &&
            rawScheduleData[nextRow].days[dayIndex][colIndex] === currentEvent
          ) {
            rowSpans[nextRow][dayIndex][colIndex] = null;
            span++;
            nextRow++;
          }

          rowSpans[rowIndex][dayIndex][colIndex] = span;
          rowIndex = nextRow;
        } else {
          rowSpans[rowIndex][dayIndex][colIndex] = 1;
          rowIndex++;
        }
      }
    }
  }

  return rowSpans;
};

const scheduleData = rawScheduleData;
const rowSpans = calculateRowSpans();

const days = [
  'Sobota\n25.07',
  'Niedziela\n26.07',
  'Poniedziałek\n27.07',
  'Wtorek\n28.07',
  'Środa\n29.07',
  'Czwartek\n30.07',
  'Piątek\n31.07',
  'Sobota\n1.08',
];

const alwaysOnAttractions = [
  'Turniej Strażników',
  'Warsztaty kuglarskie',
  'Warsztaty kaletnicze',
  'Kółko chlebowe',
];

export function ProgramPage() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<EventType | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const tableWrapperRef = useRef<HTMLDivElement>(null);

  const eventDetails = eventDetailsData as EventDetailsMap;

  const handleEventClick = (eventName: string) => {
    const normalizedEventName = eventName.trim();

    if (normalizedEventName && eventDetails[normalizedEventName]) {
      setSelectedEvent(eventDetails[normalizedEventName]);
      setDrawerOpened(true);
    }
  };

  const handleEventTypeClick = (eventType: EventType) => {
    setSelectedEventType(selectedEventType === eventType ? null : eventType);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (tableWrapperRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tableWrapperRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        setShowScrollIndicator(!isAtEnd);
      }
    };

    const tableWrapper = tableWrapperRef.current;
    if (tableWrapper) {
      tableWrapper.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
    }

    return () => {
      if (tableWrapper) {
        tableWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
              Program
            </Title>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        py={{ base: 'xl', md: 80 }}
        style={{ minHeight: 'calc(100vh - 300px)' }}
      >
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="xs" align="center">
              <Text ta="center" size="lg" fw={500}>
                Kliknij w dany punkt programu żeby zobaczyć więcej informacji
              </Text>
            </Stack>

            <Group justify="space-between">
              <Stack gap="md" align="center">
                <Group gap="md" justify="center" className={classes.legend}>
                  <Group
                    gap="xs"
                    onClick={() => handleEventTypeClick('ognisko')}
                    className={classes.legendItem}
                    style={{
                      opacity: selectedEventType && selectedEventType !== 'ognisko' ? 0.5 : 1,
                      cursor: 'pointer',
                    }}
                  >
                    <IconFlame size={18} className={classes.legendIconOgnisko} />
                    <Text size="sm" fw={500}>
                      Ognisko
                    </Text>
                  </Group>
                  <Group
                    gap="xs"
                    onClick={() => handleEventTypeClick('larp')}
                    className={classes.legendItem}
                    style={{
                      opacity: selectedEventType && selectedEventType !== 'larp' ? 0.5 : 1,
                      cursor: 'pointer',
                    }}
                  >
                    <IconSword size={18} className={classes.legendIconLarp} />
                    <Text size="sm" fw={500}>
                      Larpy
                    </Text>
                  </Group>
                  <Group
                    gap="xs"
                    onClick={() => handleEventTypeClick('warsztat')}
                    className={classes.legendItem}
                    style={{
                      opacity: selectedEventType && selectedEventType !== 'warsztat' ? 0.5 : 1,
                      cursor: 'pointer',
                    }}
                  >
                    <IconSchool size={18} className={classes.legendIconWarsztat} />
                    <Text size="sm" fw={500}>
                      Warsztaty
                    </Text>
                  </Group>
                  <Group
                    gap="xs"
                    onClick={() => handleEventTypeClick('konkurs')}
                    className={classes.legendItem}
                    style={{
                      opacity: selectedEventType && selectedEventType !== 'konkurs' ? 0.5 : 1,
                      cursor: 'pointer',
                    }}
                  >
                    <IconTrophy size={18} className={classes.legendIconKonkurs} />
                    <Text size="sm" fw={500}>
                      Konkursy
                    </Text>
                  </Group>
                </Group>
              </Stack>

              <Box className={classes.alwaysOnPanel}>
                <Text fw={600} mb="sm">
                  Przez cały konwent
                </Text>
                <Flex
                  gap="sm"
                  direction={{ base: 'column', md: 'row' }}
                  align="center"
                  justify="center"
                >
                  {alwaysOnAttractions.map((attraction) => (
                    <Button
                      key={attraction}
                      variant=""
                      color="etherealBlue"
                      className={classes.alwaysOnButton}
                      onClick={() => handleEventClick(attraction)}
                    >
                      {attraction}
                    </Button>
                  ))}
                </Flex>
              </Box>
            </Group>

            <Box style={{ position: 'relative' }}>
              {showScrollIndicator && (
                <Box className={classes.scrollIndicator}>
                  <IconChevronRight size={32} />
                </Box>
              )}
              <Box className={classes.tableWrapper} ref={tableWrapperRef}>
                <Table withTableBorder withColumnBorders className={classes.scheduleTable}>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className={classes.timeHeader} rowSpan={2}>
                        Godzina
                      </Table.Th>
                      {days.map((day, index) => (
                        <Table.Th
                          key={index}
                          className={classes.dayHeader}
                          colSpan={getColumnsForDay(index)}
                        >
                          {day.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </Table.Th>
                      ))}
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {scheduleData.map((row, rowIndex) => (
                      <Table.Tr key={rowIndex}>
                        <Table.Td className={classes.timeCell}>{row.time}</Table.Td>
                        {row.days.map((dayEvents, dayIndex) => {
                          const numCols = getColumnsForDay(dayIndex);
                          const isSelectedEvent = selectedEvent?.title === dayEvents[0];

                          // Dla dni z jednym torem, scal wszystkie kolumny
                          if (singleTrackDays.includes(dayIndex)) {
                            const event = dayEvents[0];
                            const span = rowSpans[rowIndex][dayIndex][0];

                            if (span === null) {
                              return null;
                            }

                            const eventType = event ? getEventType(event) : '';
                            const cellClass = eventType ? classes[`${eventType}Cell`] : '';
                            const isHighlighted =
                              selectedEventType && eventType === selectedEventType;

                            return (
                              <Table.Td
                                key={`${dayIndex}-single`}
                                className={`${cellClass} ${classes.dayStartCell} ${classes.dayEndCell} ${event ? classes.clickableCell : ''} ${isHighlighted ? classes.highlightedCell : ''} ${isSelectedEvent ? classes.selectedEventCell : ''}`}
                                rowSpan={span || 1}
                                colSpan={numCols}
                                onClick={() => event && handleEventClick(event)}
                                style={event ? { cursor: 'pointer' } : undefined}
                              >
                                {event && <div className={classes.eventContent}>{event}</div>}
                              </Table.Td>
                            );
                          }

                          // Dla dni z wieloma torami, renderuj wszystkie kolumny
                          return dayEvents.slice(0, numCols).map((event, colIndex) => {
                            const span = rowSpans[rowIndex][dayIndex][colIndex];

                            if (span === null) {
                              return null;
                            }

                            const eventType = event ? getEventType(event) : '';
                            const cellClass = eventType ? classes[`${eventType}Cell`] : '';
                            const isDayStart = colIndex === 0;
                            const isDayEnd = colIndex === numCols - 1;
                            const isMiddleTrack = !isDayStart && !isDayEnd && numCols > 2;
                            const isHighlighted =
                              selectedEventType && eventType === selectedEventType;

                            return (
                              <Table.Td
                                key={`${dayIndex}-${colIndex}`}
                                className={`${cellClass} ${isDayStart ? classes.dayStartCell : ''} ${isDayEnd ? classes.dayEndCell : ''} ${isMiddleTrack ? classes.middleTrackCell : ''} ${event ? classes.clickableCell : ''} ${isHighlighted ? classes.highlightedCell : ''}`}
                                rowSpan={span || 1}
                                onClick={() => event && handleEventClick(event)}
                                style={event ? { cursor: 'pointer' } : undefined}
                              >
                                {event && <div className={classes.eventContent}>{event}</div>}
                              </Table.Td>
                            );
                          });
                        })}
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Box>
            </Box>

            <Text ta="center" size="sm" c="dimmed" mt="md">
              Program może ulec zmianom. Aktualizacje będą publikowane na naszych social mediach.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        position="right"
        size="md"
        title={selectedEvent?.title}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        styles={{
          content: {
            border: 'none',
            color: 'var(--mantine-color-etherealBlue-9)',
          },
          header: {
            border: 'none',
            backgroundColor: ' rgba(35, 62, 82, 0.78)',
          },
          title: {
            fontSize: '1.5rem',
            fontWeight: 400,
            fontFamily: 'Cinzel, "Palatino Linotype", Palatino, Georgia, serif',
            color: 'white',
          },
        }}
      >
        {selectedEvent && (
          <Stack gap="lg" mt="md">
            <Box>
              <Text style={{ whiteSpace: 'pre-line' }}>{selectedEvent.description}</Text>
            </Box>
            {selectedEvent.location && (
              <Box>
                <Text size="sm" fw={700} c="dimmed" mb={4}>
                  Lokalizacja
                </Text>
                <Text>{selectedEvent.location}</Text>
              </Box>
            )}
            {selectedEvent.organizer && (
              <Box>
                <Text size="sm" fw={700} c="dimmed" mb={4}>
                  Prowadzący
                </Text>
                <Text>{selectedEvent.organizer}</Text>
              </Box>
            )}
            {selectedEvent.maxParticipants && (
              <Box>
                <Text size="sm" fw={700} c="dimmed" mb={4}>
                  Maksymalna liczba uczestników
                </Text>
                <Text>{selectedEvent.maxParticipants}</Text>
              </Box>
            )}

            {selectedEvent.zapisy && (
              <Box>
                <Text size="sm" fw={700} c="dimmed" mb={4}>
                  Zapisy
                </Text>
                <Text>{selectedEvent.zapisy}</Text>
              </Box>
            )}
            {selectedEvent.type === 'larp' && (
              <Text size="sm" fw={700} mb={4}>
                Design Doc i zapisy na początku maja
              </Text>
            )}

            {selectedEvent.detailsLink && (
              <Button
                component="a"
                href={selectedEvent.detailsLink}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                color="etherealBlue"
                leftSection={<IconScript size={14} />}
              >
                Design Doc
              </Button>
            )}
            {selectedEvent.type === 'gg' && (
              <Button
                component="a"
                href="/#/larp"
                variant="outline"
                color="etherealBlue"
                leftSection={<IconScript size={14} />}
              >
                Informacje o 'Za Garść Mithrilu'
              </Button>
            )}
            {selectedEvent.signupLink && (
              <Button
                component="a"
                href={selectedEvent.signupLink}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                color="forestGreen"
                leftSection={<IconUsers size={14} />}
              >
                Zapisy
              </Button>
            )}
          </Stack>
        )}
      </Drawer>
    </Stack>
  );
}
