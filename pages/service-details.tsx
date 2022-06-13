import React from 'react';
import MainHero from 'components/Sections/MainHero';
import OurWork from 'components/Sections/OurWork';
import Blog from 'components/Sections/Blog';
import Cro from 'views/ServiceDetailsPage/Cro';
import { Container } from 'Styles/serviceDetails.style';

export default function ServiceDetailsPage() {
  return (
    <Container>
      <MainHero />
      <OurWork />
      <Cro />
      <Blog />
    </Container>
  );
}
