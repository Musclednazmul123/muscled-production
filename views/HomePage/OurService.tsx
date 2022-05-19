import React from "react"
import BasicSection from 'components/BasicSection';
import styled from 'styled-components';

const Services = [
    {
        imageUrl: '/grid-icons/asset-9.svg',
        title: 'Design',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        items: [
            {
                icon: '/grid-icons/landing-page-icon.svg',
                itemtitle: "Landing Page Design",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris. ",
            },
            {
                icon: '/grid-icons/icon-wireframe.svg',
                itemtitle: "Website and App Wireframing",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris",
            },
            {
                icon: '/grid-icons/icon-ui.svg',
                itemtitle: "UI / UX Design",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris.",
            },
        ],
    },
    {
        imageUrl: '/grid-icons/asset-3.svg',
        title: 'E-Commerce',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris. Felis augue vitae vitae.',
        items: [
            {
                icon: '/grid-icons/landing-page-icon.svg',
                itemtitle: "Conversion Rate Optimization (CRO)",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris. ",
            },
            {
                icon: '/grid-icons/landing-page-icon.svg',
                itemtitle: "Landing Page Design",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris. ",
            },
            {
                icon: '/grid-icons/icon-wireframe.svg',
                itemtitle: "Website and App Wireframing",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris",
            },
            {
                icon: '/grid-icons/icon-ui.svg',
                itemtitle: "UI / UX Design",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris.",
            },
        ],
    },
    {
        imageUrl: '/grid-icons/asset-1.svg',
        title: 'Web App Development',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris. Felis augue vitae vitae.',
        items: [
            {
                icon: '/grid-icons/landing-page-icon.svg',
                itemtitle: "Landing Page Design",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris. ",
            },
            {
                icon: '/grid-icons/icon-wireframe.svg',
                itemtitle: "Website and App Wireframing",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris",
            },
            {
                icon: '/grid-icons/icon-ui.svg',
                itemtitle: "UI / UX Design",
                itemdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui nec turpis id amet. Odio etiam erat faucibus orci quis enim, mauris.",
            },
        ],
    },

  ];

export default function OurService() {
    return(
        <OurServiceContainer>
            <ServiceHead>
                <OurServiceTitle>Our Services</OurServiceTitle>
                <ServiceDescription>
                    Keeping up with the changing needs of your customers is very critical to the success of your organization. You need an up-to-date solution that provides value. MUSCLED puts your business through digital workouts that align with modern and trendy practices.
                </ServiceDescription>
            </ServiceHead>
            {Services.map((singleServices, index) => (
            <BasicSection 
            imageUrl={singleServices.imageUrl} 
            title={singleServices.title} 
            reversed = { (index % 2 ==0)? true : false}

            key={'singleServices-'+index.toString()}
            
            >

            <Container>
                <Description>
                    {singleServices.description} 

                </Description>
                {singleServices.items.map((singleItem, idx) => (
                    <Itemscontainer key={'singleItems-'+idx.toString()}>
                    <img src={singleItem.icon} width="40" alt="Icon"/>
                    <ItemsInfo>
                        <ItemsInfoTitle>{singleItem.itemtitle}</ItemsInfoTitle>
                        <ItemsInfoDescription>{singleItem.itemdesc}</ItemsInfoDescription> 
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
  
`;

const ItemsInfoTitle = styled.h3`
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

const ItemsInfoDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;

const ServiceHead = styled.div`
    max-width: 130em;
    margin: auto;
    padding: 0 2rem;
    
`;
const OurServiceTitle = styled.h2`
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



