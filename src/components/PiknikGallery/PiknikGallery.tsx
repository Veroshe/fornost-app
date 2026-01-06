import tyr4679 from '@/assets/piknik/_TYR4679 (1).jpg';
import tyr5307_2 from '@/assets/piknik/_TYR5307 (2) (1).jpg';
import tyr5597 from '@/assets/piknik/_TYR5597 (1).jpg';
import tyr5628 from '@/assets/piknik/_TYR5628 (1).jpg';
import tyr5662 from '@/assets/piknik/_TYR5662 (1).jpg';
import tyr5757 from '@/assets/piknik/_TYR5757 (1).jpg';
import tyr5769 from '@/assets/piknik/_TYR5769 (1).jpg';
import tyr5792 from '@/assets/piknik/_TYR5792 (1).jpg';
import tyr5868 from '@/assets/piknik/_TYR5868 (1).jpg';
import tyr5888 from '@/assets/piknik/_TYR5888 (1).jpg';
import tyr5905 from '@/assets/piknik/_TYR5905 (1).jpg';
import tyr5913 from '@/assets/piknik/_TYR5913 (1).jpg';
import tyr5921 from '@/assets/piknik/_TYR5921 (1).jpg';
import tyr5968 from '@/assets/piknik/_TYR5968 (2) (1).jpg';
import tyr6009 from '@/assets/piknik/_TYR6009 (1).jpg';
import tyr6015 from '@/assets/piknik/_TYR6015 (1).jpg';
import tyr6019 from '@/assets/piknik/_TYR6019 (1).jpg';
import tyr6034 from '@/assets/piknik/_TYR6034 (1).jpg';
import tyr6042 from '@/assets/piknik/_TYR6042 (1).jpg';
import tyr6077 from '@/assets/piknik/_TYR6077 (1).jpg';
import tyr6087 from '@/assets/piknik/_TYR6087 (2) (1).jpg';
import tyr6123 from '@/assets/piknik/_TYR6123 (1).jpg';
import tyr6144 from '@/assets/piknik/_TYR6144 (1).jpg';
import tyr6241 from '@/assets/piknik/_TYR6241 (1).jpg';
import tyr6265 from '@/assets/piknik/_TYR6265 (1).jpg';
import tyr6274 from '@/assets/piknik/_TYR6274 (1).jpg';
import tyr6292 from '@/assets/piknik/_TYR6292 (1).jpg';
import tyr6320 from '@/assets/piknik/_TYR6320 (1).jpg';
import tyr6340 from '@/assets/piknik/_TYR6340 (1).jpg';
import tyr6413 from '@/assets/piknik/_TYR6413 (1).jpg';
import tyr6425 from '@/assets/piknik/_TYR6425 (1).jpg';
import tyr6443 from '@/assets/piknik/_TYR6443 (1).jpg';
import tyr6505 from '@/assets/piknik/_TYR6505 (1).jpg';
import tyr6564 from '@/assets/piknik/_TYR6564 (1).jpg';
import tyr6631 from '@/assets/piknik/_TYR6631 (1).jpg';
import tyr6634 from '@/assets/piknik/_TYR6634 (1).jpg';
import tyr6641 from '@/assets/piknik/_TYR6641 (1).jpg';
import tyr6675 from '@/assets/piknik/_TYR6675 (1).jpg';
import pijacySmok from '@/assets/piknik/pijacy-smok.jpg';
import tyr4937 from '@/assets/piknik/TYR4937.jpg';
import tyr5066 from '@/assets/piknik/TYR5066.jpg';
import tyr5192 from '@/assets/piknik/TYR5192.jpg';
import tyr5228 from '@/assets/piknik/TYR5228.jpg';
import tyr5279 from '@/assets/piknik/TYR5279.jpg';
import tyr5307 from '@/assets/piknik/TYR5307.jpg';
import tyr5459 from '@/assets/piknik/TYR5459.jpg';
import tyr5550 from '@/assets/piknik/TYR5550.jpg';
import { Gallery } from '@/components/Gallery';
import { KAROLINA_TUL_URL } from '@/edition_constants';

const images = [
  pijacySmok,
  tyr4937,
  tyr5066,
  tyr5192,
  tyr5228,
  tyr5279,
  tyr5307,
  tyr5459,
  tyr5550,
  tyr4679,
  tyr5307_2,
  tyr5597,
  tyr5628,
  tyr5662,
  tyr5757,
  tyr5769,
  tyr5792,
  tyr5868,
  tyr5888,
  tyr5905,
  tyr5913,
  tyr5921,
  tyr5968,
  tyr6009,
  tyr6015,
  tyr6019,
  tyr6034,
  tyr6042,
  tyr6077,
  tyr6087,
  tyr6123,
  tyr6144,
  tyr6241,
  tyr6265,
  tyr6274,
  tyr6292,
  tyr6320,
  tyr6340,
  tyr6413,
  tyr6425,
  tyr6443,
  tyr6505,
  tyr6564,
  tyr6631,
  tyr6634,
  tyr6641,
  tyr6675,
];

export function PiknikGallery() {
  return (
    <Gallery
      images={images}
      modalTitle="Piknik Tolkienowski 2025"
      photographer={{
        name: 'Karolina Tul-Jerominek',
        url: KAROLINA_TUL_URL,
      }}
    />
  );
}
