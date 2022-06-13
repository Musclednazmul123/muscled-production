import SideBarCatagory from 'components/Sections/SideBarCatagory';
import Content from 'components/Elements/Content';
import GuideHero from 'components/Sections/Heros/Hero';
import RecentPosts from 'components/Sections/RecentPosts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { guideData } from '../../Data/guideData';
import { Container } from 'Styles/guideDetails.style';
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
  const guideId = router.query.guideId;
  const [guide, setdata] = useState(guideData[0]);
  const breadcromb = `Home > Guide >  ${guideId}`;

  useEffect(() => {
    for (let index = 0; index < guideData.length; index++) {
      const data = guideData[index];
      if (guideId == data.id) {
        setdata(data);
        break;
      }
    }
  }, [guideId]);

  return (
    <Container>
      <GuideHero title={guide.title} image={guide.image} breadcromb={breadcromb} date={guide.date} />
      <div className="Content">
        <div className="left-side-bar">
          <Content data={guide.details} />
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
    </Container>
  );
}
