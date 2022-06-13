import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 90rem;
  border-radius: 0.6rem;
  overflow: hidden;

  &::before {
    float: left;
    padding-top: 56.25%;
    content: '';
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Caption = styled.small`
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
`;
