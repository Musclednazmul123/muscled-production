import React from 'react';
import { Container } from 'Styles/blogBanner.style';

export default function Banner() {
  const bg = '/grid-icons/background.png ';
  const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const subTitle = 'More with us';
  const button = 'Schedule a Call';

  return (
    <Container
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
      }}
    >
      <div>
        <p>{subTitle}</p>

        <h2>{title}</h2>
      </div>
      <button>{button}</button>
    </Container>
  );
}
