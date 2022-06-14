import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { EnvVars } from 'env';
import Container from './Elements/Container';
import { ChildrenWrapper, Description, HeaderContainer, Title, Wrapper } from 'Styles/page.style';

export interface PageProps {
  title: string;
  description?: string;
}

export default function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Wrapper>
        <HeaderContainer>
          <Container>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </Container>
        </HeaderContainer>
        <Container>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
