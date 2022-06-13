import { bestWorkIcon } from 'components/Elements/BestWorkIcons';
import styled from 'styled-components';

export default function BestWorkCard() {
  return (
    <Container>
      {bestWorkIcon}
      <Title>Company Name</Title>
      <Subtitle>45% Increase in Leads</Subtitle>
      <ListContainer>
        <List>Usability Testing</List>
        <List>Usability Testing</List>
        <List>Customer Feedback</List>
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
`;

const Subtitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
`;

const ListContainer = styled.ul`
  padding: 0;
  margin: 0px auto;
`;

const List = styled.li`
  list-style: none;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin: 10px auto;
`;
