import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
  }
  .quote {
    font-size: 18px;
    font-weight: 700;
  }
  img {
    width: 100%;
    margin: 20px auto;
  }

  .section__Break {
    display: flex;
    flex-direction: row;
    gap: 60px;
    justify-content: center;
    align-items: center;
    width: 310px;
    margin: 40px auto;

    img {
      height: 10px;
      width: 10px;
    }
  }
`;
