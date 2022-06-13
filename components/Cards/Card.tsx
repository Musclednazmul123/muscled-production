import { Container, Info, Button } from 'Styles/card.style';

export default function Card(props: any) {
  return (
    <Container style={{ maxWidth: `${props.width}%` }}>
      <img src={props.data.image} className="main-image" />
      <Info>
        <h3>{props.data.title}</h3>
        <p>{props.data.subTitle}</p>
        <Button>
          <img src={props.data.icon} />
          <span>{props.data.button}</span>
        </Button>
      </Info>
    </Container>
  );
}
