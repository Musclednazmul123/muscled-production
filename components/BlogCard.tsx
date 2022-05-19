import React from 'react'
import styled from 'styled-components';

function BlogCard(props: any) {
    
  return (
    <BlogCardBody>
        <BlogCardImg src={props.post.image}/>
        <BlogCardInfo>
            <BlogCardHeading>
                <BlogCardSubTitle>{props.post.subtitle}</BlogCardSubTitle>
                <BlogCardTitle>{props.post.title}</BlogCardTitle>
            </BlogCardHeading>
            
            <BlogCardSummary>{props.post.description}</BlogCardSummary>
            <BlogCardProfileContainer>
                <BlogCardProfileImg src={props.post.profileimage}/>
                <BlogCardProfileInfo>
                    <BlogCardProfileName>{props.post.profilename}</BlogCardProfileName>
                    <BlogCardProfileSummary>{props.post.profilesummary}</BlogCardProfileSummary>
                </BlogCardProfileInfo>
            </BlogCardProfileContainer>
        </BlogCardInfo>

    </BlogCardBody>
  )
}

export default BlogCard


const BlogCardBody = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 30%;
    align-items: center; 
    gap: 20px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;


`;

const BlogCardImg = styled.img`

`;

const BlogCardSubTitle = styled.p`
    color: #D62F2F;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;

const BlogCardTitle = styled.h3`
    color: rgba(0, 0, 0, 0.8);
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

`;

const BlogCardSummary = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

`;

const BlogCardHeading = styled.div`

`;

const BlogCardProfileContainer = styled.div`
    display: flex;
    flex-dirextion: row;
    gap: 20px;

`;

const BlogCardProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    object-fit: cover;
    background-color: #C4C4C4;;

`;

const BlogCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

`;

const BlogCardProfileInfo = styled.div`

`;

const BlogCardProfileName = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    font-size: 14px;

`;

const BlogCardProfileSummary = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`;
