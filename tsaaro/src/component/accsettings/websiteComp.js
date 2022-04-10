import React, {useState} from "react";
import '../../assets/css/accsettings.css';
import SvgIcon from "../../assets/Icon_apps";
import {Popover, Button} from 'antd';
import {CodeTwoTone} from '@ant-design/icons';
import ReactivePop from "../popup/reactivepop";

const WebsiteComp=(props)=>{
    const [reactive, setReactive] = useState(false);

  const toggleR = () => { 
    setReactive(!reactive);
  };

    const subs = (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'20vw'}}>
          <p style={{marginLeft:'1vw'}}>Your subscription will be cancelled automatically when 
          your current billing period ends on <b>{props.subscriptionEnd}</b>.
            If you've changed your mind, click <b>"Reactivate"</b>.</p>
        </div>
    );
    return(
        <div className="as-website-content">
            <p style={{width:'17vw',flex:'1.65',margin:0,}}>{props.website}</p>
            <div style={{display:'flex',flex:'1', justifyContent:'center', alignItems:'center'}}>
                <p style={{textAlign:'center',backgroundColor:'green',width:'5vw',color:'white',padding:'.5vh', borderRadius:'4px',margin:0,}}>
                    {props.plan}
                </p>
            </div>
            <p style={{ width:'12vw',flex:'1.2',textAlign:'center',borderRadius:'4px',margin:0,}}>
                {props.banner}
            </p>
            <div style={{display:'flex',width:'15vw',flex:'2',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                <p onClick={toggleR} style={{textAlign:'center',padding:'.5vw',color:'green',backgroundColor:'lightblue',borderRadius:'4px',margin:0, cursor:'pointer'}}>
                    Reactivate
                </p>
                {reactive?<ReactivePop closeReactive={setReactive}/>:null}
                <Popover placement="top" content={subs}>
                    <Button style={{border:'white', height:'4vh', width:'2vw', margin:0}}>
                        <SvgIcon name='help circle'/>
                    </Button>
                </Popover>
            </div>
            <div style={{display:'flex',width:'10vw',flex:'1',cursor:'pointer', flexDirection:'row',borderRadius:'4px', backgroundColor:'#7A4EB6', justifyContent:'center', padding:'.3vw', alignItems:'center'}}>
                <CodeTwoTone style={{fontSize: '1.5vw', color:'white'}}/>
                <p style={{textAlign:'center',fontSize:'1vw',paddingLeft:'.5vw',margin:0, color:'white'}}>
                    Install Banner
                </p>
            </div>
        </div>
    )
}

export default WebsiteComp;