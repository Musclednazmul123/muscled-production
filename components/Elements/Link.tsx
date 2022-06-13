import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import { Anchor } from 'Styles/link.style';

export interface LinkProps {
  href: string;
}

export default function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink href={href} passHref>
      <Anchor>{children}</Anchor>
    </NextLink>
  );
}
