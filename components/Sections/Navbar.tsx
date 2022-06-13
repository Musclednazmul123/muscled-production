import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition';
import { NavItems, SingleNavItem } from 'types';

import Drawer from '../Drawer/Drawer';
import { HamburgerIcon } from '../Icons/HamburgerIcon';
import Logo from '../Icons/Logo';
import {
  MenuContainer,
  NavbarContainer,
  Content,
  LogoWrapper,
  NavItemList,
  Menu,
  SubMenu,
  Btn,
  ColorSwitcherContainer,
  HamburgerMenuWrapper,
  CustomButton,
  NavItemWrapper,
} from 'Styles/navBar.style';

const ColorSwitcher = dynamic(() => import('../Buttons/ColorSwitcher'), { ssr: false });

type NavbarProps = { items: NavItems };
type ScrollingDirections = 'up' | 'down' | 'none';
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
  const router = useRouter();
  const { toggle } = Drawer.useDrawer();
  const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none');

  let lastScrollY = useRef(0);
  const lastRoute = useRef('');
  const stepSize = useRef(50);

  useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection('none');
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection('none');
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? 'up' : 'down');
    lastScrollY.current = currentScrollY;
  }

  const isNavbarHidden = scrollingDirection === 'down';
  const isTransparent = scrollingDirection === 'none';

  const menu = [
    {
      name: 'Home',
      url: '/',
      submenu: [],
    },
    {
      name: 'Services',
      url: '/service-details',
      submenu: [
        {
          name: 'UI Design',
          url: '/services/ui-design',
          submenu: [],
        },
        {
          name: 'Redesign',
          url: '/services/redesign',
          submenu: [],
        },
        {
          name: 'E-Commerce Design',
          url: '/services/e-commerce',
          submenu: [],
        },
        {
          name: 'Saas UI Design',
          url: '/services/saas-ui',
          submenu: [],
        },
        {
          name: 'Shopify-Store Design',
          url: '/services/shopify-store',
          submenu: [],
        },
        {
          name: 'Saas App Development',
          url: '/services/saas-app-development',
          submenu: [],
        },
        {
          name: 'Cro',
          url: '/services/cro',
          submenu: [],
        },
        {
          name: ' Quick Prototype',
          url: '/services/quick-prototype',
          submenu: [],
        },
      ],
    },
    {
      name: 'Digital Workout',
      url: '/digital-workout',
      submenu: [],
    },
    {
      name: 'Guides',
      url: '/guides',
      submenu: [],
    },
    {
      name: 'Our Works',
      url: '/our-works',
      submenu: [],
    },

    {
      name: 'Blogs',
      url: '/blogs',
      submenu: [],
    },
  ];

  useEffect(() => {
    let element = document.querySelector('.active-child')?.parentNode?.parentNode?.children[0];
    element?.setAttribute('style', 'color:green; font-weight: 700; transition: all 800ms ease-in-out;');
    return () => {
      element?.removeAttribute('style');
    };
  }, [router.asPath]);

  return (
    <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
      <Content>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </NextLink>
        <NavItemList>
          {/* <NavItem key={singleItem.href} {...singleItem} /> */}
          {menu.map((item, index) => (
            <MenuContainer className={'main-menu'} key={'nav-menu-' + index}>
              <NextLink href={item.url} passHref>
                <Menu className={router.asPath == item.url ? 'active' : ''}>{item.name}</Menu>
              </NextLink>

              {item.submenu.length >= 1 ? (
                <SubMenu className="sub-menu-container">
                  {item.submenu.map((subItem, subIndex) => (
                    <NextLink href={subItem.url} passHref key={'sub-menu-' + subIndex}>
                      <Menu className={router.asPath == subItem.url ? `active-child` : ''}>{subItem.name}</Menu>
                    </NextLink>
                  ))}
                </SubMenu>
              ) : (
                ''
              )}
            </MenuContainer>
          ))}
        </NavItemList>
        <Btn>Schedule a Call</Btn>
        <ColorSwitcherContainer>
          <ColorSwitcher />
        </ColorSwitcherContainer>
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  const { setIsModalOpened } = useNewsletterModalContext();

  function showNewsletterModal() {
    setIsModalOpened(true);
  }

  if (outlined) {
    return <CustomButton onClick={showNewsletterModal}>{title}</CustomButton>;
  }

  return (
    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </NavItemWrapper>
  );
}
