import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { NavItem, Wrapper } from 'Styles/navigationDrawer.style';
import { NavItems } from 'types';
import ClientOnly from '../ClientOnly';
import CloseIcon from '../Icons/CloseIcon';
import OriginalDrawer from './Drawer';

type NavigationDrawerProps = PropsWithChildren<{ items: NavItems }>;

export default function NavigationDrawer({ children, items }: NavigationDrawerProps) {
  return (
    <OriginalDrawer.Drawer>
      <Wrapper>
        <ClientOnly>
          <OriginalDrawer.Target openClass="drawer-opened" closedClass="drawer-closed">
            <div className="my-drawer">
              <div className="my-drawer-container">
                <DrawerCloseButton />
                <NavItemsList items={items} />
              </div>
            </div>
          </OriginalDrawer.Target>
        </ClientOnly>
      </Wrapper>
      {children}
    </OriginalDrawer.Drawer>
  );
}

function NavItemsList({ items }: NavigationDrawerProps) {
  const { close } = OriginalDrawer.useDrawer();
  const router = useRouter();

  useEffect(() => {
    function handleRouteChangeComplete() {
      close();
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => router.events.off('routeChangeComplete', handleRouteChangeComplete);
  }, [close, router]);

  return (
    <ul>
      {items.map((singleItem, idx) => {
        return (
          <NavItem key={idx}>
            <NextLink href={singleItem.href}>{singleItem.title}</NextLink>
          </NavItem>
        );
      })}
    </ul>
  );
}

function DrawerCloseButton() {
  const ref = useRef(null);
  const a11yProps = OriginalDrawer.useA11yCloseButton(ref);

  return <CloseIcon className="close-icon" _ref={ref} {...a11yProps} />;
}
