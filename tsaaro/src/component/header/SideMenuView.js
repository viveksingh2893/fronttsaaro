import React from "react";
import {Image} from "antd";
import "./SideMenuView.css";
import logo from "../../assets/images/img1.png"
import SmButton from "./smButton";

function SideMenuView() {
  return (
    <div className="box">
      <div className="img">
        <div className="img1">
          <Image src={logo}/>
        </div>
        <div className="img2">
         
        </div>
      </div>
      <div className="line"></div>
      <div className="btn">
        <SmButton name='Dashboard'/>
        <SmButton name='Consent Banner'/>
        <SmButton name='Cookie Manager'/>
        <SmButton name='Consent Log'/>
        <SmButton name='Privacy Policy'/>
        <SmButton name='Cookie Policy'/>
        <SmButton name='Site Settings'/>
      </div>
    </div>
  );
}

export default SideMenuView;
