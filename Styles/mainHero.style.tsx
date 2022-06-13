import ButtonGroup from 'components/Buttons/ButtonGroup';
import OverTitle from 'components/Elements/OverTitle';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from 'components/Elements/Container';

export const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding-top: 80px;
  padding-bottom: 80px;
  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

export const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-height: 100%;
    object-fit: contain;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 100%;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

export const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  width: 100%;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

export const Redtext = styled.span`
  color: #d62f2f;

  ${media('<=tablet')} {
  }
`;
