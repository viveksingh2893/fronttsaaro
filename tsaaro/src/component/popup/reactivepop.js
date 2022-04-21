import React from "react";
import "../../assets/css/accsettings.css";

const ReactivePop=(props)=> {
  return (
    <div className="as-web-modal">
        <div className="as-web-modal-content">
            <div className="as-web-reactivate">
                <p className="as-web-pop-head">Do you want to reactivate the current plan?</p>
                <div className="as-web-submitpop">
                    <button onClick={() => {props.closeReactive(false)}} className="as-web-cancel">Cancel</button>
                    <button onClick={() => {props.closeReactive(false)}} className="as-web-submit">Reactivate</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ReactivePop;
