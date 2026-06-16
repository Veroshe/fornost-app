import { IconHelpCircle } from '@tabler/icons-react';
import { Box, Container, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import classes from '@/components/Info/Info.module.css';

export function QuizPage() {
  return (
    <Box component="section" py={{ base: 60, md: 100 }}>
      <Container size="lg">
        <Stack align="center" gap="xl">
          <ThemeIcon variant="light" color="etherealBlue" size={80} radius="xl">
            <IconHelpCircle size={48} />
          </ThemeIcon>

          <Stack align="center" gap="sm">
            <Title order={1} ta="center" c="etherealBlue.9">
              Quiz
            </Title>
            <Text size="xl" c="etherealBlue.7" ta="center" maw={600} lh={1.8}>
              Sprawdź swoją wiedzę o świecie Śródziemia i konwencie Fornost!
            </Text>
          </Stack>

          <Box className={classes.infoCard} p={{ base: 'md', md: 'xl' }} w="100%" maw={700}>
            <Group justify="center" py="xl">
              <Text size="lg" c="etherealBlue.8" ta="center">
                Quiz jest w przygotowaniu. Wróć wkrótce!
              </Text>
            </Group>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
