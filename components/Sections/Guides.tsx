import GuideCard from 'components/Cards/GuideCard';
import React from 'react';
import { Container, Guides, Title } from 'Styles/guidesSection.style';
import { guideData } from '../../Data/guideData';

export default function GuidesSection() {
  const guides = guideData.slice(0, 3);
  return (
    <Container>
      <Title>Guides to get you started</Title>
      <Guides>
        {guides.map((guide, index) => (
          <GuideCard
            key={'guide-' + index}
            id={guide.id}
            title={guide.title}
            image={guide.image}
            width={30}
            description={guide.description}
          />
        ))}
      </Guides>
    </Container>
  );
}
