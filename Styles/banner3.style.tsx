import styled from 'styled-components';

export const Container = styled.div`
  max-width: 130rem;
  margin: 40px auto;
  height: 420px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  .red {
    background-color: red;
    color: white;
    border-radius: 10px;
    margin-top: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  width: 75%;
`;
export const Summary = styled.p`
  font-size: 18px;
  text-align: center;
  width: 55%;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
`;
