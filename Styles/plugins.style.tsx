import styled from 'styled-components';

export const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(var(--secondBackground));
`;
export const Container = styled.div`
  max-width: 130rem;
  margin: 40px auto;
  color: var(--text);
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 40px;
`;
