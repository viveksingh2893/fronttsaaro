import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Image} from "antd";
import CsmButton from "./csmbutton";
import '../../assets/css/privacypolicy.css';
import logo from "../../assets/images/img1.png";

const CookiePolicySideMenu=()=>{
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
        <NavLink to=".\ct">
          <CsmButton id="ct" name="Types of Cookies"/>
        </NavLink>
        <NavLink to=".\mcp">
          <CsmButton id="mcp" name="Manage Cookie Preferences"/>
        </NavLink>
    </div>
    )
}

export default CookiePolicySideMenu;