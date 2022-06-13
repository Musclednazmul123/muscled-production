import OurStory from 'components/Sections/OurStory';
import React from 'react';
import AllBlogs from 'views/Blogs/AllBlogs';
import BlogHero from 'components/Sections/Heros/BlogHero';
import Guides from 'components/Sections/Guides';
import { Container } from 'Styles/blogs.style';

export default function BlogPage() {
  return (
    <Container>
      <BlogHero />
      <Guides />
      <OurStory />
      <AllBlogs />
    </Container>
  );
}
