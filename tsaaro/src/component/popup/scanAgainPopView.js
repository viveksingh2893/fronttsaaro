import React from "react";
import img from "../../assets/images/check.png";
import "../../assets/css/scanagainpop.css";
import { OmitProps } from "antd/lib/transfer/ListBody";

function ScanAgainPop({ closeScan,title,message }) {
  return (
    <div className="scan">
      <div onClick={() => {closeScan(false)}} className="scan-overlay"></div>
      <div className="scan-content">
        <div className="scan-img">
            <img src={img}/>
        </div>
          <h3 className="scan-heading">{title}</h3>
        <div className="scan-text">
         {message}
        </div>
        <div className="scan-btn">
            <button onClick={() => {closeScan(false)}} className="scan-ok">OK</button>
        </div>
      </div>
    </div>
  );
}

export default ScanAgainPop;
