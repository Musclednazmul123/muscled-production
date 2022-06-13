import NextImage from 'next/image';
import NextLink from 'next/link';
import { ArticleCardWrapper, HoverEffectContainer, ImageContainer, Content, Title, Description } from 'Styles/articleCard.style';

export interface ArticleCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
}

export default function ArticleCard({ title, slug, imageUrl, description }: ArticleCardProps) {
  return (
    <NextLink href={'/blog/' + slug} passHref>
      <ArticleCardWrapper className="article-card-wrapper">
        <HoverEffectContainer>
          <ImageContainer>
            <NextImage src={imageUrl} layout="fill" objectFit="cover" alt={title} />
          </ImageContainer>
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Content>
        </HoverEffectContainer>
      </ArticleCardWrapper>
    </NextLink>
  );
}
