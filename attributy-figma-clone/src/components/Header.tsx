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
          <TbLayoutBoardSplit className="icons" />
          <p>Boards</p>
        </div>
        <div className="header-left__icon header-icon">
          <AiOutlineSearch className="icons" />
          <p>Search</p>
        </div>
        <div className="header-left__icon header-icon">
          <AiOutlineFieldTime className="icons" />
          <p>Activity Log</p>
        </div>
      </div>
      <h1>Attributy.</h1>
      <div className="header-right">
          <div className="header-right__icon header-icon">
            Something
          </div>
          <div className="header-right__icon header-icon">Something</div>
          <div>
            <IoIosNotificationsOutline className="notification-icon" />
          </div>
          <div className="header-right__profile">
            G
          </div>
      </div>
    </header>
  );
}

export default Header;
