import React from "react";
import "./Sidebar.css";

// import images of sidebar
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

function Sidebar({ sidbar }) {
  return (
    <div className={`sidebar ${sidbar ? "" : "small-sidebar"}`}>
      {/* shortcut links */}
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="Home" />
          <p>Home</p>
        </div>

        <div className="side-link">
          <img src={game_icon} alt="Home" />
          <p>Gaming</p>
        </div>

        <div className="side-link">
          <img src={automobiles} alt="Home" />
          <p>Automobiles</p>
        </div>

        <div className="side-link">
          <img src={sports} alt="Home" />
          <p>Sports</p>
        </div>

        <div className="side-link">
          <img src={entertainment} alt="Home" />
          <p>Entertainment</p>
        </div>

        <div className="side-link">
          <img src={tech} alt="Home" />
          <p>Technology</p>
        </div>

        <div className="side-link">
          <img src={music} alt="Home" />
          <p>Music</p>
        </div>

        <div className="side-link">
          <img src={blogs} alt="Home" />
          <p>Blogs</p>
        </div>

        <div className="side-link">
          <img src={news} alt="Home" />
          <p>News</p>
        </div>
        <hr />
      </div>

      {/* subscribe list */}
      <div className="subscribed-links">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="Home" />
          <p>MrBeast</p>
        </div>

        <div className="side-link">
          <img src={simon} alt="Home" />
          <p>Code By Sultan</p>
        </div>

        <div className="side-link">
          <img src={megan} alt="Home" />
          <p>Coding Knowledge</p>
        </div>

        <div className="side-link">
          <img src={cameron} alt="Home" />
          <p>Life Hacks</p>
        </div>

        <div className="side-link">
          <img src={tom} alt="Home" />
          <p>Tech News</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
