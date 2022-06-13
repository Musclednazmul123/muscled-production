import NextImage, { ImageProps } from 'next/image';
import React from 'react';
import { ImageWrapper, Caption, Wrapper } from 'Styles/articleImage.style';

interface ArticleImageProps extends ImageProps {
  src: string;
  caption?: string;
}

export default function ArticleImage({ src, caption, ...rest }: ArticleImageProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <NextImage
          src={src}
          alt={caption || 'Article Image'}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkj6+vBwAC4AFuNSmtGAAAAABJRU5ErkJggg=="
          layout="fill"
          objectFit="cover"
          {...rest}
        />
      </ImageWrapper>
      <Caption>{caption}</Caption>
    </Wrapper>
  );
}
