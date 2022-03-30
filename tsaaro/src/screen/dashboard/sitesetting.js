import React, {useEffect, useState} from "react";
import '../../assets/css/sitesetting.css';
import SvgIcon from "../../assets/Icon_apps";
import {Typography, Select, Switch, Popover, Button, Menu, Dropdown} from 'antd';
import Icon, {ReloadOutlined, CheckCircleTwoTone} from '@ant-design/icons';

const { Option } = Select;
const { Paragraph } = Typography;

const SiteSettingScr=()=>{
    const [url, setUrl] = useState('http://www.destratum.com');
    const [siteName, setSiteName] = useState('Destratum');
    const [active, setActive]= useState('Active');
    const [action, setAction] = useState(false);
    const [array, setArray]= useState(['English','German','Turkish','Arabian','Bulgarian',
    'Catalan','Croatian','Czech','Danish','Duch','Estonian','Finnish','French','Greek','Hungarian',
    'Italian','Latvian','Lithuanian','Norwegian','Polish','Portuguese','Portuguese(BR)','Romanian',
    'Russian','Slovak','Slovene','Spanish','Swedish','Thai','Turkish','Ukrainian']);
    const [icon, setIcon] = useState("");
    const [change, setChange] = useState(false);

    const children = [];
    for (let i = 0; i < array.length; i++) {
      children.push(<Option className='lang-list' key={i}>{array[i]}</Option>);
    }

    const handleChange=(value)=> {
      console.log(`selected ${value}`);
    }

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
                <div style={{display:'flex', minWidth:'12vw', maxWidth:'50VW' ,justifyContent:'center'}}>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['English']}
                    onChange={handleChange}
                    className='ant-select-selection-selected-value'
                  >
                    {children}
                  </Select>
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