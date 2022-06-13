import React from 'react';
import { BgImg, Info, Container, Title, SubTitle, Button } from 'Styles/blogHero.style';

const bgimg = '/grid-icons/BlogPageBanner.svg';

export default function BlogHeroSection() {
  return (
    <Container>
      <Info>
        <Title>5 Things To Do When Creating A Loom Video</Title>
        <SubTitle>Lorem Ipsum</SubTitle>
        <Button>READ BLOG</Button>
      </Info>

      <BgImg src={bgimg} />
    </Container>
  );
}
