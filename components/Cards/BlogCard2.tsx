import { Body, Container, SubTitle } from 'Styles/blogCard2.style';

type PropsI = {
  title: string;
  image: string;
  date: string;
  subTitle: string;
  width: number;
};

export default function BlogCard2(props: PropsI) {
  const { title, image, date, subTitle, width } = props;
  return (
    <Container>
      <Body className="card-body" style={{ maxWidth: `${width}%` }}>
        <img src={image} />
        <SubTitle className="utils">
          <p className="sub-title">{subTitle}</p>
          <small>{date}</small>
        </SubTitle>
        <div className="name">
          <h3>{title}</h3>
        </div>
      </Body>
    </Container>
  );
}
