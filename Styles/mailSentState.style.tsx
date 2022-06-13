import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }

  svg {
    width: 100%;
    height: 25rem;
  }

  p {
    font-size: 2.5rem;
    text-align: center;
  }
`;
