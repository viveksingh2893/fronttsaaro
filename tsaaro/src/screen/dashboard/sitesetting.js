import React, {useEffect, useState} from "react";
import '../../assets/css/sitesetting.css';
import SvgIcon from "../../assets/Icon_apps";
import {Typography, Switch, Popover, Button, Menu, Dropdown} from 'antd';
import Icon, {ReloadOutlined, CheckCircleTwoTone} from '@ant-design/icons';

const { Paragraph } = Typography;


const SiteSettingScr=()=>{
    const [url, setUrl] = useState('http://www.destratum.com');
    const [siteName, setSiteName] = useState('Destratum');
    const [active, setActive]= useState('Active');
    const [action, setAction] = useState(false);
    const [array, setArray]= useState(['English']);
    const [click, setClick] = useState('');
    const [icon, setIcon] = useState("");
    const [change, setChange] = useState(false);

    useEffect(()=>{
    if(action){
        setActive('Inactive');
    }else{
        setActive('Active');
    }
    },[action])

    const toggle=()=>{
        setAction(!action);
    }

    const BS = (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'20vw'}}>
          <Icon component={CheckCircleTwoTone}/>
          <p style={{marginLeft:'1vw'}}>Indicates if the cookie notice bar is Active or Inactive in the registered site.</p>
        </div>
    );

    const ESL = (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'20vw'}}>
          <Icon component={CheckCircleTwoTone}/>
          <p style={{marginLeft:'1vw'}}>Enable the button to log your website visitor consent into CookieYes, 
          so you can have a report of visitor consents.</p>
        </div>
    );

    const RBL = (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'20vw'}}>
          <Icon component={CheckCircleTwoTone}/>
          <p style={{marginLeft:'1vw'}}>Select only the languages that you need so that your CookieYes 
          script is tailored just for the required languages. You can always change this later.</p>
        </div>
    );

    const feed=(e)=>{
      setArray(array.push([e.target.value]));
    }

    console.log('array', array)

    const menu =()=> (
      <Menu>
      <Menu.Item key="0" onClick={feed} onMouseEnter={()=>setClick('eng')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='eng'?'white':'#6F6F6F'}}>English </p>
      </Menu.Item>
      <Menu.Item key="1" onMouseEnter={()=>setClick('fre')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='fre'?'white':'#6F6F6F'}}>French</p>
      </Menu.Item>
      <Menu.Item key="2" onMouseEnter={()=>setClick('tur')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='tur'?'white':'#6F6F6F'}}>Turkish</p>
      </Menu.Item>
      <Menu.Item key="3" onMouseEnter={()=>setClick('ger')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='ger'?'white':'#6F6F6F'}}>German</p>
      </Menu.Item>
      <Menu.Item key="4" onMouseEnter={()=>setClick('chi')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='chi'?'white':'#6F6F6F'}}>Chinese</p>
      </Menu.Item>
      <Menu.Item key="5" onMouseEnter={()=>setClick('ara')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='ara'?'white':'#6F6F6F'}}>Arabic</p>
      </Menu.Item>
      <Menu.Item key="6" onMouseEnter={()=>setClick('por')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='por'?'white':'#6F6F6F'}}>Portuguese</p>
      </Menu.Item>
      <Menu.Item key="7" onMouseEnter={()=>setClick('spa')} onMouseLeave={()=>setClick('')} className="sitesetting-ant-menu">
        <p className="sitesetting-lang-item" style={{color:click=='spa'?'white':'#6F6F6F'}}>Spanish</p>
      </Menu.Item>
    </Menu>
      );

    const toggleArrow =()=>{
        if (change===false){
          setIcon(<SvgIcon name='up arrow'/>)
        } else if(change===true){
          setIcon(<SvgIcon name='down arrow'/>) 
        }
      }
      
      useEffect(()=>{
        toggleArrow()
      },[change])
    
    
    return (
      <div className="sitesetting-maincontainer">
        <div
          style={{
            display: "flex",
            marginTop:'5vh',
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection:'column'

          }}
        >
        <h2 className="sitesetting-heading">Site Settings</h2>
        <p className="sitesetting-description">Edit and manage the details of your website.</p>
        </div>
        <div className="sitesetting-container">
            <div style={{display:'flex', flexDirection:'row',marginTop:'1vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">URL :</p>
                <Paragraph editable={{ onChange: setUrl}} autoSize={true} style={{width:'30vw'}}>
                    {url}
                </Paragraph>
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'1vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Site name :</p>
                <Paragraph editable={{ onChange: setSiteName}} autoSize={true} style={{width:'30vw'}}>
                    {siteName}
                </Paragraph>
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'2vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Plan :</p>
                <p className="sitesetting-content">Ultimate</p>
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'3vh', alignItems:'center', justifyContent:'flex-start'}}>
                <div className="sitesetting-title" style={{alignItems:'center', height:'5vh'}}>
                <p style={{margin:0}}>Banner Status :</p>
                <Popover placement="right" content={BS}>
                    <Button style={{border:'white', height:'4vh', width:'2vw', margin:0}}>
                      <SvgIcon name='help circle'/>
                    </Button>
                </Popover>
                </div>
                <p className="sitesetting-content" style={{width:'4vw'}}>{active}</p>
                {action?
                <ReloadOutlined spin onClick={toggle} style={{ fontSize: '1.3vw', fontWeight:'bold', color:'black'}}/>:
                <ReloadOutlined onClick={toggle} style={{ fontSize: '1.3vw', fontWeight:'bold',color:'black' }}/>                
                }
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'3vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Schedule cookie scan :</p>
                <form>
                  <select id="scan" name="period" className="schedule-scan">
                    <option value="never">Never</option>
                    <option value="once" >Only Once</option>
                    <option value="monthly" >Monthly</option>
                  </select>
                </form>
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'3vh', alignItems:'center', justifyContent:'flex-start'}}>
                <div className="sitesetting-title" style={{alignItems:'center', height:'5vh'}}>
                    <p style={{margin:0}}>Enable consent log :</p>
                    <Popover placement="right" content={ESL}>
                        <Button style={{border:'white', height:'4vh', width:'2vw', margin:0}}>
                          <SvgIcon name='help circle'/>
                        </Button>
                    </Popover>
                </div>
                <Switch size="small"/>
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'4vh', alignItems:'center', justifyContent:'flex-start'}}>
                <div className="sitesetting-title" style={{alignItems:'center', height:'5vh'}}>
                    <p style={{margin:0}}>Required Banner languages :</p>
                    <Popover placement="right" content={RBL}>
                        <Button style={{border:'white', height:'4vh', width:'2vw', margin:0}}>
                        <SvgIcon name='help circle'/>
                        </Button>
                    </Popover>
                </div>
                <div style={{display:'flex',flexDirection:'row',minWidth:'10VW' ,alignItems:'center',padding:'.5vw', justifyContent:'center', height:'5vh', border:'1px solid black'}}>
                  {array}
                  <Dropdown overlay={menu()} trigger={['click']} onClick={(e)=>{setChange(!change);e.preventDefault();}} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <div className="sitesetting-lang-list">
                      {icon}
                    </div>
                  </Dropdown>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'4vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Default Banner language :</p>
                <form>
                  <select id="lang" name="language" className="schedule-scan">
                    <option value="english">English</option>
                    <option value="hindi" >Hindi</option>
                    <option value="bulgarian" >Bulgarian</option>
                    <option value="dutch" >Dutch</option>
                    <option value="french" >French</option>
                  </select>
                </form>
            </div>
        </div>
      </div>
    );
}
export default SiteSettingScr;