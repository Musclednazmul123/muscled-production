import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import EmailSubmit from 'components/EmailSubmit';

const heroData = {

    OverTitle: 'Muscled Digital Agency',
    MainTitle: 'We make companies Muscular in Digital World',
    MainMedia: '',
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
  }



export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>{heroData.OverTitle}</CustomOverTitle>
        <Heading>{heroData.MainTitle}</Heading>
        {/* <Description>
          A metaverse that hosts UI Design, E-commerce and App Development services. We dare you to challenge our creativity.
        </Description> */}
        <CustomButtonGroup>
          {heroData.Buttons.map((button, index) => (
            <Button onClick={() => setIsModalOpened(true)} transparent = {button.transparent} >
            {button.name}  <span>&rarr;</span>
            </Button>
          ))}
          
          {/* <EmailSubmit /> */}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 74px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Redtext = styled.span`
  color: #D62F2F;

  ${media('<=tablet')} {

  }
`;
