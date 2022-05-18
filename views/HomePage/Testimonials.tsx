import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: '/testimonials/company-logo-1.svg',
    content: `Really good. I am so pleased with this product. I didn't even need training.`,
    author: {
      name: 'Clyde Edwards',
      title: 'Very Serious Man',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/company-logo-2.svg',
    content: `It's really wonderful. I use saas product often. Thank You! Saas product has really helped our business.`,
    author: {
      name: 'Jimmy Hunter',
      title: 'Sigma Male University Graduate',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/company-logo-3.svg',
    content: `Since I invested in saas product I made over 100,000 dollars profits. It really saves me time and effort. saas product is exactly what our business has been lacking.`,
    author: {
      name: 'Marjorie Morgan',
      title: 'Chief Chad Officer',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <TestimonialsWrapper>
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
      <Separator />
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: white;
  padding: 40px 60px;
  gap: 40px;
  height: 320px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Content = styled.blockquote`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.6);
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
  gap: 10px;
`;

const AuthorTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.6);
`;

const AuthorName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.6);
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
