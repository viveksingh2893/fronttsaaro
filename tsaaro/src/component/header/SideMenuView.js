import React,{useState} from "react";
import { Col, Image, Row } from "antd";
import "../../assets/css/sidemenu.css";
import logo from "../../assets/images/img1.png";
import SmButton from "./smButton";
import { NavLink } from "react-router-dom";

const SideMenuView=(props)=> {
  const [color, setColor]= useState(false);

  const [color1, setColor1] = useState(false); 
  const [color2, setColor2] = useState(false); 
  const [color3, setColor3] = useState(false); 
  const [color4, setColor4] = useState(false); 
  const [color5, setColor5] = useState(false); 
  const [color6, setColor6] = useState(false); 
  const [color7, setColor7] = useState(false);  

  const toggle1=()=>{
      setColor1(true);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(false);
  }
  const toggle2=()=>{
      setColor1(false);
      setColor2(true);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(false);
    }
  const toggle3=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(true);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(false);
    }
  const toggle4=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(true);
      setColor5(false);
      setColor6(false);
      setColor7(false);
    }
  const toggle5=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(true);
      setColor6(false);
      setColor7(false);
    }
  const toggle6=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(true);
      setColor7(false);
    }
  const toggle7=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(true);
  }

  return (

    <div className="box">
      <div className="img" style={{display:'flex',margin:'2vh'}}>
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
        <NavLink to=".\dash" onClick={toggle1}>
          <SmButton id="dsboard" name="Dashboard" inactive={props.inactive} color={color1}/>
        </NavLink>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.callcb();
            toggle2();
          }}
        >
          <SmButton id="cb" name="Consent Banner" inactive={props.inactive} color={color2} />
        </div>
        <NavLink to=".\cm" onClick={toggle3}>
          <SmButton id="cm" name="Cookie Manager" inactive={props.inactive} color={color3}/>
        </NavLink>
        <NavLink to=".\cl" onClick={toggle4}>
          <SmButton id="cl" name="Consent Log" inactive={props.inactive} color={color4}/>
        </NavLink>
        <NavLink to=".\pp" onClick={toggle5}>
          <SmButton id="pp" name="Privacy Policy" inactive={props.inactive} color={color5}/>
        </NavLink>
        <NavLink to=".\cp" onClick={toggle6}>
          <SmButton id="cp" name="Cookie Policy" inactive={props.inactive} color={color6} />
        </NavLink>
        <NavLink to=".\ss" onClick={toggle7}>
          <SmButton id="ss" name="Site Settings" inactive={props.inactive} color={color7}/>
        </NavLink>
      </div>
    </div>
  );
}

export default SideMenuView;
