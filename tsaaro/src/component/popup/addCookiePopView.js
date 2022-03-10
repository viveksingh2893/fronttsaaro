import React ,{useEffect, useState} from 'react'
import { Button } from "antd";
import '../../assets/css/cookiepop.css';
import SvgIcon from '../../assets/Icon_apps';

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
    <>
            <div className="add-head">
              <div>
                <h3 className="add-h3">New Cookie</h3>
              </div>
              <div className="add-box2" onClick={() => { props.closeAdd(false)}}>
                <SvgIcon name='cross'/>
              </div>
            </div>
              <div className="add-form">
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                      <p>Cookie ID</p>
                    <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                </div>
                <input
                      type="text"
                      className="add-input1"
                  />
              </div>

              <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <p>Domain</p>
                <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                </div>
                <input
                      type="text"
                      className="add-input1"
                    />
              </div>
            </div>
            <div style={{display:'flex',alignItems:'flex-start', margin:'1vw', width:'40vw'}}>
              <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                      <p>Duration</p>
                      <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <input
                      type="text"
                      className="add-input1"
                    />
              </div>
              </div>

              <div style={{margin:'1vw'}}>
                <div style={{display:'flex',flexDirection:'row', alignItems:'flex-start', width:'40vw'}}>
                          <p>Description</p>
                          <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                        </div>
                  <input
                    type="text"
                    className="add-input2"
                  />
              </div>

            <div className="add-box3">
              <div className="add-text">
                Show Advance Option
              </div>
              <div onClick={toggle}>
                {change?<SvgIcon name="up arrow"/>:<SvgIcon name="down arrow"/>}
              </div>
            </div>

            {change?
            <div style={{display:'flex', flexDirection:'column', width:'40vw', margin:'1vw' }}>
              <div className="add-text1">
                <div className="add-span">Script URL Pattern</div>
                <SvgIcon name='help circle'/>
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
                  <input
                    type="text"
                    className="add-input3"
                  />
              </div>
              </div>:null}

              <div style={{display:'flex', flexDirection:'column', width:'40vw', margin:'1vw' }}>
              <div className="add-button">
                <Button
                  type="primary"
                  ghost
                  onClick={() => {
                    props.closeAdd(false);
                  }}
                  className="close-add1"
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    props.closeAdd(false);
                  }}
                  className="close-add2"
                >
                  Submit
                </Button>
              </div>
            </div>
            </>
  )
}

export default AddCookiePopView;