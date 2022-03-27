import React,{useState, useEffect} from "react";
import "../../assets/css/dashboard.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown} from 'antd';


  
const DashboardLogView=(props)=>{
    useEffect(()=>{
        menu();
    },[])

    const menu =(nc,fc,an,pr,ad)=> (
        <Menu>
          <Menu.Item>
            <div className="dashboard-eyepop-menu">
                <p className="dashboard-eyepop-title1">Category</p>
                <p className="dashboard-eyepop-title2">Status</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="dashboard-eyepop-menu">
                    <p className="dashboard-eyepop-content1">Necessary</p>
                    <p className="dashboard-eyepop-content2">{nc}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="dashboard-eyepop-menu">
                    <p className="dashboard-eyepop-content1">Functional</p>
                    <p className="dashboard-eyepop-content2">{fc}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="dashboard-eyepop-menu">
                    <p className="dashboard-eyepop-content1">Analytics</p>
                    <p className="dashboard-eyepop-content2">{an}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="dashboard-eyepop-menu">
                    <p className="dashboard-eyepop-content1">Performance</p>
                    <p className="dashboard-eyepop-content2">{pr}</p>
                </div>
          </Menu.Item>
          <Menu.Item>
            <div className="dashboard-eyepop-menu">
                    <p className="dashboard-eyepop-content1">Advertisement</p>
                    <p className="dashboard-eyepop-content2">{ad}</p>
                </div>
          </Menu.Item>
        </Menu>
      );

    return(
        <div className="dashboardlog-block">
          <p className="dashboard-ip">{props.ip}</p>
          <p className="dashboard-ip">{props.country}</p>
          <div className="dashboard-ip" style={{display:'flex', flexDirection:'row',
          justifyContent:'space-between'}}>
            <p style={{color:props.accept?'green':'#F7D230',margin:'0vw'}}>{props.status}</p>
            <Dropdown overlay={menu(props.nc,props.fc,props.an,props.pr,props.ad)} 
            trigger={['click']} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
              <div className="dashboardlog-eye">
                <SvgIcon name='eye'/>
              </div>
            </Dropdown>
          </div>
          <p className="dashboard-ip">{props.time}</p>
        </div>
    )
}

export default DashboardLogView;
