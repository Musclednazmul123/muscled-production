import React from 'react';
import styled from 'styled-components';

interface Props {
    heading : string
    onClick: () => void
}

const WebCard = ({ heading, onClick } : Props ) => {
  return (
    <WebCardDiv onClick={onClick} >
      <SvgDiv></SvgDiv>
      <p> {heading} </p>
    </WebCardDiv>
  );
};

export default WebCard;

const SvgDiv = styled.div`
height: 140px;
width: 220px;
`;

const WebCardDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color:grey
`;
