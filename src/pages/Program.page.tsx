import { Box, Container, Stack, Title } from '@mantine/core';
import bannerImage from '@/assets/banner-poziomy-2026.jpg';

export function ProgramPage() {
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

      <Box component="section" py={{ base: 'xl', md: 80 }}>
        <Container size="xl">
          <Stack gap="xl">{/* Zawartość programu będzie tutaj */}</Stack>
        </Container>
      </Box>
    </Stack>
  );
}
