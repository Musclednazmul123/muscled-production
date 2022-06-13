import { CroMethodsIcon } from 'components/Elements/CroMethodsIcon';
import styled from 'styled-components';
import { ItemContainer2, Container, TitleWrapper, ItemContainer, Item2, Item } from 'Styles/croMethodes.style';

export default function CroMethods() {
  return (
    <Container>
      <TitleWrapper>
        <p className="over-title">Common</p>
        <h2>CRO METHODS</h2>
        <p>We use</p>
      </TitleWrapper>
      <ItemContainer>
        <Item className="darkblue">
          <p>A/B Testing</p>
        </Item>
        <Item className="desaturatedblue">
          <p>Competitor Benchmarking</p>
        </Item>
        <Item className="moderateblue">
          <p>Usability Testing</p>
        </Item>
        <Item className="desaturatedblue">
          <p>Customer Journey Analysis</p>
        </Item>
        <Item className="desaturatedblue">
          <p>Online Surveys / Customer Feedback</p>
        </Item>
        <Item className="moderateblue">
          <p>Cart Abandonment Analysis</p>
        </Item>
        <Item className="darkblue">
          <p>Abandonment Emails</p>
        </Item>
        <Item className="moderateblue">
          <p>Multivariate Testing</p>
        </Item>
      </ItemContainer>
      <ItemContainer2>
        <Item2 className="darkblue">
          <p>Pop-up / Modals</p>
        </Item2>
        <Item2 className="moderateblue">
          <p>Copy Optimization</p>
        </Item2>
        <Item2 className="darkblue">
          <p>Segmentation</p>
        </Item2>
        <Item2 className="desaturatedblue">
          <p>Expert Usability Reviews</p>
        </Item2>
        <Item2 className="moderateblue">
          <p>Event-triggered / Behavioral Email</p>
        </Item2>
        <Item2 className="desaturatedblue">
          <p>Website Personalization</p>
        </Item2>
      </ItemContainer2>
    </Container>
  );
}
