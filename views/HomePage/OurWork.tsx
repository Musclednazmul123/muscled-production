import React from 'react';
import styled from 'styled-components';

const works = [
    {
        workTitle:  "Ultricies id consectetur quis tellus nulla magna.",
        workImg: "/grid-icons/asset-1.svg",
        workCategory: "Web App Development",
        workDate: "27th May, 2022",
    },
    {
        workTitle:  "Ultricies id consectetur quis tellus nulla magna.",
        workImg: "/grid-icons/asset-1.svg",
        workCategory: "Web App Development",
        workDate: "27th May, 2022",
    },
    {
        workTitle:  "Ultricies id consectetur quis tellus nulla magna.",
        workImg: "/grid-icons/asset-1.svg",
        workCategory: "Web App Development",
        workDate: "27th May, 2022",
    },
    {
        workTitle:  "Ultricies id consectetur quis tellus nulla magna.",
        workImg: "/grid-icons/asset-1.svg",
        workCategory: "Web App Development",
        workDate: "27th May, 2022",
    },
    {
        workTitle:  "Ultricies id consectetur quis tellus nulla magna.",
        workImg: "/grid-icons/asset-1.svg",
        workCategory: "Web App Development",
        workDate: "27th May, 2022",
    },
    {
        workTitle:  "Ultricies id consectetur quis tellus nulla magna.",
        workImg: "/grid-icons/asset-1.svg",
        workCategory: "Web App Development",
        workDate: "27th May, 2022",
    },
]

export default function OurWork() {
  return (
    <div>
        <OurWorkSection>
            <OurWorkTitle>Our Work</OurWorkTitle>
            <CardsContainer>
                {works.map((work, index) =>
                    <CardContainer key={index.toString()} >
                        <img src={work.workImg} alt="card-img" />
                        <CardTitle>{work.workTitle}</CardTitle>
                        <CardCategory>{work.workCategory}</CardCategory>
                        <CardDate>{work.workDate}</CardDate>
                    </CardContainer>
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