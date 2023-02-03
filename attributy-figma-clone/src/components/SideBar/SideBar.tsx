import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <aside className="side-bar">
      <button className="side-bar__button__div">
        <span className="side-bar__plus">+</span>
        <span className="side-bar__newfolder__span">New Folder</span>
        </button>
      <div>
        
        <img />
        <p></p>
        <button></button>
      </div>
      <div>
        <img />
        <p></p>
        <button></button>
      </div>
      <div>
        <img />
        <p></p>
        <button></button>
      </div>
    </aside>
  );
}

export default SideBar;
