import NextImage from 'next/image';
import React from 'react';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TESTIMONIALS } from 'Data/testimonialsData';
import {
  AuthorContainer,
  AuthorContent,
  AuthorImageContainer,
  AuthorName,
  AuthorTitle,
  Content,
  Description,
  Heading,
  TestimonialCard,
  TestimonialsWrapper,
  Title,
} from 'Styles/testimonials.style';

type PropsI = {
  title?: string;
  description?: string;
};

export default function Testimonials(props: PropsI) {
  const { title, description } = props;
  return (
    <div>
      <TestimonialsWrapper>
        {title || description ? (
          <Heading>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Heading>
        ) : (
          ''
        )}
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                {/* <NextImage
                  src={singleTestimonial.companyLogoUrl}
                  alt={`${singleTestimonial.author.name}'s company logo`}
                  width={200}
                  height={40}
                /> */}
                <AuthorContainer>
                  <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={180} height={180} />
                  </AuthorImageContainer>
                  <AuthorContent>
                    <Content>“{singleTestimonial.content}”</Content>
                    <div>
                      <AuthorName>{singleTestimonial.author.name}</AuthorName>
                      <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                    </div>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
    </div>
  );
}
