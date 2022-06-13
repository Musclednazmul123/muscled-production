import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: space-between;
  max-width: 130rem;
  margin: 20px auto;
  padding: 10px;
`;

export const Info = styled.div`
  color: white;
  margin: 40px 60px 40px 40px;
`;

export const CTA = styled.button`
  margin: 40px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0);
  border: 1px solid white;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  border-radius: 50px;
`;

export const Date = styled.div`
  font-size: 24px;
`;
export const Title = styled.div`
  font-size: 40px;
`;
export const Author = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;

export const Arrow = styled.img`
  position: absolute;
  right: 20px;
  height: 40px;
  width: 40px;
  top: calc(50% - 40px / 2);
`;

export const CardBody = styled.div`
  background-repeat: no-repeat;
  height: 528px;
  max-width: 600px;
  border-radius: 20px;
  position: relative;
`;
