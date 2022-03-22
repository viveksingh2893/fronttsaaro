import React,{useState, useEffect} from "react";
import "../../assets/css/consentlog.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown} from 'antd';


  
const ConsentLogView=(props)=>{
    useEffect(()=>{
        menu();
    },[])

    const menu =(nc,fc,an,pr,ad)=> (
        <Menu>
          <Menu.Item>
            <div className="consent-eyepop-menu">
                <p className="consent-eyepop-title1">Category</p>
                <p className="consent-eyepop-title2">Status</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="consent-eyepop-menu">
                    <p className="consent-eyepop-content1">Necessary</p>
                    <p className="consent-eyepop-content2">{nc}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="consent-eyepop-menu">
                    <p className="consent-eyepop-content1">Functional</p>
                    <p className="consent-eyepop-content2">{fc}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="consent-eyepop-menu">
                    <p className="consent-eyepop-content1">Analytics</p>
                    <p className="consent-eyepop-content2">{an}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="consent-eyepop-menu">
                    <p className="consent-eyepop-content1">Performance</p>
                    <p className="consent-eyepop-content2">{pr}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="consent-eyepop-menu">
                    <p className="consent-eyepop-content1">Advertisement</p>
                    <p className="consent-eyepop-content2">{ad}</p>
                </div>
          </Menu.Item>
        </Menu>
      );

    return(
        <div className="consentlog-block">
            <p className="consent-ip">{props.ip}</p>
            <p className="consent-ip">{props.country}</p>
            <div className="consent-ip" style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
                <p style={{color:props.accept?'green':'red',margin:'0vw'}}>{props.status}</p>
                <Dropdown overlay={menu(props.nc, props.fc, props.an,props.pr,props.ad)}  trigger={['click']} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
                    <div className="consentlog-eye">
                        <SvgIcon name='eye'/>
                    </div>
                </Dropdown>
            </div>
            <p className="consent-ip">{props.time}</p>
        </div>
    )
}

export default ConsentLogView;