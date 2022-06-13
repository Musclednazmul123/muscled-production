import styled from 'styled-components';

export const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 5rem;
  }
  .anim-one {
    height: 600px;
    background-color: blue;
  }
`;

export const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

export const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;
