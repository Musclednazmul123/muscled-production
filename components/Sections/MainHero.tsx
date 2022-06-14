import React, { useEffect, useRef, useState } from 'react';
import Button from 'components/Buttons/Button';
import HeroIllustration from 'components/Sections/Heros/HeroIllustation';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import * as heroAnimation from 'components/Animation/lf20_gtauehoe.json';
import { Contents, CustomButtonGroup, CustomOverTitle, Description, Heading, HeroWrapper, ImageContainer } from 'Styles/mainHero.style';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroData = {
  OverTitle: 'Muscled Digital Agency',
  MainTitle: 'We make companies Muscular in Digital World',
  Description: 'A metaverse that hosts UI Design, E-commerce and App Development services. We dare you to challenge our creativity.',
  MediaFile: heroAnimation,
  Buttons: [
    {
      name: 'Sign Up For Beta Release',
      Urlto: '',
      transparent: false,
    },
    {
      name: 'Unpuzzle vs. All',
      Urlto: '',
      transparent: true,
    },
  ],
};

//this comment is added

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  useEffect(() => {
    gsap.from('.heroText', {
      opacity: 0.2,
      duration: 0.6,
      scale: 2,
      y: -50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.heroText',
        start: 'center bottom',
        end: 'center top',
        toggleActions: 'restart none restart none',
      },
    });

    gsap.from('.heroMedia', {
      opacity: 0.2,
      scale: 2,
      duration: 0.6,
      y: 150,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.heroMedia',
        start: 'center bottom',
        end: 'center top',
        toggleActions: 'restart none restart none',
      },
    });
  }, []);

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle className="heroText">{heroData.OverTitle}</CustomOverTitle>
        <Heading className="heroText">{heroData.MainTitle}</Heading>
        <Description className="heroText">{heroData.Description}</Description>
        {/* <EmailSubmit /> */}

        <CustomButtonGroup>
          {heroData.Buttons.map((button, index) => (
            <Button key={'hero-button' + index} onClick={() => setIsModalOpened(true)} transparent={button.transparent}>
              {button.name} <span>&rarr;</span>
            </Button>
          ))}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer className={'heroMedia'}>
        <HeroIllustration Animation={heroData.MediaFile} />
      </ImageContainer>
    </HeroWrapper>
  );
}
