import styled from 'styled-components';

type PropsI = {
  icon: string;
  name: string;
};
export default function IconCard2(props: PropsI) {
  const { icon, name } = props;
  return (
    <Container>
      <Icon src={icon} alt={name} />
      <Title>{name}</Title>
    </Container>
  );
}

// work in progress

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 250px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h3`
  font-size: 24px;
`;
