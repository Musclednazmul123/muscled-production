import NextImage from 'next/image';
import React from 'react';
import { PartnersWrapper, Title } from 'Styles/partners.style';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const PARTNER_LOGOS = [
  'logoipsum-logo-1.svg',
  'logoipsum-logo-2.svg',
  'logoipsum-logo-3.svg',
  'logoipsum-logo-4.svg',
  'logoipsum-logo-5.svg',
  'logoipsum-logo-6.svg',
  'logoipsum-logo-7.svg',
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>official partners with</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={`/partners/${logo}`} alt={normalizePartnerLogoName(logo)} width={128} height={128} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}
