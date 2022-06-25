import NextImage from 'next/image';
import React, { useState } from 'react';
import Collapse from 'components/Icons/Collapse';

// import SectionTitle from 'components/Elements/SectionTitle';
import {
  CircleContainer,
  Content,
  FeaturesGalleryWrapper,
  GalleryWrapper,
  ImageContainer,
  Tab,
  TabContent,
  TabsContainer,
  TabTitleContainer,
  Title,
} from 'Styles/featuresGallery.style';

export default function FeaturesGallery(props: any) {
  const [currentTab, setCurrentTab] = useState(props.data.tabs[0]);

  const imagesMarkup = props.data.tabs.map((singleTab: any, idx: any) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        <NextImage src={singleTab.imageUrl} alt={singleTab.title} layout="fill" objectFit="contain" priority={isFirst} />
      </ImageContainer>
    );
  });

  const tabsMarkup = props.data.tabs.map((singleTab: any, idx: any) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            {/* <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} /> */}
            <div className={isActive ? 'circle active' : 'circle'}>{idx + 1}</div>
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(props.data.tabs[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <Content>
        {/* <OverTitle>features</OverTitle> */}
        <Title>{props.data.title}</Title>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}
