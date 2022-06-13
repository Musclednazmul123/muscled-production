import BlogCard2 from 'components/Cards/BlogCard2';
import { blogs } from 'Data/blog.data';
import { Container } from 'Styles/slider.style';
import { SwiperSlide } from 'swiper/react';
import MainSlider from 'components/Sections/MainSlider';

export default function Slider() {
  return (
    <Container>
      <h2 className="title">From The Blog</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla est sed vitae, nisi laoreet nunc, sed. Faucibus tempor
        consectetur lorem vulputate habitasse tristique neque mauris.
      </p>
      <div>
        <MainSlider>
          {blogs.map((data, index) => (
            <SwiperSlide key={'slider-' + index}>
              <BlogCard2 title={data.title} image={data.image} date={data.date} subTitle={data.subTitle} width={100} />
            </SwiperSlide>
          ))}
        </MainSlider>
      </div>
    </Container>
  );
}
