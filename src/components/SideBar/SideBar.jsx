import React from "react";
import { MDBIcon } from 'mdb-react-ui-kit';
import './SideBar.css'
import Avatar from '../Avatar/Avatar'
const SideBar = () => {
    return (
        <div className="side_bar">
            <div>
                <Avatar />
            </div>
            <div className="NavLinks">
                <div className="nav-links">   
                    <MDBIcon fas icon="user-alt" />
                    <span> My Profile</span>
                </div>
                <div className="nav-links">
                    <MDBIcon fas icon="users" />
                    <span> Faculty Details</span>
                </div>
                <div className="nav-links">
                    <MDBIcon fas icon="lock" />
                    <span> Admin login</span>
                </div>
                <div className="nav-links">
                    <MDBIcon fas icon="cloud-download-alt" />
                    <span> Download</span>
                </div>
                <div className="nav-links">
                    <MDBIcon fas icon="headset" />
                    <span> Contact Us</span>
                </div>
                <div className="nav-links">
                    <MDBIcon fas icon="bug" />
                    <span> Report</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar;