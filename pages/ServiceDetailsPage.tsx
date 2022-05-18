import React from 'react'
import Hero from 'views/HomePage/Hero'
import OurWork from 'views/HomePage/OurWork'
import styled from 'styled-components';
import Blog from 'views/HomePage/Blog';
import Cro from 'views/ServiceDetailsPage/Cro';


function ServiceDetailsPage() {
  return (
    <ServiceDetailsPageContainer>
        <Hero />
        <OurWork />
        <Cro />
        <Blog />
    </ServiceDetailsPageContainer>
  )
}

export default ServiceDetailsPage

const ServiceDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;