import React from "react";
import "../../assets/css/accsettings.css";

const ScriptPop=(props)=> {
  return (
    <div className="as-script-modal">
        <div className="as-script-modal-content">
            <div className="as-script-reactivate">
                <p className="as-script-pop-head">Install the banner on your website</p>
                <div className="as-script-submitpop">
                    <button onClick={() => {props.closeScript(false)}} className="as-script-cancel">Cancel</button>
                    <button onClick={() => {props.closeScript(false)}} className="as-script-submit">Reactivate</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ScriptPop;