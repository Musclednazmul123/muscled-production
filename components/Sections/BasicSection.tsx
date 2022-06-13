import NextImage from 'next/image';
import React, { PropsWithChildren, ReactNode, useEffect } from 'react';
import { Wrapper, Image, Content, Child, Title } from 'Styles/basicSection.style';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface PropsI {
  imageUrl: string;
  title: string;
  overTitle?: string;
  reversed?: boolean;
  children: ReactNode;
}

export default function BasicSection({ imageUrl, title, reversed, children }: PropsI) {
  useEffect(() => {
    ScrollTrigger.batch('.basic-section-image', {
      onEnter: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: -1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
      onEnterBack: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: -1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
    });

    ScrollTrigger.batch('.basic-section-image-rev', {
      onEnter: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: 1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
      onEnterBack: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: 1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
    });
    ScrollTrigger.batch('.basic-section-content', {
      onEnter: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: 1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
      onEnterBack: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: 1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
    });

    ScrollTrigger.batch('.basic-section-content-rev', {
      onEnter: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: -1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
      onEnterBack: (elements, triggers) => {
        gsap.fromTo(elements, { opacity: 0, scale: 0, x: -1000 }, { opacity: 1, duration: 1.3, scale: 1, x: 0, stagger: 0.15 });
      },
    });
  }, []);

  return (
    <Wrapper reversed={reversed}>
      <Image className={reversed ? 'basic-section-image-rev' : 'basic-section-image'}>
        <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </Image>
      <Content>
        {/* <CustomOverTitle>{overTitle}</CustomOverTitle> */}
        <Title className={reversed ? 'basic-section-content-rev' : 'basic-section-content'}>{title}</Title>
        <Child>{children}</Child>
      </Content>
    </Wrapper>
  );
}
