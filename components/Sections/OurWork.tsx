import OurWorkCard from 'components/Cards/OurWorkCard';
import { works } from 'Data/worksData';
import React, { useEffect } from 'react';
import { OurWorkSection, OurWorkTitle, CardsContainer, OurWorkButton } from 'Styles/ourWork.style';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
  useEffect(() => {
    ScrollTrigger.batch('.our-work-card-container', {
      interval: 0.2,
      batchMax: 3,
      start: 'top 95%',
      end: 'center 5%',

      onEnter: (batch: any) => {
        gsap.from(batch, { y: 250, duration: 0.6, opacity: 0.2, stagger: 0.2 });
      },
      onEnterBack: (batch: any) => {
        gsap.from(batch, { y: -250, duration: 0.6, opacity: 0.2, stagger: 0.2 });
      },
    });
  }, []);
  return (
    <div>
      <OurWorkSection id="our-work-section-content">
        <OurWorkTitle>Our Work</OurWorkTitle>
        <CardsContainer>
          {works.map((work, index) => (
            <div key={`${work.id}`} className="our-work-card-container">
              <OurWorkCard
                image={work.image}
                title={work.title}
                description={work.description}
                category={work.category}
                date={work.date}
                id={work.id}
              />
            </div>
          ))}
        </CardsContainer>
        <OurWorkButton>See More</OurWorkButton>
      </OurWorkSection>
    </div>
  );
}
