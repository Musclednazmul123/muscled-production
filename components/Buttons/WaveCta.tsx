import NextLink from 'next/link';
import styled from 'styled-components';

import ButtonGroup from 'components/Buttons/ButtonGroup';
import Container from 'components/Elements/Container';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { CtaWrapper, CustomButtonGroup, OutlinedButton, Title } from 'Styles/waveCta.style';
import { Button } from 'tinacms';

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0A121E"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <CtaWrapper>
        <Container>
          <Title>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus delectus?</Title>
          <CustomButtonGroup>
            <Button onClick={() => setIsModalOpened(true)}>
              Subscribe to the newsletter <span>&rarr;</span>
            </Button>
            <NextLink href="/features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}
