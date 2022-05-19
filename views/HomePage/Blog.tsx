import BlogCard from 'components/BlogCard'
import React from 'react'
import styled from 'styled-components';

const blogPost = [
    {
        subtitle: "UX Design",
        title: "These Are The 10 Best Online Courses to Learn UX Design in 2022",
        image: "/grid-icons/asset-2.svg",
        profileimage: "/grid-icons/asset-2.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a, facilisi euismod egestas dignissim ullamcorper amet aliquet integer.  venenatis. Tellus in rhoncus dictumst venenatis massa feugiat[...]",
        profilename: "John Doe",
        profilesummary: "May 7, 2022 - 8 minutes read",
    },
    {
        subtitle: "UX Design",
        title: "These Are The 10 Best Online Courses to Learn UX Design in 2022",
        image: "/grid-icons/asset-2.svg",
        profileimage: "/grid-icons/asset-2.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a, facilisi euismod egestas dignissim ullamcorper amet aliquet integer.  venenatis. Tellus in rhoncus dictumst venenatis massa feugiat[...]",
        profilename: "John Doe",
        profilesummary: "May 7, 2022 - 8 minutes read",
    },
    {
        subtitle: "UX Design",
        title: "These Are The 10 Best Online Courses to Learn UX Design in 2022",
        image: "/grid-icons/asset-2.svg",
        profileimage: "/grid-icons/asset-2.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a, facilisi euismod egestas dignissim ullamcorper amet aliquet integer.  venenatis. Tellus in rhoncus dictumst venenatis massa feugiat[...]",
        profilename: "John Doe",
        profilesummary: "May 7, 2022 - 8 minutes read",
    },
]

function Blog() {
  return (
    <BlogContainer>
        <BlogSectionHeading>
            <BlogsectionTitle>From The Blog</BlogsectionTitle>
            <BlogsectionSummary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla est sed vitae, nisi laoreet nunc, sed. Faucibus tempor consectetur lorem vulputate habitasse tristique neque mauris.</BlogsectionSummary>
        </BlogSectionHeading>
        <BlogSectionContent>
            {blogPost.map((post, index) => (
                <BlogCard key={index+"-blogpost"} post={post} />
            ))}
            
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
    justify-content: center;
    gap: 35px;

`;
const BlogsectionButton = styled.button`
    margin: auto;
    padding: 10px 30px;
    color: black;
    border-radius: 5px;
    border: 0px;


`;
