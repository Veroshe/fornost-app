import { Avatar, Box, Card, Container, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import bannerImage from '@/assets/banner-poziomy-2026.jpg';
import classes from '@/components/Info/Info.module.css';
import { ORGANIZACJA, ORGANIZACJA_GROUPS } from '@/edition_constants';

export function OrganizationPage() {
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
              Organizacja
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
          <Stack gap={60}>
            {ORGANIZACJA_GROUPS.map((group) => {
              const members = ORGANIZACJA.filter((member) => member.group === group.id);
              if (members.length === 0) {
                return null;
              }
              return (
                <Stack key={group.id} gap="lg" id={group.id}>
                  <Title
                    order={2}
                    ta="center"
                    c="white"
                    pb="sm"
                    style={{
                      fontFamily: "Cinzel, Georgia, 'Times New Roman', serif",
                      fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)',
                      borderBottom: '2px solid rgba(148, 180, 209, 0.5)',
                    }}
                  >
                    {group.label}
                  </Title>
                  <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                    {members.map((member) => (
                      <Card
                        key={member.name}
                        className={classes.infoCard}
                        p="lg"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            height={200}
                            radius={12}
                            mb="lg"
                          />
                        ) : (
                          <Avatar
                            color={member.color}
                            size={200}
                            radius={12}
                            mb="lg"
                            style={{ fontSize: '4rem' }}
                          >
                            {member.initials}
                          </Avatar>
                        )}

                        <Title order={4} c="etherealBlue.9" mb="xs" lh={1.3}>
                          {member.name}
                        </Title>
                        <Text size="md" c="etherealBlue.8" lh={1.6}>
                          {member.role}
                        </Text>
                      </Card>
                    ))}
                  </SimpleGrid>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
