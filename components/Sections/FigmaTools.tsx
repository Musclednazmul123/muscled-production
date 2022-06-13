import IconCard from 'components/Cards/IconCard';
import { Icons, Container } from 'Styles/figmaTools.style';

export default function FigmaTools(props: any) {
  return (
    <>
      {props.data.map((data: any, index: any) => (
        <Container key={`figma-tools-${index}`}>
          <h2>{data.title}</h2>
          <Icons>
            {data.icon.map((card: any, index: any) => (
              <IconCard className="card" name={card.name} media={card.media} key={`figma-icon-${index}`} />
            ))}
          </Icons>
        </Container>
      ))}
    </>
  );
}
