import React, { useState, useEffect, useRef } from 'react';
import { range } from 'lodash';
import GuideCard from 'components/Cards/GuideCard';
import { guideData } from '../Data/guideData';

import { Title, SubTitle, Container, Info, CardsContainer, Pagination, Page } from 'Styles/guides.style';

const data = guideData;

export default function GuidePage() {
  let cardsperpage = 9;
  const [ActivePage, setActivePage] = useState(1);
  const [ActiveTab, setActiveTab] = useState(data);
  let totalpage = Math.ceil(data.length / cardsperpage);
  let pages = range(1, totalpage + 1);

  let items = ActiveTab.slice(ActivePage !== 0 ? cardsperpage * ActivePage - cardsperpage : 0, cardsperpage * ActivePage);

  useEffect(() => {
    setActivePage(1);
    return () => {
      setActivePage(1);
    };
  }, [ActiveTab]);

  return (
    <Container>
      <Info>
        <Title>Our Guide Process</Title>
        {/* {title} */}
        <SubTitle>Lorem ipsum dolor sit amet,sit amet consectetur </SubTitle>
      </Info>
      <CardsContainer>
        {items.map((data, index) => (
          <GuideCard id={data.id} title={data.title} image={data.image} description={data.description} width={30} key={index.toString()} />
        ))}
      </CardsContainer>

      <Pagination>
        <Page onClick={() => setActivePage(ActivePage > 1 ? ActivePage - 1 : 1)}>
          <img src="/grid-icons/prev.svg" />
        </Page>
        {pages.map((page, index) => (
          <Page key={'guides-paginate-' + index} onClick={() => setActivePage(page)}>
            {page}
          </Page>
        ))}
        <Page onClick={() => setActivePage(ActivePage < totalpage ? ActivePage + 1 : totalpage)}>
          <img src="/grid-icons/next.svg" />
        </Page>
      </Pagination>
    </Container>
  );
}
