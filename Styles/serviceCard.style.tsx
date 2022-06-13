import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  max-width: 30%;
  padding: 40px 20px;
  background-color: #2d3748;
  border-radius: 10px;
  color: white;
`;

export const Img = styled.img`
  height: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 18px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 14px;
`;
