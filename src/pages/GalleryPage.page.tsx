import { useState } from 'react';
import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import bannerImage from '@/assets/banner-poziomy-2026.jpg';
import { PiknikGallery } from '@/components/PiknikGallery';
import { PrzeprawaGallery } from '@/components/PrzeprawaGallery';

export function GalleryPage() {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

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
              Galerie
            </Title>
          </Stack>
        </Container>
      </Box>

      {selectedGallery === 'przeprawa' && (
        <Stack gap={0}>
          <Box component="section" py={{ base: 'lg' }}>
            <Container size="xl">
              <Button variant="subtle" onClick={() => setSelectedGallery(null)} mb="md">
                ← Powrót
              </Button>
              <Text size="lg" ta="center" mb="xl" c="dimmed">
                Kliknij na zdjęcie, aby zobaczyć je w pełnym rozmiarze
              </Text>
              <PrzeprawaGallery />
            </Container>
          </Box>
        </Stack>
      )}

      {selectedGallery === 'piknik' && (
        <Stack gap={0}>
          <Box component="section" py={{ base: 'lg' }}>
            <Container size="xl">
              <Button variant="subtle" onClick={() => setSelectedGallery(null)} mb="md">
                ← Powrót
              </Button>
              <Text size="lg" ta="center" mb="xl" c="dimmed">
                Kliknij na zdjęcie, aby zobaczyć je w pełnym rozmiarze
              </Text>
              <PiknikGallery />
            </Container>
          </Box>
        </Stack>
      )}

      {selectedGallery === null && (
        <Box
          component="section"
          py={{ base: 'lg' }}
          style={{
            minHeight: 'calc(100vh - 400px)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container size="xl">
            <Text size="lg" ta="center" mb="xl" c="dimmed">
              Wybierz galerię, którą chcesz zobaczyć
            </Text>

            <Stack gap="md" align="center">
              <Button
                size="lg"
                color="etherealBlue"
                onClick={() => setSelectedGallery('przeprawa')}
                style={{
                  minWidth: 'clamp(250px, 60vw, 300px)',
                  width: '100%',
                  maxWidth: '400px',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  padding: 'clamp(0.625rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.25rem)',
                }}
              >
                Przeprawa Królów - Gra Główna 2025
              </Button>
              <Button
                size="lg"
                color="forestGreen"
                onClick={() => setSelectedGallery('piknik')}
                style={{
                  minWidth: 'clamp(250px, 60vw, 300px)',
                  width: '100%',
                  maxWidth: '400px',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  padding: 'clamp(0.625rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.25rem)',
                }}
              >
                Piknik w Domu Beorna - Gra Główna 2024
              </Button>
            </Stack>
          </Container>
        </Box>
      )}
    </Stack>
  );
}
