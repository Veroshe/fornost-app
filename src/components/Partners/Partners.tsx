import { Container, Text } from '@mantine/core';
import { MEDIA_PARTNERS, PARTNERS, type MediaPartner } from '../../edition_constants';
import classes from './Partners.module.css';

function PartnerLogo({ partner, bigLogo }: { partner: MediaPartner; bigLogo?: boolean }) {
  const invert = partner.invertLogo ?? true;
  const inner = partner.logo ? (
    <img
      src={partner.logo}
      alt={partner.name}
      className={`${classes.logo} ${bigLogo ? classes.bigLogo : ''}`}
      style={invert ? undefined : { filter: 'none', opacity: 1 }}
    />
  ) : (
    <div className={classes.placeholder}>
      <Text size="sm" c="dimmed" ta="center" lh={1.3}>
        {partner.name}
      </Text>
    </div>
  );

  return partner.url ? (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" className={classes.logoLink}>
      {inner}
    </a>
  ) : (
    <div className={classes.logoLink}>{inner}</div>
  );
}

export const Partners = () => {
  return (
    <>
      <section className={classes.section}>
        <Container size="xl">
          <Text className={classes.label}>Współpraca medialna</Text>
          <div className={classes.logos}>
            {MEDIA_PARTNERS.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </Container>
      </section>

      <section className={classes.section}>
        <Container size="xl">
          <Text className={classes.label}>Partnerzy</Text>
          <div className={classes.logos}>
            {PARTNERS.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} bigLogo={true} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
