import React from 'react';
import { Container, Description, Img, Info, Title } from 'Styles/serviceCard.style';

export default function ServiceCard(props: any) {
  return (
    <Container>
      <Img src={props.item.imgUrl} alt={props.item.cardtitle} />
      <Info>
        <Title>{props.item.cardtitle}</Title>
        <Description>{props.item.description}</Description>
      </Info>
    </Container>
  );
}
