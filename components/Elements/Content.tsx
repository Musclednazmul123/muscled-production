import React, { useState } from 'react';
import { Container } from 'Styles/content.style';
import Elements from './Elements';
import Banner from '../Sections/Banners/Banner';

type PropsI = {
  data: [
    {
      tag: string;
      className: string;
      content: string;
      media: string;
    },
  ];
};

export default function BlogContent(props: PropsI) {
  const { data } = props;
  return (
    <Container>
      {data.map((content, index) => (
        <Elements
          key={'blog-data-' + index}
          tag={content.tag}
          className={content.className}
          content={content.content}
          media={content.media}
        />
      ))}

      <Banner />
    </Container>
  );
}
