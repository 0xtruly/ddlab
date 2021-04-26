/* eslint-disable no-shadow */
/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import SidebarMenu from './SidebarMenu';
import { Drawer, MenuContainer, TopMenu, BottomMenu, LogoContainer } from './Sidebar.style';
import Shield from '../../assets/icons/shield';

const Sidebar = (props) => {
  //   const state = useSelector((state) => state?.drawer);
  //   const { openDrawer } = state;
  const { handleMouseOver, handleMouseLeave } = props;

  // Create Array of Booleans
  const boolArray = new Array(9);
  const arrayOfBooleans = boolArray.fill(false);

  const [currentMenu, setCurrentMenu] = useState(arrayOfBooleans);

  // Update Submenu State and Global Sidebar State
  const updateCurrentMenu = (componentIndex) => {
    // Ensure it is a new path
    // Change the location state to new path
    if (!currentMenu[componentIndex]) {
      const newArray = currentMenu.map((item, index) => {
        if (componentIndex !== index) {
          return false;
        }
        return true;
      });

      setCurrentMenu(newArray);
      //   closeSidebar();
    }
  };
  return (
    <Drawer>
      <MenuContainer>
        <LogoContainer>
          <Shield />
        </LogoContainer>
        <TopMenu>
          <SidebarMenu
            to="/"
            icon="home"
            currentMenu={currentMenu[0]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={0}
          />
          <SidebarMenu
            to="/favorite"
            icon="star"
            currentMenu={currentMenu[1]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={1}
          />
          <SidebarMenu
            to="/tags"
            icon="bookmark"
            currentMenu={currentMenu[2]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={2}
          />
          <SidebarMenu
            to="/message"
            icon="send"
            currentMenu={currentMenu[3]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={3}
          />
          <SidebarMenu
            to="/schedule"
            icon="clock"
            currentMenu={currentMenu[4]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={4}
          />
          <SidebarMenu
            to="/bin"
            icon="trash"
            currentMenu={currentMenu[5]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={5}
          />
        </TopMenu>
        <BottomMenu>
          <SidebarMenu
            to="/setting"
            icon="setting"
            currentMenu={currentMenu[6]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={6}
          />
          <SidebarMenu
            to="/user"
            icon="person"
            currentMenu={currentMenu[7]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={7}
          />
          <SidebarMenu
            to="/logout"
            icon="exit"
            currentMenu={currentMenu[8]}
            updateCurrentMenu={updateCurrentMenu}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            index={8}
          />
        </BottomMenu>
      </MenuContainer>
    </Drawer>
  );
};

export default Sidebar;
