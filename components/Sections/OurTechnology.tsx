import { Container } from 'Styles/ourTechnology.style';

const logos = [
  {
    name: '',
    url: '',
    logo: '/grid-icons/Greenshok.svg',
  },
  {
    name: '',
    url: '',
    logo: '/grid-icons/SitesBeta.svg',
  },
  {
    name: '',
    url: '',
    logo: '/grid-icons/Animate.svg',
  },
  {
    name: '',
    url: '',
    logo: '/grid-icons/ReactMotion.svg',
  },
];

export default function OurTechnology() {
  return (
    <Container>
      <h2>Animation technologies we love to use</h2>
      <div className="logo-container">
        {logos.map((data, index) => (
          <img src={data.logo} key={`technology-used-${index}`} />
        ))}
      </div>
    </Container>
  );
}
