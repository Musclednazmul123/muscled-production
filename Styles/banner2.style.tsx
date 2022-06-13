import styled from 'styled-components';

export const Container = styled.div`
  height: 480px;
  max-width: 130rem;
  margin: 40px auto;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  .red {
    border-radius: 35px;
    background-color: #c40000;
    color: white;
  }
  .gray {
    border-radius: 5px;
    background-color: #c5cce2;
    color: black;
  }

  .black {
    border-radius: 5px;
    background-color: black;
    color: white;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  width: 600px;
`;

export const Media = styled.img`
  max-width: 600px;
`;

export const Title = styled.h2`
  font-size: 30px;
  width: 600px;
`;

export const UL = styled.ul`
  width: 600px;
`;

export const LI = styled.li`
  font-size: 18px;
`;
export const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border: 0px;
  cursor: pointer;
  margin-top: 10px;
`;
