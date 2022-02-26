import React from "react";
import { Col, Image, Row } from "antd";
import "../../assets/css/sidemenu.css";
import logo from "../../assets/images/img1.png";
import SmButton from "./smButton";
import { NavLink } from "react-router-dom";

function SideMenuView() {
  return (
    <div className="box">
      <div className="img">
        <div className="img1">
          <Image src={logo} preview={false} />
        </div>
        <div className="img2">
          <h2 style={{ margin: 0, color: "white" }}>tsaaro</h2>
        </div>
      </div>
      <div
        style={{
          height: 3,
          background: "#ffffff",
          marginTop: 5,
          marginBottom: 5,
        }}
      ></div>

      <div className="btn">
        <NavLink to=".\dsboard">
          <SmButton id="dsboard" name="Dashboard" />
        </NavLink>
        <NavLink to=".\cb">
          <SmButton id="cb" name="Consent Banner" />
        </NavLink>
        <NavLink to=".\cm">
          <SmButton id="cm" name="Cookie Manager" />
        </NavLink>
        <NavLink to=".\cl">
          <SmButton id="cl" name="Consent Log" />
        </NavLink>
        <NavLink to=".\pp">
          <SmButton id="pp" name="Privacy Policy" />
        </NavLink>
        <NavLink to=".\cp">
          <SmButton id="cp" name="Cookie Policy" />
        </NavLink>
        <NavLink to=".\ss">
          <SmButton id="ss" name="Site Settings" />
        </NavLink>
      </div>
    </div>
  );
}

export default SideMenuView;
