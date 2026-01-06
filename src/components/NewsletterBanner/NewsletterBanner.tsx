import { IconMail } from '@tabler/icons-react';
import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import backgroundImage from '@/assets/przepr/przepr_krolow_d1_-9.jpg';
import { NEWSLETTER_URL } from '@/edition_constants';
import classes from './NewsletterBanner.module.css';

export function NewsletterBanner() {
  return (
    <Box
      component="section"
      className={classes.banner}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Container size="xl">
        <Stack align="center" gap="lg" className={classes.content}>
          <IconMail size={48} className={classes.icon} />

          <Stack align="center" gap="sm">
            <Title order={2} className={classes.title}>
              Zapisz się na newsletter
            </Title>
            <Text size="lg" ta="center" c="dimmed" className={classes.description}>
              Bądź na bieżąco! Otrzymuj najważniejsze informacje o konwencie 3-4 razy w roku.
            </Text>
          </Stack>

          <Button
            size="lg"
            color="forestGreen.8"
            radius="md"
            component="a"
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noreferrer"
            leftSection={<IconMail size={20} />}
            className={classes.button}
          >
            Zapisz się do newslettera
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
