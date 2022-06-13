import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: flex-start;
  align-items: center;
  color: black;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin: auto;
  background-color: white;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

export const Img = styled.img`
  width: 100%;
  height: 280px;
  border: 0px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 150%;
`;
