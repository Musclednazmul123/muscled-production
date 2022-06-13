import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Item = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 10px 40px;
  cursor: pointer;
  border-radius: 5px;
  width: 410px;
  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
  button {
    background-color: rgba(255, 255, 255, 0);
    border: 0px;
    font-size: 18px;
    cursor: pointer;
  }
  .CatagoryItemCount {
    padding: 5px 10px;
    width: 60px;
    line-height: 21px;
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    color: white;
    background: rgba(27, 73, 190, 1);
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }
  hr {
    height: 30px;
    width: 10px;
    margin: 0px;
    border: 0px;
    background-color: var(--logoColor);
  }
`;
