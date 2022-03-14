import React, {useState, useEffect} from "react";
import SvgIcon from "../../assets/Icon_apps";
import '../../assets/css/sidemenu.css';
 
const SmButton= (props)=>{
  
return(
    <div className="button">
      <div className={`${props.inactive ? "button-child2" : "button-child"}`}>
        <div style={{display:'flex', alignItems:'flex-start',width:'3vw', justifyContent:'center'}}><SvgIcon name={props.name.toLowerCase()}/></div>
        {props.inactive?null:<p className="button-para" style={{display:'flex', width:'8vw',justifyContent:'flex-start'}}>{props.name}</p>}
      </div>
    </div>  
)}
export default SmButton;