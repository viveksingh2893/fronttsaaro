import React, {useState, useEffect} from "react";
import "../../assets/css/header.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown } from 'antd';
import AddSitePopView from '../popup/addSitePopView';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeWebsite } from "../../redux/action";
import ChangePassPop from "../popup/changePassPop";

function HeaderMenuView(props) {
  const [change, setChange] = useState(false);
  const [icon, setIcon] = useState("")
  const [site, setSite] = useState(false);
  const [click, setClick] = useState('')
  const [pass, setPass]=useState(false)
  const dispatch =useDispatch()
  

  const navigate = useNavigate();
  const onchangeHandle=(e)=>{
    dispatch(changeWebsite({data:e.target.value}))
    console.log("value.....",e.target.value)
  }

  const togglePass=()=>{
    setPass(!pass);
  }

  const toggleSite = (e) => {
    console.log("toggle..........");
    window.addEventListener('click',()=>{
    }) 
    setSite(!site); 
  };

  // const toggleSite = () => { 
  //   setSite(!site);
  // };

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
      <Menu.Item key="1" onClick={()=>navigate('/dashboard/as')} onMouseEnter={()=>setClick('ac')} onMouseLeave={()=>setClick('')} className="ant-menu">
        <p className="acc-default" style={{color:click=='ac'?'white':'#ADADAD'}}>Account Settings</p>
      </Menu.Item>
      <Menu.Item key="2" onClick={togglePass} onMouseEnter={()=>setClick('cp')} onMouseLeave={()=>setClick('')} className="ant-menu">
       <p className="acc-default" style={{color:click=='cp'?'white':'#ADADAD'}}>Change Password</p>
      </Menu.Item>
      <Menu.Item key="3" onMouseEnter={()=>setClick('lo')} onMouseLeave={()=>setClick('')} className="ant-menu">
       <p className="acc-default" style={{color:click=='lo'?'white':'#ADADAD'}}>Logout</p>
      </Menu.Item>
    </Menu>
  ); 
 
  return (
    <>
    <div className="cont" style={{width:props.inactive?'93vw':'86vw', position:'absolute'}}>
      <div className="menu" style={{display:'flex',justifyContent:'flex-end'}}  onClick={() => props.setInactive(!props.inactive)}>
       <SvgIcon name='burger'/>
      </div>
      <div className="input"> 
        <form>
          <select id="website" name="website" className="inps" onChange={onchangeHandle}>
            {props.webList?props.webList.map((value,index)=>{
              return(
                <option key={index}value={value.website_url}>{value.website_url}</option>
              )
            }):null}
            {/* <option value="netflex">https://netflix.com/in</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option> */}
          </select>
        </form> 
      </div>
      <div className="btn1">
        <p className="a2" style={{cursor:'pointer'}} onClick={toggleSite}>
          + Add Site
        </p>
      </div> 
      
      <div className="acc" style={{marginLeft:props.inactive?'52.5vw':'45.5vw'}}>
        <Dropdown overlay={menu} trigger={['click']} onClick={()=>setChange(!change)} placement='bottomRight'>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <SvgIcon name='account'/> {icon}
          </a>
        </Dropdown>
      </div> 
    </div>
    {pass?<ChangePassPop closePass={setPass}/>:null}
    {site && (
      <div className="addsite-modal">
        <div className="addsite-content">
          <AddSitePopView closeSite={setSite}/>
        </div>
      </div>
      )}
    </>
  );
}

export default HeaderMenuView;
