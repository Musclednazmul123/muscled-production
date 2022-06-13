import styled from "styled-components";

export const Container = styled.div`
  max-width: 130rem;
  margin: 40px auto;
  .title,
  .description {
    max-width: 60%;
    text-align: center;
    margin: 5px auto;
  }
  .description {
    font-size: 14px;
  }
  .title {
    font-size: 40px;
  }
`;