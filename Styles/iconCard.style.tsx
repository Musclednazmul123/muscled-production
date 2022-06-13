import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background: rgba(233, 233, 233, 0.25);
  border-radius: 20px;

  h3 {
    text-align: center;
    width: 170px;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
  }
  img {
    height: 80px;
  }
`;
