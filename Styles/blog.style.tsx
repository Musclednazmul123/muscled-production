import styled from 'styled-components';

export const Container = styled.div`
  max-width: 130rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: auto;
  padding: 40px 10px;
`;
export const Heading = styled.div`
  max-width: 70%;
  margin: auto;
`;
export const Title = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
`;
export const Summary = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  .blog-card-container {
    max-width: 30%;
  }
`;
export const Button = styled.button`
  margin: auto;
  padding: 10px 30px;
  color: black;
  border-radius: 5px;
  border: 0px;
`;
