import React, {useState, useEffect} from "react";
import { UserOutlined } from "@ant-design/icons";
import "../../assets/css/header.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown } from 'antd';

function HeaderMenuView() {
  const [change, setChange] = useState(false);
  const [icon, setIcon] = useState("")
  const toggle =()=>{
    if (change===false){
      setIcon(<SvgIcon name='up arrow'/>)
    } else if(change===true){
      setIcon(<SvgIcon name='down arrow'/>)
    }
  }
  useEffect(()=>{
    toggle()
  },[change])
  
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={()=>console.log("contact")} >Contact</Menu.Item>
      <Menu.Item key="1" onClick={()=>console.log("setting")} >Account Setting</Menu.Item>
      <Menu.Item key="2" onClick={()=>console.log("password")}>Change Password</Menu.Item>
      <Menu.Item key="3" onClick={()=>console.log("logout")}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="cont">
      <div className="menu" onClick={()=>console.log('hello world')}>
       <SvgIcon name='burger'/>
      </div>
      <div className="input">
        <form>
          <select id="cars" name="cars" className="inp">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
      <div className="btn1">
        <a href="#" className="a2">
          + Add Site
        </a>
        
      </div>
      
      <div className="acc">
        <Dropdown overlay={menu} trigger={['click']} onClick={()=>setChange(!change)} placement='bottomRight'>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <SvgIcon name='account'/> {icon}
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default HeaderMenuView;
