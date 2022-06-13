import { Summary, Container, Title, Button } from 'Styles/banner3.style';

type PropsI = {
  background: string;
  title: string;
  button: string;
  buttonClass: string;
  textColor: string;
  description: string;
};

export default function Banner3(props: PropsI) {
  const { background, title, button, buttonClass, textColor, description } = props;
  return (
    <Container style={{ background: `url(${background})` }}>
      <Title style={{ color: `${textColor}` }}>{title}</Title>
      <Summary style={{ color: `${textColor}` }}>{description}</Summary>
      <Button className={buttonClass}> {button}</Button>
    </Container>
  );
}
