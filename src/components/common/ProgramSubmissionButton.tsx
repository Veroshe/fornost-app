import { IconClipboardList } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { PROGRAM_SUBMISSION_URL } from '@/edition_constants';
import { event } from '@/utils/analytics';

export const ProgramSubmissionButton = () => {
  const handleClick = () => {
    event('program_submission', 'conversion', 'Program Submission Button');
  };

  return (
    <Button
      size="md"
      color="forestGreen.8"
      radius="md"
      component="a"
      href={PROGRAM_SUBMISSION_URL}
      target="_blank"
      rel="noreferrer"
      leftSection={<IconClipboardList size={18} />}
      onClick={handleClick}
    >
      Zgłoś punkt programu
    </Button>
  );
};
