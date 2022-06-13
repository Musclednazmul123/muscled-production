import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-size: 100% 100% !important;

  .banner-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    width: 100%;

    button {
      margin-top: 10px;
      border-radius: 50px;
      font-size: 18px;
      padding: 10px 20px;
      border: 0px;
      background-color: #c40000;
      color: white;
    }
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
  }
`;
