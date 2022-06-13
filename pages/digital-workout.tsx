import ServiceType from 'views/DigitalWorkoutPage/ServiceType';
import React from 'react';
import Blog from 'components/Sections/Blog';
import FeaturesGallery from 'components/Sections/FeaturesGallery';
import MainHero from 'components/Sections/MainHero';
import { Container } from 'Styles/digitalWorkout.style';

export default function DigitalWorkoutPage() {
  return (
    <Container>
      <MainHero />
      {/* <FeaturesGallery /> */}
      <ServiceType />
      <Blog />
    </Container>
  );
}
