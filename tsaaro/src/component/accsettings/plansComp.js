import React, {useState} from "react";
import '../../assets/css/accsettings.css';
import SvgIcon from "../../assets/Icon_apps";

const PlansComp=(props)=>{
    return(
        <div className="as-website-content">
            
            <div style={{display:'flex',flex:'1.2',width:'12vw', justifyContent:'flex-start'}}>
                <p style={{padding:'.5vh', borderRadius:'4px',margin:0,}}>
                    {props.plan}
                </p>
            </div>
            <div style={{display:'flex',width:'12vw',flex:'1.2',flexDirection:'row',alignItems:'center', justifyContent:'flex-start'}}>
                <SvgIcon name='red cross'/>
                <p style={{padding:'.5vw',borderRadius:'4px',margin:0}}>
                {props.status}
                </p>
            </div>
            <div style={{display:'flex',width:'12vw',flex:'1.2',alignItems:'center', justifyContent:'flex-start'}}>
                <p style={{padding:'.5vw',borderRadius:'4px',margin:0}}>
                {props.recurrence}
                </p>
            </div>
            <p style={{width:'16.5vw',flex:'1.7',margin:0,justifyContent:'flex-start'}}>
                {props.website}
            </p>
            <div style={{display:'flex',width:'12vw',flex:'1.2',flexDirection:'row',alignItems:'center', justifyContent:'flex-start', cursor:'pointer'}}>
                <p style={{display:'flex',alignItems:'center', padding:'.3vw',color:'red',backgroundColor:'lightpink',borderRadius:'4px',margin:0}}>
                <SvgIcon name='delete cookie'/>
                Cancel Plan
                </p>
            </div>
            <div style={{display:'flex',width:'10vw',flex:'1',flexDirection:'row',alignItems:'center', justifyContent:'flex-start', cursor:'pointer'}}>
                <p style={{alignItems:'center', padding:'.3vw',color:'green',backgroundColor:'lightgreen',borderRadius:'4px',margin:0}}>
                Upgrade to Yearly
                </p>
            </div>
        </div>
    )
}

export default PlansComp;