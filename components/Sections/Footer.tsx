import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import Container from 'components/Elements/Container';
import EmailSubmit from '../Modals/EmailSubmit';
import {
  BottomBar,
  Copyright,
  FooterContent,
  FooterNewsletter,
  FooterWrapper,
  ListContainer,
  ListHeader,
  ListItemWrapper,
  ListWrapper,
  ShareBar,
} from 'Styles/footer.style';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },
  {
    title: 'Product',
    items: [
      { title: 'Features', href: '/features' },
      { title: 'Something', href: '/something' },
      { title: 'Something else', href: '/something-else' },
      { title: 'And something else', href: '/and-something-else' },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Help Center', href: '/help-center' },
    ],
  },
  {
    title: 'Something',
    items: [
      { title: 'Features2', href: '/features2' },
      { title: 'Something2', href: '/something2' },
      { title: 'Something else2', href: '/something-else2' },
      { title: 'And something else2', href: '/and-something-else2' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <ListContainer>
            {footerItems.map((singleItem) => (
              <FooterList key={singleItem.title} {...singleItem} />
            ))}
          </ListContainer>

          <FooterNewsletter>
            <EmailSubmit />
            <ShareBar>
              <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
                <a>
                  <TwitterIcon size={50} round={true} />
                </a>
              </NextLink>

              <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
                <a>
                  <FacebookIcon size={50} round={true} />
                </a>
              </NextLink>

              <NextLink href="https://www.linkedin.com/my-saas-startup" passHref>
                <a>
                  <LinkedinIcon size={50} round={true} />
                </a>
              </NextLink>
            </ShareBar>
          </FooterNewsletter>
        </FooterContent>
        <hr />
        <BottomBar>
          <Copyright>&copy; Copyright 2021 My Saas Startup</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}
