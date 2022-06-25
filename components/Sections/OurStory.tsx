import React from 'react';
import { Arrow, Author, CardBody, Container, CTA, Date, Info, Title } from 'Styles/ourStory.style';

export default function OurStory() {
  const arrow = '/grid-icons/ourStoryArrow.svg';
  const background = '/grid-icons/bg1.png';
  return (
    <Container>
      <CardBody style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${background})` }}>
        <CTA>Trending Story</CTA>
        <Info>
          <Date>24th October</Date>
          <Title>How it is like to work remotely for a Digital Agency?</Title>
          <Author>- Robb Stark</Author>
        </Info>
        <Arrow src={arrow} />
      </CardBody>
      <CardBody style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${background})` }}>
        <CTA>Trending Story</CTA>
        <Info>
          <Date>24th October</Date>
          <Title>How it is like to work remotely for a Digital Agency?</Title>
          <Author>- Robb Stark</Author>
        </Info>
        <Arrow src={arrow} />
      </CardBody>
    </Container>
  );
}
