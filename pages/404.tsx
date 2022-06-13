import styled from 'styled-components';
import Container from 'components/Elements/Container';
import NotFoundIllustration from 'components/Elements/NotFoundIllustration';
import { ImageContainer, Title, Description, Wrapper } from 'Styles/404.style';

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <NotFoundIllustration />
        </ImageContainer>
        <Title>404</Title>
        <Description>Oh, that&apos;s unfortunate! Page not found 😔</Description>
      </Container>
    </Wrapper>
  );
}
