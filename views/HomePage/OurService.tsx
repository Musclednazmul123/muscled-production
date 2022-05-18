import React from "react"
import BasicSection from 'components/BasicSection';
import styled from 'styled-components';

const Services = [
    {
        imageUrl: '/grid-icons/asset-1.svg',
        title: 'Design',
        reversed : "false",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        items: [
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
        ],
    },
    {
        imageUrl: '/grid-icons/asset-1.svg',
        title: 'Design',
        reversed : "false",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        items: [
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
        ],
    },
    {
        imageUrl: '/grid-icons/asset-1.svg',
        title: 'Design',
        reversed : "false",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        items: [
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
            {
                icon: '/grid-icons/asset-1.svg',
                itemtitle: "hello world",
                itemdesc: "this is item desc",
            },
        ],
    },

  ];

export default function OurService() {
    return(
        <OurServiceContainer>
            <ServiceHead>
                <H2>Our Services</H2>
                <ServiceDescription>
                    Keeping up with the changing needs of your customers is very critical to the success of your organization. You need an up-to-date solution that provides value. MUSCLED puts your business through digital workouts that align with modern and trendy practices.
                </ServiceDescription>
            </ServiceHead>
            {Services.map((singleServices, index) => (
            <BasicSection 
            imageUrl={singleServices.imageUrl} 
            title={singleServices.title} 
            reversed = { (index % 2 ==0)? true : false}
            
            >

            <Container>
                <Description>
                    {singleServices.description} 

                </Description>
                {singleServices.items.map((singleItem, index) => (
                    <Itemscontainer>
                    <img src={singleItem.icon} width="40" alt="Icon"/>
                    <ItemsInfo>
                        <H3>{singleItem.itemtitle}</H3>
                        <P>{singleItem.itemdesc}</P> 
                    </ItemsInfo>
                    </Itemscontainer>
                ))}
            </Container>
            
        </BasicSection>
      
        ))}
        </OurServiceContainer>
        
        
    )
}


const Description = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;

const OurServiceContainer = styled.p`
    display: flex;
    flex-direction: column;
    gap: 80px;
`;

const Container = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const H3 = styled.h3`
    font-weight: 700;
    font-size: 20px;
`;

const Itemscontainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
`;


const ItemsInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
`;

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;

const ServiceHead = styled.div`
    max-width: 130em;
    margin: auto;
    padding: 0 2rem;
    
`;
const H2 = styled.h2`
    max-width: 70%;
    text-align: center;
    margin: auto;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
`;
const ServiceDescription = styled.p`
    max-width: 70%;
    text-align: center;
    margin: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    
`;



