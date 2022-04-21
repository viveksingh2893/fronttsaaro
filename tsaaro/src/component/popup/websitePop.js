import React from "react";
import "../../assets/css/dashboard.css";
import InputView from '../input/inputView';

const WebsitePop=(props)=> {
  return (
    <div className="dashboard-website-modal">
        <div className="dashboard-website-modal-content">
            <div className="dashboard-website-container">
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <p className="dashboard-website-p">Please enter the URL</p>
                </div>
                <InputView name='URL' placeholder='example.com'/>
                <div className="dashboard-website-submitpop">
                    <button onClick={() => {props.closeWeb(true)}} className="dashboard-website-submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WebsitePop;