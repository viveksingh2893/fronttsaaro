import React from "react";
import img from "../../assets/images/check.png";
import "../../assets/css/accsettings.css";

const AccSetPayUpdatePop=({ closeUpdate,message,title})=> {
  return (
    <div className="as-update-pop">
      <div onClick={() => {closeUpdate(false)}} className="as-update-pop-overlay"></div>
      <div className="as-update-pop-content">
        <div className="as-update-pop-img">
            <img src={img}/>
        </div>
          <h3 className="as-update-pop-heading">{title}</h3>
        <div className="as-update-pop-text">
         {message}
        </div>
        <div className="as-update-pop-btn">
            <button onClick={() => {closeUpdate(false)}} className="as-update-pop-ok">OK</button>
        </div>
      </div>
    </div>
  );
}

export default AccSetPayUpdatePop;
