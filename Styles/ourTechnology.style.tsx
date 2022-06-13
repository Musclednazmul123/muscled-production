import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 130rem;
  margin: 40px auto;
  h2 {
    font-size: 40px;
  }
  img {
    height: 100px;
    cursor: pointer;
  }
  .logo-container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
`;
