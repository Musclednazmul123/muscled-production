import styled from 'styled-components';
import { media } from 'utils/media';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin-bottom: 8rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.6rem;
  margin-bottom: 28px;

  ${media('<=tablet')} {
    font-size: 3.5rem;
    line-height: 4.8rem;
  }
`;

export const DetailsContainer = styled.div`
  font-size: 1.6rem;
  color: var(--text-lighter);
`;

export const MidDot = styled.span`
  &::before {
    display: inline-block;
    content: '\x000B7';
    margin: 0 0.6rem;
  }
`;
