import React ,{useEffect, useState} from 'react'
import '../../assets/css/cookiepop.css';
import SvgIcon from '../../assets/Icon_apps';
import TextArea from "antd/lib/input/TextArea";
import { Input, Popover, Button} from 'antd';
import Icon, { CheckCircleTwoTone } from '@ant-design/icons';

const AddCookiePopView= (props)=> {
  const [change, setChange] = useState(true);
  const [close, setClose] = useState(false);

  const toggle=()=>{
    setChange(!change);
  }

  const closed=()=>{
    setClose(true);
  }

  const content = (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'20vw'}}>
      <Icon component={CheckCircleTwoTone}/>
      <p style={{marginLeft:'1vw'}}>Our auto-blocking mechanism will use the Script URL 
      Pattern to identify the third-party script (setting a cookie) by purpose category, 
      and consequently, the associated cookie will be automatically blocked prior to receiving 
      user consent for the respective category.</p>
    </div>
  );

  return ( 
    <div className='container-pop'>
            <div className="add-head">
                <h3 className="add-h3">New Cookie</h3>
                <div style={{cursor:'pointer'}} onClick={() => { props.closeAdd(false)}}>
                  <SvgIcon name='cross'/>
                </div>
            </div>
              <div className="add-form">
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                      <p className='text'>Cookie ID</p>
                    <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                  </div>
                  <Input className="add-input1" placeholder='Cookie ID'/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                      <p className='text'>Domain</p>
                    <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <Input className="add-input1" placeholder='Domain'/>
                  </div>
            </div>
            <div style={{display:'flex',alignItems:'flex-start', marginTop:'3vh', width:'30vw'}}>
              <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                      <p className='text'>Duration</p>
                      <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <Input className="add-input1" placeholder='Duration'/>
              </div>
              </div>

              <div style={{display:'flex',alignItems:'flex-start', flexDirection:"column", width:'52vw'}}>
                <div style={{display:'flex',flexDirection:'row', alignItems:'flex-start', width:'40vw',marginTop:'3vh', marginBottom:'2vh' }}>
                          <p className='text'>Description</p>
                          <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                </div>
                  <TextArea className='input2' 
                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Morbi facilisi vestibulum ipsum, mauris erat gravida.'
                  />
                </div>
            <div className="add-box3">
              <p className="add-text">Show Advance Option</p>
              <div style={{cursor:'pointer'}} onClick={toggle}>
                {change?<SvgIcon name="up arrow"/>:<SvgIcon name="down arrow"/>}
              </div>
            </div>

            {change?
            <div style={{display:'flex', flexDirection:'column', width:'52vw', marginTop:'1vw' }}>
              <div className="add-text1">
                <div className="add-span">Script URL Pattern</div>
                <Popover placement="right" content={content}>
                  <Button style={{border:'white', height:'5vh', width:'2vw', margin:0}}><SvgIcon name='help circle'/></Button>
                </Popover>
              </div>
              <p className="add-text2">
                URL pattern for blocking the third-party script setting this
                cookie
              </p>

              {close?null:
              <div className="add-alert">
                <p className="add-alert-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  facilisi vestibulum ipsum, mauris erat gravida. Arcu, nisl,
                  urna vel dolor in ac cras.Arcu, nisl, urna vel dolor in ac
                  cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="add-close" onClick={closed}>
                  <SvgIcon name='cross'/>
                </div>
              </div>}

              <div>
                <Input className="add-input3" 
                placeholder='Please enter a valid ‘Script URL Pattern’. EG: google-analytics.com'
                />
              </div>
              </div>:null}

              <div style={{display:'flex',width:'52vw', alignItems:'flex-start', marginTop:'5vh' }}>
                <div className="submitpop">
                    <button onClick={() => {props.closeAdd(false)}} className="cancel">Cancel</button>
                    <button onClick={() => {props.closeAdd(false)}} className="submit">Submit</button>
                </div>
              </div>
      </div>
  )
}

export default AddCookiePopView;