import React from 'react';
import ServiceCard from '../../components/Cards/ServiceCard';
import styled from 'styled-components';
import { services } from 'Data/serviceData';
import { Cards, Container, Title } from 'Styles/service.style';

export default function ServiceType() {
  return (
    <div>
      {services.map((service, index) => (
        <Container key={'Service-type-' + index}>
          <Title>{service.type}</Title>

          <Cards>
            {service.items.map((item, key) => (
              <ServiceCard item={item} key={'Service-item-' + key} />
            ))}
          </Cards>
        </Container>
      ))}
    </div>
  );
}
