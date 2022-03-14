import React from "react";
import { Col, Image, Row } from "antd";
import "../../assets/css/sidemenu.css";
import logo from "../../assets/images/img1.png";
import SmButton from "./smButton";
import { NavLink } from "react-router-dom";

function SideMenuView(props) {
  return (
    <div className="box">
      <div className="img">
        <div className="img1">
          <Image src={logo} preview={false} />
        </div>
        <div className="img2">
          <h2 className="title">tsaaro</h2>
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
        <NavLink to=".\dash">
          <SmButton id="dsboard" name="Dashboard" inactive={props.inactive} />
        </NavLink>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.callcb();
          }}
        >
          <SmButton id="cb" name="Consent Banner" inactive={props.inactive} />
        </div>
        <NavLink to=".\cm">
          <SmButton id="cm" name="Cookie Manager" inactive={props.inactive} />
        </NavLink>
        <NavLink to=".\cl">
          <SmButton id="cl" name="Consent Log" inactive={props.inactive} />
        </NavLink>
        <NavLink to=".\pp">
          <SmButton id="pp" name="Privacy Policy" inactive={props.inactive} />
        </NavLink>
        <NavLink to=".\cp">
          <SmButton id="cp" name="Cookie Policy" inactive={props.inactive} />
        </NavLink>
        <NavLink to=".\ss">
          <SmButton id="ss" name="Site Settings" inactive={props.inactive} />
        </NavLink>
      </div>
    </div>
  );
}

export default SideMenuView;
