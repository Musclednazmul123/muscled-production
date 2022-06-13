import Package from 'components/Cards/Package';
import { Container } from 'Styles/packageSection.style';

const uiPackage = [
  {
    page: '1',
    summary: 'Page',
    title: 'Landing Page Design',
    price: '$489.00',
    button: 'Add to cart',
    class: 'black',
  },
  {
    page: '3',
    summary: 'Pages',
    title: 'Landing Page Design',
    price: '$489.00',
    button: 'Add to cart',
    class: 'black',
  },
  {
    page: '5',
    summary: 'Pages',
    title: 'Landing Page Design',
    price: '$489.00',
    button: 'Add to cart',
    class: 'black',
  },
  {
    page: '5+',
    summary: 'Pages?',
    title: 'Call us & get your exciting deal!',
    price: '',
    button: 'Schedule a Call',
    class: 'red',
  },
];

export default function PackageSection() {
  return (
    <Container>
      <h2>Select an UI Design Package</h2>

      <div className="package-container">
        {uiPackage.map((pack, index) => (
          <Package key={`package-${index}`} data={pack} width={30}>
            <h2>hello</h2>
          </Package>
        ))}
      </div>
    </Container>
  );
}
