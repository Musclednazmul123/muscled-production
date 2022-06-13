import React from 'react';
import ArticleImage from 'components/Elements/ArticleImage';
import { HeaderContainer, Title, DetailsContainer, MidDot } from 'Styles/header.style';

interface HeaderProps {
  title: string;
  formattedDate: string;
  imageUrl: string;
  readTime: string;
}

export default function Header({ title, formattedDate, imageUrl, readTime }: HeaderProps) {
  return (
    <HeaderContainer>
      <ArticleImage src={imageUrl} />
      <Title>{title}</Title>
      <DetailsContainer>
        {formattedDate} <MidDot /> {readTime}
      </DetailsContainer>
    </HeaderContainer>
  );
}
