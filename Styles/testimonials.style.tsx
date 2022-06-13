import styled from 'styled-components';
import { media } from 'utils/media';
import Container from 'components/Elements/Container';

export const TestimonialsWrapper = styled(Container)`
  position: relative;
  margin: 40px auto;
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

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: white;
  padding: 40px 60px;
  gap: 40px;
  height: 320px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const Content = styled.blockquote`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.6);
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
  gap: 10px;
`;

export const AuthorTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.6);
`;

export const AuthorName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.6);
`;

export const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  margin: 10px auto;
`;

export const Description = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
`;

export const Heading = styled.div`
  margin: 40px auto;
  width: 75%;
`;
