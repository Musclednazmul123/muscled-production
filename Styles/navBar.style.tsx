import styled from 'styled-components';
import { SingleNavItem } from 'types';
import { media } from 'utils/media';
import Button from 'components/Buttons/Button';
import Container from 'components/Elements/Container';
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export const SubMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 220px;
  padding: 10px;
  display: none;
  background-color: rgba(254, 254, 250, 1);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  color: black;
  border-radius: 5px;
  flex-direction: column;
  gap: 0px;
  li {
    padding: 10px 10px !important;
  }
  &:hover {
    display: flex;
    li:hover {
      background-color: blue;
      color: white;
      border-radius: 5px;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
`;

export const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  border: 0px;
  border-radius: 50px;
  background-color: black;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

export const NavItemList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: auto;

  .active-child {
    color: red;
    font-weight: 700;
    transition: all 800ms ease-in-out;
  }

  .active-parent {
    color: red;
    font-weight: 700;
    transition: all 800ms ease-in-out;
  }

  .active {
    color: red;
    font-weight: 700;
    transition: all 800ms ease-in-out;
  }

  li:hover + .sub-menu-container {
    display: flex;
  }
  li {
    padding: 15px 10px;
  }

  ${media('<desktop')} {
    display: none;
  }
`;

export const Menu = styled.li`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.95;
`;

export const HamburgerMenuWrapper = styled.div`
  ${media('>=desktop')} {
    display: none;
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));
`;

export const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: ${(p) => (p.outlined ? 'rgb(var(--primary))' : 'transparent')};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:hover {
    background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)')};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

export const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;
