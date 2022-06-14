import IconCard2 from 'components/Cards/IconCard2';
import { plugins } from 'Data/pluginsData';
import { Container, IconsContainer, Section, Title } from 'Styles/plugins.style';

export default function Plugins() {
  return (
    <Section>
      <Container>
        {plugins.map((plugin, index) => (
          <div key={`plugins-section-${index}`}>
            <Title>{plugin.title}</Title>
            <IconsContainer className="container">
              {plugin.icons.map((data, index) => (
                <IconCard2 icon={data.icon} name={data.name} key={`plugin-icon-${index}`} />
              ))}
            </IconsContainer>
          </div>
        ))}
      </Container>
    </Section>
  );
}
