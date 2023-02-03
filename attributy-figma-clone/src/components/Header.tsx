import React from "react";
import "./Header.css";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { AiOutlineSearch, AiOutlineFieldTime } from "react-icons/ai";
import {IoIosNotificationsOutline} from 'react-icons/io'

function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="header-left__icon header-icon">
          <img src="src\assets\board.svg" className="icons" />
          <p>Boards</p>
        </div>
        <div className="header-left__icon header-icon">
          <img src="src\assets\search.svg" className="icons" />
          <p>Search</p>
        </div>
        <div className="header-left__icon header-icon">
          <img src="src\assets\activity-log.svg" className="icons" />
          <p>Activity Log</p>
        </div>
      </div>
      <h1>Attributy.</h1>
      <div className="header-right">
          <div className="header-right__icon header-icon">
            <img src="src\assets\invite.svg" className="icons" />
            <p>Invite</p>
          </div>
          <div className="header-right__icon header-icon">
            <img src="src\assets\share.svg" className="icons" />
            <p>Share</p>
          </div>
          <div>
            <img src="src\assets\bell.svg" className="notification-icon" />
          </div>
          <div className="header-right__profile">
            <img src="src\assets\user-photo.svg" className="user-photo" />
          </div>
      </div>
    </header>
  );
}

export default Header;
