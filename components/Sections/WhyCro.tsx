import { listIcon } from 'components/Elements/ListIcon';
import { Container, Image, Info, List, ListContainer, Title } from 'Styles/whyCro.style';

export default function WhyCro() {
  return (
    <Container>
      <Info>
        <Title>Why you need CRO?</Title>
        <ListContainer>
          <List>
            {listIcon}
            <span>It helps you to get more of a “Right Kind” of traffic</span>
          </List>
          <List>
            {listIcon}
            <span>CRO is more cost effective than Pay per click ads</span>
          </List>
          <List>
            {listIcon}
            <span>Its also less expensive than digital marketing</span>
          </List>
          <List>
            {listIcon}
            <span>Your conversion rate will directly reflected on your profit</span>
          </List>
          <List>
            {listIcon}
            <span>It makes you more valueable to the affiliates & potential partners</span>
          </List>
          <List>
            {listIcon}
            <span>CRO keeps you one step ahead of your competitors</span>
          </List>
          <List>
            {listIcon}
            <span>CRO keeps you one step ahead of your competitors</span>
          </List>
          <List>
            {listIcon}
            <span>It is a counter-measure for the shortened attention span of general consumer</span>
          </List>
          <List>
            {listIcon}
            <span>CRO gives your business a credible and legitimate outlook</span>
          </List>
          <List>
            {listIcon}
            <span>It makes your business more robust</span>
          </List>
        </ListContainer>
      </Info>
      <Image src="/banners/bannermedia7.svg" />
    </Container>
  );
}
