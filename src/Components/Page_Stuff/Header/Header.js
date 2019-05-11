import React from "react";
import BtnWatchList from "../BtnWatchList/BtnWatchList"
import "./Header.css";

//Stateless component

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="title">AyeMDB</h1>
        <BtnWatchList text="Watch List"/>
      </div>
    </div>
  );
};

export default Header;
