import React, {useState, useEffect} from "react";
import "../../assets/css/header.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown } from 'antd';
import AddSitePopView from '../popup/addSitePopView';


function HeaderMenuView(props) {
  const [change, setChange] = useState(false);
  const [icon, setIcon] = useState("")
  const [site, setSite] = useState(false);
  const [click, setClick] = useState('')
 
  const toggleSite = () => {
    setSite(!site);
  };

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
      <Menu.Item key="0" onMouseEnter={()=>setClick('co')} onMouseLeave={()=>setClick('')} className="ant-menu">
        <p className="acc-default" style={{color:click=='co'?'white':'#ADADAD'}}>Contact</p>
      </Menu.Item>
      <Menu.Item key="1" onMouseEnter={()=>setClick('ac')} onMouseLeave={()=>setClick('')} className="ant-menu">
        <p className="acc-default" style={{color:click=='ac'?'white':'#ADADAD'}}>Account Setting</p>
      </Menu.Item>
      <Menu.Item key="2" onMouseEnter={()=>setClick('cp')} onMouseLeave={()=>setClick('')} className="ant-menu">
       <p className="acc-default" style={{color:click=='cp'?'white':'#ADADAD'}}>Change Password</p>
      </Menu.Item>
      <Menu.Item key="3" onMouseEnter={()=>setClick('lo')} onMouseLeave={()=>setClick('')} className="ant-menu">
       <p className="acc-default" style={{color:click=='lo'?'white':'#ADADAD'}}>Logout</p>
      </Menu.Item>
    </Menu>
  ); 
 
  return (
    <>
    <div className="cont" style={{width:props.inactive?'92vw':'86vw'}}>
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
      
      <div className="acc" style={{marginLeft:props.inactive?'51vw':'45vw'}}>
        <Dropdown overlay={menu} trigger={['click']} onClick={()=>setChange(!change)} placement='bottomRight'>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <SvgIcon name='account'/> {icon}
          </a>
        </Dropdown>
      </div> 
    </div>
    {site && (
      <div className="add-modal">
        <div className="add-content">
          <AddSitePopView closeSite={setSite}/>
        </div>
      </div>
      )}
    </>
  );
}

export default HeaderMenuView;
