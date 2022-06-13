import React from 'react';
import { Blockquote, Container, Caption } from 'Styles/quote.style';

interface QuoteProps {
  content: string;
  author: string;
  cite: string;
}

export default function Quote({ content, author, cite }: QuoteProps) {
  return (
    <Container>
      <Blockquote {...(cite && { cite })}>{content}</Blockquote>
      <Caption>— {author}</Caption>
    </Container>
  );
}
