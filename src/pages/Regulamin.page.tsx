import { Box, Container, List, Stack, Text, Title } from '@mantine/core';
import bannerImage from '@/assets/banner-poziomy-2026.jpg';

interface Section {
  title: string;
  items: string[];
}

export function RegulaminPage() {
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
              Regulamin Konwentu
            </Title>
            <Text c="rgba(255,255,255,0.8)" ta="center" size="lg">
              Fornost 2025
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Content */}
      <Box component="section" py={{ base: 'xl', md: 80 }}>
        <Container size="md">
          <Stack gap="xl">
            {sections.map((section) => (
              <Box key={section.title}>
                <Title
                  order={2}
                  c="etherealBlue.3"
                  mb="md"
                  style={{
                    borderBottom: '1px solid rgba(148, 180, 209, 0.3)',
                    paddingBottom: '0.5rem',
                  }}
                >
                  {section.title}
                </Title>
                <List spacing="sm" withPadding>
                  {section.items.map((item, index) => (
                    <List.Item key={index}>
                      <Text c="rgba(255,255,255,0.85)" lh={1.7}>
                        {item}
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Box>
            ))}

            {/* Footer notices */}
            <Box
              p="lg"
              style={{
                borderRadius: '0.5rem',
                border: '1px solid rgba(148, 180, 209, 0.3)',
                background: 'rgba(148, 180, 209, 0.05)',
              }}
            >
              <Text c="rgba(255,255,255,0.9)" fw={600} mb="xs">
                Akredytacja i podpisanie listy uczestników jest równoznaczne z akceptacją
                niniejszego Regulaminu.
              </Text>
              <Text c="rgba(255,255,255,0.85)">
                Naruszenie niniejszego Regulaminu może skutkować wydaleniem z terenu konwentu.
              </Text>
            </Box>

            <Text c="dimmed" size="sm">
              Wszelkie pytania i uwagi dotyczące Regulaminu oraz organizacji Konwentu prosimy
              kierować na adres email:{' '}
              <a href="mailto:kontakt@fornost.pl" style={{ color: 'inherit' }}>
                kontakt@fornost.pl
              </a>
            </Text>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

const sections: Section[] = [
  {
    title: 'Postanowienia Ogólne',
    items: [
      'Konwent Terenowy Fornost 2025 (zwany dalej "Konwentem") jest organizowany przez Stowarzyszenie Terra Futura z siedzibą przy ulicy Królowej Jadwigi 146A/7, 30-312 w Krakowie, nr KRS 0000321170.',
      'Konwent odbędzie się na terenie wsi Czatachowa, w Polsce, w dniach 26.07 - 03.08.2025',
      'Uczestnikiem Konwentu (zwanym dalej "Uczestnikiem") może być każda osoba, która dokonała rejestracji, opłaciła składkę uczestnictwa oraz dopełniła wszelkich innych wymaganych formalności.',
      'Osoby odpowiedzialne za organizację konwentu (zwane dalej zbiorczo "Organizacją") to Weronika Kalinowska, Aleksandra Gąsiorowska, Mateusz Orzechowski, Martyna Królak, Krzysztof Brzoska, Małgorzata Jakubowska, Błażej Kardyś, Ida Pacer, Julia Liszewska, Bartłomiej Brózda i Michał Bąk.',
      'Głównym punktem programu jest LARP "Przeprawa Królów", który odbywa się w dniach 31.07-02.08.2025 (zwany dalej "Grą Główną" albo w skrócie "GG").',
      'Znajomość i przestrzeganie niniejszego regulaminu obowiązuje każdego Uczestnika Konwentu.',
    ],
  },
  {
    title: 'Rejestracja i Opłaty',
    items: [
      'Aby potwierdzić swój udział, należy wypełnić formularz zgłoszeniowy oraz opłacić wejściówkę poprzez dokonanie wpłaty na wskazane konto. Informacje dotyczące płatności zostaną przesłane w mailu potwierdzającym zgłoszenie.',
      'Bilet na cały konwent uprawnia uczestnika do udziału we wszystkich LARPach i atrakcjach na Fornoście, zapewnia nocleg na polu namiotowym oraz wyżywienie w klimatycznej oprawie w przypadku uczestnictwa w LARPie "Przeprawa Królów".',
      'Sprzedaż biletów na cały konwent odbędzie się w trzech turach: Tura I - do 6 stycznia 2025 - 450 zł; Tura II - od 7 stycznia do 25 lipca - 550 zł bilet normalny, 500 zł bilet dla studenta/ucznia/doktoranta; Tura III - w trakcie trwania konwentu 700 zł bilet normalny, 650 bilet dla studenta/ucznia/doktoranta.',
      'Istnieje możliwość nabycia biletu jednodniowego za 100 zł, jednak bilet ten nie upoważnia do wzięcia udziału w Grze Głównej.',
      'Dostępne są również bilety zniżkowe: Bilet dla Helpera - zniżka ustalana indywidualnie; Bilet dla Twórców Atrakcji - system punktowy, maksymalna zniżka 200 zł; Bilet Ad-Hoc - 450 zł, nie upoważnia do udziału w LARPach.',
      'Dzieci poniżej 13 roku życia, pod opieką rodzica mogą wziąć udział w Konwencie za darmo.',
      'Po wypełnieniu formularza zgłoszeniowego i dokonaniu opłaty organizacja potwierdza przyjęcie uczestnika w ciągu tygodnia drogą mailową.',
      'W przypadku chęci rezygnacji z udziału w Konwencie po zakupieniu wejściówki, należy skontaktować się z Organizatorami.',
    ],
  },
  {
    title: 'Zasady Uczestnictwa',
    items: [
      'W trakcie trwania konwentu w wyznaczonych godzinach odbywa się akredytacja. Każdy uczestnik po przyjeździe na konwent musi się zaakredytować aby osobiście potwierdzić swoje uczestnictwo w konwencie i podpisać regulamin imprezy.',
      'Przy akredytacji Uczestnicy otrzymują opaskę, którą muszą posiadać na sobie przez cały czas trwania Konwentu (w przypadku zgubienia/zniszczenia opaski należy niezwłocznie zgłosić to organizacji).',
      'Opaska uprawnia do udziału w grach i wydarzeniach oraz korzystania z infrastruktury Konwentu.',
      'Uczestnicy są zobowiązani do przestrzegania zasad bezpieczeństwa, zarówno podczas gier, jak i poza nimi.',
      'Uczestnicy chcący przyjechać ze zwierzętami są mile widziani. Odpowiedzialność za zwierzę i jego zachowania spoczywa w całości na jego właścicielu.',
      'Zabrania się posiadania i używania na Konwencie jakiejkolwiek broni, która nie jest atestowaną, bezpieczną bronią larpową.',
      'Wszelkie incydenty i wypadki należy niezwłocznie zgłaszać Organizatorom.',
      'Każdy uczestnik jest zobowiązany do poszanowania granic drugiej osoby będącej na konwencie.',
      'Zabrania się tzw. "mowy nienawiści" wobec innych uczestników zwłaszcza w kontekście tematów osobistych, takich jak wierzenia religijne, poglądy polityczne, pochodzenie czy też orientacja seksualna.',
      'Spożywanie alkoholu dozwolone jest wyłącznie przez osoby pełnoletnie, w wyznaczonych strefach i w granicach rozsądku.',
      'Osoby nietrzeźwe naruszające bezpieczeństwo i komfort innych Uczestników konwentu mogą zostać wykluczone z uczestnictwa w punktach programu, a w skrajnym przypadku mogą zostać wyproszone z terenu Konwentu.',
      'Uczestników obowiązuje nakaz dbania o czystość i porządek na terenie pola namiotowego.',
      'Wszelkie szkody spowodowane niewłaściwym korzystaniem z zapewnionej przez Konwent infrastruktury należy niezwłocznie zgłosić organizacji Konwentu.',
      'Organizacja zastrzega sobie prawo do nie wpuszczenia na teren konwentu osób, które dopuściły się łamaniu regulaminu na wcześniejszych edycjach konwentu.',
    ],
  },
  {
    title: 'Ochrona Danych Osobowych',
    items: [
      'Dane osobowe Uczestników są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku oraz ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz.U.2018 poz. 1000).',
      'Dane są wykorzystywane wyłącznie w celach organizacyjnych i nie są udostępniane osobom trzecim.',
    ],
  },
  {
    title: 'Zgoda na Wykorzystanie Wizerunku',
    items: [
      'W trakcie trwania Konwentu wydarzenia są dokumentowane w postaci fotografii i nagrań wideo.',
      'Uczestnicy podpisując regulamin wyrażają zgodę na utrwalanie i wykorzystanie swojego wizerunku w materiałach promocyjnych Konwentu.',
      'W przypadku braku zgody na utrwalanie i wykorzystanie swojego wizerunku należy poinformować o tym Organizację Konwentu podczas akredytacji.',
    ],
  },
  {
    title: 'Postanowienia Końcowe',
    items: [
      'Organizatorzy nie ponoszą odpowiedzialności za rzeczy zagubione lub skradzione na terenie Konwentu.',
      'Uczestnicy ponoszą odpowiedzialność za uszkodzenia spowodowane niewłaściwym użytkowaniem sprzętu oraz infrastruktury zapewnionej przez Organizację w trakcie trwania Konwentu.',
      'Organizatorzy nie ponoszą odpowiedzialności za urazy nabyte przez uczestników Konwentu: czy to w wyniku pobytu na terenie Konwentu, jak i aktywnego uczestnictwa w atrakcjach.',
      'Prawem nadrzędnym w trakcie imprezy jest prawo polskie.',
      'Organizatorzy zastrzegają sobie prawo do wprowadzania zmian w Regulaminie.',
    ],
  },
];
