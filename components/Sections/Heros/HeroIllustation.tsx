import React from 'react';
import Lottie from 'react-lottie';
import { Container } from 'Styles/heroIllustation.style';

export default function HeroIllustration(props: any) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} />
    </Container>
  );
}
