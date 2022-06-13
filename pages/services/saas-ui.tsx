import ServiceHero from 'components/Sections/Heros/ServiceHero';
import Banner2 from 'components/Sections/Banners/Banner2';
import FigmaTools from 'components/Sections/FigmaTools';
import Newsletter from 'components/Sections/Newsletter';
import OurTechnology from 'components/Sections/OurTechnology';
import PackageSection from 'components/Sections/PackageSection';
import Slider from 'components/Sections/Slider';
import Worked from 'components/Sections/Worked';
import { FeaturesData, heroData, iconData } from 'Data/saasUIData';
import { Container } from 'Styles/saasUi.style';
import FeaturesGallery from 'components/Sections/FeaturesGallery';

const background: string = '/banners/bannerbg2.svg';
const media: string = '/banners/bannermedia2.svg';
const title: string = 'We Build Impactful Design for Your Digital Product';
const description: string = '';
const textColor: string = 'white';
const button: string = 'See Our Packages';
const buttonClass: string = 'gray';
const data: string[] = [];

export default function SaasUi() {
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
