import BlogCard from 'components/BlogCard'
import React from 'react'
import styled from 'styled-components';

function Blog() {
  return (
    <BlogContainer>
        <BlogSectionHeading>
            <BlogsectionTitle>From The Blog</BlogsectionTitle>
            <BlogsectionSummary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla est sed vitae, nisi laoreet nunc, sed. Faucibus tempor consectetur lorem vulputate habitasse tristique neque mauris.</BlogsectionSummary>
        </BlogSectionHeading>
        <BlogSectionContent>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </BlogSectionContent>
        
        <BlogsectionButton>See More</BlogsectionButton>
    </BlogContainer>
  )
}

export default Blog

const BlogContainer = styled.div`
    max-width: 130rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: auto;
    padding: 40px 10px;

`;
const BlogSectionHeading = styled.div`
    max-width: 70%;
    margin: auto;

`;
const BlogsectionTitle = styled.div`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
`;
const BlogsectionSummary = styled.div`
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

`;
const BlogSectionContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 35px;

`;
const BlogsectionButton = styled.button`
    margin: auto;
    padding: 10px 30px;
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 0px;


`;
