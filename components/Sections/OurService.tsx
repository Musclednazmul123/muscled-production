import React, { useEffect } from 'react';
import BasicSection from 'components/Sections/BasicSection';
import { Services } from 'Data/ourServicesData';

import {
  Container,
  Description,
  Itemscontainer,
  ItemsInfo,
  ItemsInfoDescription,
  ItemsInfoTitle,
  OurServiceContainer,
  OurServiceTitle,
  ServiceDescription,
  ServiceHead,
} from 'Styles/ourServices.style';

export default function OurService() {
  return (
    <OurServiceContainer>
      <ServiceHead>
        <OurServiceTitle className="serviceText">Our Services</OurServiceTitle>
        <ServiceDescription className="serviceText">
          We provide Shopify services from theme audits, revisions and custom development to shopify app devleopment and Shopify branding through Paid Ads, SEO and Influencer Marketing. 
        </ServiceDescription>
      </ServiceHead>
      {Services.map((singleService, index) => (
        <BasicSection
          imageUrl={singleService.imageUrl}
          title={singleService.title}
          reversed={index % 2 == 0 ? true : false}
          key={'singleServices-' + index.toString()}
        >
          <Container>
            <Description className={index % 2 == 0 ? 'basic-section-content-rev' : 'basic-section-content'}>
              {singleService.description}
            </Description>
            {singleService.items.map((singleItem, idx) => (
              <Itemscontainer
                className={index % 2 == 0 ? 'basic-section-content-rev' : 'basic-section-content'}
                key={'singleItems-' + idx.toString()}
              >
                <img src={singleItem.icon} width="40" alt="Icon" />
                <ItemsInfo>
                  <ItemsInfoTitle>{singleItem.itemtitle}</ItemsInfoTitle>
                  <ItemsInfoDescription>{singleItem.itemdesc}</ItemsInfoDescription>
                </ItemsInfo>
              </Itemscontainer>
            ))}
          </Container>
        </BasicSection>
      ))}
    </OurServiceContainer>
  );
}
