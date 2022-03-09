import React, {useState, useEffect} from "react";
import "../../assets/css/header.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown } from 'antd';
import AddSitePopView from '../popup/addSitePopView';
import Modal from "react-modal";


function HeaderMenuView(props) {
  const [change, setChange] = useState(false);
  const [icon, setIcon] = useState("")
  const [isOpen, setIsOpen] = useState(false);

  const toggleSite = () => {
    setIsOpen(!isOpen);
  }

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
      <Menu.Item key="0" onClick={()=>console.log("contact")} className="ant-select-selection">Contact</Menu.Item>
      <Menu.Item key="1" onClick={()=>console.log("setting")} className="ant-select-selection">Account Setting</Menu.Item>
      <Menu.Item key="2" onClick={()=>console.log("password")} className="ant-select-selection">Change Password</Menu.Item>
      <Menu.Item key="3" onClick={()=>console.log("logout")} className="ant-select-selection">Logout</Menu.Item>
    </Menu>
  ); 

  return (
    <>
    <div className="cont" style={{width:props.inactive?'95.5vw':'86vw'}}>
      <div className="menu" onClick={() => props.setInactive(!props.inactive)}>
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
        <a href="#" className="a2" onClick={toggleSite}>
          + Add Site
        </a>
      </div>
      
      <div className="acc" style={{marginLeft:props.inactive?'54vw':''}}>
        <Dropdown overlay={menu} trigger={['click']} onClick={()=>setChange(!change)} placement='bottomRight'>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <SvgIcon name='account'/> {icon}
          </a>
        </Dropdown>
      </div> 
    </div>
    {/* {site && (<AddSitePopView closeSite={setSite}/>)} */}
    </>
  );
}

export default HeaderMenuView;
