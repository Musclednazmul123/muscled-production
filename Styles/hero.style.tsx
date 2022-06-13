import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 600px !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  color: white;

  .Info {
    width: 1240px;
    margin: auto;
    padding-right: 440px;

    h1 {
      font-size: 32px;
      max-width: 1240px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
