import React, { ReactNode } from 'react';
import { Container, Title } from 'Styles/SideBarCatagory.style';

type PropsI = {
  title: string;
  children: ReactNode;
};

export default function SideBarCatagory(props: PropsI) {
  const { title, children } = props;
  return (
    <Container>
      <Title className="CatagoryTitle">
        <hr />
        <h2> {title}</h2>
      </Title>
      {children}
    </Container>
  );
}
