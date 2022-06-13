import React from 'react';
import { CardCategory, CardDate, CardDescription, CardTitle, Container } from 'Styles/ourWorkCard.style';

type PropsI = {
  image: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  id: string;
};

export default function OurWorkCard(props: PropsI) {
  const Image = <img src={props.image} alt="card-img" />;
  const Title = <CardTitle>{props.title}</CardTitle>;
  const Category = <CardCategory>{props.category}</CardCategory>;
  const Description = <CardDescription>{props.description}</CardDescription>;
  const Date = <CardDate>{props.date}</CardDate>;

  return (
    <Container>
      {props.image ? Image : ''}
      {props.title ? Title : ''}
      {props.category ? Category : ''}
      {props.description ? Description : ''}
      {props.date ? Date : ''}
    </Container>
  );
}
