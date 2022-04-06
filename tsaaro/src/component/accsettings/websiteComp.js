import React from "react";
import '../../assets/css/accsettings.css';
import SvgIcon from "../../assets/Icon_apps";
import {Popover, Button} from 'antd';

const WebsiteComp=(props)=>{
    const subs = (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'20vw'}}>
          <p style={{marginLeft:'1vw'}}>Your subscription will be cancelled automatically when 
          your current billing period ends on <b>{props.subscriptionEnd}</b>.
            If you've changed your mind, click <b>"Reactivate"</b>.</p>
        </div>
    );
    return(
        <div className="as-website-content">
            <p style={{width:'17vw',margin:0,}}>{props.website}</p>
            <div style={{display:'flex',width:'12vw', justifyContent:'center', alignItems:'center'}}>
                <p style={{textAlign:'center',backgroundColor:'green',width:'5vw',color:'white', borderRadius:'4px',margin:0,}}>
                    {props.plan}
                </p>
            </div>
            <p style={{ width:'12vw',textAlign:'center',borderRadius:'4px',margin:0,}}>
                {props.banner}
            </p>
            <div style={{display:'flex',width:'12vw',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                <p style={{textAlign:'center',padding:'.5vw',color:'green',backgroundColor:'lightblue',borderRadius:'4px',margin:0, cursor:'pointer'}}>
                    Reactivate
                </p>
                <Popover placement="top" content={subs}>
                    <Button style={{border:'white', height:'4vh', width:'2vw', margin:0}}>
                        <SvgIcon name='help circle'/>
                    </Button>
                </Popover>
            </div>
            <p style={{ width:'12vw',textAlign:'center',borderRadius:'4px',margin:0,}}>
                Script
            </p>
        </div>
    )
}

export default WebsiteComp;