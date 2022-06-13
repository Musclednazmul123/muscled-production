import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }

  hr {
    height: 30px;
    width: 10px;
    margin: 0px;
    border: 0px;
    background-color: var(--logoColor);
  }
`;

export const Card = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 5px;
  width: 100%;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;

  img {
    height: 100px;
    width: 100px;
  }

  $:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Info = styled.div`
  h3 {
    font-size: 16px;
    color: black;
  }
  p {
    font-size: 14px;
    color: black;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
