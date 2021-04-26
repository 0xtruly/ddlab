import React from 'react';
import PropTypes from 'prop-types';

import {
  HomeIcon,
  StarIcon,
  BookmarkIcon,
  SendIcon,
  ClockIcon,
  TrashIcon,
  SettingIcon,
  PersonIcon,
  ExitIcon,
} from '../icons';

const CustomIcon = ({ name, activeIcon }) => {
  switch (name) {
    case 'home':
      return <HomeIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'star':
      return <StarIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'bookmark':
      return <BookmarkIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'send':
      return <SendIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'clock':
      return <ClockIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'trash':
      return <TrashIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'setting':
      return <SettingIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'person':
      return <PersonIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;
    case 'exit':
      return <ExitIcon fill={activeIcon ? '#003561' : '#d1d1d1'} />;

    default:
      return <HomeIcon />;
  }
};

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
export default CustomIcon;
