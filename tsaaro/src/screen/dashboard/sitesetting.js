import React, {useEffect, useState} from "react";
import '../../assets/css/sitesetting.css';
import {Typography, Switch} from 'antd';
import {ReloadOutlined} from '@ant-design/icons';

const { Paragraph } = Typography;


const SiteSettingScr=()=>{
    const [url, setUrl] = useState('http://www.destratum.com');
    const [siteName, setSiteName] = useState('Destratum');
    const [active, setActive]= useState('Active')
    const [action, setAction] = useState(false)

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
            <div style={{display:'flex', flexDirection:'row',marginTop:'4vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Banner Status :</p>
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
                <p className="sitesetting-title">Enable consent log :</p>
                <Switch size="small"/>
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'4vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Required Banner languages :</p>
                {/* <form>
                  <select id="lang" name="language" className="schedule-scan">
                    <option value="english">English</option>
                    <option value="hindi" >Hindi</option>
                    <option value="bulgarian" >Bulgarian</option>
                    <option value="dutch" >Dutch</option>
                    <option value="french" >French</option>
                  </select>
                </form> */}
            </div>
            <div style={{display:'flex', flexDirection:'row',marginTop:'4vh', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Default Banner language : :</p>
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