import styled from 'styled-components';

export const Container = styled.div`
  height: 720px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;

export const Info = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
`;

export const SubTitle = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 10px 40px;
  margin-top: 10px;
  border: 0px;
  background-color: #000000;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const BgImg = styled.img`
  position: absolute;
  width: 100%;
  bottom: -140px;
  z-index: -1;
`;
