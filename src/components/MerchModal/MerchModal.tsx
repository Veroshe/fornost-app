import { Box, Button, Divider, Group, Image, List, Modal, Stack, Text, Title } from '@mantine/core';
import koszulkaImg from '../../assets/koszulka.png';
import koszulka3Img from '../../assets/koszulka3.png';
import kufleImg from '../../assets/kufle.png';

interface MerchModalProps {
  opened: boolean;
  onClose: () => void;
}

const KOSZULKI_FORM_URL = 'https://forms.gle/gofPHQYBLbJwHGZ39';
const KUFLE_FORM_URL = 'https://forms.gle/2skVwobA2svViSX79';

const tshirts = [
  'T-shirt damski/męski ZIELONY Z PIERŚCIENIEM FORNOSTOWYM: 75 zł/szt. (kolor: zielony)',
  'T-shirt damski/męski Z CZARNO-BIAŁYM LOGIEM GG Z PRZODU: 75 zł/szt. (kolor: czarny lub beżowy)',
  'T-shirt damski/męski Z CZARNO-BIAŁYM LOGIEM GG Z PRZODU + IMIĘ NA PLECACH: 95 zł/szt. (kolor: czarny lub beżowy)',
  'T-shirt damski/męski Z CZARNO-BIAŁYM LOGIEM GG Z PRZODU + IMIĘ NA PLECACH + TARCZA KONWENTU NA RAMIENIU: 105 zł/szt. (kolor: czarny lub beżowy)',
];

export function MerchModal({ opened, onClose }: MerchModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      title={
        <Title
          order={2}
          style={{
            fontFamily: 'Cinzel, "Palatino Linotype", Palatino, Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'var(--mantine-color-etherealBlue-4)',
          }}
        >
          Dzień dobry Fornoście!
        </Title>
      }
      styles={{
        content: {
          backgroundColor: 'rgba(15, 27, 40, 0.97)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 180, 209, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '85vh',
        },
        header: {
          backgroundColor: 'transparent',
          borderBottom: '1px solid rgba(148, 180, 209, 0.15)',
          position: 'static',
          flexShrink: 0,
        },
        body: {
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
        },
        close: {
          color: 'rgba(148, 180, 209, 0.7)',
          '&:hover': { color: 'white' },
        },
      }}
      overlayProps={{ blur: 4 }}
    >
      <Box style={{ flex: 1, overflowY: 'auto', padding: 'var(--mantine-spacing-md)' }}>
        <Stack gap="md" py="sm">
          <Text c="rgba(200, 220, 235, 0.9)" size="sm">
            Dzisiaj piszemy do Was z informacjami na temat tegorocznych gadżetów konwentowych.
            Przedkonwentowo możecie zamówić następujące towary:
          </Text>

          <Group gap="sm" align="flex-start" maw={420} mx="auto">
            <Stack gap="sm" style={{ flex: 1 }}>
              <Image
                src={koszulkaImg}
                alt="Koszulka konwentowa"
                radius="md"
                mah={150}
                fit="contain"
                style={{ border: '1px solid rgba(148, 180, 209, 0.2)' }}
              />
              <Image
                src={kufleImg}
                alt="Kufel ceramiczny"
                radius="md"
                mah={150}
                fit="contain"
                style={{ border: '1px solid rgba(148, 180, 209, 0.2)' }}
              />
            </Stack>
            <Image
              src={koszulka3Img}
              alt="Koszulka konwentowa – wzór 2"
              radius="md"
              mah={310}
              fit="contain"
              style={{ flex: 1, border: '1px solid rgba(148, 180, 209, 0.2)' }}
            />
          </Group>

          <Box>
            <Text fw={600} c="var(--mantine-color-etherealBlue-3)" mb="xs" size="sm">
              Koszulki
            </Text>
            <List spacing="xs" size="sm" c="rgba(200, 220, 235, 0.85)">
              {tshirts.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List>
          </Box>

          <Box>
            <Text fw={600} c="var(--mantine-color-etherealBlue-3)" mb="xs" size="sm">
              Kufle
            </Text>
            <Text size="sm" c="rgba(200, 220, 235, 0.85)">
              Kufel ceramiczny z tarczą konwentową (kolory: piaskowy lub brązowy, pojemność 500 ml):{' '}
              <Text span fw={600}>
                100 zł
              </Text>
            </Text>
          </Box>

          <Divider color="rgba(148, 180, 209, 0.15)" />

          <Box>
            <Text size="sm" c="rgba(200, 220, 235, 0.75)">
              Zamówienia na koszulki przyjmujemy do{' '}
              <Text span fw={600} c="var(--mantine-color-etherealBlue-3)">
                14.06.2026
              </Text>
              .
            </Text>
            <Text size="sm" c="rgba(200, 220, 235, 0.75)" mt={4}>
              Zamówienia na kufle przyjmujemy do{' '}
              <Text span fw={600} c="var(--mantine-color-etherealBlue-3)">
                07.06.2026
              </Text>
              .
            </Text>
          </Box>
        </Stack>
      </Box>

      {/* Sticky footer */}
      <Box
        style={{
          flexShrink: 0,
          borderTop: '1px solid rgba(148, 180, 209, 0.15)',
          padding: '12px 16px',
          backgroundColor: 'rgba(15, 27, 40, 0.97)',
        }}
      >
        <Group gap="sm" grow>
          <Button
            component="a"
            href={KOSZULKI_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            color="etherealBlue"
            variant="filled"
            size="md"
          >
            🧥 Zamów koszulkę
          </Button>
          <Button
            component="a"
            href={KUFLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            color="forestGreen"
            variant="filled"
            size="md"
          >
            🍺 Zamów kufel
          </Button>
        </Group>
      </Box>
    </Modal>
  );
}
