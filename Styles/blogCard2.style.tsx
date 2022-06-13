import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Body = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .name {
    font-size: 16px;
    padding: 5px 10px;
  }
`;

export const SubTitle = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p,
  small {
    font-size: 14px;
  }
  .sub-title {
    color: red;
  }
`;
