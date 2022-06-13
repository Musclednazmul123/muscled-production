import React from 'react';
import { CircleBreak, Container } from 'Styles/elements.style';

type PropsI = {
  tag: string;
  className: string;
  content: string;
  media: string;
};

export default function Content(props: PropsI) {
  const { tag, className, content, media } = props;

  const breakTag = (
    <CircleBreak className="section__Break">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill="black" fillOpacity="0.75" />
      </svg>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill="black" fillOpacity="0.75" />
      </svg>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill="black" fillOpacity="0.75" />
      </svg>
    </CircleBreak>
  );

  const element =
    tag == 'break'
      ? breakTag
      : tag == 'img'
      ? React.createElement(tag, { className: className, src: media })
      : React.createElement(tag, { className: className }, content);

  return <Container>{element}</Container>;
}
