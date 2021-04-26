import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IconContainer, ListItem, ListItemGroup, Link } from './Sidebar.style';
import CustomIcon from '../../assets/icons/customIcon';

const SidebarMenu = (props) => {
  const currentLocation = useLocation();
  const {
    icon,
    to = '',
    updateCurrentMenu,
    index,
    currentMenu,
    handleMouseLeave,
    handleMouseOver,
  } = props;

  useEffect(() => {
    // Get Current Path
    const currentPath = currentLocation.pathname;
    let goto = '';
    // Match Routes to navigation Text
    switch (currentPath.split('/')[1]) {
      case '':
        goto = '/';
        break;
      case 'favorite':
        goto = '/favorite';
        break;
      case 'tags':
        goto = '/tags';
        break;
      case 'message':
        goto = '/message';
        break;
      case 'schedule':
        goto = '/schedule';
        break;
      case 'bin':
        goto = '/bin';
        break;
      case 'setting':
        goto = '/setting';
        break;
      case 'user':
        goto = '/user';
        break;
      case 'logout':
        goto = '/logout';
        break;
      default:
        goto = 'home';
    }

    if (props.to === goto) {
      updateCurrentMenu(index);
    }
  }, [currentLocation.pathname, index, props.to, updateCurrentMenu]);

  return (
    <ListItemGroup
      currentMenu={currentMenu}
      onMouseOver={() => handleMouseOver(icon, index)}
      onMouseLeave={handleMouseLeave}
    >
      <ListItem currentMenu={currentMenu}>
        <Link to={to}>
          <IconContainer>
            <CustomIcon name={icon} activeIcon={currentMenu} />
          </IconContainer>
        </Link>
      </ListItem>
    </ListItemGroup>
  );
};

const mapStateToProps = (state) => ({
  showToolTip: state.tooltip.showToolTip,
});

const connectedSidebar = connect(mapStateToProps)(SidebarMenu);

export default connectedSidebar;
