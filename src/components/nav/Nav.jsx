import React, { useState } from 'react';
import './nav.css';
import WarningIcon from '@mui/icons-material/Warning';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';

const Nav = (props) => {
  const [activeItem, setActiveItem] = useState(props.activeItem);

  const handleItemClick = (item) => {
    console.log("set to " + item);
    setActiveItem(item);
  };

  return (
    <div className="navContainer">
      <ul className="listItems">
      <Link to="/quizz">
          <div
            className={`item ${activeItem === 'quizz' ? 'active' : ''}`}
            onClick={() => handleItemClick('quizz')}
          >
            <AutoStoriesIcon style={{ fontSize: '40px' }} className="icon" />
            <p>Giáo dục</p>
          </div>
        </Link>
        <Link to="/sos">
          <div
            className={`item ${activeItem === 'sos' ? 'active' : ''}`}
            onClick={() => handleItemClick('sos')}
          >
            <WarningIcon style={{ fontSize: '40px' }} className="icon" />
            <p>SOS</p>
          </div>
        </Link>
        <Link to="/rescue">
          <div
            className={`item ${activeItem === 'rescue' ? 'active' : ''}`}
            onClick={() => handleItemClick('rescue')}
          >
            <WifiTetheringErrorIcon style={{ fontSize: '40px' }} className="icon" />
            <p>Giải cứu</p>
          </div>
        </Link>
        <Link to="/profile">
          <div
            className={`item ${activeItem === 'profile' ? 'active' : ''}`}
            onClick={() => handleItemClick('profile')}
          >
            <PersonIcon style={{ fontSize: '40px' }} className="icon" />
            <p>Cá nhân</p>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
