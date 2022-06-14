import { Container } from 'Styles/cro.style';
import ServiceHero from 'components/Sections/Heros/ServiceHero';
import Newsletter from 'components/Sections/Newsletter';
import Slider from 'components/Sections/Slider';
import { heroData } from 'Data/quickPrototypeData';
import Testimonials from 'components/Sections/Testimonials';
import Partners from 'components/Sections/Partners';
import Banner3 from 'components/Sections/Banners/Banner3';
import WhyCro from 'components/Sections/WhyCro';
import BestWork from 'components/Sections/BestWork';
import CroMethods from 'components/Sections/CroMethods';

// data for banner
const background: string = '/banners/bannerbg6.svg';
const title: string = 'Our Quick Prototypes Will Speed up Your Development';
const description: string =
  'Our Engaging And Revealing Prototypes for Your Digital Product Will Help You Reach The Final Product Much Faster';
const textColor: string = 'white';
const button: string = 'See Our Packages';
const buttonClass: string = 'red';

const testimonials = [
  {
    title: 'What our clients says about us',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla est sed vitae, nisi laoreet nunc, sed. Faucibus tempor consectetur lorem vulputate habitasse tristique neque mauris.',
  },
];

export default function Cro() {
  const bg = '/banners/big-building.jpg';
  const gradient = 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';

  return (
    <Container>
      {heroData.map((data, index) => (
        <ServiceHero
          background={bg}
          cls={data.cls}
          subTitle={data.subTitle}
          title={data.title}
          button={data.button}
          description={data.description}
          key={`service-hero-key-${index}`}
          gradient={gradient}
        />
      ))}

      {/* <FigmaTools data={iconData} /> */}
      <Partners />
      <WhyCro />
      <CroMethods />
      <BestWork />
      {/* <FeaturesGallery data={FeaturesData[0]} /> */}
      {/* <OurTechnology /> */}
      <Banner3
        background={background}
        title={title}
        button={button}
        buttonClass={buttonClass}
        textColor={textColor}
        description={description}
      />
      {/* <Worked /> */}
      {/* <PackageSection /> */}
      <Testimonials title={testimonials[0].title} description={testimonials[0].description} />
      <Slider />
      <Newsletter />
    </Container>
  );
}
