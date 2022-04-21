import React, {useState} from "react";
import '../../assets/css/accsettings.css';
import SvgIcon from "../../assets/Icon_apps";
import {DownloadOutlined} from '@ant-design/icons';


const InvoiceComp=(props)=>{
    return(
        <div className="as-website-content">
            <div style={{display:'flex',flex:'1.5',width:'15vw',justifyContent:'flex-start'}}>
                <p style={{padding:'.5vh', borderRadius:'4px',margin:0,}}>
                    {props.invoice}
                </p>
            </div>
            <div style={{display:'flex',width:'12vw',flex:'1.2',flexDirection:'row',alignItems:'center', justifyContent:'flex-start'}}>
                <p style={{padding:'.5vw',borderRadius:'4px',margin:0}}>
                {props.amount}
                </p>
            </div>
            <div style={{display:'flex',width:'16.5vw',flex:'1.65',alignItems:'center', justifyContent:'flex-start'}}>
                <p style={{padding:'.5vw',borderRadius:'4px',margin:0}}>
                {props.pay}
                </p>
            </div>
            <p style={{width:'12vw',flex:'1.2',margin:0,justifyContent:'flex-start'}}>
                {props.doi}
            </p>
            <div style={{display:'flex',width:'12vw',flex:'1.2',flexDirection:'row',alignItems:'center', justifyContent:'flex-start'}}>
                <SvgIcon name='red cross'/>
                <p style={{padding:'.5vw',borderRadius:'4px',margin:0}}>
                {props.status}
                </p>
            </div>
            <div style={{display:'flex',flex:'.7',width:'7vw', cursor:'pointer', justifyContent:'flex-start'}}>
                <DownloadOutlined style={{fontSize:'2vw', color:'#7A4EB6'}}/>
            </div>
        </div>
    )
}

export default InvoiceComp;