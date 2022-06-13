import ServiceHero from 'components/Sections/Heros/ServiceHero';
import FigmaTools from 'components/Sections/FigmaTools';
import Newsletter from 'components/Sections/Newsletter';
import OurTechnology from 'components/Sections/OurTechnology';
import PackageSection from 'components/Sections/PackageSection';
import Plugins from 'components/Sections/Plugins';
import Slider from 'components/Sections/Slider';
import Worked from 'components/Sections/Worked';
import { heroData, iconData, FeaturesData } from 'Data/uiDesign.data';
import { Container } from 'Styles/uiDesign.style';
import FeaturesGallery from 'components/Sections/FeaturesGallery';

export default function UiDesign() {
  return (
    <Container>
      {heroData.map((data, index) => (
        <ServiceHero
          background={data.background}
          subTitle={data.subTitle}
          title={data.title}
          button={data.button}
          media={data.media}
          key={`service-hero-key-${index}`}
        />
      ))}
      <FigmaTools data={iconData} />
      <Plugins />
      <FeaturesGallery data={FeaturesData[0]} />
      <OurTechnology />
      <Worked />
      <PackageSection />
      <Slider />
      <Newsletter />
    </Container>
  );
}
