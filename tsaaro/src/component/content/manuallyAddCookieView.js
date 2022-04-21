import React, {useState, useEffect} from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown, Row,Col } from 'antd';
import AddCookiePopView from "../popup/addCookiePopView";

function ManuallyAddCookieView(props) {
  const [pop, setPop] = useState(false);

  const editPop = () => { 
    setPop(!pop);
  }; 
 
  return (
    <>
        <div className="mac" style={{marginTop:'1vh', marginBottom:'2vh'}}>
          <div className="macc">
            <div className="macs"><p className="heading">ID</p></div>
            <div className="macs"><p className="heading">Domain</p></div>
            <div className="macs"><p className="heading">Duration</p></div>
            <div onClick={editPop} className='macs' style={{justifyContent:'center', cursor:'pointer'}} ><SvgIcon name='edit'/></div>
            <div className='macs' style={{justifyContent:'center',cursor:'pointer'}}><SvgIcon name='delete cookie'/></div>
          </div>
          <div className="macc">
            <div className="macs"><p className="input">{props.id}</p></div>
            <div className="macs"><p className="input">{props.domain}</p></div>
            <div className="macs"><p className="input">{props.duration}</p></div>
            <div className='macs' style={{justifyContent:'center'}} ></div>
            <div className='macs' style={{justifyContent:'center'}}></div>
          </div>
          <div className="macc">
            <div className="macs"><p className="heading">Description</p></div>
            <div className="macs"></div>
            <div className="macs"></div>
            <div onClick={editPop} className='macs' style={{justifyContent:'center'}} ></div>
            <div className='macs' style={{justifyContent:'center'}}></div>
          </div>
          <div className="macc">
            <div className="macs"><p className="input">{props.description}</p></div>
            <div className="macs"></div>
            <div className="macs"></div>
            <div className='macs' style={{justifyContent:'center'}} ></div>
            <div className='macs' style={{justifyContent:'center'}}></div>
          </div>
          </div>

          {pop && (
            <div className="add-modal">
            <div className="add-content">
              <AddCookiePopView closeAdd={setPop}/>
          </div>
          </div>
          )}
      </>
  );
}

export default ManuallyAddCookieView;
