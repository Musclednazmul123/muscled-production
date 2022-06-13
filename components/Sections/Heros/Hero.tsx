import React from 'react';
import styled from 'styled-components';
import { Container, Date } from 'Styles/hero.style';

export default function BlogHero(props: any) {
  return (
    <Container
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
      }}
    >
      <div className="Info">
        <p>{props.breadcromb}</p>
        <h1>{props.title}</h1>
        <Date>{props.date}</Date>
      </div>
    </Container>
  );
}
