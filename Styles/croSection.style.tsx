import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  max-width: 130rem;
  margin: auto;
  padding: 20px;
`;

export const Image = styled.img`
  width: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
`;

export const Heading = styled.div``;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const Button = styled.button`
  max-width: 160px;
  padding: 10px 20px;
  font-size: 14px;
  border: 0px;
  background-color: #1672ff;
  border-radius: 5px;
  color: white;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
`;
export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;
