import BlogCard from 'components/Cards/BlogCard';
import * as React from 'react';
import { Summary, Container, Heading, Title, Content, Button } from 'Styles/blog.style';
import { Blogdata } from '../../Data/BlogData';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const Data = Blogdata.slice(0, 6);

  React.useEffect(() => {
    ScrollTrigger.batch('.blog-card-container', {
      interval: 0.2,
      batchMax: 3,
      start: 'top 95%',
      end: 'center 5%',

      onEnter: (batch: any) => {
        gsap.from(batch, { x: 250, duration: 0.6, opacity: 0.2, stagger: 0.2 });
      },
      onEnterBack: (batch: any) => {
        gsap.from(batch, { x: -250, duration: 0.6, opacity: 0.2, stagger: 0.2 });
      },
    });
  }, []);
  return (
    <Container>
      <Heading>
        <Title>From The Blog</Title>
        <Summary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla est sed vitae, nisi laoreet nunc, sed. Faucibus tempor
          consectetur lorem vulputate habitasse tristique neque mauris.
        </Summary>
      </Heading>
      <Content>
        {Data.map((data, index) => (
          <div className="blog-card-container" key={data.id}>
            <BlogCard
              id={data.id}
              image={data.image}
              subtitle={data.subtitle}
              title={data.title}
              description={data.description}
              profileimage={data.profileimage}
              profilename={data.profilename}
              profilesummary={data.profilesummary}
              cardWidth={100}
            />
          </div>
        ))}
      </Content>

      <Button>See More</Button>
    </Container>
  );
}
