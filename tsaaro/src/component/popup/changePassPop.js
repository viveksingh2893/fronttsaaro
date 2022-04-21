import React, { useState } from "react";
import "../../assets/css/accsettings.css";
import InputView from "../input/inputView";

const ChangePassPop=(props)=> {
  return (
    <div className="as-cp-modal">
        <div className="as-cp-modal-content">
            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <p className="as-del-title">Change password</p>
                <InputView name='Old password' placeholder='Old password'/>
                <InputView name='New password' placeholder='New password'/>
                <InputView name='Confirm password' placeholder='Confirm password'/>
                <div className="as-cp-submitpop">
                    <button onClick={() => {props.closePass(false)}} className="as-cp-cancel">Cancel</button>
                    <button onClick={() => {props.closePass(false)}} className="as-cp-submit">Change Password</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ChangePassPop;
