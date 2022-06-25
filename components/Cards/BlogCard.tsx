import Link from 'next/link';
import React from 'react';
import { Author, AuthorInfo, Description, Heading, Image, Info, Name, SubTitle, Summary, Thumbnail, Title } from 'Styles/blogCard.style';
import { Container } from 'Styles/ourWorkCard.style';

type Props = {
  id: string;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  profileimage: string;
  profilename: string;
  profilesummary: string;
  cardWidth: number;
};

export default function BlogCard({ subtitle, profileimage, profilesummary, description, profilename, image, cardWidth, title, id }: Props) {
  // const { subtitle, profileimage, profilesummary, description, profilename, image, cardWidth, title, id } = props;
  const Subtitle = <SubTitle>{subtitle}</SubTitle>;
  const Profile = (
    <Author>
      <Image src={profileimage} />
      <AuthorInfo>
        <Name>{profilename}</Name>
        <Summary>{profilesummary}</Summary>
      </AuthorInfo>
    </Author>
  );

  return (
    <Link href={`/blog/${id}`} passHref>
      <Container style={{ maxWidth: `${cardWidth}%` }}>
        <Thumbnail src={image} />
        <Info>
          <Heading>
            {subtitle ? Subtitle : ''}
            <Title>{title}</Title>
          </Heading>

          <Description>{description}</Description>
          {profilename ? Profile : ''}
        </Info>
      </Container>
    </Link>
  );
}
