import ServiceType from 'components/ServiceType';
import React from 'react'
import styled from 'styled-components';
import Blog from 'views/HomePage/Blog';
import FeaturesGallery from 'views/HomePage/FeaturesGallery'
import Hero from 'views/HomePage/Hero'

function DigitalWorkoutPage() {
  return (
    <DigitalWorkoutPageContainer>
        <Hero />
        <FeaturesGallery />
        <ServiceType />
        <Blog />


    </DigitalWorkoutPageContainer>
  )
}

export default DigitalWorkoutPage

const DigitalWorkoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`;