import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { EnvVars } from 'env';
import { Wrapper } from 'Styles/shareWidget.style';

interface ShareWidgetProps {
  title: string;
  slug: string;
}

export default function ShareWidget({ title, slug }: ShareWidgetProps) {
  const shareMessage = 'New article: ' + title;
  const currentUrl = EnvVars.URL + 'blog/' + slug;

  return (
    <Wrapper>
      <FacebookShareButton title={shareMessage} url={currentUrl}>
        <FacebookIcon />
      </FacebookShareButton>
      <TwitterShareButton title={shareMessage} url={currentUrl}>
        <TwitterIcon />
      </TwitterShareButton>
      <LinkedinShareButton title={shareMessage} url={currentUrl}>
        <LinkedinIcon />
      </LinkedinShareButton>
    </Wrapper>
  );
}
