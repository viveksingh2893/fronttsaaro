import React, {useState, useEffect} from "react";
import SvgIcon from "../../assets/Icon_apps";
import '../../assets/css/privacypolicy.css';
import {ArrowRightOutlined} from '@ant-design/icons';


const CsmButton= (props)=>{
return(
    <div className="privacy-button" style={{backgroundColor:props.color?'#7A4EB6':''}}>
      <div className="privacy-button-child" >
        <div style={{display:'flex', alignItems:'flex-start',width:'3vw', justifyContent:'center'}}>
          <ArrowRightOutlined/>
        </div>
        <p className="privacy-button-para" style={{display:'flex',width:'14vw',justifyContent:'flex-start'}}>
          {props.name}
        </p>
      </div>
    </div>  
)}
export default CsmButton; 