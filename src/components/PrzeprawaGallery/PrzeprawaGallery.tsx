import przepr9 from '@/assets/przepr/przepr_krolow_d1_-9.jpg';
import przepr15 from '@/assets/przepr/przepr_krolow_d1_-15.jpg';
import przepr29 from '@/assets/przepr/przepr_krolow_d1_-29.jpg';
import przepr39 from '@/assets/przepr/przepr_krolow_d1_-39.jpg';
import przepr46 from '@/assets/przepr/przepr_krolow_d1_-46.jpg';
import przepr50 from '@/assets/przepr/przepr_krolow_d1_-50.jpg';
import przepr78 from '@/assets/przepr/przepr_krolow_d1_-78.jpg';
import przepr115 from '@/assets/przepr/przepr_krolow_d1_-115.jpg';
import przepr130 from '@/assets/przepr/przepr_krolow_d1_-130.jpg';
import przepr136 from '@/assets/przepr/przepr_krolow_d1_-136.jpg';
import przepr155 from '@/assets/przepr/przepr_krolow_d1_-155.jpg';
import przepr156 from '@/assets/przepr/przepr_krolow_d1_-156.jpg';
import przepr166 from '@/assets/przepr/przepr_krolow_d1_-166.jpg';
import przepr168 from '@/assets/przepr/przepr_krolow_d1_-168.jpg';
import przepr169 from '@/assets/przepr/przepr_krolow_d1_-169.jpg';
import przepr173 from '@/assets/przepr/przepr_krolow_d1_-173.jpg';
import przepr177 from '@/assets/przepr/przepr_krolow_d1_-177.jpg';
import przepr179 from '@/assets/przepr/przepr_krolow_d1_-179.jpg';
import przepr185 from '@/assets/przepr/przepr_krolow_d1_-185.jpg';
import przeprd2_3 from '@/assets/przepr/przepr_krolow_d2_-3.jpg';
import przeprd2_10 from '@/assets/przepr/przepr_krolow_d2_-10.jpg';
import przeprd2_24 from '@/assets/przepr/przepr_krolow_d2_-24.jpg';
import przeprd2_34 from '@/assets/przepr/przepr_krolow_d2_-34.jpg';
import przeprd2_49 from '@/assets/przepr/przepr_krolow_d2_-49.jpg';
import przeprd2_63 from '@/assets/przepr/przepr_krolow_d2_-63.jpg';
import przeprd2_83 from '@/assets/przepr/przepr_krolow_d2_-83.jpg';
import przeprd2_101 from '@/assets/przepr/przepr_krolow_d2_-101.jpg';
import przeprd2_111 from '@/assets/przepr/przepr_krolow_d2_-111.jpg';
import przeprd2_116 from '@/assets/przepr/przepr_krolow_d2_-116.jpg';
import przeprd2_124 from '@/assets/przepr/przepr_krolow_d2_-124.jpg';
import przeprd2_173 from '@/assets/przepr/przepr_krolow_d2_-173.jpg';
import przeprd2_182 from '@/assets/przepr/przepr_krolow_d2_-182.jpg';
import przeprd2_253 from '@/assets/przepr/przepr_krolow_d2_-253.jpg';
import przeprd2_259 from '@/assets/przepr/przepr_krolow_d2_-259.jpg';
import przeprd2_274 from '@/assets/przepr/przepr_krolow_d2_-274.jpg';
import przeprd2_294 from '@/assets/przepr/przepr_krolow_d2_-294.jpg';
import przepr1 from '@/assets/przepr/przepr1.jpg';
import przepr2 from '@/assets/przepr/przepr2.jpg';
import przepr3 from '@/assets/przepr/przepr3.jpg';
import przepr4 from '@/assets/przepr/przepr4.jpg';
import { Gallery } from '@/components/Gallery';
import { MACIEJ_MARGIELSKI_URL } from '@/edition_constants';

const images = [
  przepr1,
  przepr2,
  przepr3,
  przepr4,
  przepr115,
  przepr130,
  przepr136,
  przepr15,
  przepr155,
  przepr156,
  przepr166,
  przepr168,
  przepr169,
  przepr173,
  przepr177,
  przepr179,
  przepr185,
  przepr29,
  przepr39,
  przepr46,
  przepr50,
  przepr78,
  przepr9,
  przeprd2_10,
  przeprd2_101,
  przeprd2_111,
  przeprd2_116,
  przeprd2_124,
  przeprd2_173,
  przeprd2_182,
  przeprd2_24,
  przeprd2_253,
  przeprd2_259,
  przeprd2_274,
  przeprd2_294,
  przeprd2_3,
  przeprd2_34,
  przeprd2_49,
  przeprd2_63,
  przeprd2_83,
];

export function PrzeprawaGallery() {
  return (
    <Gallery
      images={images}
      modalTitle="Przeprawa Królów - Gra Główna 2025"
      photographer={{
        name: 'Maciej Margielski',
        url: MACIEJ_MARGIELSKI_URL,
      }}
    />
  );
}
