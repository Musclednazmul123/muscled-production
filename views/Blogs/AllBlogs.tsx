import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { range } from 'lodash';
import { Blogdata } from '../../Data/BlogData';
import BlogCard from 'components/Cards/BlogCard';
import { PageNum, Container, Title, CardsContainer, Pagination } from 'Styles/allBlogs.style';
const data = Blogdata;

export default function AllBlogs() {
  let cardsperpage = 9;
  const [ActivePage, setActivePage] = useState(1);
  let totalpage = Math.ceil(data.length / cardsperpage);
  let pages = range(1, totalpage + 1);
  let items = data.slice(ActivePage !== 0 ? cardsperpage * ActivePage - cardsperpage : 0, cardsperpage * ActivePage);

  return (
    <Container>
      <Title>All our blogs...</Title>
      <CardsContainer>
        {items.map((guide, index) => (
          <BlogCard
            key={'guide-cards-' + index}
            id={guide.id}
            image={guide.image}
            subtitle={guide.subtitle}
            title={guide.title}
            description={guide.description}
            profileimage={guide.profileimage}
            profilename={guide.profilename}
            profilesummary={guide.profilesummary}
            cardWidth={30}
          />
        ))}
      </CardsContainer>
      <Pagination>
        <PageNum onClick={() => setActivePage(ActivePage > 1 ? ActivePage - 1 : 1)}>
          <img src="/grid-icons/prev.svg" />
        </PageNum>

        {pages.map((page, index) => (
          <PageNum onClick={() => setActivePage(page)} key={'active-' + index}>
            {page}{' '}
          </PageNum>
        ))}

        <PageNum onClick={() => setActivePage(ActivePage < totalpage ? ActivePage + 1 : totalpage)}>
          <img src="/grid-icons/next.svg" />
        </PageNum>
      </Pagination>
    </Container>
  );
}
