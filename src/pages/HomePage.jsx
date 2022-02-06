import React,{useContext} from "react";
import "./HomePage.css";
import SideBar from "../components/SideBar/SideBar";
import Store from "../components/context/Context";

const HomePage = () => {
  const a = useContext(Store);
  return (
    <div className="side-home-sync">
      <div>
        <SideBar />
      </div>
      <div>

        <div onClick={a.closeSlideOnWindowClick} className="homepage ">welcome</div>
      </div>

      <div />
    </div>
  );
};

export default HomePage;
