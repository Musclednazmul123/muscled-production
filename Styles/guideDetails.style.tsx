import styled from 'styled-components';

export const Container = styled.div`
  .Content {
    max-width: 1240px;
    margin: 80px auto;
    display: flex;
    flex-direction: row;
    gap: 80px;

    .right-side-bar {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
`;
