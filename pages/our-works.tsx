import React, { useEffect, useState } from 'react';
import OurWorkCard from 'components/Cards/OurWorkCard';
import { range } from 'lodash';
import { OurWorkTabs } from 'Data/ourWorkData';
import { CardsContainer, Container, Info, PageNum, Pagination, Tab, Tabs, Title } from 'Styles/ourWorks.style';

export default function OurWorkPage() {
  let cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(OurWorkTabs[0].data);
  let totalpage = Math.ceil(currentTab.length / cardsPerPage);
  let pages = range(1, totalpage + 1);

  let items = currentTab.slice(currentPage !== 0 ? cardsPerPage * currentPage - cardsPerPage : 0, cardsPerPage * currentPage);

  useEffect(() => {
    setCurrentPage(1);
    return () => {
      setCurrentPage(1);
    };
  }, [currentTab]);

  return (
    <Container id="our-works-page">
      <Info>
        <Title>Our Work</Title>
        <Tabs>
          {OurWorkTabs.map((work, index) => (
            <Tab onClick={() => setCurrentTab(work.data)} key={`tab-id-${index}`}>
              {work.tab}
            </Tab>
          ))}
        </Tabs>
      </Info>

      <CardsContainer>
        {items.map((work, index) => (
          <div className="our-work-card-container" key={work.id}>
            <OurWorkCard id={work.id} image={work.workImg} title={work.workTitle} category={work.workCategory} date={work.workDate} />
          </div>
        ))}
      </CardsContainer>

      <Pagination>
        <a href="#our-works-page">
          <PageNum onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
            <img src="/grid-icons/prev.svg" />
          </PageNum>
        </a>

        {pages.map((page, index) => (
          <a href="#our-works-page" key={'our-work-paginate-' + index}>
            <PageNum onClick={() => setCurrentPage(page)}>{page}</PageNum>
          </a>
        ))}
        <a href="#our-works-page">
          <PageNum onClick={() => setCurrentPage(currentPage < totalpage ? currentPage + 1 : totalpage)}>
            <img src="/grid-icons/next.svg" />
          </PageNum>
        </a>
      </Pagination>
    </Container>
  );
}
