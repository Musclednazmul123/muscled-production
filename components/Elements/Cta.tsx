import NextLink from 'next/link';
import React from 'react';
import Button from 'components/Buttons/Button';
import ButtonGroup from 'components/Buttons/ButtonGroup';
import Container from 'components/Elements/Container';
import OverTitle from 'components/Elements/OverTitle';
import SectionTitle from 'Styles/SectionTitle';
import { CtaWrapper, Description, OutlinedButton, Stack } from 'Styles/cta.style';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Hello world!!!</OverTitle>
          <SectionTitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus delectus?</SectionTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae accusamus deleniti nihil quas tempora numquam, vitae
            culpa.
          </Description>
          <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button>
                Subscribe to the newsletter <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}
