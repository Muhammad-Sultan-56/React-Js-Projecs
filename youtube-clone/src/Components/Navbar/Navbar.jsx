import React from "react";
import "./Navbar.css";

// import images of navbar

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_img from "../../assets/jack.png";

function Navbar({ setSidebar }) {
  return (
    <nav className="flex-div">
      {/* left nav */}
      <div className="nav-left flex-div">
        <img
          src={menu_icon}
          className="menu-icon"
          alt="menu icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <img src={logo} className="logo" alt="logo" />
      </div>

      {/* middle nav */}
      <div className="nav-middle flex-div">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="search icon" />
        </div>
      </div>

      {/* right nav */}
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload icon" />
        <img src={more_icon} alt="more icon" />
        <img src={notification_icon} alt="notification icon" />
        <img src={profile_img} className="user_icon" alt="profile_img" />
      </div>
    </nav>
  );
}

export default Navbar;
