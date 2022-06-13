import styled from 'styled-components';
import { media } from 'utils/media';

export const Title = styled.h3`
  font-size: 2rem;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div<{ isActive: boolean }>`
  width: 2.4rem;
  transition: transform 0.3s;
  transform: rotateZ(${(p) => (p.isActive ? 180 : 0)}deg);
`;

export const Description = styled.div`
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: normal;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  ${media('<=desktop')} {
    width: 100%;
  }
`;
