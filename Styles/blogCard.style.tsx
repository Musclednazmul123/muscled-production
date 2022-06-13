import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  cursor: pointer;
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`;

export const Heading = styled.div``;

export const Author = styled.div`
  display: flex;
  flex-dirextion: row;
  gap: 20px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
  background-color: #c4c4c4;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
`;

export const AuthorInfo = styled.div``;

export const Name = styled.p`
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

export const Summary = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
`;
