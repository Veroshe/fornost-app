import { IconTicket } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { TICKET_FORM_URL } from '@/edition_constants';

export const BuyButton = () => {
  return (
    <Button
      size="lg"
      color="forestGreen.8"
      radius="md"
      component="a"
      href="https://docs.google.com/forms/d/e/1FAIpQLSc1h-1yqZb2TOyma3NW8rXXfPE41o2EyPTT5mZ4xsKcKKMtNQ/viewform"
      target="_blank"
      rel="noreferrer"
      leftSection={<IconTicket size={20} />}
      style={{
        minWidth: 'clamp(160px, 40vw, 200px)',
        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
        padding: 'clamp(0.625rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.375rem)',
      }}
    >
      Kup bilet
    </Button>
  );
};
