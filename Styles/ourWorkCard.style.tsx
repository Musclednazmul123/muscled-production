import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;

export const CardCategory = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

export const CardDate = styled.small`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;
