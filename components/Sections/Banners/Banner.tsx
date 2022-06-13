import React from 'react';
import { Container } from 'Styles/banner.style';

export default function Banner() {
  const bg = '/grid-icons/BlogDetailsBanner.png ';

  return (
    <Container
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
      }}
    >
      <div className="banner-info">
        <h2>Get a quote from us</h2>
        <p>UI Design, Shopify Store or Shopify App</p>
        <button>Get a Quote</button>
      </div>
    </Container>
  );
}
