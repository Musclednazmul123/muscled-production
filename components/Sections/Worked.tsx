import React, { useEffect, useState } from 'react';
import { range } from 'lodash';
import Card from 'components/Cards/Card';
import { CardsContainer, Container, Info, PageNum, Pagination, Tab, Tabs, Title } from 'Styles/worked.style';
import { datas } from 'Data/workedData';

export default function Worked() {
  let cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(datas[0].data);
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
    <Container id="pagination">
      <Info>
        <Title>Our Work</Title>
        <Tabs>
          {datas.map((tab, index) => (
            <Tab key={'tab-data-' + index} onClick={() => setCurrentTab(tab.data)}>
              {tab.name}
            </Tab>
          ))}
        </Tabs>
      </Info>

      <CardsContainer>
        {items.map((work, index) => (
          <Card key={'Card-' + index} width={30} data={work} />
        ))}
      </CardsContainer>

      <Pagination>
        <a href="#pagination">
          <PageNum onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
            <img src="/grid-icons/prev.svg" />
          </PageNum>
        </a>
        {pages.map((page, index) => (
          <a href="#pagination" key={'our-work-paginate-' + index}>
            <PageNum onClick={() => setCurrentPage(page)}>{page}</PageNum>
          </a>
        ))}
        <a href="#pagination">
          <PageNum onClick={() => setCurrentPage(currentPage < totalpage ? currentPage + 1 : totalpage)}>
            <img src="/grid-icons/next.svg" />
          </PageNum>
        </a>
      </Pagination>
    </Container>
  );
}
