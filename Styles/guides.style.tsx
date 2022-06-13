import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  max-width: 130rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 85%;
  overflow: hidden;
  gap: 10px;
  padding: 10px 50px;
  position: relative;
`;

export const Page = styled.button`
  background-color: #ffffff;
  border: 1px solid #3e5661;
  border-radius: 3px;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
