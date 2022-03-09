import React, {useState, useEffect} from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown, Row,Col } from 'antd';
import AddCookiePopView from "../popup/addCookiePopView";

function ManuallyAddCookieView(props) {
  const [pop, setPop] = useState(false);

  const togglePop = () => {
    setPop(!pop);
  };
  if (pop) {
    document.body.classList.add("active-pop");
  } else {
    document.body.classList.remove("active-pop");
  }
  return (
    <>
        <div className="mac">
          <div className="macc">
            <div className="macs">ID</div>
            <div className="macs">Domain</div>
            <div className="macs">Duration</div>
            <div onClick={togglePop} className='macs' style={{justifyContent:'center'}} ><SvgIcon name='edit'/></div>
            <div onClick={()=>console.log("delete")} className='macs' style={{justifyContent:'center'}}><SvgIcon name='delete cookie'/></div>
          </div>
          <div className="macc">
            <div className="macs"><p className="input">Lorem ipsum dolor sit amet, consectetur adip</p></div>
            <div className="macs"><p className="input">Lorem ipsum</p></div>
            <div className="macs"><p className="input">Lorem ipsum</p></div>
            <div className='macs' style={{justifyContent:'center'}} ></div>
            <div className='macs' style={{justifyContent:'center'}}></div>
          </div>
          <div className="macc">
            <div className="macs">Description</div>
            <div className="macs"></div>
            <div className="macs"></div>
            <div onClick={togglePop} className='macs' style={{justifyContent:'center'}} ></div>
            <div className='macs' style={{justifyContent:'center'}}></div>
          </div>
          <div className="macc">
            <div className="macs"><p className="input">Lorem ipsum</p></div>
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
