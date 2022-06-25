import ServiceHero from 'components/Sections/Heros/ServiceHero';
import Banner2 from 'components/Sections/Banners/Banner2';
import FigmaTools from 'components/Sections/FigmaTools';
import Newsletter from 'components/Sections/Newsletter';
import OurTechnology from 'components/Sections/OurTechnology';
import PackageSection from 'components/Sections/PackageSection';
import Slider from 'components/Sections/Slider';
import Worked from 'components/Sections/Worked';
import { FeaturesData, iconData } from 'Data/EcommercePageData';
import { heroData } from 'Data/quickPrototypeData';
import styled from 'styled-components';
import FeaturesGallery from 'components/Sections/FeaturesGallery';

const background: string = '/banners/bannerbg5.svg';
const media: string = '/banners/bannermedia5.svg';
const title: string = 'Our Quick Prototypes Will Speed up Your Development';
const description: string =
  'Our Engaging And Revealing Prototypes for Your Digital Product Will Help You Reach The Final Product Much Faster';
const textColor: string = 'white';
const button: string = 'See Our Packages';
const buttonClass: string = 'black';
const data: string[] = [];

export default function QuickPrototype() {
  return (
    <Container>
      {heroData.map((data, index) => (
        <ServiceHero
          background={data.background}
          cls={data.cls}
          subTitle={data.subTitle}
          title={data.title}
          button={data.button}
          media={data.media}
          description={data.description}
          key={`service-hero-key-${index}`}
        />
      ))}
      <FigmaTools data={iconData} />
      <FeaturesGallery data={FeaturesData[0]} />
      <OurTechnology />
      <Banner2
        background={background}
        media={media}
        title={title}
        button={button}
        data={data}
        buttonClass={buttonClass}
        textColor={textColor}
        description={description}
      />
      <Worked />
      <PackageSection />
      <Slider />
      <Newsletter />
    </Container>
  );
}
const Container = styled.div``;
