import React from "react";
import "./HomePage.css";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/navbar/navbar";

const HomePage = () => {
  return (
    <div className="side-home-sync">
      <div>
        <SideBar />
      </div>
      <div>
        <NavBar />
        <div className="homepage ">welcome</div>
      </div>

      <div />
    </div>
  );
};

export default HomePage;
