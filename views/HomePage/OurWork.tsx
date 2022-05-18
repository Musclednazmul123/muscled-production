import Card from 'components/Card'
import React from 'react'
import styled from 'styled-components';

function OurWork() {
  return (
    <OurWorkContainer>
        <OurWorkTitle>Our Work</OurWorkTitle>
        <CardsContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsContainer>
        
        <OurWorkButton>See More</OurWorkButton>
    </OurWorkContainer>
  )
}

export default OurWork

const OurWorkContainer = styled.div`
    display: flex;
    max-width: 130rem;
    margin: 20px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
 
`;

const OurWorkTitle = styled.h2`
    Text-align: center;
    margin: auto;
    font-size: 40px;
 
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
 
`;

const OurWorkButton = styled.button`
    padding: 10px 30px;
    margin: 20px auto;
    border-radius: 5px;
    border: 0px;
`;


