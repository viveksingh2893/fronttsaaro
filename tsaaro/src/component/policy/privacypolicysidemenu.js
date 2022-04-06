import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Image} from "antd";
import CsmButton from "./csmbutton";
import '../../assets/css/privacypolicy.css';
import logo from "../../assets/images/img1.png";

const PrivacyPolicySideMenu=()=>{
  const navigate=useNavigate();
  const [color1, setColor1] = useState(false); 
  const [color2, setColor2] = useState(false); 
  const [color3, setColor3] = useState(false); 
  const [color4, setColor4] = useState(false); 
  const [color5, setColor5] = useState(false); 

  const toggle1=()=>{
      setColor1(true);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
  }
  const toggle2=()=>{
      setColor1(false);
      setColor2(true);
      setColor3(false);
      setColor4(false);
      setColor5(false);
    }
  const toggle3=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(true);
      setColor4(false);
      setColor5(false);
    }
  const toggle4=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(true);
      setColor5(false);
    }
  const toggle5=()=>{
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(true);
    }

    return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#331A55', height:'100vh', width:'22vw'}}>
        <div className="privacy-img" style={{display:'flex',margin:'2vh',cursor:'pointer'}} onClick={()=>navigate('/dashboard/dash')}>
            <div className="privacy-img1" >
                <Image src={logo} preview={false} />
            </div>
            <div>
                <h2 className="title">tsaaro</h2>
            </div>
        </div>
        <NavLink to=".\cwi" onClick={toggle1}>
          <CsmButton id="cwi" name="Company & WebSite Info" color={color1}/>
        </NavLink>
        <NavLink to=".\dc" onClick={toggle2}>
          <CsmButton id="dc" name="Collection of Data" color={color2}/>
        </NavLink>
        <NavLink to=".\dis" onClick={toggle3}>
          <CsmButton id="dis" name="Use & Disclosure of Data" color={color3}/>
        </NavLink>
        <NavLink to=".\tt" onClick={toggle4}>
          <CsmButton id="tt" name="Tracking Technology" color={color4}/>
        </NavLink>
        <NavLink to=".\dp" onClick={toggle5}>
          <CsmButton id="dp" name="Data Protection" color={color5}/>
        </NavLink>
    </div>
    )
}

export default PrivacyPolicySideMenu;