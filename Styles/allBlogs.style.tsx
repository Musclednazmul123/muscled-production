import styled from 'styled-components';

export const Container = styled.div`
  max-width: 130rem;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Title = styled.h2`
  font-size: 30px;
  padding-left: 10px;
  width: 100%;
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

export const PageNum = styled.button`
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
