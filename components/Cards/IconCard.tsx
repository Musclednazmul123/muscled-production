import styled from 'styled-components';
import { Container } from 'Styles/iconCard.style';

export default function IconCard(props: any) {
  return (
    <>
      <Container>
        <img src={props.media} alt={props.name} />
        <h3>{props.name}</h3>
      </Container>
    </>
  );
}
