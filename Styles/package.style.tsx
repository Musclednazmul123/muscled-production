import styled from 'styled-components';

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  separator {
    border: 1px solid rgba(0, 0, 0, 0.8);
  }

  button {
    width: 100%;
    padding: 10px;
    border: 0px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }
  p {
    color: black;
  }
`;

export const Pages = styled.div`
  p {
    font-size: 24px;
    font-wight: 400;
  }
  .page {
    font-size: 48px;
    font-wight: 700;
    color: red;
  }
`;
export const Container = styled.div`
  .black {
    button {
      background-color: black !important;
      color: white;
    }
  }
  .red {
    p {
      color: red !important;
    }
    button {
      color: white;
      background-color: red;
    }
  }
  .price {
    font-size: 32px;
    font-wight: 700;
  }
  h3 {
    font-size: 24px;
    font-wight: 700;
  }
`;
