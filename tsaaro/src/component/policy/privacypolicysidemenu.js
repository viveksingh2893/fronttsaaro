import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Image} from "antd";
import CsmButton from "./csmbutton";
import '../../assets/css/privacypolicy.css';
import logo from "../../assets/images/img1.png";

const PrivacyPolicySideMenu=()=>{
    return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#331A55', height:'100vh', width:'22vw'}}>
        <div className="privacy-img" style={{display:'flex',margin:'2vh'}}>
            <div className="privacy-img1">
                <Image src={logo} preview={false} />
            </div>
            <div>
                <h2 className="title">tsaaro</h2>
            </div>
        </div>
        <NavLink to=".\cwi">
          <CsmButton id="cwi" name="Company & WebSite Info"/>
        </NavLink>
        <NavLink to=".\dc">
          <CsmButton id="dc" name="Collection of Data"/>
        </NavLink>
        <NavLink to=".\dis">
          <CsmButton id="dis" name="Use & Disclosure of Data"/>
        </NavLink>
        <NavLink to=".\tt">
          <CsmButton id="tt" name="Tracking Technology"/>
        </NavLink>
        <NavLink to=".\dp">
          <CsmButton id="dp" name="Data Protection"/>
        </NavLink>
    </div>
    )
}

export default PrivacyPolicySideMenu;