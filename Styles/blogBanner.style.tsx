import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1240px;
  margin: 40px auto;
  height: 320px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 120px;
  border-radius: 10px;
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h2 {
      font-size: 24px;
      color: white;
    }
    p {
      font-size: 14px;
      color: white;
    }
  }
  button {
    font-size: 18px;
    padding: 10px 20px;
    color: white;
    background-color: black;
    border-radius: 80px;
  }
`;
