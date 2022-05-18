import React from 'react'
import styled from 'styled-components';
import FeaturesGallery from 'views/HomePage/FeaturesGallery'
import Hero from 'views/HomePage/Hero'

function DigitalWorkoutPage() {
  return (
    <DigitalWorkoutPageContainer>
        <Hero />
        <FeaturesGallery />


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