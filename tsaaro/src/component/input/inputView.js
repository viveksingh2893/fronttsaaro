import React from "react";
import "../../assets/css/addsitepop.css";
import SvgIcon from "../../assets/Icon_apps";

function InputView(props) {
  return (
    <div className="input-box">
      <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',flexDirection:'row'}}>
            <p className="input-label">{props.name}</p>
            <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
          </div>
          <input
            type="text"
            className="input-inp"
          />
      </div>
    </div>
  );
}

export default InputView;
