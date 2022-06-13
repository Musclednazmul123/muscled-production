import Button from 'components/Buttons/Button';
import RichText from 'Styles/RichText';
import styled from 'styled-components';
import { media } from 'utils/media';

export const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: rgb(var(--cardBackground));
  box-shadow: ${(p) => (p.isOutlined ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
  transform: ${(p) => (p.isOutlined ? 'scale(1.1)' : 'scale(1.0)')};
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=desktop')} {
    box-shadow: var(--shadow-md);
    transform: none;
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  }
`;

export const Title = styled.h3`
  font-size: 4rem;
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-size: 2.5rem;
`;

export const PriceContainer = styled.div`
  margin: auto;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;

  span {
    font-size: 2rem;
    font-weight: normal;
  }
`;

export const CustomRichText = styled(RichText)`
  li {
    margin: auto;
    width: fit-content;
  }
`;

export const CustomButton = styled(Button)`
  width: 100%;
`;
