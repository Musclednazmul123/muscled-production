import React, { useEffect, useRef, useState } from 'react';
import Button from 'components/Buttons/Button';
import HeroIllustration from 'components/Sections/Heros/HeroIllustation';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import * as heroAnimation from 'components/Animation/lf20_gtauehoe.json';
import { Contents, CustomButtonGroup, CustomOverTitle, Description, Heading, HeroWrapper, ImageContainer } from 'Styles/mainHero.style';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import { ScheduleCall } from './Schedule/ScheduleCall';

gsap.registerPlugin(ScrollTrigger);

const heroData = {
  OverTitle: 'Muscled Digital Agency',
  MainTitle: 'We make Shopify brands 💪🏾 in the CRO, SEO, Paid Ads, Website and App Development world.',
  Description: 'We are a highly sophisticated, first principles approach E-commerce agency. Track data, read data, make decisions based on data. We observe data through various digital workouts.',
  MediaFile: heroAnimation,
  Buttons: [
    {
      name: 'Schedule A Call',
      Urlto: '',
      transparent: false,
    },
    {
      name: 'App Development',
      Urlto: '',
      transparent: true,
    },
  ],
};

//this comment is added

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();
  const router = useRouter();


  useEffect(() => {

    if (router.asPath==='/'){
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
    }

    


  }, []);

  return (
    <HeroWrapper id='animation'>
      <Contents>
        <CustomOverTitle className="heroText">{heroData.OverTitle}</CustomOverTitle>
        <Heading className="heroText">{heroData.MainTitle}</Heading>
        <Description className="heroText">{heroData.Description}</Description>
        {/* <EmailSubmit /> */}

        <CustomButtonGroup>
          
        <ScheduleCall />


          {/* {heroData.Buttons.map((button, index) => (
            <Button key={'hero-button' + index} onClick={() => setIsModalOpened(true)} transparent={button.transparent}>
              {button.name} <span>&rarr;</span>
            </Button>
          ))} */}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer className={'heroMedia'}>
        <HeroIllustration Animation={heroData.MediaFile} />
      </ImageContainer>
    </HeroWrapper>
  );
}
