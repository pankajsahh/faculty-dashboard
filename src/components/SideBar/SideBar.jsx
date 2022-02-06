import React, { useContext } from "react";
import Store from "../context/Context";
import { Link } from "react-router-dom";
import './SideBar.css'


const SideBar = () => {
    const a = useContext(Store);


    return (
        <>
            <div id="sideBar">
                <div className="header">
                    <input type="checkbox" id="openSideBarMenu" />
                    
                    <label onClick={a.Slider} htmlFor="openSideBarMenu" className="sideBarIconToggle">
                        <div className="spinner top"></div>
                        <div className="spinner middle"></div>
                        <div className="spinner bottom"></div>
                    </label>
                    <div className="sidebarMenu">
                        <ul style={{ display: `${a.state}` }} className="menu"><br />
                            <div className="link-list"><Link to="/Faculty"><i className="far fa-address-card"></i> My Profile </Link></div>
                            <div className="link-list"><Link to="/Faculty"><i className="fas fa-file-alt"></i> Faculty Details</Link></div>
                            <div className="link-list"><Link to="/signin"><i className="fas fa-user-shield"></i> Admin Log In</Link></div>
                            <div className="link-list"><Link to="/Download"><i className="fas fa-download"></i> Download</Link></div>
                            <div className="link-list"><Link to="/ContactUs"><i className="fas fa-envelope"></i> Contact Us In</Link></div>
                            <div className="link-list"><Link to="/Report"><i className="fas fa-info-circle"></i> Report</Link></div>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar;