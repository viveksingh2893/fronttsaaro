import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Image} from "antd";
import CsmButton from "./csmbutton";
import '../../assets/css/privacypolicy.css';
import logo from "../../assets/images/img1.png";

const CookiePolicySideMenu=()=>{
    const navigate=useNavigate();
    // const set  
    const [color1, setColor1] = useState(false); 
    const [color2, setColor2] = useState(false); 

    // const handleswitch = (id) => {
    //     if (id === "nc") {
    //       setSwitch([1, 0, 0, 0, 0]);
    //     } else if (id === "fc") {
    //       setSwitch([0, 1, 0, 0, 0]);
    //       setCookieType("Functional");
    //     }   
    //   };
    

    const toggle1=()=>{
        setColor1(true);
        setColor2(false);
    }
    const toggle2=()=>{
        setColor1(false); 
        setColor2(true);
        }
    return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#331A55', height:'100vh', width:'22vw'}}>
        <div className="privacy-img" style={{display:'flex',margin:'2vh',cursor:'pointer'}} onClick={()=>navigate('/dashboard/dash')}>
            <div className="privacy-img1">
                <Image src={logo} preview={false} />
            </div>
            <div>
                <h2 className="title">tsaaro</h2>
            </div>
        </div>
        <NavLink to=".\ct" onClick={toggle1}>
          <CsmButton id="ct" name="Types of Cookies" color={color1}/>
        </NavLink>
        <NavLink to=".\mcp" onClick={toggle2}>
          <CsmButton id="mcp" name="Manage Cookie Preferences" color={color2}/>
        </NavLink>
    </div>
    )
}

export default CookiePolicySideMenu;