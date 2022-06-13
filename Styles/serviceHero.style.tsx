import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: 600px;
  overflow: hidden;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400 !important;
  line-height: 150% !important;
`;

export const Body = styled.div`
  position: absolute;
  max-width: 130rem;
  height: 560px;
  display: flex;
  margin: auto;
  left: calc(50% - 130rem / 2);
  padding: 10px;
  justify-content: space-between;
  gap: 80px;
  align-items: center;
  align-self: center;
  z-index: 1;
  .darkbg {
    color: white;
  }
  .red {
    p {
      color: red;
    }
    h1 {
      color: white;
    }
    button {
      background-color: red;
      color: white;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  p {
    color: var(--text);
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
  }
  h1 {
    font-size: 40px;
  }
  button {
    padding: 10px 20px;
    font-size: 14px;
    border: 0px;
    margin: 0px;
    background: #000000;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;

export const Media = styled.img`
  max-width: 50%;
  object-fit: contain;
`;

export const Background = styled.div`
  position: absolute;
  height: 100%;
  background-repeat: no-repeat !important;
  background-size: 100% !important;
  background-position: center !important ;
  width: 100%;
  top: 0 !important;
  z-index: -1;
  left: 0;
`;
