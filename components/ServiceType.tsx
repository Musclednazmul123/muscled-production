import React from 'react'
import ServiceCard from './ServiceCard'
import styled from 'styled-components';

const services = [
    {
        type:"",
        items: [
          {
            cardtitle: '',
            imgUrl: '',
            description: '',
          },
          {
            cardtitle: '',
            imgUrl: '',
            description: '',
          },
          {
            cardtitle: '',
            imgUrl: '',
            description: '',
          },
        ],
    },
    {
        type:"",
        items: [
          {
            cardtitle: '',
            imgUrl: '',
            description: '',
          },
          {
            cardtitle: '',
            imgUrl: '',
            description: '',
          },
          {
            cardtitle: '',
            imgUrl: '',
            description: '',
          },
        ],
    },
    {
      type:"",
      items: [
        {
          cardtitle: '',
          imgUrl: '',
          description: '',
        },
        {
          cardtitle: '',
          imgUrl: '',
          description: '',
        },
        {
          cardtitle: '',
          imgUrl: '',
          description: '',
        },
      ],
    },
]

function ServiceType() {
  return (
    <div>

      { services.map(() =>{
        <ServiceTypeContainer>
          <ServiceTypeTitle>

          </ServiceTypeTitle>

          <ServiceTypeCards>
            <ServiceCard />

          </ServiceTypeCards>

        </ServiceTypeContainer>

      } )

      }
        
        

    </div>
  )
}

export default ServiceType

const ServiceTypeContainer = styled.div`

`;

const ServiceTypeTitle = styled.div`

`;

const ServiceTypeCards = styled.div`

`;