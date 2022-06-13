import { CardBody, Container, Pages } from 'Styles/package.style';

export default function Package(props: any) {
  return (
    <Container style={{ width: `${props.width}%` }}>
      <CardBody className={`card-body ${props.data.class}`}>
        <Pages className="pages">
          <p className="page">{props.data.page}</p>
          <p>{props.data.summary}</p>
        </Pages>
        <hr />
        <h3>{props.data.title}</h3>
        <p className="price">{props.data.price}</p>
        <button>{props.data.button}</button>
      </CardBody>
    </Container>
  );
}
