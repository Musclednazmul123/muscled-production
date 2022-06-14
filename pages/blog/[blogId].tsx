import SideBarCatagory from 'components/Sections/SideBarCatagory';
import BlogContent from 'components/Elements/Content';
import BlogHero from 'components/Sections/Heros/Hero';
import Banner from 'components/Sections/Banners/BlogBanner';
import RecentPosts from 'components/Sections/RecentPosts';
import React, { useEffect, useState } from 'react';
import MainSlider from 'components/Sections/MainSlider';
import { useRouter } from 'next/router';
import { SwiperSlide } from 'swiper/react';
import BlogCard from 'components/Cards/BlogCard';
import { Container } from 'Styles/blogDetails.style';
import { Blogdata } from 'Data/BlogData';
import { Item } from 'Styles/SideBarCatagory.style';

// category data
const guideCategory = [
  {
    title: 'Guide Category',
    item: [
      {
        title: 'Design',
        count: '05',
      },
      {
        title: 'Development',
        count: '25',
      },
      {
        title: 'App Design',
        count: '639',
      },
      {
        title: 'SEO',
        count: '728',
      },
      {
        title: 'Branding',
        count: '983',
      },
    ],
  },
];

export default function BlogDetailsPage() {
  const router = useRouter();
  const blogId = router.query.blogId;
  const [blog, setdata] = useState(Blogdata[0]);
  const breadcromb = `Home > Blog >  ${blogId}`;

  useEffect(() => {
    for (let index = 0; index < Blogdata.length; index++) {
      const data = Blogdata[index];

      if (blogId == data.id) {
        setdata(data);
        break;
      }
    }
  }, [blogId]);

  return (
    <>
      <Container>
        <BlogHero title={blog.title} image={blog.image} breadcromb={breadcromb} />
        <div className="Content">
          <div className="left-side-bar">
            <BlogContent data={blog.details} />
          </div>

          <div className="right-side-bar">
            {guideCategory.map((data, index) => (
              <SideBarCatagory key={'guide-category-' + index} title={data.title}>
                {data.item.map((itemData, itemIndex) => (
                  <Item key={'guide-category-' + itemIndex} className="CatagoryItem">
                    <button>{itemData.title}</button> <span className="CatagoryItemCount"> {itemData.count}</span>
                  </Item>
                ))}
              </SideBarCatagory>
            ))}

            <RecentPosts />
          </div>
        </div>
        <div className="Slider">
          <h2>Related Blogs</h2>
          <MainSlider>
            {Blogdata.map((data, index) => (
              <SwiperSlide key={data.id}>
                <BlogCard
                  cardWidth={94}
                  id={data.id}
                  image={data.image}
                  subtitle={data.subtitle}
                  title={data.title}
                  description={data.description}
                  profileimage={data.profileimage}
                  profilename={data.profilename}
                  profilesummary={data.profilesummary}
                />
              </SwiperSlide>
            ))}
          </MainSlider>
        </div>
        <Banner />
      </Container>
    </>
  );
}
