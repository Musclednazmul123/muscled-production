import React from 'react'
import styled from 'styled-components';

function Card() {
    const CardImg = '/grid-icons/asset-1.svg'
  return (
    <CardContainer>
         <img src={CardImg} alt="card-img" />
        <CardTitle>Ultricies id consectetur quis tellus nulla magna.</CardTitle>
        <CardCategory>Web App Development</CardCategory>
        <CardDate>27th May, 2022</CardDate>
    </CardContainer>
  )
}

export default Card


const CardContainer = styled.div`
    display: flex;
    max-width: 30%;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
 
`;

const CardTitle = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

`;


const CardCategory = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

`;

const CardDate = styled.small`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;