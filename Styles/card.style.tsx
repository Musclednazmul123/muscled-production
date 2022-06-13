import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
background-color: #f5f5f5;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
.main-image {
  height: 400px;
  background: #7a7a7a;
  border-radius: 5px;
}
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
}
p {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
}
`;

export const Button = styled.button`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: center;
align-items: center;
width: 220px;
padding: 10px 20px;
font-size: 14px;
border: 0;
background-color: white;
border-radius: 5px;
cursor: pointer;
img {
  height: 16px;
}
`;
