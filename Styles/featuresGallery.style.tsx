import styled from 'styled-components';
import { media } from 'utils/media';
import Container from 'components/Elements/Container';

export const Title = styled.h2`
  text-align: left;
  font-size: 40px;
`;

export const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

export const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`;

export const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

export const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

export const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);
  .circle {
    height: 35px;
    width: 35px;
    border-radius: 35px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    background-color: red;
    color: white;
  }

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
