import ServiceHero from 'components/Sections/Heros/ServiceHero';
import FigmaTools from 'components/Sections/FigmaTools';
import styled from 'styled-components';
import Newsletter from 'components/Sections/Newsletter';
import OurTechnology from 'components/Sections/OurTechnology';
import PackageSection from 'components/Sections/PackageSection';
import Slider from 'components/Sections/Slider';
import Worked from 'components/Sections/Worked';
import FeaturesGallery from 'components/Sections/FeaturesGallery';
import { FeaturesData, heroData, iconData } from 'Data/redesignData';
import { Container } from 'Styles/redesign.style';
import Banner2 from 'components/Sections/Banners/Banner2';

const background: string = '/banners/banner2.svg';
const media: string = '/banners/banner2media.svg';
const title: string = 'Why choose us?';
const description: string = '';
const textColor: string = 'white';
const button: string = 'Schedule a Call';
const buttonClass: string = 'red';
const data: string[] = [
  'High quality industry leading work',
  ' Delivery before deadline',
  ' Expert team members to get all kind of helps ',
  'Business insights from experienced experts',
];

export default function ReDesign() {
  return (
    <Container>
      {heroData.map((data, index) => (
        <ServiceHero
          background={data.background}
          subTitle={data.subTitle}
          title={data.title}
          button={data.button}
          media={data.media}
          style={'red'}
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
      />
      <Worked />
      <PackageSection />
      <Slider />
      <Newsletter />
    </Container>
  );
}
