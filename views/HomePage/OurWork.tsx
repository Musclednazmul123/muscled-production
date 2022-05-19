import Card from 'components/Card';
import React from 'react';
import styled from 'styled-components';

const numbers = [1,2,3,4,5,6]

export default function OurWork() {
  return (
    <div>
        <OurWorkSection>
            <OurWorkTitle>Our Work</OurWorkTitle>
            <CardsContainer>
                {numbers.map((number, index) =>
                    <Card key={index.toString()} />
                )}
            </CardsContainer>
            
            <OurWorkButton>See More</OurWorkButton>
        </OurWorkSection>

    </div>
    
  )
}


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
    padding: 10px 20px;
    max-width: 120px;
    border-radius: 5px;
    border: 0px;
    font-size: 14px;
    margin: auto;

`;

const OurWorkSection = styled.div`
    display: flex !important;
    flex-direction: column;
    max-width: 130rem;
    margin: 20px auto;
    gap: 40px;
`;


