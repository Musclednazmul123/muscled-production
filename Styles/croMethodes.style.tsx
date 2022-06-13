import styled from 'styled-components';

export const Container = styled.div`
  max-width: 130rem;
  margin: 40px auto;
  display: flex;
  justify-content: flex-start;
  gap: 0px;
  flex-wrap: wrap;
  .lightblue {
    background: lightblue;
  }
  .darkblue {
    background: #3a618c;
  }
  .desaturatedblue {
    background: #739ac5;
  }

  .moderateblue {
    background: #5d84af;
  }
`;

export const TitleWrapper = styled.div`
  height: 300px;
  width: ${(100 / 6) * 2}%;
  border-width: 2px 0px 0px 2px;
  border-style: solid;
  border-color: #4b729d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .over-title {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }
`;

export const Item = styled.div`
  height: 150px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    max-width: 100%;
    margin: 20px;
    text-align: center;
    color: white;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0px;
  flex-wrap: wrap;
  width: ${(100 / 6) * 4}%;
`;

export const ItemContainer2 = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0px;
  flex-wrap: wrap;
  width: 100%;
`;

export const Item2 = styled.div`
  height: 150px;
  width: ${100 / 6}%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    max-width: 100%;
    margin: 20px;
    text-align: center;
    color: white;
  }
`;
