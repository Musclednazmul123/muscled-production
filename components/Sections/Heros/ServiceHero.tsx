import { useEffect } from 'react';
import { Body, Container, Info, Media, Description, Background } from 'Styles/serviceHero.style';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type PropsI = {
  background: string;
  style?: string;
  subTitle: string;
  title: string;
  button: string;
  media?: string;
  cls?: string;
  url?: string;
  description?: string;
  gradient?: string;
};

export default function ServiceHero(props: PropsI) {
  const { background, cls, subTitle, title, button, media, url, description, style, gradient } = props;

  useEffect(() => {
    if (background != '') {
      var parallax = gsap.timeline();
      parallax.from('#animation', { scale: 2.5, duration: 1, scrub: 2 });

      ScrollTrigger.create({
        animation: parallax,
        trigger: '#animation',
        markers: true,
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 1,
      });
    }
  }, []);
  return (
    <Container>
      <Body style={media ? { bottom: '20px' } : { top: '20px' }}>
        <Info className={`${style} ${cls} cro-information`}>
          <div>
            <p>{subTitle}</p>
            <h1>{title}</h1>
            {description ? <Description>{description}</Description> : ''}
          </div>

          <button>{button}</button>
        </Info>
        {media ? <Media src={media} alt={title} /> : ''}
      </Body>

      <Background
        id="animation"
        style={{
          background: `${gradient ? gradient + ',' : ''} url(${background})`,
        }}
      ></Background>
    </Container>
  );
}
