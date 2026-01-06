import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Box, Grid, Modal, Skeleton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import '@mantine/carousel/styles.css';

interface GalleryProps {
  images: string[];
  modalTitle?: string;
  photographer?: {
    name: string;
    url: string;
  };
}

export function Gallery({ images, modalTitle, photographer }: GalleryProps) {
  const [opened, setOpened] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setOpened(true);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <Grid gutter="md">
        {images.map((image, index) => (
          <Grid.Col key={index} span={{ base: 6, sm: 4, md: 3, lg: 2 }}>
            <Box
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: 'var(--mantine-radius-md)',
                transition: 'transform 0.2s ease',
                border: '1px solid rgba(148, 180, 209, 0.2)',
                boxShadow: '0 2px 8px rgba(45, 77, 102, 0.1)',
                height: '200px',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={() => handleImageClick(index)}
            >
              <Skeleton
                height="100%"
                width="100%"
                animate
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: loadedImages[index] ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}
              />
              <img
                src={image}
                alt={`Zdjęcie ${index + 1}`}
                onLoad={() => handleImageLoad(index)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: loadedImages[index] ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />
            </Box>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        fullScreen={isMobile}
        size={isMobile ? undefined : 'calc(100vw - 3rem)'}
        centered={!isMobile}
        padding={0}
        withCloseButton
        title={modalTitle}
        styles={{
          body: { padding: 0 },
          content: {
            overflow: 'hidden',
            backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.15)',
          },
          header: {
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            borderBottom: 'none',
            justifyContent: 'center',
          },
          title: {
            color: 'white',
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            fontWeight: 500,
            textAlign: 'center',
            width: '100%',
          },
          close: {
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          },
        }}
      >
        {photographer && (
          <Box
            style={{
              textAlign: 'center',
              padding: '8px 10px',
              backgroundColor: 'rgba(0, 0, 0, 0.15)',
              color: 'white',
              fontSize: 'clamp(0.75rem, 3vw, 0.95rem)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            Autor zdjęć:{' '}
            <a
              href={photographer.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'underline',
                fontWeight: 500,
              }}
            >
              {photographer.name}
            </a>
          </Box>
        )}
        <Carousel
          withIndicators
          initialSlide={selectedImageIndex}
          styles={{
            root: {
              height: isMobile ? 'calc(100vh - 130px)' : 'calc(100vh - 10rem)',
            },
            viewport: {
              height: isMobile ? 'calc(100vh - 130px)' : 'calc(100vh - 10rem)',
            },
            container: {
              backgroundColor: isMobile ? '#000' : 'rgba(255, 255, 255, 0.1)',
              alignItems: 'center',
              height: '100%',
            },
            slide: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isMobile ? '#000' : 'rgba(0, 0, 0, 0.15)',
              paddingBottom: isMobile ? undefined : '60px',
            },
            control: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              padding: '10px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
            indicator: {
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              '&[data-active]': {
                backgroundColor: 'white',
              },
            },
          }}
        >
          {images.map((image, index) => (
            <Carousel.Slide key={index}>
              <Box
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '20px' : '160px',
                }}
              >
                <img
                  src={image}
                  alt={`Zdjęcie ${index + 1}`}
                  style={{
                    maxWidth: isMobile ? '100%' : '85%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Modal>
    </>
  );
}
