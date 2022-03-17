import React,{useState, useEffect} from "react";
import "../../assets/css/consentlog.css";
import SvgIcon from "../../assets/Icon_apps";

const ConsentLogView=(props)=>{
    const [show, setShow]= useState(false)

    const toggleShow=()=>{
        setShow(!show);
    }

    useEffect(()=>{
        setShow();
    },[show])

    return(
        <div className="consentlog-block">
            <p className="consent-ip">{props.ip}</p>
            <p className="consent-ip">{props.country}</p>
            <div className="consent-ip" style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
                <p style={{color:props.accept?'green':'red',margin:'0vw'}}>{props.status}</p>
                <div className="consentlog-eye" onClick={toggleShow}>
                    <SvgIcon name='eye'/>
                </div>
            </div>
            <p className="consent-ip">{props.time}</p>
        </div>
    )
}

export default ConsentLogView;