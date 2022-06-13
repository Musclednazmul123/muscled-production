import ServiceHero from 'components/Sections/Heros/ServiceHero';
import Banner2 from 'components/Sections/Banners/Banner2';
import FigmaTools from 'components/Sections/FigmaTools';
import Newsletter from 'components/Sections/Newsletter';
import OurTechnology from 'components/Sections/OurTechnology';
import PackageSection from 'components/Sections/PackageSection';
import Slider from 'components/Sections/Slider';
import Worked from 'components/Sections/Worked';
import { FeaturesData, heroData, iconData } from 'Data/EcommercePageData';
import { Container } from 'Styles/Ecommerce.style';
import FeaturesGallery from 'components/Sections/FeaturesGallery';

const background: string = '/banners/bannerbg3.svg';
const media: string = '/banners/bannermedia3.svg';
const title: string = 'Getting visitors but not enough purchases?';
const description: string = 'We are experts at optimizing conversions. Money back guarantee.';
const button: string = 'Schedule a call';
const buttonClass: string = 'black';
const data: string[] = [];
const textColor: string = 'black';

export default function Ecommerce() {
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
        description={description}
        textColor={textColor}
      />
      <Worked />
      <PackageSection />
      <Slider />
      <Newsletter />
    </Container>
  );
}
