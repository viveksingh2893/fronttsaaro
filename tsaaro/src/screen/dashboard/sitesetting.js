import React, {useState} from "react";
import '../../assets/css/sitesetting.css';
import { Checkbox, Radio, Typography, Divider } from 'antd';
import {ReloadOutlined} from '@ant-design/icons';

const { Paragraph } = Typography;


const SiteSettingScr=()=>{
    const [url, setUrl] = useState('http://www.destratum.com');
    const [siteName, setSiteName] = useState('Destratum');
    
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
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">URL :</p>
                <Paragraph editable={{ onChange: setUrl}} autoSize={true} style={{width:'30vw'}}>
                    {url}
                </Paragraph>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <p className="sitesetting-title">Site name :</p>
                <Paragraph editable={{ onChange: setSiteName}} autoSize={true} style={{width:'30vw'}}>
                    {siteName}
                </Paragraph>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', marginTop:'1vh'}}>
                <p className="sitesetting-title">Plan :</p>
                <p className="sitesetting-content">Ultimate</p>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', marginTop:'3vh'}}>
                <p className="sitesetting-title">Banner Status :</p>
                <p className="sitesetting-content" style={{width:'4vw'}}>Active</p>
                <ReloadOutlined style={{}}/>
            </div>
        </div>
      </div>
    );
}
export default SiteSettingScr;