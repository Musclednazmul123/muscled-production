import { components, Container } from 'Styles/mdxRichText.style';
import { Components, TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';

export default function RichText(props: { content: TinaMarkdownContent | TinaMarkdownContent[] }) {
  return (
    <Container>
      <TinaMarkdown content={props.content} components={components as Components<{}>} />
    </Container>
  );
}
