import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Description, Img, Info, Title } from 'Styles/guideCard.style';

type PropsI = {
  id: string;
  title: string;
  image: string;
  width: number;
  description: string;
};

export default function GuideCard(props: PropsI) {
  const { id, title, image, width, description } = props;

  const [cardWidth, setcardWidth] = useState(30);
  useEffect(() => {
    setcardWidth(width);
  }, []);
  return (
    <Link href={`/guide/${id}`} passHref>
      <Container style={{ maxWidth: `${cardWidth}%` }}>
        <Img src={image} />
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
      </Container>
    </Link>
  );
}
