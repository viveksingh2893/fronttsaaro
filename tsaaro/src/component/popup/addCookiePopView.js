import React ,{useEffect, useState} from 'react'
import '../../assets/css/cookiepop.css';
import SvgIcon from '../../assets/Icon_apps';
import TextArea from "antd/lib/input/TextArea";
import { Input } from 'antd';

const AddCookiePopView= (props)=> {
  const [change, setChange] = useState(true);
  const [close, setClose] = useState(false);

  const toggle=()=>{
    setChange(!change);
  }

  const closed=()=>{
    setClose(true);
  }

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
                <div style={{display:'flex',cursor:'pointer',marginLeft:'1vw'}}>
                  <SvgIcon name='help circle'/>
                </div>
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