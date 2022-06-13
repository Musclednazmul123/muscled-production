import { InferGetStaticPropsType } from 'next';
import OurService from 'components/Sections/OurService';
import { getAllPosts } from 'utils/postsFetcher';
import MainHero from 'components/Sections/MainHero';
import Partners from 'components/Sections/Partners';
import Testimonials from 'components/Sections/Testimonials';
import OurWork from 'components/Sections/OurWork';
import Blog from 'components/Sections/Blog';
import { HomepageWrapper } from 'Styles/index.style';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HomepageWrapper>
      <MainHero />
      <Partners />
      <OurService />
      <OurWork />
      <Blog />
      <Testimonials />
    </HomepageWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
