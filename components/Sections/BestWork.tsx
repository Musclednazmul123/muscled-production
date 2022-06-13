import BestWorkCard from 'components/Cards/BestWorkCard';
import { Cards, Container } from 'Styles/bestWork.style';

export default function BestWork() {
  return (
    <Container>
      <h2>Some of our best work</h2>
      <Cards>
        <BestWorkCard />
        <BestWorkCard />
        <BestWorkCard />
        <BestWorkCard />
        <BestWorkCard />
        <BestWorkCard />
        <BestWorkCard />
        <BestWorkCard />
      </Cards>
    </Container>
  );
}
