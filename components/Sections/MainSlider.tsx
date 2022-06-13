import React, { ReactNode } from 'react';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderWrapper } from 'Styles/blogSlider.style';

type Props = {
  children: ReactNode;
};

export default function MainSlider(props: Props) {
  const { children } = props;

  return (
    <div>
      <SliderWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={4} autoplay={{ delay: 8000 }} centeredSlides={false} navigation loop>
          {children}
        </Swiper>
      </SliderWrapper>
    </div>
  );
}
