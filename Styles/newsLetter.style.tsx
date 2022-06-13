import styled from 'styled-components';

export const Container = styled.div`
  max-width: 130rem;
  margin: 40px auto;
  padding: 50px;
  background-color: black;
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  h2 {
    font-size: 24px;
  }
  p {
    max-width: 520px;
    font-size: 14px;
  }
  .input {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-field {
    padding: 10px;
    width: 100%;
    border: 0px;
    margin-right: 20px;
    border-radius: 5px;
    font-size: 14px;
  }
  .button {
    padding: 10px 20px;
    border: 0px;
    border-radius: 5px;
    font-size: 14px;
    width: 150px;
    background-color: #6466e9;
    color: white;
  }
  form {
    display: flex;
    flex-direction: row;
  }
`;
