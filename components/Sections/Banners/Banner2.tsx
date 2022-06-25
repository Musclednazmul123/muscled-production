import { Button, Container, Description, Info, LI, Media, Title, UL } from 'Styles/banner2.style';

type PropsI = {
  background: string;
  title: string;
  data: string[];
  buttonClass: string;
  button: string;
  media: string;
  description?: string;
  textColor?: string;
};

export default function Banner2(props: PropsI) {
  const { background, title, data, buttonClass, button, media, description, textColor } = props;

  return (
    <Container
      style={{
        background: `url(${background})`,
        backgroundColor: `linear-gradient(99.59deg, rgba(62, 86, 97, 0.4) -30.56%, rgba(62, 86, 97, 0.12) 48.81%,`,
      }}
    >
      <Info style={{ color: textColor }}>
        <Title>{title}</Title>
        {description ? <Description>{description}</Description> : ''}
        {data.length >= 1 ? (
          <UL>
            {data.map((listItem: string, index: number) => (
              <LI key={'list-item-' + index}>{listItem}</LI>
            ))}
          </UL>
        ) : (
          ''
        )}
        <Button className={buttonClass}>{button}</Button>
      </Info>
      <Media src={media} />
    </Container>
  );
}
