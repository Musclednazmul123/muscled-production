import styled from 'styled-components';

export const OurWorkTitle = styled.h2`
  text-align: center;
  margin: auto;
  font-size: 40px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  overflow: hidden;
  .our-work-card-container {
    max-width: 30%;
  }
`;

export const OurWorkButton = styled.button`
  padding: 10px 20px;
  max-width: 120px;
  border-radius: 5px;
  border: 0px;
  font-size: 14px;
  margin: auto;
`;

export const OurWorkSection = styled.div`
  display: flex !important;
  flex-direction: column;
  max-width: 130rem;
  margin: 20px auto;
  gap: 40px;
`;
