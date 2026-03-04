import { useEffect, useState } from 'react';
import { Box, Container, Group, Stack, Text } from '@mantine/core';
import classes from './Countdown.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const targetDate = new Date('2026-07-25T00:00:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'dni' },
    { value: timeLeft.hours, label: 'godzin' },
    { value: timeLeft.minutes, label: 'minut' },
    { value: timeLeft.seconds, label: 'sekund' },
  ];

  return (
    <Box className={classes.countdownBar}>
      <Container size="xl">
        <Stack align="center" gap="xs">
          <Group gap="xl" justify="center" className={classes.timeUnits}>
            {timeUnits.map((unit, index) => (
              <Stack key={index} align="center" gap={4}>
                <Text className={classes.timeValue}>{String(unit.value).padStart(2, '0')}</Text>
                <Text className={classes.timeLabel}>{unit.label}</Text>
              </Stack>
            ))}
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
