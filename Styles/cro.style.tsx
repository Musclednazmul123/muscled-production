import styled from 'styled-components';

export const Container = styled.div`
  & > *:not(:first-child) {
    margin-top: 80px;
  }
`;
