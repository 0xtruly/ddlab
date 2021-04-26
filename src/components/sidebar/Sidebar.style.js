import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

const IconTextStyle = css`
  font-size: 18px;
  min-width: 130px;
  height: 100%;
  padding: 0.2rem 0 0.2rem 0;
  margin: 0;
  text-decoration: none;
  text-align: right;
  color: #a2a1a3;
  &:hover {
    color: #5766ba;
  }
`;

export const Drawer = styled.nav`
  min-width: 120px;
  width: 0px;
  background-color: #fff;
  position: fixed;
  height: 100vh;
  /* top: 40px; */
  overflow-x: hidden;
  /* padding: 2rem 0rem 1.6rem 0rem; */
  transition: min-width 300ms ease-in;
  z-index: 10;
  /* padding: 2rem 0; */
  @media (max-width: 768px) {
    min-width: ${(props) => (props.drawerClose ? '0px' : '120px')};
    top: 58px;
  }
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px gray;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px white;
    border-radius: 5px;
  }
`;

export const MenuContainer = styled.div`
  /* ${tw`grid grid-rows-2 gap-12`}; */
  /* grid-template-rows: 4fr 1fr; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 3rem 0; */
  /* display: flex; */
`;
export const TopMenu = styled.div`
  ${tw``};
  margin-bottom: 10rem;
`;

export const LogoContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 3rem;
  &:after {
    content: '';
    display: block;
    position: absolute;
    border-bottom: 2px solid #c5c5c5;
    width: 2rem;
    top: 9%;
  }
`;

export const BottomMenu = styled.div`
  ${tw``};
  &:before {
    content: '';
    display: block;
    position: absolute;
    border-top: 2px solid #c5c5c5;
    width: 2rem;
    /* top: 9%; */
    left: 38%;
    right: 0;
  }
`;

export const List = styled.div`
  padding: 0;
  margin: 0;
`;

export const Header = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const ListItemGroup = styled.li`
  display: flex;
  flex-direction: column;
  transition: height 1s ease-in;
  z-index: 11;
  position: relative;
  margin: 1rem 0rem;
  width: 119px;
  border-right: ${(props) => (props.currentMenu ? '2px solid #003561' : 'none')};
`;

export const ListItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  ${(props) => (props.currentMenu ? '#232846' : '#fff')};
  &:hover {
    background-color: #faf7ff;
  }
`;

export const IconContainer = styled.div`
  padding-top: 1rem;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 38.73px;
  min-width: 40px;
`;

export const ListItemSubMenu = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  overflow-y: hidden;
  max-height: 1000px;
  visibility: visible;
  opacity: 1;
  padding-right: 0.5rem;
  transition: max-height 500ms ease-in-out, visibility 500ms ease-in-out, opacity 500ms ease-in-out;
  transition-delay: 0s;
`;

export const ListItemSubMenuText = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #5766ba;
  }
  ${IconTextStyle};
  position: relative;
  padding: 1.6rem $l-spacing;
  text-decoration: none;
  display: flex;
  width: 100%;
`;

export const Link = styled(NavLink).attrs({ activeClassName })`
  ${IconTextStyle};
  min-width: 0;
  &.${activeClassName} {
    color: #5766ba;
  }
`;

export const IconText = styled.p`
  ${IconTextStyle};
  // color: ${(props) => (props.currentMenu ? '#5766BA' : '#A2A1A3')};
`;

export const MenuToolTipContainer = styled.div`
  visibility: visible;
  border: 1px solid red;
  height: 200px;
  width: 300px;
  position: relative;
`;
