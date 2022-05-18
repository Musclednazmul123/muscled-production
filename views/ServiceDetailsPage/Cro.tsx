import React from 'react'
import styled from 'styled-components';

function Cro() {
    const croImg = "/demo-illustration-5.png"
  return (
    <CroContainer>
        <CroImg src={croImg} alt='Croimg' />
        <CroInfo>
            <CroTitle>
                <CroSubHeading>Ultricies id consectetur quis tellus nulla magna.</CroSubHeading>
                <CroHeading>Learn more about our success in CRO</CroHeading>
            </CroTitle>

            <CroDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie ac tempor arcu nibh erat. Egestas magna purus id imperdiet sit mattis vitae in. Risus donec ullamcorper enim, proin sodales tempus eget faucibus. Non sapien dui massa risus massa. Eget ornare curabitur nec odio eget tellus sollicitudin feugiat phasellus. Quam facilisi velit sodales varius tincidunt si</CroDescription>

            <CroButton>Learn More</CroButton>
        </CroInfo>
        
    </CroContainer>
  )
}

export default Cro

const CroContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  max-width: 130rem;
  margin: auto;
  padding: 20px;
`;

const CroImg = styled.img`
    width: 50%;
  
`;

const CroInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
  
`;

const CroTitle = styled.h2`
  
`;

const CroDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  
`;

const CroButton = styled.button`
    max-width: 160px;
    padding: 10px 20px;
    font-size: 14px;
    border: 0px;
    background-color: #1672FF;
    border-radius: 5px;
    color: white;
  
`;

const CroHeading = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
  
`;
const CroSubHeading = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  
`;