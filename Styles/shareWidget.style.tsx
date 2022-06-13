import styled from 'styled-components';
import { media } from 'utils/media';

export const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  position: sticky;
  align-items: flex-start;
  margin-left: -10rem;
  margin-top: -22.4rem;
  top: 50%;
  z-index: var(--z-sticky);
  transform: translateY(-50%);

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=largeDesktop')} {
    transform: translateY(-50%) scale(0.8);
  }

  ${media('<=desktop')} {
    display: none;
  }
`;
