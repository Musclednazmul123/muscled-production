import React from 'react';
import { SubTitle, Container, Image, Info, Heading, Title, Description, Button } from 'Styles/croSection.style';

export default function Cro() {
  const croImg = '/demo-illustration-5.png';
  return (
    <Container>
      <Image src={croImg} alt="Croimg" />
      <Info>
        <Heading>
          <SubTitle>Ultricies id consectetur quis tellus nulla magna.</SubTitle>
          <Title>Learn more about our success in CRO</Title>
        </Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie ac tempor arcu nibh erat. Egestas magna purus id imperdiet
          sit mattis vitae in. Risus donec ullamcorper enim, proin sodales tempus eget faucibus. Non sapien dui massa risus massa. Eget
          ornare curabitur nec odio eget tellus sollicitudin feugiat phasellus. Quam facilisi velit sodales varius tincidunt si
        </Description>

        <Button>Learn More</Button>
      </Info>
    </Container>
  );
}
